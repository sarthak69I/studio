
// src/lib/course-data.ts

// Represents a single lecture
export interface Lecture {
  id: string; // e.g., "L1", "L2"
  title: string; // e.g., "Introduction to Kinematics"
  notesLink?: string; // URL or path to notes
  videoLink?: string; // URL to video
}

// Represents a single topic within a subject
export interface Topic {
  name: string;
  lectures?: Lecture[]; // Optional: some topics might not have detailed lectures
  // For topic-level content (if no granular lectures):
  topicNotesLink?: string;
  topicVideoLink?: string;
}

// Represents the structure for a subject's content
export type SubjectContent = Topic[];

// Main map for a course
export interface CourseContentMap {
  [subjectName: string]: SubjectContent | string; // string for "Coming Soon" messages
}

// Helper for slugifying names for paths (simple version)
const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');

// Science Batch Content (courseId '1')
const scienceBasePath = '/assets/courses/science';
export const scienceCourseContent: CourseContentMap = {
  'Physics': [
    {
      name: 'Units and Measurement',
      lectures: Array.from({ length: 6 }, (_, i) => ({
        id: `L${i + 1}`,
        title: `Units and Measurement L${i + 1}`,
        notesLink: `${scienceBasePath}/physics/${slugify('Units and Measurement')}/notes/L${i + 1}.pdf`,
        videoLink: `${scienceBasePath}/physics/${slugify('Units and Measurement')}/videos/L${i + 1}.mp4`,
      })),
    },
    {
      name: 'Motion In a Straight Line',
      lectures: Array.from({ length: 6 }, (_, i) => ({
        id: `L${i + 1}`,
        title: `Motion In a Straight Line L${i + 1}`,
        notesLink: `${scienceBasePath}/physics/${slugify('Motion In a Straight Line')}/notes/L${i + 1}.pdf`,
        videoLink: `${scienceBasePath}/physics/${slugify('Motion In a Straight Line')}/videos/L${i + 1}.mp4`,
      })),
    },
  ],
  'Chemistry': [
    {
      name: 'Some Basic Concepts of Chemistry',
      lectures: Array.from({ length: 6 }, (_, i) => ({
        id: `L${i + 1}`,
        title: `Some Basic Concepts of Chemistry L${i + 1}`,
        notesLink: `${scienceBasePath}/chemistry/${slugify('Some Basic Concepts of Chemistry')}/notes/L${i + 1}.pdf`,
        videoLink: `${scienceBasePath}/chemistry/${slugify('Some Basic Concepts of Chemistry')}/videos/L${i + 1}.mp4`,
      })),
    },
    { name: 'Structure of Atom', topicNotesLink: `${scienceBasePath}/chemistry/${slugify('Structure of Atom')}/notes/topic.pdf`, topicVideoLink: `${scienceBasePath}/chemistry/${slugify('Structure of Atom')}/videos/topic.mp4` },
    { name: 'Classification of Elements', topicNotesLink: `${scienceBasePath}/chemistry/${slugify('Classification of Elements')}/notes/topic.pdf`, topicVideoLink: `${scienceBasePath}/chemistry/${slugify('Classification of Elements')}/videos/topic.mp4` },
  ],
  'Biology': [
    {
      name: 'The Living World',
      lectures: [
        { id: 'L1', title: 'The Living World L1', notesLink: `${scienceBasePath}/biology/${slugify('The Living World')}/notes/L1.pdf`, videoLink: `${scienceBasePath}/biology/${slugify('The Living World')}/videos/L1.mp4` },
      ],
    },
  ],
  'Mathematics': [
    { name: 'Sets', topicNotesLink: `${scienceBasePath}/mathematics/${slugify('Sets')}/notes/topic.pdf`, topicVideoLink: `${scienceBasePath}/mathematics/${slugify('Sets')}/videos/topic.mp4` },
    { name: 'Complex Numbers', topicNotesLink: `${scienceBasePath}/mathematics/${slugify('Complex Numbers')}/notes/topic.pdf`, topicVideoLink: `${scienceBasePath}/mathematics/${slugify('Complex Numbers')}/videos/topic.mp4` },
    { name: 'Relation & Functions', topicNotesLink: `${scienceBasePath}/mathematics/${slugify('Relation & Functions')}/notes/topic.pdf`, topicVideoLink: `${scienceBasePath}/mathematics/${slugify('Relation & Functions')}/videos/topic.mp4` },
  ],
};

