
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

// Science Batch Content
export const scienceCourseContent: CourseContentMap = {
  'Physics': [
    {
      name: 'Units and Measurement',
      lectures: [
        { id: 'L1', title: 'Units and Measurement L1', notesLink: '#', videoLink: '#' },
        { id: 'L2', title: 'Units and Measurement L2', notesLink: '#', videoLink: '#' },
      ],
    },
  ],
  'Chemistry': [
    {
      name: 'Some Basic Concepts of Chemistry',
      lectures: Array.from({ length: 6 }, (_, i) => ({
        id: `L${i + 1}`,
        title: `Some Basic Concepts of Chemistry L${i + 1}`,
        notesLink: `#sbcc-notes-l${i + 1}`, // Placeholder link
        videoLink: `#sbcc-video-l${i + 1}`, // Placeholder link
      })),
    },
    { name: 'Structure of Atom', topicNotesLink: '#soa-notes', topicVideoLink: '#soa-video' },
    { name: 'Classification of Elements', topicNotesLink: '#coe-notes', topicVideoLink: '#coe-video' },
  ],
  'Biology': [
    {
      name: 'The Living World',
      lectures: [
        { id: 'L1', title: 'The Living World L1', notesLink: '#tlw-notes-l1', videoLink: '#tlw-video-l1' },
      ],
    },
  ],
  'Mathematics': [
    { name: 'Sets', topicNotesLink: '#sets-notes', topicVideoLink: '#sets-video' },
    { name: 'Complex Numbers', topicNotesLink: '#cn-notes', topicVideoLink: '#cn-video' },
    { name: 'Relation & Functions', topicNotesLink: '#rf-notes', topicVideoLink: '#rf-video' },
  ],
};

// Commerce Batch Content
export const commerceCourseContent: CourseContentMap = {
  'Business Studies': [
    { name: 'Business, Trade & Commerce', topicNotesLink: '#btc-notes', topicVideoLink: '#btc-video' },
    { name: 'Forms of Business Organisations', topicNotesLink: '#fbo-notes', topicVideoLink: '#fbo-video' },
  ],
  'Accountancy': [
    { name: 'Basic Concepts of Accounts', topicNotesLink: '#bca-notes', topicVideoLink: '#bca-video' },
    { name: 'Introduction To accounting', topicNotesLink: '#ita-notes', topicVideoLink: '#ita-video' },
  ],
  'Economics': 'Economics Content Coming Soon',
  'Mathematics': [ // Assuming same structure, links can be different
    { name: 'Sets', topicNotesLink: '#sets-comm-notes', topicVideoLink: '#sets-comm-video' },
    { name: 'Complex Numbers', topicNotesLink: '#cn-comm-notes', topicVideoLink: '#cn-comm-video' },
    { name: 'Relation & Functions', topicNotesLink: '#rf-comm-notes', topicVideoLink: '#rf-comm-video' },
  ],
};

// Aarambh Batch Content
export const aarambhCourseContent: CourseContentMap = {
  'Social Science': 'Social Science Content Coming Soon',
  'Science': 'Science Content Coming Soon', // General Science for Aarambh
  'Mathematics': [ // Assuming same structure, links can be different
    { name: 'Sets', topicNotesLink: '#sets-aarambh-notes', topicVideoLink: '#sets-aarambh-video' },
    { name: 'Complex Numbers', topicNotesLink: '#cn-aarambh-notes', topicVideoLink: '#cn-aarambh-video' },
    { name: 'Relation & Functions', topicNotesLink: '#rf-aarambh-notes', topicVideoLink: '#rf-aarambh-video' },
  ],
};
