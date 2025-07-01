// src/lib/course-utils.ts

// Shared type definitions
export interface Lecture {
  id: string;
  title: string;
  notesTitle?: string; // Title specific for the notes entry
  notesLink?: string;
  dppTitle?: string;
  dppLink?: string;
  videoLink?: string; // Original direct link
  videoEmbedType?: 'youtube' | 'iframe' | 'hls';
  videoEmbedUrl?: string; // URL for iframe src or HLS stream
}

export interface Topic {
  name: string;
  lectures?: Lecture[];
  topicNotesLink?: string;
  topicVideoLink?: string;
  topicDppLink?: string;
}

export type SubjectContent = Topic[];

export interface CourseContentMap {
  [subjectName: string]: SubjectContent | string;
}

export interface DppItem {
  title: string;
  download_url: string;
  subject: string;
  view_online_url?: string;
}

export type DppContent = DppItem[];


// Shared helper functions
export const slugify = (text: string | undefined | null): string => {
  if (typeof text !== 'string' || !text.trim()) {
    // console.warn(`slugify received non-string or empty/whitespace value: '${text}'`);
    return ''; // Return an empty string for invalid input to prevent errors in path construction
  }
  return text.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
};

// Removed m3u8PlayerBase as it's no longer used or being replaced by specific player logic.
