// src/lib/aarambh-data.ts
import type { CourseContentMap, Lecture } from './course-data';
import { slugify } from './course-data';

const aarambhBasePath = '/assets/courses/aarambh';

export const aarambhCourseContent: CourseContentMap = {
  'Social Science': [
    {
      name: 'Development',
      lectures: [
        { id: 'L1', title: 'Development L1', notesLink: `${aarambhBasePath}/social-science/${slugify('Development')}/notes/L1.pdf`, videoEmbedType: 'youtube', videoEmbedUrl: 'https://www.youtube.com/embed/P3K2mVqgR7Y' },
        { id: 'L2', title: 'Development L2', notesLink: `${aarambhBasePath}/social-science/${slugify('Development')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L3', title: 'Development L3', notesLink: `${aarambhBasePath}/social-science/${slugify('Development')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L4', title: 'Development L4', notesLink: `${aarambhBasePath}/social-science/${slugify('Development')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L5', title: 'Development L5', notesLink: `${aarambhBasePath}/social-science/${slugify('Development')}/notes/L5.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
      ]
    },
    {
      name: 'Resources and Development',
      lectures: [
        { id: 'L1', title: 'Resources and Development L1', notesLink: `${aarambhBasePath}/social-science/${slugify('Resources and Development')}/notes/L1.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L2', title: 'Resources and Development L2', notesLink: `${aarambhBasePath}/social-science/${slugify('Resources and Development')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L3', title: 'Resources and Development L3', notesLink: `${aarambhBasePath}/social-science/${slugify('Resources and Development')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L4', title: 'Resources and Development L4', notesLink: `${aarambhBasePath}/social-science/${slugify('Resources and Development')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L5', title: 'Resources and Development L5', notesLink: `${aarambhBasePath}/social-science/${slugify('Resources and Development')}/notes/L5.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L6', title: 'Resources and Development L6', notesLink: `${aarambhBasePath}/social-science/${slugify('Resources and Development')}/notes/L6.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L7', title: 'Resources and Development L7', notesLink: `${aarambhBasePath}/social-science/${slugify('Resources and Development')}/notes/L7.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
      ]
    },
    {
      name: 'Power Sharing',
      lectures: [
        { id: 'L1', title: 'Power Sharing L1', notesLink: `${aarambhBasePath}/social-science/${slugify('Power Sharing')}/notes/L1.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L2', title: 'Power Sharing L2', notesLink: `${aarambhBasePath}/social-science/${slugify('Power Sharing')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L3', title: 'Power Sharing L3', notesLink: `${aarambhBasePath}/social-science/${slugify('Power Sharing')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L4', title: 'Power Sharing L4', notesLink: `${aarambhBasePath}/social-science/${slugify('Power Sharing')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L5', title: 'Power Sharing L5', notesLink: `${aarambhBasePath}/social-science/${slugify('Power Sharing')}/notes/L5.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
      ]
    },
    {
      name: 'Nationalism in Europe',
      lectures: [
        { id: 'L1', title: 'Nationalism in Europe L1', notesLink: `${aarambhBasePath}/social-science/${slugify('Nationalism in Europe')}/notes/L1.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L2', title: 'Nationalism in Europe L2', notesLink: `${aarambhBasePath}/social-science/${slugify('Nationalism in Europe')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L3', title: 'Nationalism in Europe L3', notesLink: `${aarambhBasePath}/social-science/${slugify('Nationalism in Europe')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L4', title: 'Nationalism in Europe L4', notesLink: `${aarambhBasePath}/social-science/${slugify('Nationalism in Europe')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L5', title: 'Nationalism in Europe L5', notesLink: `${aarambhBasePath}/social-science/${slugify('Nationalism in Europe')}/notes/L5.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L6', title: 'Nationalism in Europe L6', notesLink: `${aarambhBasePath}/social-science/${slugify('Nationalism in Europe')}/notes/L6.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L7', title: 'Nationalism in Europe L7', notesLink: `${aarambhBasePath}/social-science/${slugify('Nationalism in Europe')}/notes/L7.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L8', title: 'Nationalism in Europe L8', notesLink: `${aarambhBasePath}/social-science/${slugify('Nationalism in Europe')}/notes/L8.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4406159/174955875139637880624/index_4.m3u8' },
        { id: 'L9', title: 'Nationalism in Europe L9', notesLink: `${aarambhBasePath}/social-science/${slugify('Nationalism in Europe')}/notes/L9.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4406366/174956988532027880624/index_4.m3u8' },
      ]
    }
  ],
  'Science': [
    {
      name: 'Chemical Equations & Reaction',
      lectures: [
        { id: 'L1', title: 'Chemical Equations & Reaction L1', notesLink: `${aarambhBasePath}/science/${slugify('Chemical Equations & Reaction')}/notes/L1.pdf`, videoEmbedType: 'youtube', videoEmbedUrl: 'https://www.youtube.com/embed/nAqkO1C6Z5c' },
        { id: 'L2', title: 'Chemical Equations & Reaction L2', notesLink: `${aarambhBasePath}/science/${slugify('Chemical Equations & Reaction')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L3', title: 'Chemical Equations & Reaction L3', notesLink: `${aarambhBasePath}/science/${slugify('Chemical Equations & Reaction')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L4', title: 'Chemical Equations & Reaction L4', notesLink: `${aarambhBasePath}/science/${slugify('Chemical Equations & Reaction')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L5', title: 'Chemical Equations & Reaction L5', notesLink: `${aarambhBasePath}/science/${slugify('Chemical Equations & Reaction')}/notes/L5.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L6', title: 'Chemical Equations & Reaction L6', notesLink: `${aarambhBasePath}/science/${slugify('Chemical Equations & Reaction')}/notes/L6.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L7', title: 'Chemical Equations & Reaction L7', notesLink: `${aarambhBasePath}/science/${slugify('Chemical Equations & Reaction')}/notes/L7.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L8', title: 'Chemical Equations & Reaction L8', notesLink: `${aarambhBasePath}/science/${slugify('Chemical Equations & Reaction')}/notes/L8.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
      ]
    },
    {
      name: 'Light',
      lectures: [
        { id: 'L1', title: 'Light L1', notesLink: `${aarambhBasePath}/science/${slugify('Light')}/notes/L1.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L2', title: 'Light L2', notesLink: `${aarambhBasePath}/science/${slugify('Light')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L3', title: 'Light L3', notesLink: `${aarambhBasePath}/science/${slugify('Light')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L4', title: 'Light L4', notesLink: `${aarambhBasePath}/science/${slugify('Light')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L5', title: 'Light L5', notesLink: `${aarambhBasePath}/science/${slugify('Light')}/notes/L5.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L6', title: 'Light L6', notesLink: `${aarambhBasePath}/science/${slugify('Light')}/notes/L6.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L7', title: 'Light L7', notesLink: `${aarambhBasePath}/science/${slugify('Light')}/notes/L7.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' }
      ]
    },
    {
      name: 'Life Processes',
      lectures: [
        { id: 'L1', title: 'Life Processes L1', notesLink: `${aarambhBasePath}/science/${slugify('Life Processes')}/notes/L1.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4388022/174783092256088296383/index_4.m3u8' },
        { id: 'L2', title: 'Life Processes L2', notesLink: `${aarambhBasePath}/science/${slugify('Life Processes')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4390836/174800421277348296383/index_4.m3u8' },
        { id: 'L3', title: 'Life Processes L3', notesLink: `${aarambhBasePath}/science/${slugify('Life Processes')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4391456/174809097852338296383/index_4.m3u8' },
        { id: 'L4', title: 'Life Processes L4', notesLink: `${aarambhBasePath}/science/${slugify('Life Processes')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4394974/174843674156618296383/index_4.m3u8' },
        { id: 'L5', title: 'Life Processes L5', notesLink: `${aarambhBasePath}/science/${slugify('Life Processes')}/notes/L5.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4396153/174852339785068296383/index_4.m3u8' },
        { id: 'L6', title: 'Life Processes L6', notesLink: `${aarambhBasePath}/science/${slugify('Life Processes')}/notes/L6.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4397141/174860981887908296383/index_4.m3u8' },
        { id: 'L7', title: 'Life Processes L7', notesLink: `${aarambhBasePath}/science/${slugify('Life Processes')}/notes/L7.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4398033/174878264133148296383/index_4.m3u8' },
      ]
    }
  ],
  'Mathematics': [
    {
      name: 'Real Numbers',
      lectures: [
        { id: 'L1', title: 'Real Numbers L1', notesLink: `${aarambhBasePath}/mathematics/${slugify('R. Number')}/notes/L1.pdf`, videoEmbedType: 'youtube', videoEmbedUrl: 'https://www.youtube.com/embed/2cS9g5RQ2gA' },
        { id: 'L2', title: 'Real Numbers L2', notesLink: `${aarambhBasePath}/mathematics/${slugify('R. Number')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L3', title: 'Real Numbers L3', notesLink: `${aarambhBasePath}/mathematics/${slugify('R. Number')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L4', title: 'Real Numbers L4', notesLink: `${aarambhBasePath}/mathematics/${slugify('R. Number')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L5', title: 'Real Numbers L5', notesLink: `${aarambhBasePath}/mathematics/${slugify('R. Number')}/notes/L5.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L6', title: 'Real Numbers L6', notesLink: `${aarambhBasePath}/mathematics/${slugify('R. Number')}/notes/L6.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
      ]
    },
    {
      name: 'Polynomials',
      lectures: [
        { id: 'L1', title: 'Polynomials L1', notesLink: `${aarambhBasePath}/mathematics/${slugify('Polynomials')}/notes/L1.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L2', title: 'Polynomials L2', notesLink: `${aarambhBasePath}/mathematics/${slugify('Polynomials')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L3', title: 'Polynomials L3', notesLink: `${aarambhBasePath}/mathematics/${slugify('Polynomials')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L4', title: 'Polynomials L4', notesLink: `${aarambhBasePath}/mathematics/${slugify('Polynomials')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L5', title: 'Polynomials L5', notesLink: `${aarambhBasePath}/mathematics/${slugify('Polynomials')}/notes/L5.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L6', title: 'Polynomials L6', notesLink: `${aarambhBasePath}/mathematics/${slugify('Polynomials')}/notes/L6.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
      ]
    },
    {
      name: 'Linear Equations',
      lectures: [
        { id: 'L1', title: 'Linear Equations L1', notesLink: `${aarambhBasePath}/mathematics/${slugify('Linear Equations')}/notes/L1.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L2', title: 'Linear Equations L2', notesLink: `${aarambhBasePath}/mathematics/${slugify('Linear Equations')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L3', title: 'Linear Equations L3', notesLink: `${aarambhBasePath}/mathematics/${slugify('Linear Equations')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L4', title: 'Linear Equations L4', notesLink: `${aarambhBasePath}/mathematics/${slugify('Linear Equations')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L5', title: 'Linear Equations L5', notesLink: `${aarambhBasePath}/mathematics/${slugify('Linear Equations')}/notes/L5.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L6', title: 'Linear Equations L6', notesLink: `${aarambhBasePath}/mathematics/${slugify('Linear Equations')}/notes/L6.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L7', title: 'Linear Equations L7', notesLink: `${aarambhBasePath}/mathematics/${slugify('Linear Equations')}/notes/L7.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L8', title: 'Linear Equations L8', notesLink: `${aarambhBasePath}/mathematics/${slugify('Linear Equations')}/notes/L8.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
      ]
    },
    {
      name: 'Trigonometry',
      lectures: [
        { id: 'L1', title: 'Trigonometry L1', notesLink: `${aarambhBasePath}/mathematics/${slugify('Trigonometry')}/notes/L1.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L2', title: 'Trigonometry L2', notesLink: `${aarambhBasePath}/mathematics/${slugify('Trigonometry')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L3', title: 'Trigonometry L3', notesLink: `${aarambhBasePath}/mathematics/${slugify('Trigonometry')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L4', title: 'Trigonometry L4', notesLink: `${aarambhBasePath}/mathematics/${slugify('Trigonometry')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L5', title: 'Trigonometry L5', notesLink: `${aarambhBasePath}/mathematics/${slugify('Trigonometry')}/notes/L5.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L6', title: 'Trigonometry L6', notesLink: `${aarambhBasePath}/mathematics/${slugify('Trigonometry')}/notes/L6.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L7', title: 'Trigonometry L7', notesLink: `${aarambhBasePath}/mathematics/${slugify('Trigonometry')}/notes/L7.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
        { id: 'L8', title: 'Trigonometry L8', notesLink: `${aarambhBasePath}/mathematics/${slugify('Trigonometry')}/notes/L8.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4273722/174501167442350322551/index_4.m3u8' },
      ]
    }
  ],
};  
