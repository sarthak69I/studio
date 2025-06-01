
// src/lib/course-utils.ts

// Shared type definitions
export interface Lecture {
  id: string;
  title: string;
  notesLink?: string;
  videoLink?: string; // Original direct link
  videoEmbedType?: 'youtube' | 'iframe' | 'hls';
  videoEmbedUrl?: string; // URL for iframe src or HLS stream
}

export interface Topic {
  name: string;
  lectures?: Lecture[];
  topicNotesLink?: string;
  topicVideoLink?: string;
}

export type SubjectContent = Topic[];

export interface CourseContentMap {
  [subjectName: string]: SubjectContent | string;
}

// Shared helper functions
export const slugify = (text: string | undefined | null): string => {
  if (typeof text !== 'string' || !text.trim()) {
    // console.warn(`slugify received non-string or empty/whitespace value: '${text}'`);
    return ''; // Return an empty string for invalid input to prevent errors in path construction
  }
  return text.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
};

export const m3u8PlayerBase = 'https://anym3u8player.com/tv/p.php?url=';
