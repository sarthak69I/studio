
// src/lib/course-data.ts

// Represents a single lecture
export interface Lecture {
  id: string; // e.g., "L1", "L2"
  title: string; // e.g., "Introduction to Kinematics"
  notesLink?: string; // URL or path to notes
  videoLink?: string; // Original direct link, could be for download or reference
  videoEmbedType?: 'youtube' | 'iframe'; // Type of video embed
  videoEmbedUrl?: string; // URL for the iframe src
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

const m3u8PlayerBase = 'https://www.m3u8player.online/embed/m3u8?url=';

// Science Batch Content (courseId '1')
const scienceBasePath = '/assets/courses/science';
export const scienceCourseContent: CourseContentMap = {
  'Physics': [
    {
      name: 'Units and Measurement',
      lectures: [
        {
          id: 'L1',
          title: 'Units and Measurement L1',
          notesLink: `${scienceBasePath}/physics/${slugify('Units and Measurement')}/notes/L1.pdf`,
          videoLink: 'https://www.youtube.com/live/eYHkwzP0TkY?si=obukLiTwZjOfBaSS',
          videoEmbedType: 'youtube',
          videoEmbedUrl: 'https://www.youtube.com/embed/eYHkwzP0TkY',
        },
        {
          id: 'L2',
          title: 'Units and Measurement L2',
          notesLink: `${scienceBasePath}/physics/${slugify('Units and Measurement')}/notes/L2.pdf`,
          videoLink: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354032/174490568189301097666/index_5.m3u8',
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354032/174490568189301097666/index_5.m3u8')}`,
        },
        {
          id: 'L3',
          title: 'Units and Measurement L3',
          notesLink: `${scienceBasePath}/physics/${slugify('Units and Measurement')}/notes/L3.pdf`,
          videoLink: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354885/174499396879388296383/index_4.m3u8',
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354885/174499396879388296383/index_4.m3u8')}`,
        },
        {
          id: 'L4',
          title: 'Units and Measurement L4',
          notesLink: `${scienceBasePath}/physics/${slugify('Units and Measurement')}/notes/L4.pdf`,
          videoLink: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4360178/174551194721888296383/index_4.m3u8',
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4360178/174551194721888296383/index_4.m3u8')}`,
        },
        {
          id: 'L5',
          title: 'Units and Measurement L5',
          notesLink: `${scienceBasePath}/physics/${slugify('Units and Measurement')}/notes/L5.pdf`,
          videoLink: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4361337/174559902322678296383/index_4.m3u8',
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4361337/174559902322678296383/index_4.m3u8')}`,
        },
        {
          id: 'L6',
          title: 'Units and Measurement L6',
          notesLink: `${scienceBasePath}/physics/${slugify('Units and Measurement')}/notes/L6.pdf`,
          videoLink: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4362139/174568479092198296383/index_4.m3u8',
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4362139/174568479092198296383/index_4.m3u8')}`,
        },
      ],
    },
    {
      name: 'Motion In a Straight Line',
      lectures: [
        {
          id: 'L1',
          title: 'Motion In a Straight Line L1',
          notesLink: `${scienceBasePath}/physics/${slugify('Motion In a Straight Line')}/notes/L1.pdf`,
          videoLink: `https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4367211/174611702457038296383/index_4.m3u8`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4367211/174611702457038296383/index_4.m3u8')}`,
        },
        {
          id: 'L2',
          title: 'Motion In a Straight Line L2',
          notesLink: `${scienceBasePath}/physics/${slugify('Motion In a Straight Line')}/notes/L2.pdf`,
          videoLink: `https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4384135/174741235930878296383/index_4.m3u8`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4384135/174741235930878296383/index_4.m3u8')}`,
        },
        {
          id: 'L3',
          title: 'Motion In a Straight Line L3',
          notesLink: `${scienceBasePath}/physics/${slugify('Motion In a Straight Line')}/notes/L3.pdf`,
          videoLink: `https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4384839/174749905027548296383/index_4.m3u8`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4384839/174749905027548296383/index_4.m3u8')}`,
        },
        {
          id: 'L4',
          title: 'Motion In a Straight Line L4',
          notesLink: `${scienceBasePath}/physics/${slugify('Motion In a Straight Line')}/notes/L4.pdf`,
          videoLink: `https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4389362/174793149686398296383/index_4.m3u8`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4389362/174793149686398296383/index_4.m3u8')}`,
        },
        {
          id: 'L5',
          title: 'Motion In a Straight Line L5',
          notesLink: `${scienceBasePath}/physics/${slugify('Motion In a Straight Line')}/notes/L5.pdf`,
          videoLink: `https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4390995/174801802012768296383/index_4.m3u8`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4390995/174801802012768296383/index_4.m3u8')}`,
        },
        {
          id: 'L6',
          title: 'Motion In a Straight Line L6',
          notesLink: `${scienceBasePath}/physics/${slugify('Motion In a Straight Line')}/notes/L6.pdf`,
          videoLink: `https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4391550/174810397274838296383/index_4.m3u8`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4391550/174810397274838296383/index_4.m3u8')}`,
        },
      ] // Correctly close the lectures array
    } // Correctly close the "Motion In a Straight Line" topic object (no comma as it's the last topic for Physics)
  ], // Correctly close the Physics topics array
  'Chemistry': [
    {
      name: 'Some Basic Concepts of Chemistry',
      lectures: Array.from({ length: 6 }, (_, i) => ({
        id: `L${i + 1}`,
        title: `Some Basic Concepts of Chemistry L${i + 1}`,
        notesLink: `${scienceBasePath}/chemistry/${slugify('Some Basic Concepts of Chemistry')}/notes/L${i + 1}.pdf`,
        videoLink: `${scienceBasePath}/chemistry/${slugify('Some Basic Concepts of Chemistry')}/videos/L${i + 1}.mp4`, // Placeholder, update if specific videos exist
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
    { name: 'Business, Trade & Commerce',
      lectures: [
        {
          id: 'L1',
          title: 'Business, Trade & Commerce L1',
          notesLink: `${commerceBasePath}/business-studies/${slugify('Business, Trade & Commerce')}/notes/L1.pdf`,
          videoLink: 'https://www.youtube.com/live/PUa2-buHJII?si=J9Xs0hTe5a9WtFvk',
          videoEmbedType: 'youtube',
          videoEmbedUrl: 'https://www.youtube.com/embed/PUa2-buHJII',
        },
        {
          id: 'L2',
          title: 'Business, Trade & Commerce L2',
          notesLink: `${commerceBasePath}/business-studies/${slugify('Business, Trade & Commerce')}/notes/L2.pdf`,
          videoLink: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4352997/174481925589108661500/index_4.m3u8',
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4352997/174481925589108661500/index_4.m3u8')}`,
        },
        {
          id: 'L3',
          title: 'Business, Trade & Commerce L3',
          notesLink: `${commerceBasePath}/business-studies/${slugify('Business, Trade & Commerce')}/notes/L3.pdf`,
          videoLink: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354036/174490571525318661500/index_4.m3u8',
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354036/174490571525318661500/index_4.m3u8')}`,
        },
        {
          id: 'L4',
          title: 'Business, Trade & Commerce L4',
          notesLink: `${commerceBasePath}/business-studies/${slugify('Business, Trade & Commerce')}/notes/L4.pdf`,
          videoLink: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4356791/174525158582868661500/index_4.m3u8',
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4356791/174525158582868661500/index_4.m3u8')}`,
        },
        {
          id: 'L5',
          title: 'Business, Trade & Commerce L5',
          notesLink: `${commerceBasePath}/business-studies/${slugify('Business, Trade & Commerce')}/notes/L5.pdf`,
          videoLink: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357840/174533779119448661500/index_4.m3u8',
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357840/174533779119448661500/index_4.m3u8')}`,
        },
        {
          id: 'L6',
          title: 'Business, Trade & Commerce L6',
          notesLink: `${commerceBasePath}/business-studies/${slugify('Business, Trade & Commerce')}/notes/L6.pdf`,
          videoLink: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4358827/174541222825788661500/index_4.m3u8',
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4358827/174541222825788661500/index_4.m3u8')}`,
        },
        {
          id: 'L7',
          title: 'Business, Trade & Commerce L7',
          notesLink: `${commerceBasePath}/business-studies/${slugify('Business, Trade & Commerce')}/notes/L7.pdf`,
          videoLink: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4363370/174585516974368661500/index_4.m3u8',
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4363370/174585516974368661500/index_4.m3u8')}`,
        },
        {
          id: 'L8',
          title: 'Business, Trade & Commerce L8',
          notesLink: `${commerceBasePath}/business-studies/${slugify('Business, Trade & Commerce')}/notes/L8.pdf`,
          videoLink: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4364782/174594193147598661500/index_4.m3u8',
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4364782/174594193147598661500/index_4.m3u8')}`,
        },
        {
          id: 'L9',
          title: 'Business, Trade & Commerce L9',
          notesLink: `${commerceBasePath}/business-studies/${slugify('Business, Trade & Commerce')}/notes/L9.pdf`,
          videoLink: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4365823/174601759672428661500/index_4.m3u8',
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4365823/174601759672428661500/index_4.m3u8')}`,
        },
      ]
    },
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

    