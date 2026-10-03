import { db } from "./firebase";
import { 
  collection, doc, getDocs, getDoc, 
  addDoc, updateDoc, deleteDoc, query, 
  where, orderBy, setDoc 
} from "firebase/firestore";
import type { ClubEvent } from "@/data/events";
import type { Member, MemberTier } from "@/data/members";
import type { Alumnus } from "@/data/alumni";
import type { GalleryPhoto } from "@/data/gallery";
import type { Announcement } from "@/data/announcements";

// ─── Collection Names ────────────────────────────────────────────────
const EVENTS_COLLECTION = "events";
const MEMBERS_COLLECTION = "members";
const ALUMNI_COLLECTION = "alumni";
const GALLERY_COLLECTION = "gallery";
const ANNOUNCEMENTS_COLLECTION = "announcements";
const REGISTRATIONS_COLLECTION = "registrations";
const TRASH_COLLECTION = "trash";

// ═══════════════════════════════════════════════════════════════════════
//  IN-MEMORY CACHE — saves 99%+ Firebase reads
//  Data changes rarely on a club website, so we cache for 5 minutes.
//  After 5 min the next request will fetch fresh data from Firestore.
//  Any write operation (create/update/delete) instantly clears the
//  cache for that collection, so admin changes reflect immediately.
// ═══════════════════════════════════════════════════════════════════════

const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

const cache: Record<string, CacheEntry<unknown>> = {};

function getCached<T>(key: string): T | null {
  const entry = cache[key];
  if (!entry) return null;
  if (Date.now() - entry.timestamp > CACHE_TTL_MS) {
    delete cache[key];
    return null;
  }
  return entry.data as T;
}

function setCache<T>(key: string, data: T): void {
  cache[key] = { data, timestamp: Date.now() };
}

function clearCache(key: string): void {
  // Clear the specific collection cache
  delete cache[key];
  // Also clear any sub-keys (e.g., "events:all", "events:published")
  for (const k of Object.keys(cache)) {
    if (k.startsWith(key)) {
      delete cache[k];
    }
  }
}

// ═══════════════════════════════════════════════════════════════════════
//  TRASH LOGIC (100 hours expiry)
// ═══════════════════════════════════════════════════════════════════════

const TRASH_EXPIRY_MS = 100 * 60 * 60 * 1000; // 100 hours

async function moveToTrash(collectionName: string, id: string) {
  const docRef = doc(db, collectionName, id);
  const snapshot = await getDoc(docRef);
  if (snapshot.exists()) {
    const data = snapshot.data();
    await addDoc(collection(db, TRASH_COLLECTION), {
      originalCollection: collectionName,
      originalId: id,
      deletedAt: Date.now(),
      expiresAt: Date.now() + TRASH_EXPIRY_MS,
      data: data
    });
  }
}

export interface TrashItem {
  id: string;
  originalCollection: string;
  originalId: string;
  deletedAt: number;
  expiresAt: number;
  data: any;
}

export const getTrashItems = async (): Promise<TrashItem[]> => {
  try {
    const snapshot = await getDocs(collection(db, TRASH_COLLECTION));
    const now = Date.now();
    const items: TrashItem[] = [];
    
    for (const d of snapshot.docs) {
      const data = d.data() as Omit<TrashItem, 'id'>;
      // Auto-delete if expired
      if (now > data.expiresAt) {
        await deleteDoc(doc(db, TRASH_COLLECTION, d.id));
      } else {
        items.push({ id: d.id, ...data });
      }
    }
    
    // Sort by deletedAt descending
    return items.sort((a, b) => b.deletedAt - a.deletedAt);
  } catch (error) {
    console.warn("Error fetching trash:", error);
    return [];
  }
};

export const restoreTrashItem = async (trashId: string) => {
  const trashRef = doc(db, TRASH_COLLECTION, trashId);
  const snapshot = await getDoc(trashRef);
  if (!snapshot.exists()) return false;
  
  const { originalCollection, originalId, data } = snapshot.data();
  // Restore to original collection
  await updateDoc(doc(db, originalCollection, originalId), data).catch(async () => {
    // If it doesn't exist, use setDoc
    await setDoc(doc(db, originalCollection, originalId), data);
  });
  
  // Remove from trash
  await deleteDoc(trashRef);
  clearCache(originalCollection);
  return true;
};

