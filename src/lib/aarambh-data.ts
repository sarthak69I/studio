
// src/lib/aarambh-data.ts
import type { CourseContentMap, Lecture } from './course-utils';

const itTopicsForClass10: CourseContentMap['IT'] = [
  {
    name: "IT Introduction",
    lectures: [
      {
        id: "L1-10-overview",
        title: " IT Introduction",
        videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4391689/1748179024_7031915392041686/sunny/1748178845599_206479182859561570_video_VOD720p30.m3u8",
        videoEmbedType: 'hls'
      }
    ]
  },
  {
    name: "Self Management Skills ",
    lectures: [
      {
        id: "L4-10-self-manage-1",
        title: "Self Management - L1",
        videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4398521/1748854506_5390971521172609/sunny/1748854163810_864208687017221800_video_VOD240p30.m3u8",
        notesLink: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/457804754758249150.pdf",
        videoEmbedType: 'hls'
      },
      {
        id: "L5-10-self-manage-2",
        title: "Self Management - L2",
        videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4403234/1749235686_9677591978611161/sunny/1749222454456_458018247581363900_video_VOD240p30.m3u8",
        notesLink: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/213342896416311230.pdf",
        videoEmbedType: 'hls'
      },
      {
        id: "L6-10-self-manage-3",
        title: "Self Management - L3",
        videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4407914/1749716886_4348816412982957/sunny/1749715114047_253963182532671500_video_VOD240p30.m3u8",
        notesLink: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/281091779602602940.pdf",
        videoEmbedType: 'hls'
   }
    ]
  },
  {
    name: "ICT skills ",
    lectures: [
      {
        id: "L4-10-ICT-1",
        title: "ICT - L1",
        videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4416821/1750610588_7356891290512226/sunny/1750609670522_238726866250974340_video_VOD240p30.m3u8",
        notesLink: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/634952483282327800.pdf",
        videoEmbedType: 'hls'
      },
      {
        id: "L5-10-ICT-2",
        title: "ICT - L2",
        videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4421355/1751013424_1006471762343893/sunny/1751004570210_532149819608480500_video_VOD240p30.m3u8",
        notesLink: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/724594293884832500.pdf",
        videoEmbedType: 'hls'
      },
      {
        id: "L6-10-ICT-3",
        title: "ICT - L3",
        videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4421357/1751014564_2813102081459638/sunny/1751005056360_575387360787722560_video_VOD240p30.m3u8",
        notesLink: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/587109874911379500.pdf",
        videoEmbedType: 'hls'
      }
    ]
  },
  {
    name: "Communication Skills ",
    lectures: [
      {
        id: "L4-Communication Skills-1",
        title: "Communication Skills - L1",
        videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4391701/1748180044_3694449338382459/sunny/1748179295562_439147986971553900_video_VOD240p30.m3u8",
        notesLink: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/107260455905104820.pdf",
        videoEmbedType: 'hls'
      },
      {
        id: "L5-Communication Skills2",
        title: "Communication Skills - L2",
        videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4393990/1748364545_5158785497797223/sunny/1748356148965_265442288714603600_video_VOD240p30.m3u8",
        notesLink: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/744086606979890200.pdf",
        videoEmbedType: 'hls'
      }
    ]
  }
];

