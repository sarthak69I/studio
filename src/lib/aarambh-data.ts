
// src/lib/aarambh-data.ts
import type { CourseContentMap, Lecture } from './course-data'; // Keep existing import for Lecture if it's defined there
import { slugify } from './course-data'; // Keep existing import for slugify

const aarambhBasePath = '/assets/courses/aarambh';

const generateAarambhLectures = (topicName: string, count: number, subjectSlug: string, topicSlugOverride?: string): Lecture[] => {
  const lectures: Lecture[] = [];
  const actualTopicSlug = topicSlugOverride || slugify(topicName);
  for (let i = 1; i <= count; i++) {
    lectures.push({
      id: `L${i}`,
      title: `${topicName} L${i}`,
      notesLink: `${aarambhBasePath}/${subjectSlug}/${actualTopicSlug}/notes/L${i}.pdf`,
      videoEmbedType: 'youtube',
      videoEmbedUrl: '#',
    });
  }
  return lectures;
};

export const aarambhCourseContent: CourseContentMap = {
  'Social Science': [
    {
      name: 'Development',
      lectures: [
        { id: 'L1', title: 'Development L1', notesLink: `${aarambhBasePath}/social-science/${slugify('Development')}/notes/L1.pdf`, videoEmbedType: 'youtube', videoEmbedUrl: 'https://www.youtube.com/embed/URGAO81IXXk' },
        { id: 'L2', title: 'Development L2', notesLink: `${aarambhBasePath}/social-science/${slugify('Development')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4352990/174481810831487880624/index_4.m3u8' },
        { id: 'L3', title: 'Development L3', notesLink: `${aarambhBasePath}/social-science/${slugify('Development')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354004/174490425923587880624/index_4.m3u8' },
        { id: 'L4', title: 'Development L4', notesLink: `${aarambhBasePath}/social-science/${slugify('Development')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4355307/174506622189247880624/index_4.m3u8' },
        { id: 'L5', title: 'Development L5', notesLink: `${aarambhBasePath}/social-science/${slugify('Development')}/notes/L5.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4356674/174523974370667880624/index_4.m3u8' },
      ]
    },
    {
      name: 'Resources and Development',
      lectures: generateAarambhLectures('Resources and Development', 7, 'social-science', slugify('Resources and Development'))
    },
    {
      name: 'Power Sharing',
      lectures: generateAarambhLectures('Power Sharing', 5, 'social-science', slugify('Power Sharing'))
    },
    {
      name: 'Nationalism in Europe',
      lectures: generateAarambhLectures('Nationalism in Europe', 8, 'social-science', slugify('Nationalism in Europe'))
    }
  ],
  'Science': [
    {
      name: 'Chemical Equations & Reaction',
      lectures: [
        { id: 'L1', title: 'Chemical Equations & Reaction L1', notesLink: `${aarambhBasePath}/science/${slugify('Chemical Equations & Reaction')}/notes/L1.pdf`, videoEmbedType: 'youtube', videoEmbedUrl: 'https://www.youtube.com/embed/TRS7cu_n108' },
        { id: 'L2', title: 'Chemical Equations & Reaction L2', notesLink: `${aarambhBasePath}/science/${slugify('Chemical Equations & Reaction')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4352723/174480784354101097666/index_5.m3u8' },
        { id: 'L3', title: 'Chemical Equations & Reaction L3', notesLink: `${aarambhBasePath}/science/${slugify('Chemical Equations & Reaction')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4353809/174489432994287880624/index_4.m3u8' },
        { id: 'L4', title: 'Chemical Equations & Reaction L4', notesLink: `${aarambhBasePath}/science/${slugify('Chemical Equations & Reaction')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354717/174498038229378296383/index_4.m3u8' },
        { id: 'L5', title: 'Chemical Equations & Reaction L5', notesLink: `${aarambhBasePath}/science/${slugify('Chemical Equations & Reaction')}/notes/L5.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4358838/174541230763428296383/index_4.m3u8' },
        { id: 'L6', title: 'Chemical Equations & Reaction L6', notesLink: `${aarambhBasePath}/science/${slugify('Chemical Equations & Reaction')}/notes/L6.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4359955/174549890921018296383/index_4.m3u8' },
        { id: 'L7', title: 'Chemical Equations & Reaction L7', notesLink: `${aarambhBasePath}/science/${slugify('Chemical Equations & Reaction')}/notes/L7.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4361147/174558535223448296383/index_4.m3u8' },
        { id: 'L8', title: 'Chemical Equations & Reaction L8', notesLink: `${aarambhBasePath}/science/${slugify('Chemical Equations & Reaction')}/notes/L8.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4362037/174567339728038296383/index_4.m3u8' },
      ]
    },
    {
      name: 'Light',
      lectures: [
        { id: 'L1', title: 'Light L1', notesLink: `${aarambhBasePath}/science/${slugify('Light')}/notes/L1.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4365846/174601868499698296383/index_4.m3u8' },
        { id: 'L2', title: 'Light L2', notesLink: `${aarambhBasePath}/science/${slugify('Light')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4367004/174610340159018296383/index_4.m3u8' },
        { id: 'L3', title: 'Light L3', notesLink: `${aarambhBasePath}/science/${slugify('Light')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4368177/174619014979628296383/index_4.m3u8' },
        { id: 'L4', title: 'Light L4', notesLink: `${aarambhBasePath}/science/${slugify('Light')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4370026/174627675448638296383/index_4.m3u8' },
        { id: 'L5', title: 'Light L5', notesLink: `${aarambhBasePath}/science/${slugify('Light')}/notes/L5.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4374886/174662262789208296383/index_4.m3u8' },
        { id: 'L6', title: 'Light L6', notesLink: `${aarambhBasePath}/science/${slugify('Light')}/notes/L6.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4376022/174670906343678296383/index_4.m3u8' },
        { id: 'L7', title: 'Light L7', notesLink: `${aarambhBasePath}/science/${slugify('Light')}/notes/L7.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377192/174679471966318296383/index_4.m3u8' },
        { id: 'L8', title: 'Light L8', notesLink: `${aarambhBasePath}/science/${slugify('Light')}/notes/L8.pdf`, videoEmbedType: 'youtube', videoEmbedUrl: '#' }, // L8 remains placeholder
      ]
    },
    {
      name: 'Life Processes',
      lectures: generateAarambhLectures('Life Processes', 7, 'science', slugify('Life Processes'))
    }
  ],
  'Mathematics': [
    {
      name: 'Real Numbers',
      lectures: [
        { id: 'L1', title: 'Real Numbers L1', notesLink: `${aarambhBasePath}/mathematics/${slugify('R. Number')}/notes/L1.pdf`, videoEmbedType: 'youtube', videoEmbedUrl: 'https://www.youtube.com/embed/_0ooaKrdubI' },
        { id: 'L2', title: 'Real Numbers L2', notesLink: `${aarambhBasePath}/mathematics/${slugify('R. Number')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4351817/174473442715988296383/index_4.m3u8' },
        { id: 'L3', title: 'Real Numbers L3', notesLink: `${aarambhBasePath}/mathematics/${slugify('R. Number')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354873/174499225616481097666/index_5.m3u8' },
        { id: 'L4', title: 'Real Numbers L4', notesLink: `${aarambhBasePath}/mathematics/${slugify('R. Number')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4355458/174508004648941097666/index_4.m3u8' },
        { id: 'L5', title: 'Real Numbers L5', notesLink: `${aarambhBasePath}/mathematics/${slugify('R. Number')}/notes/L5.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4356796/174525209654081097666/index_5.m3u8' },
        { id: 'L6', title: 'Real Numbers L6', notesLink: `${aarambhBasePath}/mathematics/${slugify('R. Number')}/notes/L6.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357843/174533856999441097666/index_5.m3u8' },
      ]
    },
    {
      name: 'Polynomials',
      lectures: generateAarambhLectures('Polynomials', 6, 'mathematics')
    },
    {
      name: 'Linear Equations',
      lectures: generateAarambhLectures('Linear Equations', 8, 'mathematics', slugify('Linear Equations'))
    },
    {
      name: 'Trigonometry',
      lectures: generateAarambhLectures('Trigonometry', 8, 'mathematics')
    }
  ],
};

    