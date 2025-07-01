// src/lib/course-data.ts

// Re-export types and utils from course-utils.ts
export type { Lecture, Topic, SubjectContent, CourseContentMap, DppItem, DppContent } from './course-utils';
export { slugify } from './course-utils';

// Re-export course content from specific files
export { scienceCourseContent } from './science-data';
export { commerceCourseContent } from './commerce-data';
export { aarambhCourseContent } from './aarambh-data'; // This is for Class 10 Aarambh
export { aarambh9CourseContent } from './aarambh9-data'; // This is for Class 9 Aarambh
export { sharedClass11SubjectsContent } from './shared-class11-subjects-data'; // Exporting the new shared content

// Re-export DPP content
export { scienceDppContent } from './science-dpp-data';
export { commerceDppContent } from './commerce-dpp-data';
export { aarambhDppContent } from './aarambh-dpp-data';
export { aarambh9DppContent } from './aarambh9-dpp-data';

/**
 * Helper function to log available content for debugging or verification.
 */
export function logCourseContent() {
  console.log("Course data structure uses shared utilities and types from course-utils.ts.");
}
