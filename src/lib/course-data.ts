
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
      lectures: [
        {
          id: 'L1',
          title: 'Some Basic Concepts of Chemistry L1',
          notesLink: `${scienceBasePath}/chemistry/${slugify('Some Basic Concepts of Chemistry')}/notes/L1.pdf`,
          videoLink: 'https://www.youtube.com/live/EVU_Bvc3HpE?si=LX-gur9UBX5LN_MM',
          videoEmbedType: 'youtube',
          videoEmbedUrl: 'https://www.youtube.com/embed/EVU_Bvc3HpE',
        },
        {
          id: 'L2',
          title: 'Some Basic Concepts of Chemistry L2',
          notesLink: `${scienceBasePath}/chemistry/${slugify('Some Basic Concepts of Chemistry')}/notes/L2.pdf`,
          videoLink: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4353000/174481993295887555169/index_4.m3u8',
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4353000/174481993295887555169/index_4.m3u8')}`,
        },
        {
          id: 'L3',
          title: 'Some Basic Concepts of Chemistry L3',
          notesLink: `${scienceBasePath}/chemistry/${slugify('Some Basic Concepts of Chemistry')}/notes/L3.pdf`,
          videoLink: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4355452/174507897732027555169/index_4.m3u8',
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4355452/174507897732027555169/index_4.m3u8')}`,
        },
        {
          id: 'L4',
          title: 'Some Basic Concepts of Chemistry L4',
          notesLink: `${scienceBasePath}/chemistry/${slugify('Some Basic Concepts of Chemistry')}/notes/L4.pdf`,
          videoLink: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357309/174530949861477555169/index_4.m3u8',
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357309/174530949861477555169/index_4.m3u8')}`,
        },
        {
          id: 'L5',
          title: 'Some Basic Concepts of Chemistry L5',
          notesLink: `${scienceBasePath}/chemistry/${slugify('Some Basic Concepts of Chemistry')}/notes/L5.pdf`,
          videoLink: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357831/174533736975997555169/index_4.m3u8',
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357831/174533736975997555169/index_4.m3u8')}`,
        },
        {
          id: 'L6',
          title: 'Some Basic Concepts of Chemistry L6',
          notesLink: `${scienceBasePath}/chemistry/${slugify('Some Basic Concepts of Chemistry')}/notes/L6.pdf`,
          videoLink: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4358829/174541226159937555169/index_4.m3u8',
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4358829/174541226159937555169/index_4.m3u8')}`,
        },
      ],
    },
    {
      name: 'Structure of Atom',
      lectures: [
        {
          id: 'L1',
          title: 'Structure of Atom L1',
          notesLink: `${scienceBasePath}/chemistry/${slugify('Structure of Atom')}/notes/L1.pdf`,
          videoLink: `https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4363320/174584946237347555169/index_4.m3u8`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4363320/174584946237347555169/index_4.m3u8')}`,
        },
        {
          id: 'L2',
          title: 'Structure of Atom L2',
          notesLink: `${scienceBasePath}/chemistry/${slugify('Structure of Atom')}/notes/L2.pdf`,
          videoLink: `https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4364789/174594373555637555169/index_4.m3u8`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4364789/174594373555637555169/index_4.m3u8')}`,
        },
        {
          id: 'L3',
          title: 'Structure of Atom L3',
          notesLink: `${scienceBasePath}/chemistry/${slugify('Structure of Atom')}/notes/L3.pdf`,
          videoLink: `https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4365831/174601791723957555169/index_4.m3u8`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4365831/174601791723957555169/index_4.m3u8')}`,
        },
        {
          id: 'L4',
          title: 'Structure of Atom L4',
          notesLink: `${scienceBasePath}/chemistry/${slugify('Structure of Atom')}/notes/L4.pdf`,
          videoLink: `https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4372294/174646064983197555169/index_4.m3u8`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4372294/174646064983197555169/index_4.m3u8')}`,
        },
        {
          id: 'L5',
          title: 'Structure of Atom L5',
          notesLink: `${scienceBasePath}/chemistry/${slugify('Structure of Atom')}/notes/L5.pdf`,
          videoLink: `https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4373927/174654700417617555169/index_4.m3u8`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4373927/174654700417617555169/index_4.m3u8')}`,
        },
        {
          id: 'L6',
          title: 'Structure of Atom L6',
          notesLink: `${scienceBasePath}/chemistry/${slugify('Structure of Atom')}/notes/L6.pdf`,
          videoLink: `https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4374900/174662289939277555169/index_4.m3u8`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4374900/174662289939277555169/index_4.m3u8')}`,
        },
        {
          id: 'L7',
          title: 'Structure of Atom L7',
          notesLink: `${scienceBasePath}/chemistry/${slugify('Structure of Atom')}/notes/L7.pdf`,
          videoLink: `https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4379161/174706558456287555169/index_4.m3u8`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4379161/174706558456287555169/index_4.m3u8')}`,
        },
        {
          id: 'L8',
          title: 'Structure of Atom L8',
          notesLink: `${scienceBasePath}/chemistry/${slugify('Structure of Atom')}/notes/L8.pdf`,
          videoLink: `https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4380760/174715119572127555169/index_4.m3u8`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4380760/174715119572127555169/index_4.m3u8')}`,
        },
        {
          id: 'L9',
          title: 'Structure of Atom L9',
          notesLink: `${scienceBasePath}/chemistry/${slugify('Structure of Atom')}/notes/L9.pdf`,
          videoLink: `https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4381822/174722718560337555169/index_4.m3u8`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4381822/174722718560337555169/index_4.m3u8')}`,
        },
        {
          id: 'L10',
          title: 'Structure of Atom L10',
          notesLink: `${scienceBasePath}/chemistry/${slugify('Structure of Atom')}/notes/L10.pdf`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4385842%2F174767006769507555169%2Findex_4.m3u8`,
        },
      ],
    },
    {
      name: 'Classification of Elements',
      lectures: [
        {
          id: 'L1',
          title: 'Classification of Elements L1',
          notesLink: `${scienceBasePath}/chemistry/${slugify('Classification of Elements')}/notes/L1.pdf`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4387083%2F174775728734717555169%2Findex_4.m3u8`,
        },
        {
          id: 'L2',
          title: 'Classification of Elements L2',
          notesLink: `${scienceBasePath}/chemistry/${slugify('Classification of Elements')}/notes/L2.pdf`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4388067%2F174783286454367555169%2Findex_4.m3u8`,
        },
        {
          id: 'L3',
          title: 'Classification of Elements L3',
          notesLink: `${scienceBasePath}/chemistry/${slugify('Classification of Elements')}/notes/L3.pdf`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4392905%2F174827564478927555169%2Findex_4.m3u8`,
        },
        {
          id: 'L4',
          title: 'Classification of Elements L4',
          notesLink: `${scienceBasePath}/chemistry/${slugify('Classification of Elements')}/notes/L4.pdf`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4394025%2F174836245685127555169%2Findex_4.m3u8`,
        },
        {
          id: 'L5',
          title: 'Classification of Elements L5',
          notesLink: `${scienceBasePath}/chemistry/${slugify('Classification of Elements')}/notes/L5.pdf`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4394991%2F174843803458707555169%2Findex_4.m3u8`,
        },
      ]
    },
  ],
  'Biology': [
    {
      name: 'The Living World',
      lectures: [
        {
          id: 'L1',
          title: 'The Living World L1',
          notesLink: `${scienceBasePath}/biology/${slugify('The Living World')}/notes/L1.pdf`,
          videoEmbedType: 'youtube',
          videoEmbedUrl: 'https://www.youtube.com/embed/RF6xfHVo9xc',
        },
        {
          id: 'L2',
          title: 'The Living World L2',
          notesLink: `${scienceBasePath}/biology/${slugify('The Living World')}/notes/L2.pdf`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4353875/174489575453452621696/index_4.m3u8')}`,
        },
        {
          id: 'L3',
          title: 'The Living World L3',
          notesLink: `${scienceBasePath}/biology/${slugify('The Living World')}/notes/L3.pdf`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354742/174498168131232621696/index_4.m3u8')}`,
        },
      ],
    },
  ],
  'Mathematics': [
    {
      name: 'Sets',
      lectures: [
        {
          id: `L1`,
          title: `Sets L1`,
          notesLink: `https://drive.google.com/file/d/19Q6y1QGvyPJo3t87MnndIgWWiGalcT-o/preview`,
          videoLink: 'https://www.youtube.com/live/UT9CN9XFGYw?si=C1tfKB1UXHYtrmsV',
          videoEmbedType: 'youtube',
          videoEmbedUrl: 'https://www.youtube.com/embed/UT9CN9XFGYw',
        },
        {
          id: `L2`,
          title: `Sets L2`,
          notesLink: `${scienceBasePath}/mathematics/${slugify('Sets')}/notes/L2.pdf`,
          videoLink: `https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4353889/174489667533668296383/index_4.m3u8`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4353889/174489667533668296383/index_4.m3u8')}`,
        },
        {
          id: `L3`,
          title: `Sets L3`,
          notesLink: `${scienceBasePath}/mathematics/${slugify('Sets')}/notes/L3.pdf`,
          videoLink: `https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4356690/174524049345081097666/index_5.m3u8`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4356690/174524049345081097666/index_5.m3u8')}`,
        },
        {
          id: `L4`,
          title: `Sets L4`,
          notesLink: `${scienceBasePath}/mathematics/${slugify('Sets')}/notes/L4.pdf`,
          videoLink: `https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357736/174532685248651097666/index_5.m3u8`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357736/174532685248651097666/index_5.m3u8')}`,
        },
        {
          id: `L5`,
          title: `Sets L5`,
          notesLink: `${scienceBasePath}/mathematics/${slugify('Sets')}/notes/L5.pdf`,
          videoLink: `https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4359038/174542426999201097666/index_5.m3u8`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4359038/174542426999201097666/index_5.m3u8')}`,
        },
      ]
    },
    {
      name: 'Complex Numbers',
      lectures: [
        { id: 'L1', title: 'Complex Numbers L1', notesLink: `${scienceBasePath}/mathematics/${slugify('Complex Numbers')}/notes/L1.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4363249/174584513794761261798/index_4.m3u8')}` },
        { id: 'L2', title: 'Complex Numbers L2', notesLink: `${scienceBasePath}/mathematics/${slugify('Complex Numbers')}/notes/L2.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4364488/174592875146111261798/index_4.m3u8')}` },
        { id: 'L3', title: 'Complex Numbers L3', notesLink: `${scienceBasePath}/mathematics/${slugify('Complex Numbers')}/notes/L3.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4366039/174602857795961261798/index_4.m3u8')}` },
        { id: 'L4', title: 'Complex Numbers L4', notesLink: `${scienceBasePath}/mathematics/${slugify('Complex Numbers')}/notes/L4.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4367111/174610963914991261798/index_4.m3u8')}` },
        { id: 'L5', title: 'Complex Numbers L5', notesLink: `${scienceBasePath}/mathematics/${slugify('Complex Numbers')}/notes/L5.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4372190/174645001549831261798/index_4.m3u8')}` },
        { id: 'L6', title: 'Complex Numbers L6', notesLink: `${scienceBasePath}/mathematics/${slugify('Complex Numbers')}/notes/L6.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4373799/174653642467251261798/index_4.m3u8')}` },
        { id: 'L7', title: 'Complex Numbers L7', notesLink: `${scienceBasePath}/mathematics/${slugify('Complex Numbers')}/notes/L7.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4375005/174663383331301261798/index_4.m3u8')}` },
        { id: 'L8', title: 'Complex Numbers L8', notesLink: `${scienceBasePath}/mathematics/${slugify('Complex Numbers')}/notes/L8.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: '#' },
      ]
    },
    {
      name: 'Relation & Functions',
      lectures: [
        { id: 'L1', title: 'Relation & Functions L1', notesLink: `${scienceBasePath}/mathematics/${slugify('Relation & Functions')}/notes/L1.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4379033%2F174705494887511097666%2Findex_5.m3u8` },
        { id: 'L2', title: 'Relation & Functions L2', notesLink: `${scienceBasePath}/mathematics/${slugify('Relation & Functions')}/notes/L2.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4385645%2F174765739956571097666%2Findex_5.m3u8` },
        { id: 'L3', title: 'Relation & Functions L3', notesLink: `${scienceBasePath}/mathematics/${slugify('Relation & Functions')}/notes/L3.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4386945%2F174774606477081097666%2Findex_5.m3u8` },
        { id: 'L4', title: 'Relation & Functions L4', notesLink: `${scienceBasePath}/mathematics/${slugify('Relation & Functions')}/notes/L4.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4388168%2F174784321070651097666%2Findex_5.m3u8` },
        { id: 'L5', title: 'Relation & Functions L5', notesLink: `${scienceBasePath}/mathematics/${slugify('Relation & Functions')}/notes/L5.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4392734%2F174826442633201097666%2Findex_5.m3u8` },
        { id: 'L6', title: 'Relation & Functions L6', notesLink: `${scienceBasePath}/mathematics/${slugify('Relation & Functions')}/notes/L6.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4393953%2F174835206745611097666%2Findex_5.m3u8` },
        { id: 'L7', title: 'Relation & Functions L7', notesLink: `${scienceBasePath}/mathematics/${slugify('Relation & Functions')}/notes/L7.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4395110%2F174844717954831097666%2Findex_5.m3u8` },
      ]
    },
  ],
};

// Commerce Batch Content (courseId '2')
const commerceBasePath = '/assets/courses/commerce';
export const commerceCourseContent: CourseContentMap = {
  'Business Studies': [
    { name: 'Business, Trade & Commerce',
      lectures: [
        { id: 'L1', title: 'Business, Trade & Commerce L1', notesLink: `${commerceBasePath}/business-studies/${slugify('Business, Trade & Commerce')}/notes/L1.pdf`, videoEmbedType: 'youtube', videoEmbedUrl: 'https://www.youtube.com/embed/PUa2-buHJII' },
        { id: 'L2', title: 'Business, Trade & Commerce L2', notesLink: `${commerceBasePath}/business-studies/${slugify('Business, Trade & Commerce')}/notes/L2.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4352997/174481925589108661500/index_4.m3u8')}` },
        { id: 'L3', title: 'Business, Trade & Commerce L3', notesLink: `${commerceBasePath}/business-studies/${slugify('Business, Trade & Commerce')}/notes/L3.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354036/174490571525318661500/index_4.m3u8')}` },
        { id: 'L4', title: 'Business, Trade & Commerce L4', notesLink: `${commerceBasePath}/business-studies/${slugify('Business, Trade & Commerce')}/notes/L4.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4356791/174525158582868661500/index_4.m3u8')}` },
        { id: 'L5', title: 'Business, Trade & Commerce L5', notesLink: `${commerceBasePath}/business-studies/${slugify('Business, Trade & Commerce')}/notes/L5.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357840/174533779119448661500/index_4.m3u8')}` },
        { id: 'L6', title: 'Business, Trade & Commerce L6', notesLink: `${commerceBasePath}/business-studies/${slugify('Business, Trade & Commerce')}/notes/L6.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4358827/174541222825788661500/index_4.m3u8')}` },
        { id: 'L7', title: 'Business, Trade & Commerce L7', notesLink: `${commerceBasePath}/business-studies/${slugify('Business, Trade & Commerce')}/notes/L7.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4363370/174585516974368661500/index_4.m3u8')}` },
        { id: 'L8', title: 'Business, Trade & Commerce L8', notesLink: `${commerceBasePath}/business-studies/${slugify('Business, Trade & Commerce')}/notes/L8.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4364782/174594193147598661500/index_4.m3u8')}` },
        { id: 'L9', title: 'Business, Trade & Commerce L9', notesLink: `${commerceBasePath}/business-studies/${slugify('Business, Trade & Commerce')}/notes/L9.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4365823/174601759672428661500/index_4.m3u8')}` },
      ]
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
    {
      name: 'Accounting Equations',
      lectures: [
        {
          id: 'L1',
          title: 'Accounting Equations L1',
          notesLink: `${commerceBasePath}/accountancy/${slugify('Accounting Equations')}/notes/L1.pdf`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4376039/174670969584618037481/index_4.m3u8')}`,
        },
        {
          id: 'L2',
          title: 'Accounting Equations L2',
          notesLink: `${commerceBasePath}/accountancy/${slugify('Accounting Equations')}/notes/L2.pdf`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377210/174679578632678037481/index_4.m3u8')}`,
        },
        {
          id: 'L3',
          title: 'Accounting Equations L3',
          notesLink: `${commerceBasePath}/accountancy/${slugify('Accounting Equations')}/notes/L3.pdf`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377926/174688241250748037481/index_4.m3u8')}`,
        },
        {
          id: 'L4',
          title: 'Accounting Equations L4',
          notesLink: `${commerceBasePath}/accountancy/${slugify('Accounting Equations')}/notes/L4.pdf`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4382851/174731428796208037481/index_4.m3u8')}`,
        },
        {
          id: 'L5',
          title: 'Accounting Equations L5',
          notesLink: `${commerceBasePath}/accountancy/${slugify('Accounting Equations')}/notes/L5.pdf`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4384003%2F174739986338128037481%2Findex_4.m3u8`,
        },
      ]
    }
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
    {
      name: 'Consumer Equilibrium',
      lectures: [
        {
          id: 'L1',
          title: 'Consumer Equilibrium L1',
          notesLink: `${commerceBasePath}/economics/${slugify('Consumer Equilibrium')}/notes/L1.pdf`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377326/174680634443828165220/index_4.m3u8')}`,
        },
        {
          id: 'L2',
          title: 'Consumer Equilibrium L2',
          notesLink: `${commerceBasePath}/economics/${slugify('Consumer Equilibrium')}/notes/L2.pdf`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377990/174689309671428165220/index_4.m3u8')}`,
        },
        {
          id: 'L3',
          title: 'Consumer Equilibrium L3',
          notesLink: `${commerceBasePath}/economics/${slugify('Consumer Equilibrium')}/notes/L3.pdf`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4382944/174732514667448165220/index_4.m3u8')}`,
        },
        {
          id: 'L4',
          title: 'Consumer Equilibrium L4',
          notesLink: `${commerceBasePath}/economics/${slugify('Consumer Equilibrium')}/notes/L4.pdf`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4384131%2F174741109370988165220%2Findex_4.m3u8`,
        },
        {
          id: 'L5',
          title: 'Consumer Equilibrium L5',
          notesLink: `${commerceBasePath}/economics/${slugify('Consumer Equilibrium')}/notes/L5.pdf`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4384835%2F174749801151288165220%2Findex_4.m3u8`,
        },
        {
          id: 'L6',
          title: 'Consumer Equilibrium L6',
          notesLink: `${commerceBasePath}/economics/${slugify('Consumer Equilibrium')}/notes/L6.pdf`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4389344%2F174793009659368165220%2Findex_4.m3u8`,
        },
        {
          id: 'L7',
          title: 'Consumer Equilibrium L7',
          notesLink: `${commerceBasePath}/economics/${slugify('Consumer Equilibrium')}/notes/L7.pdf`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4390977%2F174801620736918165220%2Findex_4.m3u8`,
        },
        {
          id: 'L8',
          title: 'Consumer Equilibrium L8',
          notesLink: `${commerceBasePath}/economics/${slugify('Consumer Equilibrium')}/notes/L8.pdf`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4391544%2F174810293134278165220%2Findex_4.m3u8`,
        },
      ]
    }
  ],
  'Mathematics': [
     {
      name: 'Sets',
      lectures: [
        {
          id: `L1`,
          title: `Sets L1`,
          notesLink: `https://drive.google.com/file/d/19Q6y1QGvyPJo3t87MnndIgWWiGalcT-o/preview`,
          videoLink: 'https://www.youtube.com/live/UT9CN9XFGYw?si=C1tfKB1UXHYtrmsV',
          videoEmbedType: 'youtube',
          videoEmbedUrl: 'https://www.youtube.com/embed/UT9CN9XFGYw',
        },
        {
          id: `L2`,
          title: `Sets L2`,
          notesLink: `${commerceBasePath}/mathematics/${slugify('Sets')}/notes/L2.pdf`,
          videoLink: `https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4353889/174489667533668296383/index_4.m3u8`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4353889/174489667533668296383/index_4.m3u8')}`,
        },
        {
          id: `L3`,
          title: `Sets L3`,
          notesLink: `${commerceBasePath}/mathematics/${slugify('Sets')}/notes/L3.pdf`,
          videoLink: `https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4356690/174524049345081097666/index_5.m3u8`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4356690/174524049345081097666/index_5.m3u8')}`,
        },
        {
          id: `L4`,
          title: `Sets L4`,
          notesLink: `${commerceBasePath}/mathematics/${slugify('Sets')}/notes/L4.pdf`,
          videoLink: `https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357736/174532685248651097666/index_5.m3u8`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357736/174532685248651097666/index_5.m3u8')}`,
        },
        {
          id: `L5`,
          title: `Sets L5`,
          notesLink: `${commerceBasePath}/mathematics/${slugify('Sets')}/notes/L5.pdf`,
          videoLink: `https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4359038/174542426999201097666/index_5.m3u8`,
          videoEmbedType: 'iframe',
          videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4359038/174542426999201097666/index_5.m3u8')}`,
        },
      ]
    },
    {
      name: 'Complex Numbers',
      lectures: [
        { id: 'L1', title: 'Complex Numbers L1', notesLink: `${commerceBasePath}/mathematics/${slugify('Complex Numbers')}/notes/L1.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4363249/174584513794761261798/index_4.m3u8')}` },
        { id: 'L2', title: 'Complex Numbers L2', notesLink: `${commerceBasePath}/mathematics/${slugify('Complex Numbers')}/notes/L2.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4364488/174592875146111261798/index_4.m3u8')}` },
        { id: 'L3', title: 'Complex Numbers L3', notesLink: `${commerceBasePath}/mathematics/${slugify('Complex Numbers')}/notes/L3.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4366039/174602857795961261798/index_4.m3u8')}` },
        { id: 'L4', title: 'Complex Numbers L4', notesLink: `${commerceBasePath}/mathematics/${slugify('Complex Numbers')}/notes/L4.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4367111/174610963914991261798/index_4.m3u8')}` },
        { id: 'L5', title: 'Complex Numbers L5', notesLink: `${commerceBasePath}/mathematics/${slugify('Complex Numbers')}/notes/L5.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4372190/174645001549831261798/index_4.m3u8')}` },
        { id: 'L6', title: 'Complex Numbers L6', notesLink: `${commerceBasePath}/mathematics/${slugify('Complex Numbers')}/notes/L6.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4373799/174653642467251261798/index_4.m3u8')}` },
        { id: 'L7', title: 'Complex Numbers L7', notesLink: `${commerceBasePath}/mathematics/${slugify('Complex Numbers')}/notes/L7.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4375005/174663383331301261798/index_4.m3u8')}` },
        { id: 'L8', title: 'Complex Numbers L8', notesLink: `${commerceBasePath}/mathematics/${slugify('Complex Numbers')}/notes/L8.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: '#' },
      ]
    },
    {
      name: 'Relation & Functions',
      lectures: [
        { id: 'L1', title: 'Relation & Functions L1', notesLink: `${commerceBasePath}/mathematics/${slugify('Relation & Functions')}/notes/L1.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4379033%2F174705494887511097666%2Findex_5.m3u8` },
        { id: 'L2', title: 'Relation & Functions L2', notesLink: `${commerceBasePath}/mathematics/${slugify('Relation & Functions')}/notes/L2.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4385645%2F174765739956571097666%2Findex_5.m3u8` },
        { id: 'L3', title: 'Relation & Functions L3', notesLink: `${commerceBasePath}/mathematics/${slugify('Relation & Functions')}/notes/L3.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4386945%2F174774606477081097666%2Findex_5.m3u8` },
        { id: 'L4', title: 'Relation & Functions L4', notesLink: `${commerceBasePath}/mathematics/${slugify('Relation & Functions')}/notes/L4.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4388168%2F174784321070651097666%2Findex_5.m3u8` },
        { id: 'L5', title: 'Relation & Functions L5', notesLink: `${commerceBasePath}/mathematics/${slugify('Relation & Functions')}/notes/L5.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4392734%2F174826442633201097666%2Findex_5.m3u8` },
        { id: 'L6', title: 'Relation & Functions L6', notesLink: `${commerceBasePath}/mathematics/${slugify('Relation & Functions')}/notes/L6.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4393953%2F174835206745611097666%2Findex_5.m3u8` },
        { id: 'L7', title: 'Relation & Functions L7', notesLink: `${commerceBasePath}/mathematics/${slugify('Relation & Functions')}/notes/L7.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4395110%2F174844717954831097666%2Findex_5.m3u8` },
      ]
    },
  ],
};

// Aarambh Batch Content (courseId '3')
const aarambhBasePath = '/assets/courses/aarambh';
export const aarambhCourseContent: CourseContentMap = {
  'Social Science': [
    {
      name: 'Development',
      lectures: [
        { id: 'L1', title: 'Development L1', notesLink: `${aarambhBasePath}/social-science/${slugify('Development')}/notes/L1.pdf`, videoEmbedType: 'youtube', videoEmbedUrl: 'https://www.youtube.com/embed/URGAO81IXXk' },
        { id: 'L2', title: 'Development L2', notesLink: `${aarambhBasePath}/social-science/${slugify('Development')}/notes/L2.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4352990/174481810831487880624/index_4.m3u8')}` },
        { id: 'L3', title: 'Development L3', notesLink: `${aarambhBasePath}/social-science/${slugify('Development')}/notes/L3.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354004/174490425923587880624/index_4.m3u8')}` },
        { id: 'L4', title: 'Development L4', notesLink: `${aarambhBasePath}/social-science/${slugify('Development')}/notes/L4.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4355307/174506622189247880624/index_4.m3u8')}` },
        { id: 'L5', title: 'Development L5', notesLink: `${aarambhBasePath}/social-science/${slugify('Development')}/notes/L5.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4356674/174523974370667880624/index_4.m3u8')}` },
      ]
    }
  ],
  'Science': [
    {
      name: 'Chemical Equations & Reaction',
      lectures: [
        { id: 'L1', title: 'Chemical Equations & Reaction L1', notesLink: `${aarambhBasePath}/science/${slugify('Chemical Equations & Reaction')}/notes/L1.pdf`, videoEmbedType: 'youtube', videoEmbedUrl: 'https://www.youtube.com/embed/TRS7cu_n108' },
        { id: 'L2', title: 'Chemical Equations & Reaction L2', notesLink: `${aarambhBasePath}/science/${slugify('Chemical Equations & Reaction')}/notes/L2.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4352723/174480784354101097666/index_5.m3u8')}` },
        { id: 'L3', title: 'Chemical Equations & Reaction L3', notesLink: `${aarambhBasePath}/science/${slugify('Chemical Equations & Reaction')}/notes/L3.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4353809/174489432994287880624/index_4.m3u8')}` },
        { id: 'L4', title: 'Chemical Equations & Reaction L4', notesLink: `${aarambhBasePath}/science/${slugify('Chemical Equations & Reaction')}/notes/L4.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354717/174498038229378296383/index_4.m3u8')}` },
        { id: 'L5', title: 'Chemical Equations & Reaction L5', notesLink: `${aarambhBasePath}/science/${slugify('Chemical Equations & Reaction')}/notes/L5.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4358838/174541230763428296383/index_4.m3u8')}` },
        { id: 'L6', title: 'Chemical Equations & Reaction L6', notesLink: `${aarambhBasePath}/science/${slugify('Chemical Equations & Reaction')}/notes/L6.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4359955/174549890921018296383/index_4.m3u8')}` },
        { id: 'L7', title: 'Chemical Equations & Reaction L7', notesLink: `${aarambhBasePath}/science/${slugify('Chemical Equations & Reaction')}/notes/L7.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4361147/174558535223448296383/index_4.m3u8')}` },
        { id: 'L8', title: 'Chemical Equations & Reaction L8', notesLink: `${aarambhBasePath}/science/${slugify('Chemical Equations & Reaction')}/notes/L8.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4362037/174567339728038296383/index_4.m3u8')}` },
      ]
    }
  ],
  'Mathematics': [
    {
      name: 'Real Numbers', // Changed from "R. Number" for better readability in title
      lectures: [
        { id: 'L1', title: 'Real Numbers L1', notesLink: `${aarambhBasePath}/mathematics/${slugify('R. Number')}/notes/L1.pdf`, videoEmbedType: 'youtube', videoEmbedUrl: 'https://www.youtube.com/embed/_0ooaKrdubI' },
        { id: 'L2', title: 'Real Numbers L2', notesLink: `${aarambhBasePath}/mathematics/${slugify('R. Number')}/notes/L2.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4351817/174473442715988296383/index_4.m3u8')}` },
        { id: 'L3', title: 'Real Numbers L3', notesLink: `${aarambhBasePath}/mathematics/${slugify('R. Number')}/notes/L3.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354873/174499225616481097666/index_5.m3u8')}` },
        { id: 'L4', title: 'Real Numbers L4', notesLink: `${aarambhBasePath}/mathematics/${slugify('R. Number')}/notes/L4.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4355458/174508004648941097666/index_4.m3u8')}` },
        { id: 'L5', title: 'Real Numbers L5', notesLink: `${aarambhBasePath}/mathematics/${slugify('R. Number')}/notes/L5.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4356796/174525209654081097666/index_5.m3u8')}` },
        { id: 'L6', title: 'Real Numbers L6', notesLink: `${aarambhBasePath}/mathematics/${slugify('R. Number')}/notes/L6.pdf`, videoEmbedType: 'iframe', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357843/174533856999441097666/index_5.m3u8')}` },
      ]
    }
  ],
};

