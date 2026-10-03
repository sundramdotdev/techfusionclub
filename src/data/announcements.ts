export type Announcement = {
  id: string;
  title: string;
  date: string;
  summary: string;
  content?: string;
  image?: string;
  link?: string;
  published: boolean;
};

export const announcements: Announcement[] = [];