// Commerce Batch Content (courseId '2')
const commerceBasePath = '/assets/courses/commerce';
export const commerceCourseContent: CourseContentMap = {
  'Business Studies': [
    { name: 'Business, Trade & Commerce', topicNotesLink: `${commerceBasePath}/business-studies/${slugify('Business, Trade & Commerce')}/notes/topic.pdf`, topicVideoLink: `${commerceBasePath}/business-studies/${slugify('Business, Trade & Commerce')}/videos/topic.mp4` },
    { name: 'Forms of Business Organisations', topicNotesLink: `${commerceBasePath}/business-studies/${slugify('Forms of Business Organisations')}/notes/topic.pdf`, topicVideoLink: `${commerceBasePath}/business-studies/${slugify('Forms of Business Organisations')}/videos/topic.mp4` },
  ],
  'Accountancy': [
    { name: 'Basic Concepts of Accounts', topicNotesLink: `${commerceBasePath}/accountancy/${slugify('Basic Concepts of Accounts')}/notes/topic.pdf`, topicVideoLink: `${commerceBasePath}/accountancy/${slugify('Basic Concepts of Accounts')}/videos/topic.mp4` },
    { name: 'Introduction To accounting', topicNotesLink: `${commerceBasePath}/accountancy/${slugify('Introduction To accounting')}/notes/topic.pdf`, topicVideoLink: `${commerceBasePath}/accountancy/${slugify('Introduction To accounting')}/videos/topic.mp4` },
  ],
  'Economics': 'Economics Content Coming Soon',
  'Mathematics': [
    { name: 'Sets', topicNotesLink: `${commerceBasePath}/mathematics/${slugify('Sets')}/notes/topic.pdf`, topicVideoLink: `${commerceBasePath}/mathematics/${slugify('Sets')}/videos/topic.mp4` },
    { name: 'Complex Numbers', topicNotesLink: `${commerceBasePath}/mathematics/${slugify('Complex Numbers')}/notes/topic.pdf`, topicVideoLink: `${commerceBasePath}/mathematics/${slugify('Complex Numbers')}/videos/topic.mp4` },
    { name: 'Relation & Functions', topicNotesLink: `${commerceBasePath}/mathematics/${slugify('Relation & Functions')}/notes/topic.pdf`, topicVideoLink: `${commerceBasePath}/mathematics/${slugify('Relation & Functions')}/videos/topic.mp4` },
  ],
};

// Aarambh Batch Content (courseId '3')
const aarambhBasePath = '/assets/courses/aarambh';
export const aarambhCourseContent: CourseContentMap = {
  'Social Science': 'Social Science Content Coming Soon',
  'Science': 'Science Content Coming Soon', // General Science for Aarambh
  'Mathematics': [
    { name: 'Sets', topicNotesLink: `${aarambhBasePath}/mathematics/${slugify('Sets')}/notes/topic.pdf`, topicVideoLink: `${aarambhBasePath}/mathematics/${slugify('Sets')}/videos/topic.mp4` },
    { name: 'Complex Numbers', topicNotesLink: `${aarambhBasePath}/mathematics/${slugify('Complex Numbers')}/notes/topic.pdf`, topicVideoLink: `${aarambhBasePath}/mathematics/${slugify('Complex Numbers')}/videos/topic.mp4` },
    { name: 'Relation & Functions', topicNotesLink: `${aarambhBasePath}/mathematics/${slugify('Relation & Functions')}/notes/topic.pdf`, topicVideoLink: `${aarambhBasePath}/mathematics/${slugify('Relation & Functions')}/videos/topic.mp4` },
  ],
};