export const deleteTrashItemPermanently = async (trashId: string) => {
  await deleteDoc(doc(db, TRASH_COLLECTION, trashId));
  return true;
};

// ═══════════════════════════════════════════════════════════════════════
//  EVENTS
// ═══════════════════════════════════════════════════════════════════════

export const getEvents = async (includeDrafts = false): Promise<(ClubEvent & { id: string })[]> => {
  const cacheKey = `events:${includeDrafts ? "all" : "published"}`;
  const cached = getCached<(ClubEvent & { id: string })[]>(cacheKey);
  if (cached) return cached;

  try {
    const snapshot = await getDocs(collection(db, EVENTS_COLLECTION));
    const events = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as (ClubEvent & { id: string })[];
    const result = includeDrafts ? events : events.filter(e => e.status !== "draft");
    setCache(cacheKey, result);
    return result;
  } catch (error) {
    console.warn("Error fetching events:", error);
    return [];
  }
};

export const getEventBySlug = async (slug: string): Promise<(ClubEvent & { id: string }) | null> => {
  // Try to find in the cached events first (saves a read!)
  const allEvents = getCached<(ClubEvent & { id: string })[]>("events:all")
    || getCached<(ClubEvent & { id: string })[]>("events:published");
  if (allEvents) {
    const found = allEvents.find(e => e.slug === slug);
    if (found) return found;
  }

  try {
    const q = query(collection(db, EVENTS_COLLECTION), where("slug", "==", slug));
    const snapshot = await getDocs(q);
    const doc = snapshot.docs[0];
    if (!doc) return null;
    return { id: doc.id, ...doc.data() } as (ClubEvent & { id: string });
  } catch (error) {
    console.warn("Error fetching event:", error);
    return null;
  }
};

export const createEvent = async (eventData: Partial<ClubEvent>) => {
  const docRef = await addDoc(collection(db, EVENTS_COLLECTION), eventData);
  clearCache("events");
  return docRef.id;
};

export const updateEvent = async (id: string, eventData: Partial<ClubEvent>) => {
  await updateDoc(doc(db, EVENTS_COLLECTION, id), eventData);
  clearCache("events");
  return true;
};

export const deleteEvent = async (id: string) => {
  await moveToTrash(EVENTS_COLLECTION, id);
  await deleteDoc(doc(db, EVENTS_COLLECTION, id));
  clearCache("events");
  return true;
};

// ═══════════════════════════════════════════════════════════════════════
//  MEMBERS
// ═══════════════════════════════════════════════════════════════════════

export const getMembers = async (): Promise<(Member & { id: string })[]> => {
  const cacheKey = "members";
  const cached = getCached<(Member & { id: string })[]>(cacheKey);
  if (cached) return cached;

  try {
    const snapshot = await getDocs(collection(db, MEMBERS_COLLECTION));
    const result = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as (Member & { id: string })[];
    setCache(cacheKey, result);
    return result;
  } catch (error) {
    console.warn("Error fetching members:", error);
    return [];
  }
};

export const getMembersByTier = async (tier: MemberTier): Promise<(Member & { id: string })[]> => {
  const members = await getMembers();
  return members.filter(m => m.tier === tier);
};

export const createMember = async (data: Partial<Member>) => {
  const docRef = await addDoc(collection(db, MEMBERS_COLLECTION), data);
  clearCache("members");
  return docRef.id;
};

export const updateMember = async (id: string, data: Partial<Member>) => {
  await updateDoc(doc(db, MEMBERS_COLLECTION, id), data);
  clearCache("members");
  return true;
};

export const deleteMember = async (id: string) => {
  await moveToTrash(MEMBERS_COLLECTION, id);
  await deleteDoc(doc(db, MEMBERS_COLLECTION, id));
  clearCache("members");
  return true;
};

// ═══════════════════════════════════════════════════════════════════════
//  ALUMNI
// ═══════════════════════════════════════════════════════════════════════

