
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
        notesLink: `${scienceBasePath}/physics/units-and-measurement/notes/L${i + 1}.pdf`,
        videoLink: `${scienceBasePath}/physics/units-and-measurement/videos/L${i + 1}.mp4`,
      })),
    },
  ],
  'Chemistry': [
    {
      name: 'Some Basic Concepts of Chemistry',
      lectures: Array.from({ length: 6 }, (_, i) => ({
        id: `L${i + 1}`,
        title: `Some Basic Concepts of Chemistry L${i + 1}`,
        notesLink: `${scienceBasePath}/chemistry/some-basic-concepts-of-chemistry/notes/L${i + 1}.pdf`,
        videoLink: `${scienceBasePath}/chemistry/some-basic-concepts-of-chemistry/videos/L${i + 1}.mp4`,
      })),
    },
    { name: 'Structure of Atom', topicNotesLink: `${scienceBasePath}/chemistry/structure-of-atom/notes/topic.pdf`, topicVideoLink: `${scienceBasePath}/chemistry/structure-of-atom/videos/topic.mp4` },
    { name: 'Classification of Elements', topicNotesLink: `${scienceBasePath}/chemistry/classification-of-elements/notes/topic.pdf`, topicVideoLink: `${scienceBasePath}/chemistry/classification-of-elements/videos/topic.mp4` },
  ],
  'Biology': [
    {
      name: 'The Living World',
      lectures: [
        { id: 'L1', title: 'The Living World L1', notesLink: `${scienceBasePath}/biology/the-living-world/notes/L1.pdf`, videoLink: `${scienceBasePath}/biology/the-living-world/videos/L1.mp4` },
      ],
    },
  ],
  'Mathematics': [
    { name: 'Sets', topicNotesLink: `${scienceBasePath}/mathematics/sets/notes/topic.pdf`, topicVideoLink: `${scienceBasePath}/mathematics/sets/videos/topic.mp4` },
    { name: 'Complex Numbers', topicNotesLink: `${scienceBasePath}/mathematics/complex-numbers/notes/topic.pdf`, topicVideoLink: `${scienceBasePath}/mathematics/complex-numbers/videos/topic.mp4` },
    { name: 'Relation & Functions', topicNotesLink: `${scienceBasePath}/mathematics/relation-and-functions/notes/topic.pdf`, topicVideoLink: `${scienceBasePath}/mathematics/relation-and-functions/videos/topic.mp4` },
  ],
};

// Commerce Batch Content (courseId '2')
const commerceBasePath = '/assets/courses/commerce';
export const commerceCourseContent: CourseContentMap = {
  'Business Studies': [
    { name: 'Business, Trade & Commerce', topicNotesLink: `${commerceBasePath}/business-studies/business-trade-and-commerce/notes/topic.pdf`, topicVideoLink: `${commerceBasePath}/business-studies/business-trade-and-commerce/videos/topic.mp4` },
    { name: 'Forms of Business Organisations', topicNotesLink: `${commerceBasePath}/business-studies/forms-of-business-organisations/notes/topic.pdf`, topicVideoLink: `${commerceBasePath}/business-studies/forms-of-business-organisations/videos/topic.mp4` },
  ],
  'Accountancy': [
    { name: 'Basic Concepts of Accounts', topicNotesLink: `${commerceBasePath}/accountancy/basic-concepts-of-accounts/notes/topic.pdf`, topicVideoLink: `${commerceBasePath}/accountancy/basic-concepts-of-accounts/videos/topic.mp4` },
    { name: 'Introduction To accounting', topicNotesLink: `${commerceBasePath}/accountancy/introduction-to-accounting/notes/topic.pdf`, topicVideoLink: `${commerceBasePath}/accountancy/introduction-to-accounting/videos/topic.mp4` },
  ],
  'Economics': 'Economics Content Coming Soon',
  'Mathematics': [
    { name: 'Sets', topicNotesLink: `${commerceBasePath}/mathematics/sets/notes/topic.pdf`, topicVideoLink: `${commerceBasePath}/mathematics/sets/videos/topic.mp4` },
    { name: 'Complex Numbers', topicNotesLink: `${commerceBasePath}/mathematics/complex-numbers/notes/topic.pdf`, topicVideoLink: `${commerceBasePath}/mathematics/complex-numbers/videos/topic.mp4` },
    { name: 'Relation & Functions', topicNotesLink: `${commerceBasePath}/mathematics/relation-and-functions/notes/topic.pdf`, topicVideoLink: `${commerceBasePath}/mathematics/relation-and-functions/videos/topic.mp4` },
  ],
};

// Aarambh Batch Content (courseId '3')
const aarambhBasePath = '/assets/courses/aarambh';
export const aarambhCourseContent: CourseContentMap = {
  'Social Science': 'Social Science Content Coming Soon',
  'Science': 'Science Content Coming Soon', // General Science for Aarambh
  'Mathematics': [
    { name: 'Sets', topicNotesLink: `${aarambhBasePath}/mathematics/sets/notes/topic.pdf`, topicVideoLink: `${aarambhBasePath}/mathematics/sets/videos/topic.mp4` },
    { name: 'Complex Numbers', topicNotesLink: `${aarambhBasePath}/mathematics/complex-numbers/notes/topic.pdf`, topicVideoLink: `${aarambhBasePath}/mathematics/complex-numbers/videos/topic.mp4` },
    { name: 'Relation & Functions', topicNotesLink: `${aarambhBasePath}/mathematics/relation-and-functions/notes/topic.pdf`, topicVideoLink: `${aarambhBasePath}/mathematics/relation-and-functions/videos/topic.mp4` },
  ],
};

