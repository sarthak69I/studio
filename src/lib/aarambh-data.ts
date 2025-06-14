// src/lib/aarambh-data.ts
import type { CourseContentMap, Lecture } from './course-data';
import { slugify } from './course-data';

const aarambhBasePath = '/assets/courses/aarambh';

export const aarambhCourseContent: CourseContentMap = {
  'Social Science': [
    {
      name: 'Development',
      lectures: [
        { id: 'L1', title: 'Development L1', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/828604674800411900.pdf`, videoEmbedType: 'youtube', videoEmbedUrl: 'https://www.youtube.com/embed/P3K2mVqgR7Y' },
        { id: 'L2', title: 'Development L2', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/499211942268668900.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4352990/174481810831487880624/index_4.m3u8' },
        { id: 'L3', title: 'Development L3', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/757785193454953700.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354004/174490425923587880624/index_4.m3u8' },
        { id: 'L4', title: 'Development L4', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/531868284639640500.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4355307/174506622189247880624/index_4.m3u8' },
        { id: 'L5', title: 'Development L5', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/588945413789555000.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4356674/174523974370667880624/index_4.m3u8' },
      ]
    },
    {
      name: 'Resources and Development',
      lectures: [
        { id: 'L1', title: 'Resources and Development L1', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/307992216764131200.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357716/174532560751637880624/index_4.m3u8' },
        { id: 'L2', title: 'Resources and Development L2', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4359018/174542319983487880624/index_4.m3u8' },
        { id: 'L3', title: 'Resources and Development L3', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4360148/174550914289447880624/index_4.m3u8' },
        { id: 'L4', title: 'Resources and Development L4', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4363238/174584423215647880624/index_4.m3u8' },
        { id: 'L5', title: 'Resources and Development L5', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4364563/174593072250617880624/index_4.m3u8' },
        { id: 'L6', title: 'Resources and Development L6', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4366034/174602805446617880624/index_4.m3u8' },
        { id: 'L7', title: 'Resources and Development L7', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4367150/174611369995057880624/index_1.m3u8' },
      ]
    },
    {
      name: 'Power Sharing',
      lectures: [
        { id: 'L1', title: 'Power Sharing L1', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4372168/174644893368577880624/index_4.m3u8' },
        { id: 'L2', title: 'Power Sharing L2', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4373745/174653484988497880624/index_4.m3u8' },
        { id: 'L3', title: 'Power Sharing L3', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4374999/174663266860947880624/index_4.m3u8' },
        { id: 'L4', title: 'Power Sharing L4', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4376187/174671890371767880624/index_4.m3u8' },
        { id: 'L5', title: 'Power Sharing L5', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4379050/174705654256247880624/index_4.m3u8' },
      ]
    },
    {
      name: 'Nationalism in Europe',
      lectures: [
        { id: 'L1', title: 'Nationalism in Europe L1', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4385660/174765773598337880624/index_4.m3u8' },
        { id: 'L2', title: 'Nationalism in Europe L2', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4386901/174774447851067880624/index_4.m3u8' },
        { id: 'L3', title: 'Nationalism in Europe L3', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4388156/174784213776117880624/index_4.m3u8' },
        { id: 'L4', title: 'Nationalism in Europe L4', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4389229/174791822718927880624/index_4.m3u8' },
        { id: 'L5', title: 'Nationalism in Europe L5', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4393945/174835110070857880624/index_4.m3u8' },
        { id: 'L6', title: 'Nationalism in Europe L6', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4395114/174844758699447880624/index_4.m3u8' },
        { id: 'L7', title: 'Nationalism in Europe L7', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4396261/174853315058577880624/index_4.m3u8' },
        { id: 'L8', title: 'Nationalism in Europe L8', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4406159/174955875139637880624/index_4.m3u8' },
        { id: 'L9', title: 'Nationalism in Europe L9', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4406366/174956988532027880624/index_4.m3u8' },
        { id: 'L10', title: 'Nationalism in Europe L10', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4407324/174964584764377880624/index_4.m3u8' },
        { id: 'L11', title: 'Nationalism in Europe L11', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4407497/174965714629147880624/index_4.m3u8' },
        { id: 'L12', title: 'Nationalism in Europe L12', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4408429/174974249991017880624/index_4.m3u8' },
        
      ]
    }
  ],
  'Science': [
    {
      name: 'Chemical Equations & Reaction',
      lectures: [
        { id: 'L1', title: 'Chemical Equations & Reaction L1', notesLink: ``, videoEmbedType: 'youtube', videoEmbedUrl: 'https://www.youtube.com/embed/nAqkO1C6Z5c' },
        { id: 'L2', title: 'Chemical Equations & Reaction L2', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4352723/174480784354101097666/index_5.m3u8' },
        { id: 'L3', title: 'Chemical Equations & Reaction L3', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4353809/174489432994287880624/index_4.m3u8' },
        { id: 'L4', title: 'Chemical Equations & Reaction L4', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354717/174498038229378296383/index_4.m3u8' },
        { id: 'L5', title: 'Chemical Equations & Reaction L5', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4358838/174541230763428296383/index_4.m3u8' },
        { id: 'L6', title: 'Chemical Equations & Reaction L6', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4359955/174549890921018296383/index_4.m3u8' },
        { id: 'L7', title: 'Chemical Equations & Reaction L7', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4361147/174558535223448296383/index_4.m3u8' },
        { id: 'L8', title: 'Chemical Equations & Reaction L8', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4362037/174567339728038296383/index_4.m3u8' },
      ]
    },
    {
      name: 'Light',
      lectures: [
        { id: 'L1', title: 'Light L1', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4365846/174601868499698296383/index_4.m3u8' },
        { id: 'L2', title: 'Light L2', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4367004/174610340159018296383/index_1.m3u8' },
        { id: 'L3', title: 'Light L3', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4368177/174619014979628296383/index_4.m3u8' },
        { id: 'L4', title: 'Light L4', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4370026/174627675448638296383/index_4.m3u8' },
        { id: 'L5', title: 'Light L5', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4374886/174662262789208296383/index_4.m3u8' },
        { id: 'L6', title: 'Light L6', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4376022/174670906343678296383/index_4.m3u8' },
        { id: 'L7', title: 'Light L7', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377192/174679471966318296383/index_1.m3u8' }
      ]
    },
    {
      name: 'Life Processes',
      lectures: [
        { id: 'L1', title: 'Life Processes L1', notesLink: `${aarambhBasePath}/science/${slugify('Life Processes')}/notes/L1.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4388022/174783092256088296383/index_4.m3u8' },
        { id: 'L2', title: 'Life Processes L2', notesLink: `${aarambhBasePath}/science/${slugify('Life Processes')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4390836/174800421277348296383/index_1.m3u8' },
        { id: 'L3', title: 'Life Processes L3', notesLink: `${aarambhBasePath}/science/${slugify('Life Processes')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4391456/174809097852338296383/index_4.m3u8' },
        { id: 'L4', title: 'Life Processes L4', notesLink: `${aarambhBasePath}/science/${slugify('Life Processes')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4394974/174843674156618296383/index_4.m3u8' },
        { id: 'L5', title: 'Life Processes L5', notesLink: `${aarambhBasePath}/science/${slugify('Life Processes')}/notes/L5.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4396153/174852339785068296383/index_1.m3u8' },
        { id: 'L6', title: 'Life Processes L6', notesLink: `${aarambhBasePath}/science/${slugify('Life Processes')}/notes/L6.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4397141/174860981887908296383/index_4.m3u8' },
        { id: 'L7', title: 'Life Processes L7', notesLink: `${aarambhBasePath}/science/${slugify('Life Processes')}/notes/L7.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4398033/174878264133148296383/index_1.m3u8' },
        { id: 'L8', title: 'Life Processes L8', notesLink: `${aarambhBasePath}/science/${slugify('Life Processes')}/notes/L7.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4408313/174973219814568296383/index_4.m3u8' },
      ]
    },
    {
      name: 'Acid base',
      lectures: [
        { id: 'L1', title: 'L1', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4409353/174981921287648296383/index_4.m3u8' },
        { id: 'L2', title: 'L2', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4410136/174990583084158296383/index_4.m3u8' },
     ]
    }
  ],
  'Mathematics': [
    {
      name: 'Real Numbers',
      lectures: [
        { id: 'L1', title: 'Real Numbers L1', notesLink: `${aarambhBasePath}/mathematics/${slugify('R. Number')}/notes/L1.pdf`, videoEmbedType: 'youtube', videoEmbedUrl: 'https://www.youtube.com/embed/2cS9g5RQ2gA' },
        { id: 'L2', title: 'Real Numbers L2', notesLink: `${aarambhBasePath}/mathematics/${slugify('R. Number')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4351817/174473442715988296383/index_4.m3u8' },
        { id: 'L3', title: 'Real Numbers L3', notesLink: `${aarambhBasePath}/mathematics/${slugify('R. Number')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354873/174499225616481097666/index_5.m3u8' },
        { id: 'L4', title: 'Real Numbers L4', notesLink: `${aarambhBasePath}/mathematics/${slugify('R. Number')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4355458/174508004648941097666/index_5.m3u8' },
        { id: 'L5', title: 'Real Numbers L5', notesLink: `${aarambhBasePath}/mathematics/${slugify('R. Number')}/notes/L5.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4356796/174525209654081097666/index_5.m3u8' },
        { id: 'L6', title: 'Real Numbers L6', notesLink: `${aarambhBasePath}/mathematics/${slugify('R. Number')}/notes/L6.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357843/174533856999441097666/index_5.m3u8' },
      ]
    },
    {
      name: 'Polynomials',
      lectures: [
        { id: 'L1', title: 'Polynomials L1', notesLink: `${aarambhBasePath}/mathematics/${slugify('Polynomials')}/notes/L1.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4361323/174559737034061097666/index_5.m3u8' },
        { id: 'L2', title: 'Polynomials L2', notesLink: `${aarambhBasePath}/mathematics/${slugify('Polynomials')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4362134/174568400490071097666/index_5.m3u8' },
        { id: 'L3', title: 'Polynomials L3', notesLink: `${aarambhBasePath}/mathematics/${slugify('Polynomials')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4363379/174585623134271097666/index_5.m3u8' },
        { id: 'L4', title: 'Polynomials L4', notesLink: `${aarambhBasePath}/mathematics/${slugify('Polynomials')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4364779/174594155534621097666/index_5.m3u8' },
        { id: 'L5', title: 'Polynomials L5', notesLink: `${aarambhBasePath}/mathematics/${slugify('Polynomials')}/notes/L5.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4368398/174620142857631097666/index_5.m3u8' },
        { id: 'L6', title: 'Polynomials L6', notesLink: `${aarambhBasePath}/mathematics/${slugify('Polynomials')}/notes/L6.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4370160/174628714218381097666/index_5.m3u8' },
      ]
    },
    {
      name: 'Linear Equations',
      lectures: [
        { id: 'L1', title: 'Linear Equations L1', notesLink: `${aarambhBasePath}/mathematics/${slugify('Linear Equations')}/notes/L1.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4372312/174646254284121097666/index_5.m3u8' },
        { id: 'L2', title: 'Linear Equations L2', notesLink: `${aarambhBasePath}/mathematics/${slugify('Linear Equations')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4373921/174654659565961097666/index_5.m3u8' },
        { id: 'L3', title: 'Linear Equations L3', notesLink: `${aarambhBasePath}/mathematics/${slugify('Linear Equations')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377325/174680602725391097666/index_5.m3u8' },
        { id: 'L4', title: 'Linear Equations L4', notesLink: `${aarambhBasePath}/mathematics/${slugify('Linear Equations')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377995/174689370672401097666/index_5.m3u8' },
        { id: 'L5', title: 'Linear Equations L5', notesLink: `${aarambhBasePath}/mathematics/${slugify('Linear Equations')}/notes/L5.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4379163/174706562215611097666/index_5.m3u8' },
        { id: 'L6', title: 'Linear Equations L6', notesLink: `${aarambhBasePath}/mathematics/${slugify('Linear Equations')}/notes/L6.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4384128/174741081479871097666/index_5.m3u8' },
        { id: 'L7', title: 'Linear Equations L7', notesLink: `${aarambhBasePath}/mathematics/${slugify('Linear Equations')}/notes/L7.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4384834/174749789730281097666/index_5.m3u8' },
        { id: 'L8', title: 'Linear Equations L8', notesLink: `${aarambhBasePath}/mathematics/${slugify('Linear Equations')}/notes/L8.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4385006/174758500568421097666/index_5.m3u8' },
      ]
    },
    {
      name: 'Trigonometry',
      lectures: [
        { id: 'L1', title: 'Trigonometry L1', notesLink: `${aarambhBasePath}/mathematics/${slugify('Trigonometry')}/notes/L1.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4385837/174766945772321097666/index_5.m3u8' },
        { id: 'L2', title: 'Trigonometry L2', notesLink: `${aarambhBasePath}/mathematics/${slugify('Trigonometry')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4387086/174775745330681097666/index_5.m3u8' },
        { id: 'L3', title: 'Trigonometry L3', notesLink: `${aarambhBasePath}/mathematics/${slugify('Trigonometry')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4390972/174801504255421097666/index_5.m3u8' },
        { id: 'L4', title: 'Trigonometry L4', notesLink: `${aarambhBasePath}/mathematics/${slugify('Trigonometry')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4391537/174810128337891097666/index_5.m3u8' },
        { id: 'L5', title: 'Trigonometry L5', notesLink: `${aarambhBasePath}/mathematics/${slugify('Trigonometry')}/notes/L5.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4391700/174818000698001097666/index_5.m3u8' },
        { id: 'L6', title: 'Trigonometry L6', notesLink: `${aarambhBasePath}/mathematics/${slugify('Trigonometry')}/notes/L6.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4392906/174827565494671097666/index_5.m3u8' },
        { id: 'L7', title: 'Trigonometry L7', notesLink: `${aarambhBasePath}/mathematics/${slugify('Trigonometry')}/notes/L7.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4394019/174836153096901097666/index_5.m3u8' },
        { id: 'L8', title: 'Trigonometry L8', notesLink: `${aarambhBasePath}/mathematics/${slugify('Trigonometry')}/notes/L8.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4397236/174861941652361097666/index_5.m3u8' },
      ]
    },  
    {
      name: 'Some Application of Trigonometry',
      lectures: [
        { id: 'L1', title: 'Some Application of Trigonometry L1', notesLink: `${aarambhBasePath}/mathematics/${slugify('SomeApplicationofTrigonometry')}/notes/L1.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4409472/174982914345591097666/index_5.m3u8' },
        { id: 'L2', title: 'Some Application of Trigonometry L2', notesLink: `${aarambhBasePath}/mathematics/${slugify('SomeApplicationofTrigonometry')}/notes/L1.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4410213/174991601648451097666/index_5.m3u8' },
      ]
    }
  ],
};  
