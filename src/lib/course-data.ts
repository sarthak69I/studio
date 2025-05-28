
// src/lib/course-data.ts

export type CourseTopicsMap = {
  [subjectName: string]: string | string[];
};

export const scienceCourseTopics: CourseTopicsMap = {
  'Physics': ['Units and Measurement'],
  'Chemistry': ['Some Basic Concepts of Chemistry', 'Structure of Atom', 'Classification of Elements'],
  'Biology': ['The Living World'],
  'Mathematics': ['Sets', 'Complex Numbers', 'Relation & Functions'],
};

export const commerceCourseTopics: CourseTopicsMap = {
  'Business Studies': ['Business, Trade & Commerce', 'Forms of Business Organisations'],
  'Accountancy': ['Basic Concepts of Accounts', 'Introduction To accounting'],
  'Economics': 'Economics Content Coming Soon',
  'Mathematics': ['Sets', 'Complex Numbers', 'Relation & Functions'],
};

export const aarambhCourseTopics: CourseTopicsMap = {
  'Social Science': 'Social Science Content Coming Soon',
  'Science': 'Science Content Coming Soon', // General Science for Aarambh
  'Mathematics': ['Sets', 'Complex Numbers', 'Relation & Functions'], // Assuming same math topics
};
