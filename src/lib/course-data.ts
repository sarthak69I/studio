
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
      ]
    }
  ],
  'Chemistry': [
    {
      name: 'Some Basic Concepts of Chemistry',
      lectures: Array.from({ length: 6 }, (_, i) => ({
        id: `L${i + 1}`,
        title: `Some Basic Concepts of Chemistry L${i + 1}`,
        notesLink: `${scienceBasePath}/chemistry/${slugify('Some Basic Concepts of Chemistry')}/notes/L${i + 1}.pdf`,
        videoLink: `${scienceBasePath}/chemistry/${slugify('Some Basic Concepts of Chemistry')}/videos/L${i + 1}.mp4`,
        videoEmbedType: 'iframe',
        videoEmbedUrl: `#`, 
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
    { 
      name: 'Sets', 
      lectures: Array.from({ length: 5 }, (_, i) => ({
        id: `L${i + 1}`,
        title: `Sets L${i + 1}`,
        notesLink: `${scienceBasePath}/mathematics/${slugify('Sets')}/notes/L${i + 1}.pdf`,
        videoLink: i === 0 ? 'https://www.youtube.com/live/UT9CN9XFGYw?si=C1tfKB1UXHYtrmsV' : `${scienceBasePath}/mathematics/${slugify('Sets')}/videos/L${i + 1}.mp4`,
        videoEmbedType: i === 0 ? 'youtube' : 'iframe',
        videoEmbedUrl: i === 0 ? 'https://www.youtube.com/embed/UT9CN9XFGYw' : '#',
      }))
    },
    { 
      name: 'Complex Numbers', 
      lectures: Array.from({ length: 8 }, (_, i) => ({
        id: `L${i + 1}`,
        title: `Complex Numbers L${i + 1}`,
        notesLink: `${scienceBasePath}/mathematics/${slugify('Complex Numbers')}/notes/L${i + 1}.pdf`,
        videoLink: `${scienceBasePath}/mathematics/${slugify('Complex Numbers')}/videos/L${i + 1}.mp4`,
        videoEmbedType: 'iframe',
        videoEmbedUrl: '#',
      }))
    },
    { name: 'Relation & Functions', topicNotesLink: `${scienceBasePath}/mathematics/${slugify('Relation & Functions')}/notes/topic.pdf`, topicVideoLink: `${scienceBasePath}/mathematics/${slugify('Relation & Functions')}/videos/topic.mp4` },
  ],
};

// Commerce Batch Content (courseId '2')
const commerceBasePath = '/assets/courses/commerce';
export const commerceCourseContent: CourseContentMap = {
  'Business Studies': [
    { name: 'Business, Trade & Commerce',
      lectures: Array.from({ length: 9 }, (_, i) => {
        const lectureId = `L${i + 1}`;
        let videoUrl = '#'; // Default placeholder
        let embedType: 'youtube' | 'iframe' = 'iframe';
        const m3u8Links = [
            'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4352997/174481925589108661500/index_4.m3u8', // L2
            'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354036/174490571525318661500/index_4.m3u8', // L3
            'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4356791/174525158582868661500/index_4.m3u8', // L4
            'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357840/174533779119448661500/index_4.m3u8', // L5
            'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4358827/174541222825788661500/index_4.m3u8', // L6
            'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4363370/174585516974368661500/index_4.m3u8', // L7
            'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4364782/174594193147598661500/index_4.m3u8', // L8
            'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4365823/174601759672428661500/index_4.m3u8', // L9
        ];

        if (i === 0) { // L1
          videoUrl = 'https://www.youtube.com/embed/PUa2-buHJII';
          embedType = 'youtube';
        } else if (i > 0 && i < 9) { // L2 to L9
          videoUrl = `${m3u8PlayerBase}${encodeURIComponent(m3u8Links[i-1])}`;
        }

        return {
          id: lectureId,
          title: `Business, Trade & Commerce ${lectureId}`,
          notesLink: `${commerceBasePath}/business-studies/${slugify('Business, Trade & Commerce')}/notes/${lectureId}.pdf`,
          videoLink: `#`, 
          videoEmbedType: embedType,
          videoEmbedUrl: videoUrl,
        };
      })
    },
    { name: 'Forms of Business Organisations', topicNotesLink: `${commerceBasePath}/business-studies/${slugify('Forms of Business Organisations')}/notes/topic.pdf`, topicVideoLink: `${commerceBasePath}/business-studies/${slugify('Forms of Business Organisations')}/videos/topic.mp4` },
  ],
  'Accountancy': [
    { 
      name: 'Basic Concepts of Accounts', 
      lectures: [
        {
          id: 'L1',
          title: 'Basic Accounting terms L1',
          notesLink: `${commerceBasePath}/accountancy/${slugify('Basic Concepts of Accounts')}/notes/L1.pdf`,
          videoLink: 'https://www.youtube.com/live/N0UH3xznWko?si=RG0AL5lLezOMDany',
          videoEmbedType: 'youtube',
          videoEmbedUrl: 'https://www.youtube.com/embed/N0UH3xznWko',
        },
        {
          id: 'L2',
          title: 'Basic Accounting terms L2',
          notesLink: `${commerceBasePath}/accountancy/${slugify('Basic Concepts of Accounts')}/notes/L2.pdf`,
          videoLink: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354736/174498147635838037481/index_3.m3u8',
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354736/174498147635838037481/index_3.m3u8')}`,
        },
        {
          id: 'L3',
          title: 'Basic Accounting terms L3',
          notesLink: `${commerceBasePath}/accountancy/${slugify('Basic Concepts of Accounts')}/notes/L3.pdf`,
          videoLink: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4355332/174506775549578037481/index_4.m3u8',
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4355332/174506775549578037481/index_4.m3u8')}`,
        },
        {
          id: 'L4',
          title: 'Basic Accounting terms L4',
          notesLink: `${commerceBasePath}/accountancy/${slugify('Basic Concepts of Accounts')}/notes/L4.pdf`,
          videoLink: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4360049/174550144387958037481/index_3.m3u8',
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4360049/174550144387958037481/index_3.m3u8')}`,
        },
      ],
    },
    { 
      name: 'Introduction To accounting',
      lectures: [
        {
          id: 'L1',
          title: 'Introduction To Accounting L1',
          notesLink: `${commerceBasePath}/accountancy/${slugify('Introduction To accounting')}/notes/L1.pdf`,
          videoLink: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4361169/174558615865988037481/index_4.m3u8',
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4361169/174558615865988037481/index_4.m3u8')}`,
        },
        {
          id: 'L2',
          title: 'Introduction To Accounting L2',
          notesLink: `${commerceBasePath}/accountancy/${slugify('Introduction To accounting')}/notes/L2.pdf`,
          videoLink: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4362045/174567417274348037481/index_4.m3u8',
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4362045/174567417274348037481/index_4.m3u8')}`,
        },
        {
          id: 'L3',
          title: 'Introduction To Accounting L3',
          notesLink: `${commerceBasePath}/accountancy/${slugify('Introduction To accounting')}/notes/L3.pdf`,
          videoLink: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4367025/174610386875138037481/index_4.m3u8',
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4367025/174610386875138037481/index_4.m3u8')}`,
        },
        {
          id: 'L4',
          title: 'Introduction To Accounting L4',
          notesLink: `${commerceBasePath}/accountancy/${slugify('Introduction To accounting')}/notes/L4.pdf`,
          videoLink: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4368221/174619101874588037481/index_4.m3u8',
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4368221/174619101874588037481/index_4.m3u8')}`,
        },
        {
          id: 'L5',
          title: 'Introduction To Accounting L5',
          notesLink: `${commerceBasePath}/accountancy/${slugify('Introduction To accounting')}/notes/L5.pdf`,
          videoLink: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4370044/174627841879878037481/index_4.m3u8',
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4370044/174627841879878037481/index_4.m3u8')}`,
        },
      ],
    },
  ],
  'Economics': [
    {
      name: 'Introduction to Microeconomics',
      lectures: [
        {
          id: 'L1',
          title: 'Introduction to Microeconomics L1',
          notesLink: `${commerceBasePath}/economics/${slugify('Introduction to Microeconomics')}/notes/L1.pdf`,
          videoLink: 'https://www.youtube.com/live/DC5GfUSomWc?si=ZYT0GSchq435Cwb-',
          videoEmbedType: 'youtube',
          videoEmbedUrl: 'https://www.youtube.com/embed/DC5GfUSomWc',
        },
        {
          id: 'L2',
          title: 'Introduction to Microeconomics L2',
          notesLink: `${commerceBasePath}/economics/${slugify('Introduction to Microeconomics')}/notes/L2.pdf`,
          videoLink: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354870/174499154434222805408/index_4.m3u8',
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354870/174499154434222805408/index_4.m3u8')}`,
        },
        {
          id: 'L3',
          title: 'Introduction to Microeconomics L3',
          notesLink: `${commerceBasePath}/economics/${slugify('Introduction to Microeconomics')}/notes/L3.pdf`,
          videoLink: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4355506/174513048136192805408/index_4.m3u8',
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4355506/174513048136192805408/index_4.m3u8')}`,
        },
        {
          id: 'L4',
          title: 'Introduction to Microeconomics L4',
          notesLink: `${commerceBasePath}/economics/${slugify('Introduction to Microeconomics')}/notes/L4.pdf`,
          videoLink: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4360163/174551052232072805408/index_4.m3u8',
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4360163/174551052232072805408/index_4.m3u8')}`,
        },
        {
          id: 'L5',
          title: 'Introduction to Microeconomics L5',
          notesLink: `${commerceBasePath}/economics/${slugify('Introduction to Microeconomics')}/notes/L5.pdf`,
          videoLink: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4361318/174559672274232805408/index_4.m3u8',
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4361318/174559672274232805408/index_4.m3u8')}`,
        },
      ],
    },
    {
      name: 'Economics: An Introduction',
      lectures: [
        {
          id: 'L1',
          title: 'Economics: An Introduction L1',
          notesLink: `${commerceBasePath}/economics/${slugify('Economics: An Introduction')}/notes/L1.pdf`,
          videoLink: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4363914/174591024154512805408/index_4.m3u8',
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4363914/174591024154512805408/index_4.m3u8')}`,
        },
      ],
    },
    {
      name: 'Statistics For Economic',
      lectures: [
        {
          id: 'L1',
          title: 'Statistics For Economic L1',
          notesLink: `${commerceBasePath}/economics/${slugify('Statistics For Economic')}/notes/L1.pdf`,
          videoLink: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4367643/174617438052112805408/index_4.m3u8',
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4367643/174617438052112805408/index_4.m3u8')}`,
        },
        {
          id: 'L2',
          title: 'Statistics For Economic L2',
          notesLink: `${commerceBasePath}/economics/${slugify('Statistics For Economic')}/notes/L2.pdf`,
          videoLink: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4368696/174625119772212805408/index_4.m3u8',
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4368696/174625119772212805408/index_4.m3u8')}`,
        },
        {
          id: 'L3',
          title: 'Statistics For Economic L3',
          notesLink: `${commerceBasePath}/economics/${slugify('Statistics For Economic')}/notes/L3.pdf`,
          videoLink: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4370292/174636039220762805408/index_4.m3u8',
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4370292/174636039220762805408/index_4.m3u8')}`,
        },
        {
          id: 'L4',
          title: 'Statistics For Economic L4',
          notesLink: `${commerceBasePath}/economics/${slugify('Statistics For Economic')}/notes/L4.pdf`,
          videoLink: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4376224/174672114274758165220/index_4.m3u8',
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4376224/174672114274758165220/index_4.m3u8')}`,
        },
      ],
    },
  ],
  'Mathematics': [
    { 
      name: 'Sets', 
      lectures: Array.from({ length: 5 }, (_, i) => ({
        id: `L${i + 1}`,
        title: `Sets L${i + 1}`,
        notesLink: `${commerceBasePath}/mathematics/${slugify('Sets')}/notes/L${i + 1}.pdf`,
        videoLink: i === 0 ? 'https://www.youtube.com/live/UT9CN9XFGYw?si=C1tfKB1UXHYtrmsV' : `${commerceBasePath}/mathematics/${slugify('Sets')}/videos/L${i + 1}.mp4`,
        videoEmbedType: i === 0 ? 'youtube' : 'iframe',
        videoEmbedUrl: i === 0 ? 'https://www.youtube.com/embed/UT9CN9XFGYw' : '#',
      }))
    },
    { 
      name: 'Complex Numbers', 
      lectures: Array.from({ length: 8 }, (_, i) => ({
        id: `L${i + 1}`,
        title: `Complex Numbers L${i + 1}`,
        notesLink: `${commerceBasePath}/mathematics/${slugify('Complex Numbers')}/notes/L${i + 1}.pdf`,
        videoLink: `${commerceBasePath}/mathematics/${slugify('Complex Numbers')}/videos/L${i + 1}.mp4`,
        videoEmbedType: 'iframe',
        videoEmbedUrl: '#',
      }))
    },
    { name: 'Relation & Functions', topicNotesLink: `${commerceBasePath}/mathematics/${slugify('Relation & Functions')}/notes/topic.pdf`, topicVideoLink: `${commerceBasePath}/mathematics/${slugify('Relation & Functions')}/videos/topic.mp4` },
  ],
};

// Aarambh Batch Content (courseId '3')
const aarambhBasePath = '/assets/courses/aarambh';
export const aarambhCourseContent: CourseContentMap = {
  'Social Science': 'Social Science Content Coming Soon',
  'Science': 'Science Content Coming Soon', // General Science for Aarambh
  'Mathematics': [ // Keeping Aarambh Maths simple as per previous structure unless specified otherwise
    { name: 'Sets', topicNotesLink: `${aarambhBasePath}/mathematics/${slugify('Sets')}/notes/topic.pdf`, topicVideoLink: `${aarambhBasePath}/mathematics/${slugify('Sets')}/videos/topic.mp4` },
    { name: 'Complex Numbers', topicNotesLink: `${aarambhBasePath}/mathematics/${slugify('Complex Numbers')}/notes/topic.pdf`, topicVideoLink: `${aarambhBasePath}/mathematics/${slugify('Complex Numbers')}/videos/topic.mp4` },
    { name: 'Relation & Functions', topicNotesLink: `${aarambhBasePath}/mathematics/${slugify('Relation & Functions')}/notes/topic.pdf`, topicVideoLink: `${aarambhBasePath}/mathematics/${slugify('Relation & Functions')}/videos/topic.mp4` },
  ],
};

    
