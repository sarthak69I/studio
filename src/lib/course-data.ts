
// src/lib/course-data.ts

// Re-export types and utils from course-utils.ts
export type { Lecture, Topic, SubjectContent, CourseContentMap } from './course-utils';
export { slugify } from './course-utils';

// Re-export course content from specific files
export { scienceCourseContent } from './science-data';
export { commerceCourseContent } from './commerce-data';
export { aarambhCourseContent } from './aarambh-data'; // This is for Class 10 Aarambh
export { aarambh9CourseContent } from './aarambh9-data'; // This is for Class 9 Aarambh

/**
 * Helper function to log available content for debugging or verification.
 */
export function logCourseContent() {
  // console.log("Science Course Content:", scienceCourseContent);
  // console.log("Commerce Course Content:", commerceCourseContent);
  // console.log("Aarambh (Class 10) Course Content:", aarambhCourseContent);
  // console.log("Aarambh (Class 9) Course Content:", aarambh9CourseContent);
  console.log("Course data structure uses shared utilities and types from course-utils.ts.");
}

    