export const aarambhCourseContent: CourseContentMap = {
  'Social Science': [
    {
      name: 'Development',
      lectures: [
        { id: 'L1', title: 'Development L1', notesTitle: "WPP #1 Devlopment", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/346089666981640100.pdf`, videoEmbedType: 'youtube', videoEmbedUrl: 'https://www.youtube.com/embed/P3K2mVqgR7Y' },
        { id: 'L2', title: 'Development L2', notesTitle: "WPP #1 Devlopment Solutions", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/761630106449919600.pdf`,videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4352990/174481810831487880624/index_4.m3u8' },
        { id: 'L3', title: 'Development L3', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354004/174490425923587880624/index_4.m3u8' },
        { id: 'L4', title: 'Development L4', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4355307/174506622189247880624/index_4.m3u8' },
        { id: 'L5', title: 'Development L5', notesTitle: "Devlopment Complete Notes", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/588945413789555000.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4356674/174523974370667880624/index_4.m3u8' },
      ]
    },
    {
      name: 'Resources and Development',
      lectures: [
        { id: 'L1', title: 'Resources and Development L1', notesTitle: "Resource & Devlopment Complete Notes", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/787564009170478300.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357716/174532560751637880624/index_4.m3u8' },
        { id: 'L2', title: 'Resources and Development L2',  notesTitle: "WPP #2", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/190224942159109730.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4359018/174542319983487880624/index_4.m3u8' },
        { id: 'L3', title: 'Resources and Development L3',   notesTitle: "WPP 2 - Solution", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/397988482376201500.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4360148/174550914289447880624/index_4.m3u8' },
        { id: 'L4', title: 'Resources and Development L4',   videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4363238/174584423215647880624/index_4.m3u8' },
        { id: 'L5', title: 'Resources and Development L5',  videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4364563/174593072250617880624/index_4.m3u8' },
        { id: 'L6', title: 'Resources and Development L6',   videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4366034/174602805446617880624/index_4.m3u8' },
        { id: 'L7', title: 'Resources and Development L7',  videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4367150/174611369995057880624/index_1.m3u8' },
      ]
    },
    {
      name: 'Power Sharing',
      lectures: [
        { id: 'L1', title: 'Power Sharing L1',  notesTitle: "WPP 3 - Power Sharing", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/886218050969477900.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4372168/174644893368577880624/index_4.m3u8' },
        { id: 'L2', title: 'Power Sharing L2', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4373745/174653484988497880624/index_4.m3u8' },
        { id: 'L3', title: 'Power Sharing L3',  videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4374999/174663266860947880624/index_4.m3u8' },
        { id: 'L4', title: 'Power Sharing L4',  videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4376187/174671890371767880624/index_4.m3u8' },
        { id: 'L5', title: 'Power Sharing L5', notesTitle: "Power sharing Complete Notes", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/49360716106545090.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4379050/174705654256247880624/index_4.m3u8' },
      ]
    },
    {
      name: 'Nationalism in Europe',
      lectures: [
        { id: 'L1', title: 'Nationalism in Europe L1', notesTitle: "The Rise of Nationalism in Europe (L1 to L9)", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/135173735589305730.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4385660/174765773598337880624/index_4.m3u8' },
        { id: 'L2', title: 'Nationalism in Europe L2', notesTitle: "The Rise of Nationalism in Europe (L10 and L11)", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/623410776564941000.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4386901/174774447851067880624/index_4.m3u8' },
        { id: 'L3', title: 'Nationalism in Europe L3',  notesTitle: "The Rise of Nationalism in Europe (L12)", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/294765212475463800.pdf`,videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4388156/174784213776117880624/index_4.m3u8' },
        { id: 'L4', title: 'Nationalism in Europe L4', notesTitle: "WPP #4 The Rise of Nationalism in Europe", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/191454238596169180.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4389229/174791822718927880624/index_4.m3u8' },
        { id: 'L5', title: 'Nationalism in Europe L5',  videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4393945/174835110070857880624/index_4.m3u8' },
        { id: 'L6', title: 'Nationalism in Europe L6',  videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4395114/174844758699447880624/index_4.m3u8' },
        { id: 'L7', title: 'Nationalism in Europe L7',  videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4396261/174853315058577880624/index_4.m3u8' },
        { id: 'L8', title: 'Nationalism in Europe L8',  videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4406159/174955875139637880624/index_4.m3u8' },
        { id: 'L9', title: 'Nationalism in Europe L9',  videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4406366/174956988532027880624/index_4.m3u8' },
        { id: 'L10', title: 'Nationalism in Europe L10',  videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4407324/174964584764377880624/index_4.m3u8' },
        { id: 'L11', title: 'Nationalism in Europe L11',  videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4407497/174965714629147880624/index_4.m3u8' },
        { id: 'L12', title: 'Nationalism in Europe L12',  videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4408429/174974249991017880624/index_4.m3u8' },
        ]
    },
    {
      name: 'Forest And Wildlife Resources',
      lectures: [
        { id: 'L1', title: 'Forest And Wildlife Resources L1', notesTitle: "Forest And Wildlife Resources 1", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/42605082467875864.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4411210/175007770550547125088/index_4.m3u8' },
        { id: 'L2', title: 'Forest And Wildlife Resources L2', notesTitle: "Forest And Wildlife Resources 2", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/809613517589841400.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4412488/175016414550777125088/index_4.m3u8' },
        { id: 'L3', title: 'Forest And Wildlife Resources L3', notesTitle: "Forest And Wildlife Resources 3", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/72872097193260320.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4413854/175026084256997125088/index_4.m3u8' },
       ]
    },
    {
      name: 'Sectors of the Indian Economy',
      lectures: [
        { id: 'L1', title: 'Sectors of the Indian Economy L1', notesTitle: "Sectors of the Indian Economy - 1", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/606322833395919900.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4414989/175034785995657125088/index_4.m3u8' },
        { id: 'L2', title: 'Sectors of Indian Economy 2', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/210793941689131230.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4417609/175068233385897125088/index_4.m3u8' },
        { id: 'L3', title: 'Sectors of Indian Economy 3', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/129222850127324670.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4418570/175076895626987125088/index_4.m3u8' },
        { id: 'L4', title: 'Sectors of Indian Economy 4', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/876787599850698000.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4419824/175086546631887125088/index_4.m3u8' },
        { id: 'L5', title: 'Sectors of Indian Economy 5', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/850236030502344400.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4460006/175128817639377125088/index_4.m3u8' },
       { id: 'L6', title: 'Sectors of Indian Economy 6', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/339205858445961900.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4474850/175171924899657125088/index_4.m3u8' },
      ]
    },
    {
      name: 'Federalism',
      lectures: [
        { id: 'L1', title: 'Federalism L1', notesTitle: "L1 & 2", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/325013306654332300.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4475867/175189222398137125088/index_4.m3u8' },
         { id: 'L2', title: 'Federalism L2', notesTitle: "L1 & 2", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/325013306654332300.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4476771/175197811164887125088/index_4.m3u8' },
         { id: 'L3', title: 'Federalism L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/836602028786916700.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4478170/175207529421867125088/index_4.m3u8' },
         { id: 'L4', title: 'Federalism L4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/663985857014802000.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4479240/175216182823787125088/index_4.m3u8' },
         { id: 'L5', title: 'Federalism L5', notesTitle: "Federalism Complete", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/660853637137748900.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4481883/175249719015327125088/index_4.m3u8' },
        { id: 'L6', title: 'Federalism L6 Doubt Class', notesTitle: "Federalism Complete", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/660853637137748900.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4482846/175258266614757125088/index_4.m3u8' },
              ]
    },
    {
      name: 'Nationalism In India',
      lectures: [
        { id: 'L1', title: 'Nationalism In India L1', notesTitle: "", notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4484117/175267984098967125088/index_4.m3u8' },
         { id: 'L2', title: 'Nationalism In India L2', notesTitle: "", notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4485142/175276595260217125088/index_4.m3u8' },
        
      ]
    }
  ],
  'Science': [
    {
      name: 'Chemical Equations & Reaction',
      lectures: [
        { id: 'L1', title: 'Chemical Equations & Reaction L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/545509967460020400.pdf`, videoEmbedType: 'youtube', videoEmbedUrl: 'https://www.youtube.com/embed/TRS7cu_n108' },
        { id: 'L2', title: 'Chemical Equations & Reaction L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/92623582258554050.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4352723/174480784354101097666/index_5.m3u8' },
        { id: 'L3', title: 'Chemical Equations & Reaction L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/467570420184705540.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4353809/174489432994287880624/index_4.m3u8' },
        { id: 'L4', title: 'Chemical Equations & Reaction L4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/508994911186986560.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354717/174498038229378296383/index_4.m3u8' },
        { id: 'L5', title: 'Chemical Equations & Reaction L5', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/812608998691140200.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4358838/174541230763428296383/index_4.m3u8' },
        { id: 'L6', title: 'Chemical Equations & Reaction L6', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/692200381751812900.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4359955/174549890921018296383/index_4.m3u8' },
        { id: 'L7', title: 'Chemical Equations & Reaction L7', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/635590807317661200.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4361147/174558535223448296383/index_4.m3u8' },
        { id: 'L8', title: 'Chemical Equations & Reaction L8', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/214143229364161280.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4362037/174567339728038296383/index_4.m3u8' },
        { id: 'L9', title: 'ACP - 1 Chemical Reaction & Equations', notesTitle: "ACP - 1 Chemical Reaction & Equations", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/151758065059113380.pdf` },
      ]
    },
    {
      name: 'Light',
      lectures: [
        { id: 'L1', title: 'Light L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/186368098857000600.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4365846/174601868499698296383/index_4.m3u8' },
        { id: 'L2', title: 'Light L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/893692154902404400.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4367004/174610340159018296383/index_1.m3u8' },
        { id: 'L3', title: 'Light L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/201395451636924200.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4368177/174619014979628296383/index_4.m3u8' },
        { id: 'L4', title: 'Light L4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/568390841661464500.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4370026/174627675448638296383/index_4.m3u8' },
        { id: 'L5', title: 'Light L5', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/855806543563515300.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4374886/174662262789208296383/index_4.m3u8' },
        { id: 'L6', title: 'Light L6', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/355378778094591700.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4376022/174670906343678296383/index_4.m3u8' },
        { id: 'L7', title: 'Light L7', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/303485460972520450.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377192/174679471966318296383/index_1.m3u8' },
        { id: 'L8', title: 'ACP - With Solution - Light', notesTitle: "ACP - With Solution - Light", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/407153206272194100.pdf` },
      ]
    },
    {
      name: 'Life Processes',
      lectures: [
        { id: 'L1', title: 'Life Processes L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/6890481Life%20processes%20L1%20.pdf_Life%20processes%20L1%20.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4388022/174783092256088296383/index_4.m3u8' },
        { id: 'L2', title: 'Life Processes L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/724154521085075300.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4390836/174800421277348296383/index_1.m3u8' },
        { id: 'L3', title: 'Life Processes L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/267617359518906460.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4391456/174809097852338296383/index_4.m3u8' },
        { id: 'L4', title: 'Life Processes L4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/876755939862598500.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4394974/174843674156618296383/index_4.m3u8' },
        { id: 'L5', title: 'Life Processes L5', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/484055330645166900.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4396153/174852339785068296383/index_1.m3u8' },
        { id: 'L6', title: 'Life Processes L6', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/804932073729499100.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4397141/174860981887908296383/index_4.m3u8' },
        { id: 'L7', title: 'Life Processes L7', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/741214109704298900.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4398033/174878264133148296383/index_1.m3u8' },
        { id: 'L8', title: 'Life Processes L8', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/524866530820061440.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4408313/174973219814568296383/index_4.m3u8' },
       { id: 'L9', title: 'Life Processes | ACP -3', notesTitle: "Life Processes | ACP -3", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/896713520382589400.pdf` },
      ]
    },
    {
      name: 'Acid bases and salts',
      lectures: [
        { id: 'acid bases and salts L1', title: 'Acid bases and salts L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/835908610018488000.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4409353/174981921287648296383/index_4.m3u8' },
        { id: 'acid bases and salts L2', title: 'Acid bases and salts L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/106362252495704800.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4410136/174990583084158296383/index_4.m3u8' },
        { id: 'acid bases and salts L3', title: 'Acid bases and salts L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/775541372355575600.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4413730/175025130196888929414/index_4.m3u8' },
        { id: 'acid bases and salts L4', title: 'Acid bases and salts L4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/807993603967894500.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4414866/175033738727468929414/index_4.m3u8' },
        { id: 'acid bases and salts L5', title: 'Acid bases and salts L5', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/78532354687740060.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4415940/175042369115078929414/index_4.m3u8' },
    { id: 'Doubt Solving Class', title: 'Doubt Solving Class', notesTitle: "", notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4416573/175050899233748929414/index_4.m3u8' },
     ]
    },
    {
      name: 'Human eye',
      lectures: [
        { id: 'Human eye L1', title: 'Human eye L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/217279667485356350.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4420694/175094118357238929414/index_4.m3u8' },
        { id: 'Human eye L2', title: 'Human eye L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/71000202971201150.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4426247/175102765297458929414/index_4.m3u8' },
        { id: 'Human eye L3', title: 'Human eye L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/589130738857175200.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4427347/175111381865158929414/index_4.m3u8' },
      { id: 'Human eye L4', title: 'Human eye L4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/390163569437422900.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4465407/175163267359088929414/index_4.m3u8' },
           { id: 'Human eye L5', title: 'Human eye L5 Doubt Class', notesTitle: "", notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4477928/175206364875938929414/index_4.m3u8' },
     ]
    },
    {
      name: 'Control & Coordination',
      lectures: [
        { id: 'Control & Coordination L1', title: 'Control & Coordination L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/351128143619938700.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4479051/175215139612528929414/index_4.m3u8' },
        { id: 'Control & Coordination L2', title: 'Control & Coordination L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/235922233626467300.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4480085/175223815228888929414/index_4.m3u8' },
         { id: 'Control & Coordination L3', title: 'Control & Coordination L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/692771755250383500.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4483912/175266967722138929414/index_4.m3u8' },
           { id: 'Control & Coordination L4', title: 'Control & Coordination L4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/805916235184091000.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4484951/175275594414878929414/index_4.m3u8' },
          { id: 'Control & Coordination L5', title: 'Control & Coordination L5', notesTitle: "", notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4485899/175284240937348929414/index_4.m3u8' },
        { id: 'Control & Coordination L6 Doubt Class', title: 'Control & Coordination L6 Doubt Class', notesTitle: "", notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: '' },
       
     ]       
    }
  ],
  'Mathematics': [
    {
      name: 'Real Numbers',
      lectures: [
        { id: 'L1', title: 'Real Numbers L1', notesTitle: "", notesLink: `https://drive.google.com/file/d/1WBeW1CFXzY8b0n0URfVFGCMH6w12etYf/view?usp=sharing`, videoEmbedType: 'hls', videoEmbedUrl: 'https://www.youtube.com/embed/2cS9g5RQ2gA' },
        { id: 'L2', title: 'Real Numbers L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/22420916723093830.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4351817/174473442715988296383/index_4.m3u8' },
        { id: 'L3', title: 'Real Numbers L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/440507540857891140.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354873/174499225616481097666/index_5.m3u8' },
        { id: 'L4', title: 'Real Numbers L4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/805714130200073600.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4355458/174508004648941097666/index_5.m3u8' },
        { id: 'L5', title: 'Real Numbers L5', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/187284260099181220.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4356796/174525209654081097666/index_5.m3u8' },
        { id: 'L6', title: 'Real Numbers L6', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/601835403370027400.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357843/174533856999441097666/index_5.m3u8' },
     { id: 'L7', title: 'Mathematics DPP 1', notesTitle: 'Mathematics DPP 1', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/665158324670948500.pdf` },
      { id: 'L8', title: 'Mathematics DPP 2', notesTitle: 'Mathematics DPP 2', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/754506419720273500.pdf` },
  { id: 'L9', title: 'Mathematics DPP 3', notesTitle: 'Mathematics DPP 3', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/50352740213663790.pdf` },
      ]
    },
    {
      name: 'Polynomials',
      lectures: [
        { id: 'L1', title: 'Polynomials L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/461049038359672400.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4361323/174559737034061097666/index_5.m3u8' },
        { id: 'L2', title: 'Polynomials L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/454067914091926400.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4362134/174568400490071097666/index_5.m3u8' },
        { id: 'L3', title: 'Polynomials L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/646208147845606100.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4363379/174585623134271097666/index_5.m3u8' },
        { id: 'L4', title: 'Polynomials L4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/555085639820711100.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4364779/174594155534621097666/index_5.m3u8' },
        { id: 'L5', title: 'Polynomials L5', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/5742474Polynomials%20L5%20Aarambh%202026.pdf_Polynomials%20L5%20Aarambh%202026.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4368398/174620142857631097666/index_5.m3u8' },
        { id: 'L6', title: 'Polynomials L6', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/196833841022277150.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4370160/174628714218381097666/index_5.m3u8' },
       { id: 'L7', title: 'Mathematics DPP 4', notesTitle: 'Mathematics DPP 4', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/77872188217647540.pdf` },
  { id: 'L8', title: 'Mathematics DPP 5', notesTitle: 'Mathematics DPP 5', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/463630041745735040.pdf` },
  { id: 'L9', title: 'Mathematics DPP 6', notesTitle: 'Mathematics DPP 6', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/353737326249153000.pdf` },
      ]
    },
    {
      name: 'Linear Equations',
      lectures: [
        { id: 'L1', title: 'Linear Equations L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/459536335122701630.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4372312/174646254284121097666/index_5.m3u8' },
        { id: 'L2', title: 'Linear Equations L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/465914747232059840.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4373921/174654659565961097666/index_5.m3u8' },
        { id: 'L3', title: 'Linear Equations L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/17291855924611054.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377325/174680602725391097666/index_5.m3u8' },
        { id: 'L4', title: 'Linear Equations L4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/517673026874348160.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377995/174689370672401097666/index_5.m3u8' },
        { id: 'L5', title: 'Linear Equations L5', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/198061429911618270.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4379163/174706562215611097666/index_5.m3u8' },
        { id: 'L6', title: 'Linear Equations L6', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/527607373820262850.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4384128/174741081479871097666/index_5.m3u8' },
        { id: 'L7', title: 'Linear Equations L7', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/775070612422014800.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4384834/174749789730281097666/index_5.m3u8' },
        { id: 'L8', title: 'Linear Equations L8', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/639498005252691500.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4385006/174758500568421097666/index_5.m3u8' },
       { id: 'L9', title: 'Mathematics DPP 7', notesTitle: 'Mathematics DPP 7', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/17162183325825642.pdf` },
  { id: 'L10', title: 'Mathematics DPP 8', notesTitle: 'Mathematics DPP 8', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/609681176298919600.pdf` },
  { id: 'L11', title: 'Mathematics DPP 9', notesTitle: 'Mathematics DPP 9', notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/623728210th%20Aarambh%20DPP%209.pdf_10th%20Aarambh%20DPP%209.pdf` },
      ]
    },
    {
      name: 'Trigonometry',
      lectures: [
        { id: 'L1', title: 'Trigonometry L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/271433073064721400.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4385837/174766945772321097666/index_5.m3u8' },
        { id: 'L2', title: 'Trigonometry L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/734221331851364500.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4387086/174775745330681097666/index_5.m3u8' },
        { id: 'L3', title: 'Trigonometry L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/808796890763276000.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4390972/174801504255421097666/index_5.m3u8' },
        { id: 'L4', title: 'Trigonometry L4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/1042673Trignometry%20L4.pdf_Trignometry%20L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4391537/174810128337891097666/index_5.m3u8' },
        { id: 'L5', title: 'Trigonometry L5', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/6598812Trignometry%20L5.pdf_Trignometry%20L5.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4391700/174818000698001097666/index_5.m3u8' },
        { id: 'L6', title: 'Trigonometry L6', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/846209721527154400.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4392906/174827565494671097666/index_5.m3u8' },
        { id: 'L7', title: 'Trigonometry L7', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/57814913196021350.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4394019/174836153096901097666/index_5.m3u8' },
        { id: 'L8', title: 'Trigonometry L8', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/447306842114246300.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4397236/174861941652361097666/index_5.m3u8' },
       { id: 'L9', title: 'Mathematics DPP 10', notesTitle: 'Mathematics DPP 10', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/629573474530629900.pdf` },
  { id: 'L10', title: 'Mathematics DPP 11', notesTitle: 'Mathematics DPP 11', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/360874131302271400.pdf` },
  { id: 'L11', title: 'Mathematics DPP 12', notesTitle: 'Mathematics DPP 12', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/793376952012110200.pdf` },
      ]
    },
    {
      name: 'Some Application of Trigonometry',
      lectures: [
        { id: 'L1', title: 'Some Application of Trigonometry L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/409970325793336960.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4409472/174982914345591097666/index_5.m3u8' },
        { id: 'L2', title: 'Some Application of Trigonometry L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/234701559771625340.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4410213/174991601648451097666/index_5.m3u8' },
        { id: 'L3', title: 'Some Application of Trigonometry L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/153726209154047780.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4411382/175008869822868752407/index_4.m3u8' },
        { id: 'L4', title: 'Some Application of Trigonometry L4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/499421961949314600.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4412636/175017526367988752407/index_4.m3u8' },
        { id: 'L5', title: 'Some Application of Trigonometry L5', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/798315639415928700.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4416060/175043509429588752407/index_1.m3u8' },
       { id: 'L6', title: 'Some Application of Trigonometry L6', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/883122022526354400.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4416695/175052142386308752407/index_4.m3u8' },
        { id: 'L16', title: 'Mathematics DPP 13', notesTitle: 'Mathematics DPP 13', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/295999082180152200.pdf` },
  { id: 'L14', title: 'Mathematics DPP 14', notesTitle: 'Mathematics DPP 14', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/789844870294324200.pdf` },
  { id: 'L15', title: 'Mathematics DPP 15', notesTitle: 'Mathematics DPP 15', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/11948867526303130.pdf` },
     ]
    },
    {
      name: 'Quadratic Equations',
      lectures: [
        { id: 'L1', title: 'Quadratic Equations L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/215880257111139400.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4417726/175069337476008752407/index_4.m3u8' },
        { id: 'L2', title: 'Quadratic Equations L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/682683263559778800.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4427456/175112650121268752407/index_4.m3u8' },
        { id: 'L3', title: 'Quadratic Equations L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/615163654802694500.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4460159/175129788526988752407/index_4.m3u8' },
      { id: 'L4', title: 'Quadratic Equations L4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/48313422477312990.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4465547/175164427990748752407/index_4.m3u8' },
      { id: 'L5', title: 'Quadratic Equations L5', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/818675100049377900.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4474940/175173015921868752407/index_4.m3u8' },
      { id: 'L6', title: 'Quadratic Equations L6', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/328695692149355500.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4476029/175190275984418752407/index_4.m3u8' },
       { id: 'L7', title: 'Quadratic Equations L7', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/680791966318698100.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4476964/175198952916258752407/index_4.m3u8' },
     { id: 'L8', title: 'Quadratic Equations L8', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/256105875515184800.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4480242/175224987634108752407/index_4.m3u8' },
      { id: 'L9', title: 'Quadratic Equations L9 Doubt Solving Class', notesTitle: "", notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4480818/175233308152508752407/index_4.m3u8' },
    
        ]
    },
    {
      name: 'Arithmetic Progression',
      lectures: [   
        { id: 'L1', title: 'Arithmrtic Progression L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/698504574372137100.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4482041/175250774553288752407/index_4.m3u8' },
        { id: 'L2', title: 'Arithmrtic Progression L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/737984829132763400.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4483093/175259418898458752407/index_4.m3u8' },
         { id: 'L3', title: 'Arithmrtic Progression L3', notesTitle: "", notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4486090/175285302757228752407/index_4.m3u8' },
        
      ]
    }
  ],

  'IT': itTopicsForClass10,

  'English': [
    {
      name: 'Letter To God ',
      lectures: [
        { id: 'l1', title: 'Letter To God 1', notesTitle: "", notesLink: '', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4355437/1745094964_5789358984187695/sunny/1745075625242_69087200894049560_video_VOD720p30.m3u8' },
        { id: 'l2', title: 'Letter To God 2', notesTitle: "", notesLink: '', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4355438/1745092805_3842501733043505/sunny/1745075729856_273253030448162560_video_VOD720p30.m3u8' },
      ]
    },
    {
      name: 'Dust Of Snow',
      lectures: [
        { id: 'l1', title: 'Dust Of Snow 1', notesTitle: "", notesLink: '', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4362883/1745829064_8896744564209427/sunny/1745823405144_213803673785664260_video_VOD720p30.m3u8' },
        { id: 'l2', title: 'Dust Of Snow 2', notesTitle: "", notesLink: '', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4362884/1745829304_9832761018325665/sunny/1745823991438_632000197320964000_video_VOD720p30.m3u8' },
      ]
    },
    {
      name: 'Fire & Ice',
      lectures: [
        { id: 'l1', title: 'Fire & Ice 1', notesTitle: "", notesLink: '', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4367124/1746114124_9255773397148498/sunny/1746110633800_95893697207908130_video_VOD720p30.m3u8' },
        { id: 'l2', title: 'Fire & Ice 2', notesTitle: "", notesLink: '', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4367125/1746114604_3028472308291210/sunny/1746110727065_699236270267016600_video_VOD720p30.m3u8' },
      ]
    },
    {
      name: 'A Triumph of Surgery',
      lectures: [
        { id: 'l1', title: 'A Triumph of Surgery 1', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/2402030A%20Triumph%20of%20Surgery%20L1.pdf_A%20Triumph%20of%20Surgery%20L1.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4378115/1747004104_5093798446180655/sunny/1746963761393_790760791059125000_video_VOD720p30.m3u8' },
        { id: 'l2', title: 'A Triumph of Surgery 2', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/5913930A%20Triumph%20of%20Surgery%20L2.pdf_A%20Triumph%20of%20Surgery%20L2.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4378116/1747003684_6295147578406091/sunny/1746963929440_149734756542958400_video_VOD720p30.m3u8' },
        ]
    },
    {
      name: 'Nelson Mandela',
      lectures: [
        { id: 'l1', title: 'Nelson Mandela 1', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/7496747Nelson%20Mandela%20L1.pdf_Nelson%20Mandela%20L1.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4415979/1750450625_4554154089099621/sunny/1750425076738_818411970592036400_video_VOD720p30.m3u8' },
      { id: 'l2', title: 'Nelson Mandela 2', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/7653135Nelson%20Mandela%20L2.pdf_Nelson%20Mandela%20L2.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4415980/1750450685_7908273695213537/sunny/1750425643848_294345221400152260_video_VOD720p30.m3u8' },
    ]
    },
    {
      name: 'Poetic Devices',
  lectures: [
    { id: 'L1', title: 'Poetic Devices (Part 1)', notesTitle: "Poetic Devices Notes", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/874065629511007100.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4355434/1745094064_6558196120167470/sunny/1745074746600_243414202639413570_video_VOD720p30.m3u8' },
    { id: 'L2', title: 'Poetic Devices (Part 2)', notesTitle: "Poetic Devices Notes", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/794426136343342800.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4355436/1745094844_9240190758365079/sunny/1745075412050_483337412598451650_video_VOD720p30.m3u8' }
  ]
},
{
  name: 'Tenses',
  lectures: [
    { id: 'L1', title: 'Tenses L1', notesTitle: "Tenses Notes", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/727562919101567200.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4376992/1746790926_2620131171601548/sunny/1746785842321_68968204127858800_video_VOD720p30.m3u8' },
    { id: 'L2', title: 'Tenses L2', notesTitle: "", notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4376993/1746791165_4683530659641818/sunny/1746786281807_635426128592612900_video_VOD720p30.m3u8' },
    { id: 'L3', title: 'Tenses L3', notesTitle: "", notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4376994/1746791225_3697514107018118/sunny/1746786504709_85453328252238460_video_VOD720p30.m3u8' }
  ]
},
{
  name: 'Determiners',
  lectures: [
    { id: 'L1', title: 'Determiners L1', notesTitle: "Determiners Notes", notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/2793710Determiners%20L1.pdf_Determiners%20L1.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4396723/1748599866_2612688982288432/sunny/1748596322264_841185111044298900_video_VOD720p30.m3u8' },
    { id: 'L2', title: 'Determiners L2', notesTitle: "Determiners Notes", notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/6468807Determiners%20L2.pdf_Determiners%20L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4396724/1748599983_8916038134337860/sunny/1748596644025_182722180318143000_video_VOD720p30.m3u8' }
  ]
},
{
  name: 'A Tiger in the Zoo ',
  lectures: [
    { id: 'L1', title: 'A Tiger in the Zoo  L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/2384508Tiger%20in%20the%20Zoo%20L1.pdf_Tiger%20in%20the%20Zoo%20L1.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4465241/1751626506_3969741780228351/sunny/1751624330612_504314993319041150_video_VOD720p30.m3u8' },
   { id: 'L2', title: 'A Tiger in the Zoo  L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/3774889Tiger%20in%20the%20Zoo%20L2.pdf_Tiger%20in%20the%20Zoo%20L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4465242/1751626565_5289125113500169/sunny/1751624468397_669646185529024300_video_VOD720p30.m3u8' }
  
  ]
    }
  ],
 
  'Sanskrit': [
    {
      name: "Overview",
      lectures: [
        {
          id: "sanskrit-overview",
          title: "Class 10th Sanskrit overview",
          notesTitle: "10th Sanskrit Overview",
          videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4392867/1748270525_4262533898579492/sunny/1748270459435_806367464182505500_video_VOD240p30.m3u8",
          notesLink: "https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/745035810th%20Sanskrit%20Overview.pdf_10th%20Sanskrit%20Overview.pdf",
          videoEmbedType: 'hls'
        }
      ]
    },
    {
      name: "CH -01 - शुचिपर्यावरणम्",
      lectures: [
        {
          id: "ch1-explanation",
          title: "CH -01 - शुचिपर्यावरणम् Explanation",
          notesTitle: "CH -01 - शुचिपर्यावरणम् Explanation",
          videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4393578/1748359683_8609289660244522/sunny/1748340021121_496240411986023000_video_VOD240p30.m3u8",
          notesLink: "https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/5209302CH%20-01%20-%20शुचिपर्यावरणम्%20Explanation.pdf_CH%20-01%20-%20शुचिपर्यावरणम्%20Explanation.pdf",
          videoEmbedType: 'hls'
        },
        {
          id: "ch1-ncert",
          title: "CH -01 - शुचिपर्यावरणम् NCERT",
          notesTitle: "CH -01 - शुचिपर्यावरणम् NCERT",
          videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4393579/1748359864_9290021229425817/sunny/1748340242129_74623608989819540_video_VOD240p30.m3u8",
          notesLink: "https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/5751480CH%20-01%20-%20शुचिपर्यावरणम्%20NCERT.pdf_CH%20-01%20-%20शुचिपर्यावरणम्%20NCERT.pdf",
          videoEmbedType: 'hls'
        }
      ]
    },
    {
      name: "CH -02 - बुद्धिर्बलवती सदा",
      lectures: [
        {
          id: "ch2-explanation",
          title: "बुद्धिर्बलवती सदा Explanation",
          notesTitle: "बुद्धिर्बलवती सदा Explanation",
          videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4409093/1749830285_1177145018233638/sunny/1749809451991_882636868663635600_video_VOD240p30.m3u8",
          notesLink: "https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/2105200CH%20-02%20-%20बुद्धिर्बलवती%20सदा%20Explanation.pdf_CH%20-02%20-%20बुद्धिर्बलवती%20सदा%20Explanation.pdf",
          videoEmbedType: 'hls'
        },
        {
          id: "ch2-ncert",
          title: "बुद्धिर्बलवती सदा NCERT",
          notesTitle: "बुद्धिर्बलवती सदा NCERT",
          videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4409094/1749831064_7595852023201894/sunny/1749810180047_65766850598123820_video_VOD240p30.m3u8",
          notesLink: "https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/1406424CH%20-02%20-%20बुद्धिर्बलवती%20सदा%20NCERT.pdf_CH%20-02%20-%20बुद्धिर्बलवती%20सदा%20NCERT.pdf",
          videoEmbedType: 'hls'
        }
      ]
    },
    {
      name: "CH -03 - शिशुलालनम्",
      lectures: [
        {
          id: "ch3-explanation",
          title: "शिशुलालनम् Explanation",
          notesTitle: "शिशुलालनम् Explanation",
          videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4409095/1749830290_9697231653590136/sunny/1749810505854_30247714143718470_video_VOD240p30.m3u8",
          notesLink: "https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/7475768CH%20-03%20-%20शिशुलालनम्%20Explanation.pdf_CH%20-03%20-%20शिशुलालनम्%20Explanation.pdf",
          videoEmbedType: 'hls'
        },
        {
          id: "ch3-ncert",
          title: "शिशुलालनम् NCERT",
          notesTitle: "शिशुलालनम् NCERT",
          videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4409096/1749831427_5468966413028682/sunny/1749811337013_801477767575749800_video_VOD240p30.m3u8",
          notesLink: "https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/4179520CH%20-03%20-%20शिशुलालनम्%20NCERT.pdf_CH%20-03%20-%20शिशुलालनम्%20NCERT.pdf",
          videoEmbedType: 'hls'
        }
      ]
    },
    {
      name: " CH 4 - जननी तुल्यवत्सला ",
      lectures: [
        {
          id: " CH 4 जननी तुल्यवत्सला Explanation",
          title: " CH 4 जननी तुल्यवत्सला Explanation",
          notesTitle: "",
          videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4409097/1749831071_5659937093336673/sunny/1749811853500_469471517135113600_video_VOD720p30.m3u8",
          notesLink: "https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/4952495CH%20-04%20-%20%E0%A4%9C%E0%A4%A8%E0%A4%A8%E0%A5%80%20%E0%A4%A4%E0%A5%81%E0%A4%B2%E0%A5%8D%E0%A4%AF%E0%A4%B5%E0%A4%A4%E0%A5%8D%E0%A4%B8%E0%A4%B2%E0%A4%BE%20Explanation.pdf_CH%20-04%20-%20%E0%A4%9C%E0%A4%A8%E0%A4%A8%E0%A5%80%20%E0%A4%A4%E0%A5%81%E0%A4%B2%E0%A5%8D%E0%A4%AF%E0%A4%B5%E0%A4%A4%E0%A5%8D%E0%A4%B8%E0%A4%B2%E0%A4%BE%20Explanation.pdf",
          videoEmbedType: 'hls'
        },
        {
          id: " CH 4 जननी तुल्यवत्सला NCERT",
          title: " CH 4 जननी तुल्यवत्सला NCERT",
          notesTitle: "",
          videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4409098/1749831544_9736034345331873/sunny/1749812389598_632839732151456400_video_VOD720p30.m3u8",
          notesLink: "https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/1787045CH%20-04%20-%20%E0%A4%9C%E0%A4%A8%E0%A4%A8%E0%A5%80%20%E0%A4%A4%E0%A5%81%E0%A4%B2%E0%A5%8D%E0%A4%AF%E0%A4%B5%E0%A4%A4%E0%A5%8D%E0%A4%B8%E0%A4%B2%E0%A4%BE%20NCERT.pdf_CH%20-04%20-%20%E0%A4%9C%E0%A4%A8%E0%A4%A8%E0%A5%80%20%E0%A4%A4%E0%A5%81%E0%A4%B2%E0%A5%8D%E0%A4%AF%E0%A4%B5%E0%A4%A4%E0%A5%8D%E0%A4%B8%E0%A4%B2%E0%A4%BE%20NCERT.pdf",
          videoEmbedType: 'hls'
      }
      ]
    },
    {
      name: " CH 5 सुभाषितानि ",
      lectures: [
        {
          id: "CH 5 सुभाषितानि Explanation",
          title: "CH 5 सुभाषितानि Explanation ",
          notesTitle: "",
          videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4409099/1749831785_3942555994243597/sunny/1749812705927_817091877426916000_video_VOD720p30.m3u8",
          notesLink: "https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/7106381CH%20-05%20-%20%E0%A4%B8%E0%A5%81%E0%A4%AD%E0%A4%BE%E0%A4%B7%E0%A4%BF%E0%A4%A4%E0%A4%BE%E0%A4%A8%E0%A4%BF%20%20Explanation.pdf_CH%20-05%20-%20%E0%A4%B8%E0%A5%81%E0%A4%AD%E0%A4%BE%E0%A4%B7%E0%A4%BF%E0%A4%A4%E0%A4%BE%E0%A4%A8%E0%A4%BF%20%20Explanation.pdf",
          videoEmbedType: 'hls'
        },
        {
         id: "CH 5 सुभाषितानि NCERT",
          title: "CH 5  सुभाषितानि NCERT ",
          notesTitle: "",
          videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4409100/1749830829_5264220587902074/sunny/1749813063201_298601538506093700_video_VOD720p30.m3u8",
          notesLink: "https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/853606CH%20-05%20-%20%E0%A4%B8%E0%A5%81%E0%A4%AD%E0%A4%BE%E0%A4%B7%E0%A4%BF%E0%A4%A4%E0%A4%BE%E0%A4%A8%E0%A4%BF%20%20NCERT.pdf_CH%20-05%20-%20%E0%A4%B8%E0%A5%81%E0%A4%AD%E0%A4%BE%E0%A4%B7%E0%A4%BF%E0%A4%A4%E0%A4%BE%E0%A4%A8%E0%A4%BF%20%20NCERT.pdf",
          videoEmbedType: 'hls'
        }
      ]
    }
  ],
  'Hindi': [
    {
      "name": "पाठ 1 सूरदास पद",
      "lectures": [
        { "id": "L1", "title": "पाठ 1 सूरदास पद Part 1", "notesTitle": "", "videoEmbedUrl": "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4186201/1729265541_2410105506345580/1T-z7_tVWEOoVElSMKj6nYFwnPxaf5e1h720p30.m3u8", "notesLink": "", "videoEmbedType": "hls" },
        { "id": "L2", "title": "पाठ 1 सूरदास पद Part 2 MCQ", "notesTitle": "", "videoEmbedUrl": "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4186200/1729265538_7083754923792877/1zNCdHHMwJyWePiOVJe4J8BmsbVUmTAZ7720p30.m3u8", "notesLink": "", "videoEmbedType": "hls" },
        { "id": "L3", "title": "पाठ 1 सूरदास पद NCERT solution", "notesTitle": "", "videoEmbedUrl": "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4024977/1729246983_4599555018953880/1rg3wohpXBFYB05RJpzt6KKEMJlgNs4L7720p30.m3u8", "notesLink": "", "videoEmbedType": "hls" },
        { "id": "L4", "title": "पाठ 1 सूरदास पद Part 4", "notesTitle": "", "videoEmbedUrl": "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4186199/1729265536_7680652203501416/1JK6BORv2rwZp2Uxm77iFjYbG2q36Drn_720p30.m3u8", "notesLink": "", "videoEmbedType": "hls" }
      ]
    },
    {
      "name": "राम - लक्ष्मण - परशुराम संवाद",
      "lectures": [
        { "id": "L1", "title": "राम - लक्ष्मण - परशुराम संवाद व्याख्या", "notesTitle": "", "videoEmbedUrl": "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4027213/1729246988_2924527634767824/1BTZmE06ydNw5S5xhkayCinmIBats6UhU720p30.m3u8", "notesLink": "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/789303873377040800.pdf", "videoEmbedType": "hls" },
        { "id": "L2", "title": "राम - लक्ष्मण - परशुराम संवाद NCERT solution", "notesTitle": "", "videoEmbedUrl": "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4027210/1729246987_5520520446678697/1fFdctu5EMGN0XGe9H6VlfekB_6EKch_M720p30.m3u8", "notesLink": "", "videoEmbedType": "hls" },
        { "id": "L3", "title": "राम - लक्ष्मण - परशुराम संवाद MCQs", "notesTitle": "", "videoEmbedUrl": "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4027254/1729246989_7436779504232047/1u8JDzOj-xfiZDTigH8VomE2YulrPKc1T720p30.m3u8", "notesLink": "", "videoEmbedType": "hls" },
        { "id": "L4", "title": "राम - लक्ष्मण - परशुराम संवाद Complete Revision", "notesTitle": "", "videoEmbedUrl": "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4027255/1729246990_6541419237933644/1UMhxW2fNwZ8IIQB4B5gHzDLezAg4t3Tz720p30.m3u8", "notesLink": "", "videoEmbedType": "hls" }
      ]
    },
    {
      "name": "आत्मकथ्य",
      "lectures": [
        { "id": "L1", "title": "आत्मकथ्य व्याख्या", "notesTitle": "", "videoEmbedUrl": "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4385768/1747663749_2705447000621275/1747663347090_298315341830591400_video_VOD720p30.m3u8", "notesLink": "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/690521834032034400.pdf", "videoEmbedType": "hls" },
        { "id": "L2", "title": "आत्मकथ्य NCERT Solutions", "notesTitle": "", "videoEmbedUrl": "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4385785/1747665069_5871654612294206/1747663672831_250637210850573980_video_VOD720p30.m3u8", "notesLink": "", "videoEmbedType": "hls" },
        { "id": "L3", "title": "आत्मकथ्य Complete Chapter Revision", "notesTitle": "", "videoEmbedUrl": "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4047704/1729246994_6221740304385315/1ckkgP-tEUaM84SKTngCLf9soPW1lZl-3720p30.m3u8", "notesLink": "", "videoEmbedType": "hls" },
        { "id": "L4", "title": "आत्मकथ्य Mcqs", "notesTitle": "", "videoEmbedUrl": "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4385786/1747665130_7974256570522104/1747664586187_863180552173840600_video_VOD720p30.m3u8", "notesLink": "", "videoEmbedType": "hls" }
      ]
    },
    {
      "name": "स्वयं प्रकाश नेताजी का चश्मा",
      "lectures": [
        { "id": "L1", "title": "स्वयं प्रकाश नेताजी का चश्मा व्याख्या", "notesTitle": "", "videoEmbedUrl": "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4386615/1747739344_5895889211490543/1747733769932_786195607074400600_video_VOD720p30.m3u8", "notesLink": "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/554889646678124500.pdf", "videoEmbedType": "hls" },
        { "id": "L2", "title": "स्वयं प्रकाश नेताजी का चश्मा NCERT Solutions", "notesTitle": "", "videoEmbedUrl": "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4386617/1747740064_6945065777663847/1747733825545_143661140781959490_video_VOD720p30.m3u8", "notesLink": "", "videoEmbedType": "hls" },
        { "id": "L3", "title": "स्वयं प्रकाश नेताजी का चश्मा Complete Chapter Revision", "notesTitle": "", "videoEmbedUrl": "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4386614/1747739104_5562195517508276/1747733758660_373061725447395700_video_VOD720p30.m3u8", "notesLink": "", "videoEmbedType": "hls" },
        { "id": "L4", "title": "स्वयं प्रकाश नेताजी का चश्मा Mcqs", "notesTitle": "", "videoEmbedUrl": "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4386616/1747739586_2981294043039759/1747733816098_75298579390464800_video_VOD720p30.m3u8", "notesLink": "", "videoEmbedType": "hls" }
      ]
    },
    {
      "name": "पाठ 4 उत्साह, अट नहीं रही है",
      "lectures": [
        { "id": "L1", "title": "पाठ 4 उत्साह, अट नहीं रही है व्याख्या Lecture 1", "notesTitle": "", "videoEmbedUrl": "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4410183/1749914586_4086706439974252/sunny/1749912022852_338311045046101570_video_VOD720p30.m3u8", "notesLink": "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/847032884771309300.pdf", "videoEmbedType": "hls" },
        { "id": "L2", "title": "पाठ 4 उत्साह, अट नहीं रही है NCERT solutions Lecture 2", "notesTitle": "", "videoEmbedUrl": "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4410186/1749915308_3840734996272597/sunny/1749912196262_461166863025187500_video_VOD720p30.m3u8", "notesLink": "", "videoEmbedType": "hls" },
        { "id": "L3", "title": "पाठ 4 उत्साह, अट नहीं रही है Complete Chapter Revision Lecture 3", "notesTitle": "", "videoEmbedUrl": "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4410184/1749914765_5495751221321111/sunny/1749912092768_233487924942992640_video_VOD720p30.m3u8", "notesLink": "", "videoEmbedType": "hls" },
         { "id": "L4", "title": "कृतिका भाग 2 पाठ 1 माता का अँचल शिवपूजन सहाय Complete Chapter Revision Lecture 4", "notesTitle": "", "videoEmbedUrl": "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4186197/1729265530_8082650506315087/1cQy6uA6zxO3Q-fzKguG-cc6iZ1Vgj-Oa720p30.m3u8", "notesLink": "", "videoEmbedType": "hls" },
    
      ]
    },
{
  "name": "माता का अँचल",
  "lectures": [
    {
      "id": "L1",
      "title": "कृतिका भाग 2 पाठ 1 माता का अँचल शिवपूजन सहाय व्याख्या Lecture 1",
      "notesTitle": "",
      "videoEmbedUrl": "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4186198/1729265533_8059479010359567/1BtyJnTEnw7CtMzUeC6JzD04RcYxkLY_h720p30.m3u8",
      "notesLink": "",
      "videoEmbedType": "hls"
    },
    {
      "id": "L2",
      "title": "माता का अँचल शिवपूजन सहाय NCERT solutions Lecture 2",
      "notesTitle": "",
      "videoEmbedUrl": "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4057679/1729247001_2102951454222923/13er8e0QTz_ZEt29EvpIDlRkw1_N36SNb720p30.m3u8",
      "notesLink": "",
      "videoEmbedType": "hls"
    },
    {
      "id": "L3",
      "title": "माता का अँचल शिवपूजन सहाय Mcqs Lecture 3",
      "notesTitle": "",
      "videoEmbedUrl": "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4057680/1729247001_7590193763429474/1Z6ELWKQm8CjGONfvOaH1lv--rvWc6nEq720p30.m3u8",
      "notesLink": "",
      "videoEmbedType": "hls"
    },
    {
      "id": "L4",
      "title": "कृतिका भाग 2 पाठ 1 माता का अँचल शिवपूजन सहाय Complete Chapter Revision Lecture 4",
      "notesTitle": "",
      "videoEmbedUrl": "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4186197/1729265530_8082650506315087/1cQy6uA6zxO3Q-fzKguG-cc6iZ1Vgj-Oa720p30.m3u8",
      "notesLink": "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/827292862967255600.pdf",
      "videoEmbedType": "hls"
  }
      ]
    },
    {
      "name": "Course A Doubt Class",
      "lectures": [
          {
              "id": "hindi-doubt-class-1",
              "title": "Hindi Doubt Class",
              "videoEmbedUrl": "https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4480925/175239456973866123022/index_4.m3u8",
              "videoEmbedType": "hls"
          }
      ]
    },
    {
      "name": "Course A Doubt Class",
      "lectures": [
          {
              "id": "hindi-doubt-class-1",
              "title": "Hindi Doubt Class",
              "videoEmbedUrl": "https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4480925/175239456973866123022/index_4.m3u8",
              "videoEmbedType": "hls"
          }
      ]
    }
  ]
        }

    
    