export const getAlumni = async (): Promise<(Alumnus & { id: string })[]> => {
  const cacheKey = "alumni";
  const cached = getCached<(Alumnus & { id: string })[]>(cacheKey);
  if (cached) return cached;

  try {
    const snapshot = await getDocs(collection(db, ALUMNI_COLLECTION));
    const result = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as (Alumnus & { id: string })[];
    setCache(cacheKey, result);
    return result;
  } catch (error) {
    console.warn("Error fetching alumni:", error);
    return [];
  }
};

export const createAlumnus = async (data: Partial<Alumnus>) => {
  const docRef = await addDoc(collection(db, ALUMNI_COLLECTION), data);
  clearCache("alumni");
  return docRef.id;
};

export const updateAlumnus = async (id: string, data: Partial<Alumnus>) => {
  await updateDoc(doc(db, ALUMNI_COLLECTION, id), data);
  clearCache("alumni");
  return true;
};

export const deleteAlumnus = async (id: string) => {
  await moveToTrash(ALUMNI_COLLECTION, id);
  await deleteDoc(doc(db, ALUMNI_COLLECTION, id));
  clearCache("alumni");
  return true;
};

// ═══════════════════════════════════════════════════════════════════════
//  GALLERY
// ═══════════════════════════════════════════════════════════════════════

export const getGalleryPhotos = async (): Promise<(GalleryPhoto & { id: string })[]> => {
  const cacheKey = "gallery";
  const cached = getCached<(GalleryPhoto & { id: string })[]>(cacheKey);
  if (cached) return cached;

  try {
    const snapshot = await getDocs(collection(db, GALLERY_COLLECTION));
    const result = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as (GalleryPhoto & { id: string })[];
    setCache(cacheKey, result);
    return result;
  } catch (error) {
    console.warn("Error fetching gallery:", error);
    return [];
  }
};

export const createGalleryPhoto = async (data: Partial<GalleryPhoto>) => {
  const docRef = await addDoc(collection(db, GALLERY_COLLECTION), data);
  clearCache("gallery");
  return docRef.id;
};

export const deleteGalleryPhoto = async (id: string) => {
  await moveToTrash(GALLERY_COLLECTION, id);
  await deleteDoc(doc(db, GALLERY_COLLECTION, id));
  clearCache("gallery");
  return true;
};

// ═══════════════════════════════════════════════════════════════════════
//  ANNOUNCEMENTS
// ═══════════════════════════════════════════════════════════════════════

export const getAnnouncements = async (): Promise<(Announcement & { id: string })[]> => {
  const cacheKey = "announcements";
  const cached = getCached<(Announcement & { id: string })[]>(cacheKey);
  if (cached) return cached;

  try {
    const snapshot = await getDocs(collection(db, ANNOUNCEMENTS_COLLECTION));
    const result = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as (Announcement & { id: string })[];
    setCache(cacheKey, result);
    return result;
  } catch (error) {
    console.warn("Error fetching announcements:", error);
    return [];
  }
};

export const createAnnouncement = async (data: Partial<Announcement>) => {
  const docRef = await addDoc(collection(db, ANNOUNCEMENTS_COLLECTION), data);
  clearCache("announcements");
  return docRef.id;
};

export const updateAnnouncement = async (id: string, data: Partial<Announcement>) => {
  await updateDoc(doc(db, ANNOUNCEMENTS_COLLECTION, id), data);
  clearCache("announcements");
  return true;
};

export const deleteAnnouncement = async (id: string) => {
  await moveToTrash(ANNOUNCEMENTS_COLLECTION, id);
  await deleteDoc(doc(db, ANNOUNCEMENTS_COLLECTION, id));
  clearCache("announcements");
  return true;
};

// ═══════════════════════════════════════════════════════════════════════
//  REGISTRATIONS (not cached — admin-only reads, students create)
// ═══════════════════════════════════════════════════════════════════════

export const getRegistrations = async (eventSlug?: string) => {
  try {
    const ref = collection(db, REGISTRATIONS_COLLECTION);
    const q = eventSlug 
      ? query(ref, where("eventSlug", "==", eventSlug))
      : ref;
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.warn("Error fetching registrations:", error);
    return [];
  }
};

export const createRegistration = async (data: Record<string, unknown>) => {
  const docRef = await addDoc(collection(db, REGISTRATIONS_COLLECTION), {
    ...data,
    submittedAt: new Date().toISOString()
  });
  return docRef.id;
};
