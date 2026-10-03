import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import { getStorage, FirebaseStorage } from "firebase/storage";

const getEnv = (key: string, viteVal?: string) => {
  if (typeof process !== "undefined" && process.env && process.env[key]) {
    return process.env[key];
  }
  return (
    viteVal ||
    (typeof import.meta !== "undefined" && import.meta.env ? import.meta.env[key] : "") ||
    ""
  );
};

const firebaseConfig = {
  apiKey: getEnv("VITE_FIREBASE_API_KEY", import.meta.env["VITE_FIREBASE_API_KEY"]),
  authDomain: getEnv("VITE_FIREBASE_AUTH_DOMAIN", import.meta.env["VITE_FIREBASE_AUTH_DOMAIN"]),
  projectId: getEnv("VITE_FIREBASE_PROJECT_ID", import.meta.env["VITE_FIREBASE_PROJECT_ID"]),
  storageBucket: getEnv(
    "VITE_FIREBASE_STORAGE_BUCKET",
    import.meta.env["VITE_FIREBASE_STORAGE_BUCKET"],
  ),
  messagingSenderId: getEnv(
    "VITE_FIREBASE_MESSAGING_SENDER_ID",
    import.meta.env["VITE_FIREBASE_MESSAGING_SENDER_ID"],
  ),
  appId: getEnv("VITE_FIREBASE_APP_ID", import.meta.env["VITE_FIREBASE_APP_ID"]),
};

const isBrowser = typeof window !== "undefined";

let app: FirebaseApp | undefined;
export let auth: Auth;
export let db: Firestore;
export let storage: FirebaseStorage;
export let googleProvider: GoogleAuthProvider;

if (isBrowser) {
  // Initialize Firebase ONLY on the client to prevent SSR serverless function timeouts and crashes
  app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  auth = getAuth(app);
  db = getFirestore(app);
  storage = getStorage(app);
  googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: "select_account" });
}

export const signInWithGoogle = async () => {
  if (!isBrowser) return null;
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Error signing in with Google", error);
    throw error;
  }
};

export const logout = async () => {
  if (!isBrowser) return;
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out", error);
    throw error;
  }
};
