// src/lib/aarambh-data.ts
import type { CourseContentMap, Lecture } from './course-data';
import { slugify } from './course-data';

const aarambhBasePath = '/assets/courses/aarambh'; // This path isn't used if notes/videos are #

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
        { id: 'L2', title: 'Resources and Development L2', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4359018/174542319983487880624/index_4.m3u8' },
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
        { id: 'L1', title: 'Chemical Equations & Reaction L1', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/545509967460020400.pdf`, videoEmbedType: 'youtube', videoEmbedUrl: 'https://www.youtube.com/embed/TRS7cu_n108' },
        { id: 'L2', title: 'Chemical Equations & Reaction L2', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/92623582258554050.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4352723/174480784354101097666/index_5.m3u8' },
        { id: 'L3', title: 'Chemical Equations & Reaction L3', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/467570420184705540.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4353809/174489432994287880624/index_4.m3u8' },
        { id: 'L4', title: 'Chemical Equations & Reaction L4', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/508994911186986560.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354717/174498038229378296383/index_4.m3u8' },
        { id: 'L5', title: 'Chemical Equations & Reaction L5', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/812608998691140200.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4358838/174541230763428296383/index_4.m3u8' },
        { id: 'L6', title: 'Chemical Equations & Reaction L6', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/692200381751812900.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4359955/174549890921018296383/index_4.m3u8' },
        { id: 'L7', title: 'Chemical Equations & Reaction L7', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/635590807317661200.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4361147/174558535223448296383/index_4.m3u8' },
        { id: 'L8', title: 'Chemical Equations & Reaction L8', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/214143229364161280.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4362037/174567339728038296383/index_4.m3u8' },
      ]
    },
    {
      name: 'Light',
      lectures: [
        { id: 'L1', title: 'Light L1', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/186368098857000600.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4365846/174601868499698296383/index_4.m3u8' },
        { id: 'L2', title: 'Light L2', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/893692154902404400.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4367004/174610340159018296383/index_1.m3u8' },
        { id: 'L3', title: 'Light L3', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/201395451636924200.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4368177/174619014979628296383/index_4.m3u8' },
        { id: 'L4', title: 'Light L4', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/568390841661464500.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4370026/174627675448638296383/index_4.m3u8' },
        { id: 'L5', title: 'Light L5', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/855806543563515300.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4374886/174662262789208296383/index_4.m3u8' },
        { id: 'L6', title: 'Light L6', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/355378778094591700.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4376022/174670906343678296383/index_4.m3u8' },
        { id: 'L7', title: 'Light L7', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/303485460972520450.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377192/174679471966318296383/index_1.m3u8' }
      ]
    },
    {
      name: 'Life Processes',
      lectures: [
        { id: 'L1', title: 'Life Processes L1', notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/6890481Life%20processes%20L1%20.pdf_Life%20processes%20L1%20.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4388022/174783092256088296383/index_4.m3u8' },
        { id: 'L2', title: 'Life Processes L2', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/724154521085075300.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4390836/174800421277348296383/index_1.m3u8' },
        { id: 'L3', title: 'Life Processes L3', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/267617359518906460.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4391456/174809097852338296383/index_4.m3u8' },
        { id: 'L4', title: 'Life Processes L4', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/876755939862598500.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4394974/174843674156618296383/index_4.m3u8' },
        { id: 'L5', title: 'Life Processes L5', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/484055330645166900.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4396153/174852339785068296383/index_1.m3u8' },
        { id: 'L6', title: 'Life Processes L6', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/804932073729499100.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4397141/174860981887908296383/index_4.m3u8' },
        { id: 'L7', title: 'Life Processes L7', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/741214109704298900.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4398033/174878264133148296383/index_1.m3u8' },
        { id: 'L8', title: 'Life Processes L8', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4408313/174973219814568296383/index_4.m3u8' },
      ]
    },
    {
      name: 'Acid bases and salts',
      lectures: [
        { id: 'acid bases and salts L1', title: 'L1', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4409353/174981921287648296383/index_4.m3u8' },
        { id: 'acid bases and salts L2', title: 'L2', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4410136/174990583084158296383/index_4.m3u8' },
     ]
    }
  ],
  'Mathematics': [
    {
      name: 'Real Numbers',
      lectures: [
        { id: 'L1', title: 'Real Numbers L1', notesLink: `https://drive.google.com/file/d/1WBeW1CFXzY8b0n0URfVFGCMH6w12etYf/view?usp=sharing`, videoEmbedType: 'youtube', videoEmbedUrl: 'https://www.youtube.com/embed/2cS9g5RQ2gA' },
        { id: 'L2', title: 'Real Numbers L2', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/22420916723093830.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4351817/174473442715988296383/index_4.m3u8' },
        { id: 'L3', title: 'Real Numbers L3', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/440507540857891140.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354873/174499225616481097666/index_5.m3u8' },
        { id: 'L4', title: 'Real Numbers L4', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/805714130200073600.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4355458/174508004648941097666/index_5.m3u8' },
        { id: 'L5', title: 'Real Numbers L5', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/187284260099181220.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4356796/174525209654081097666/index_5.m3u8' },
        { id: 'L6', title: 'Real Numbers L6', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/601835403370027400.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357843/174533856999441097666/index_5.m3u8' },
      ]
    },
    {
      name: 'Polynomials',
      lectures: [
        { id: 'L1', title: 'Polynomials L1', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/461049038359672400.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4361323/174559737034061097666/index_5.m3u8' },
        { id: 'L2', title: 'Polynomials L2', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/454067914091926400.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4362134/174568400490071097666/index_5.m3u8' },
        { id: 'L3', title: 'Polynomials L3', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/646208147845606100.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4363379/174585623134271097666/index_5.m3u8' },
        { id: 'L4', title: 'Polynomials L4', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/555085639820711100.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4364779/174594155534621097666/index_5.m3u8' },
        { id: 'L5', title: 'Polynomials L5', notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/5742474Polynomials%20L5%20Aarambh%202026.pdf_Polynomials%20L5%20Aarambh%202026.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4368398/174620142857631097666/index_5.m3u8' },
        { id: 'L6', title: 'Polynomials L6', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/196833841022277150.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4370160/174628714218381097666/index_5.m3u8' },
      ]
    },
    {
      name: 'Linear Equations',
      lectures: [
        { id: 'L1', title: 'Linear Equations L1', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/459536335122701630.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4372312/174646254284121097666/index_5.m3u8' },
        { id: 'L2', title: 'Linear Equations L2', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/465914747232059840.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4373921/174654659565961097666/index_5.m3u8' },
        { id: 'L3', title: 'Linear Equations L3', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/17291855924611054.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377325/174680602725391097666/index_5.m3u8' },
        { id: 'L4', title: 'Linear Equations L4', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/517673026874348160.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377995/174689370672401097666/index_5.m3u8' },
        { id: 'L5', title: 'Linear Equations L5', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/198061429911618270.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4379163/174706562215611097666/index_5.m3u8' },
        { id: 'L6', title: 'Linear Equations L6', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/527607373820262850.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4384128/174741081479871097666/index_5.m3u8' },
        { id: 'L7', title: 'Linear Equations L7', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/775070612422014800.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4384834/174749789730281097666/index_5.m3u8' },
        { id: 'L8', title: 'Linear Equations L8', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/639498005252691500.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4385006/174758500568421097666/index_5.m3u8' },
      ]
    },
    {
      name: 'Trigonometry',
      lectures: [
        { id: 'L1', title: 'Trigonometry L1', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/271433073064721400.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4385837/174766945772321097666/index_5.m3u8' },
        { id: 'L2', title: 'Trigonometry L2', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/734221331851364500.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4387086/174775745330681097666/index_5.m3u8' },
        { id: 'L3', title: 'Trigonometry L3', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/808796890763276000.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4390972/174801504255421097666/index_5.m3u8' },
        { id: 'L4', title: 'Trigonometry L4', notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/1042673Trignometry%20L4.pdf_Trignometry%20L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4391537/174810128337891097666/index_5.m3u8' },
        { id: 'L5', title: 'Trigonometry L5', notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/6598812Trignometry%20L5.pdf_Trignometry%20L5.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4391700/174818000698001097666/index_5.m3u8' },
        { id: 'L6', title: 'Trigonometry L6', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/846209721527154400.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4392906/174827565494671097666/index_5.m3u8' },
        { id: 'L7', title: 'Trigonometry L7', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/57814913196021350.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4394019/174836153096901097666/index_5.m3u8' },
        { id: 'L8', title: 'Trigonometry L8', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/447306842114246300.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4397236/174861941652361097666/index_5.m3u8' },
      ]
    },  
    {
      name: 'Some Application of Trigonometry',
      lectures: [
        { id: 'L1', title: 'Some Application of Trigonometry L1', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4409472/174982914345591097666/index_5.m3u8' },
        { id: 'L2', title: 'Some Application of Trigonometry L2', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4410213/174991601648451097666/index_5.m3u8' },

      
      ]
    }
  ],
  'English': [
    {
      name: 'Letter To God ',
      lectures: [
        { id: 'l1', title: 'Letter To God 1', notesLink: '', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4355437/1745094964_5789358984187695/sunny/1745075625242_69087200894049560_video_VOD720p30.m3u8' },
        { id: 'l2', title: 'Letter To God 2', notesLink: '', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4355438/1745092805_3842501733043505/sunny/1745075729856_273253030448162560_video_VOD720p30.m3u8' },
      ]
    },
    {
      name: 'Dust Of Snow',
      lectures: [
        { id: 'l1', title: 'Dust Of Snow 1', notesLink: '', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4362883/1745829064_8896744564209427/sunny/1745823405144_213803673785664260_video_VOD720p30.m3u8' },
        { id: 'l2', title: 'Dust Of Snow 2', notesLink: '', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4362884/1745829304_9832761018325665/sunny/1745823991438_632000197320964000_video_VOD720p30.m3u8' },
      ]
    },
    {
      name: 'Fire & Ice',
      lectures: [
        { id: 'l1', title: 'Fire & Ice 1', notesLink: '', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4367124/1746114124_9255773397148498/sunny/1746110633800_95893697207908130_video_VOD720p30.m3u8' },
        { id: 'l2', title: 'Fire & Ice 2', notesLink: '', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4367125/1746114604_3028472308291210/sunny/1746110727065_699236270267016600_video_VOD720p30.m3u8' },
      ]
    },
    {
      name: ' Poetic Devices',
      lectures: [
        { id: 'l1', title: ' Poetic Devices 1', notesLink: '', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4355433/1745094005_5545466457120453/sunny/1745074688660_697469926988172200_video_VOD720p30.m3u8' },
        { id: 'l2', title: ' Poetic Devices 2', notesLink: '', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4355436/1745094844_9240190758365079/sunny/1745075412050_483337412598451650_video_VOD720p30.m3u8' },
      ]
    },
    {
      name: 'A Triumph of Surgery',
      lectures: [
        { id: 'l1', title: 'A Triumph of Surgery 1', notesLink: '', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4378115/1747004104_5093798446180655/sunny/1746963761393_790760791059125000_video_VOD720p30.m3u8' },
        { id: 'l2', title: 'A Triumph of Surgery 2', notesLink: '', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4378116/1747003684_6295147578406091/sunny/1746963929440_149734756542958400_video_VOD720p30.m3u8' },
       ]
    }
  ],
};