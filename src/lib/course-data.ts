
// src/lib/course-data.ts

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
export const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
export const m3u8PlayerBase = 'https://anym3u8player.com/tv/p.php?url='; // Switched from m3u8player.online

// Re-export course content from specific files
export { scienceCourseContent } from './science-data';
export { commerceCourseContent } from './commerce-data';
export { aarambhCourseContent } from './aarambh-data';

/**
 * Helper function to log available content for debugging or verification.
 * This function itself might need to be updated or called differently
 * if you want to log specific course content after this refactor.
 */
export function logCourseContent() {
  // console.log("Science Course Content:", scienceCourseContent); // Will need to import if used here
  // console.log("Commerce Course Content:", commerceCourseContent);
  // console.log("Aarambh Course Content:", aarambhCourseContent);
  console.log("Course data has been refactored into separate files.");
}
