
// src/lib/aarambh9-data.ts
import type { CourseContentMap, Lecture } from './course-utils';

const itTopicsForClass9: CourseContentMap['IT'] = [
  {
    name: "IT Overview (Class 9)",
    lectures: [
      {
        id: "L1-9-overview",
        title: "Class 9 IT Overview",
        videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4391690/1748179084_2580180814420977/sunny/1748177591970_70156498151999930_video_VOD720p30.m3u8",
        videoEmbedType: 'hls'
      }
    ]
  },
  {
    name: "Communication Skills (Class 9)",
    lectures: [
      {
        id: "L2-9-comm",
        title: "Communication Skills - L1",
        videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4391691/1748179089_8667406066067348/sunny/1748177660740_217256690396284670_video_VOD720p30.m3u8",
        notesLink: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/563827473449322750.pdf",
        videoEmbedType: 'hls'
      }
    ]
  }
];

export const aarambh9CourseContent: CourseContentMap = {
  'Science': [
    {
      name: 'Motion',
      lectures: [
        { id: 'L1', title: 'Motion L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/796634275304162200.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://www.youtube.com/live/dmgct2gWAJY?si=9lSqUy3LCKKZjlR8' },
        { id: 'L2', title: 'Motion L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/565320984368797060.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357724/174532620129898296383/174532620129898296383_8296383.m3u8' },
        { id: 'L3', title: 'Motion L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/246363599307751300.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4359011/174542283188648296383/174542283188648296383_8296383.m3u8' },
        { id: 'L4', title: 'Motion L4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/207401592156435200.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4363242/174584458672078296383/174584458672078296383_8296383.m3u8' },
        { id: 'L5', title: 'Motion L5', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/141630145569537010.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4364523/174592976773988296383/174592976773988296383_8296383.m3u8' },
        { id: 'L6', title: 'Motion L6', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/663408000061311100.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4366027/174602777136308296383/174602777136308296383_8296383.m3u8' },
        { id: 'L7', title: 'Motion L7', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/517165460560056100.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4372218/174645099842398296383/174645099842398296383_8296383.m3u8' },
        { id: 'L9', title: 'ACP #1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/843726780533647700.pdf`},
      ]
    },
    {
      name: 'Matter in our Surroundings',
      lectures: [
        { id: 'L1', title: 'Matter in our Surroundings L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/666042304647673600.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4373763/174653575278717555169/174653575278717555169_7555169.m3u8' },
        { id: 'L2', title: 'Matter in our Surroundings L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/389901117968340860.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4375004/174663371989087555169/174663371989087555169_7555169.m3u8' },
        { id: 'L3', title: 'Matter in our Surroundings L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/262906506313453000.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4379021/174705453261387555169/174705453261387555169_7555169.m3u8' },
        { id: 'L4', title: 'Matter in our Surroundings L4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/606213236499166800.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4380507/174714048756637555169/174714048756637555169_7555169.m3u8' },
        { id: 'L5', title: 'Matter in our Surroundings L5', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/42779434238973460.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4381981/174723737820747555169/174723737820747555169_7555169.m3u8' },
       { id: 'L9', title: 'ACP #2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/21557976024604976.pdf`},
      ]
    },
    {
      name: 'Is matter around us pure?',
      lectures: [
        { id: 'L1', title: 'Is matter around us pure? L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/844977822701788000.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4406208/174956007294357555169/index_4.m3u8' },
        { id: 'L2', title: 'Is matter around us pure? L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/691619710171838000.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4407492/174965677724307555169/index_4.m3u8' },
        { id: 'L3', title: 'Is matter around us pure? L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/724334028128615800.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4411204/175007761623082764802/index_5.m3u8' },
        { id: 'L4', title: 'Is matter around us pure? L4', notesTitle: "", notesLink: `https://drive.google.com/file/d/1QwN4BhoJHuss3T7EvfkKolLg8hRK6UYl/view?usp=sharing`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4412480/175016393583812764802/index_5.m3u8' },
        { id: 'L9', title: 'ACP #3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/622749551282561700.pdf`},
      ]
    },
    {
      name: 'The Fundamental Unit of Life',
      lectures: [
        { id: 'L1', title: 'The Fundamental Unit of Life L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/388544105933012540.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4385663/174765778737748296383/174765778737748296383_8296383.m3u8' },
        { id: 'L2', title: 'The Fundamental Unit of Life L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/5529457The%20fundamental%20unit%20of%20Life%20L2.pdf_The%20fundamental%20unit%20of%20Life%20L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4388166/174784311082348296383/174784311082348296383_8296383.m3u8' },
        { id: 'L3', title: 'The Fundamental Unit of Life L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/44753085580102530.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4392729/174826422289318296383/index_4.m3u8' },
        { id: 'L4', title: 'The Fundamental Unit of Life L4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/296648034614619000.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4393920/174834967737708296383/index_1.m3u8' },
        { id: 'L5', title: 'The Fundamental Unit of Life L5', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/482934928113109300.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4395109/174844706284808296383/index_1.m3u8' },
        { id: 'L6', title: 'The Fundamental Unit of Life L6', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/174182966845416260.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4404108/174931141517868296383/174931141517868296383_8296383.m3u8' },
        { id: 'L9', title: 'ACP #4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/85704322204293060.pdf`},
      ]
    },
    {
      name: 'Force And Laws of Motion',
      lectures: [
        { id: 'L1', title: 'Force And Laws of Motion L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/41773712040453180.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4417639/175068363626798929414/index_4.m3u8' },
        { id: 'L2', title: 'Force And Laws of Motion L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/646935179336656100.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4418596/175077006467408929414/index_4.m3u8' },
        { id: 'L3', title: 'Force And Laws of Motion L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/92791553841016830.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4419830/175086642753098929414/index_4.m3u8' },
         { id: 'L9', title: 'ACP #5', notesTitle: "", notesLink: ``},
        { id: 'L4', title: 'Force And Laws of Motion L4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/31986175671682916.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4460002/175128814941128929414/index_4.m3u8' },
      { id: 'L5', title: 'Force And Laws of Motion L5', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/568072667748074750.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4461910/175146019587088929414/index_4.m3u8' },
   ]
    },
    {
      name: 'Tissue',
      lectures: [
        { id: 'L1', title: 'Tissue L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/190106597863728130.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4475881/175189250719138929414/index_4.m3u8' },
        { id: 'L2', title: 'Tissue L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/741669906953814700.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4476776/175197829846758929414/175197829846758929414_8929414.m3u8' },
        { id: 'L3', title: 'Tissue L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/551846601926949800.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4478171/175207564070148929414/index_4.m3u8' },
        { id: 'L4', title: 'Tissue L4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/807777532215662500.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4481913/175249800035998929414/index_4.m3u8' },
         { id: 'L5', title: 'Tissue L5', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/199727414625477760.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4482890/175258462787808929414/index_4.m3u8' },
        { id: 'L6', title: 'Tissue L6', notesTitle: "", notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4484120/175268040413938929414/175268040413938929414_8929414.m3u8' },
       
      ]
    },
  ],
  'Social Science': [
    {
      name: 'The French Revolution',
      lectures: [
        { id: 'L1', title: 'The French Revolution L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/868853396854137200.pdf`, videoEmbedType: 'youtube', videoEmbedUrl: 'https://www.youtube.com/live/EDMXz3jVgZA?si=BvCXav6zfaUMg1UT' },
        { id: 'L2', title: 'The French Revolution L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/519698322921122600.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4359911/174549813759727880624/174549813759727880624_7880624.m3u8' },
        { id: 'L3', title: 'The French Revolution L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/200066952319148770.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4364774/174594113722007880624/174594113722007880624_7880624.m3u8' },
        { id: 'L4', title: 'The French Revolution L4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/114083209194861400.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4365809/174601655378227880624/174601655378227880624_7880624.m3u8' },
        { id: 'L5', title: 'The French Revolution L5', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/678445785818434000.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4366987/174610309713617880624/174610309713617880624_7880624.m3u8' },
        { id: 'L6', title: 'The French Revolution L6', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/574213608445127800.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4372289/174645974230447880624/174645974230447880624_7880624.m3u8' },
        { id: 'L7', title: 'The French Revolution L7', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/574213608445127800.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4373916/174654612513167880624/174654612513167880624_7880624.m3u8' },
        { id: 'L8', title: 'The French Revolution L8', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/42451599701414660.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4374872/174662189759057880624/174662189759057880624_7880624.m3u8' },
        { id: 'L9', title: 'WPP #1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/531020738549552000.pdf`},
       { id: 'L11', title: 'WPP #1 SOLUTION', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/366929396803575550.pdf`},
      ]
    },
    {
      name: 'India - Size and Location',
      lectures: [
        { id: 'L1', title: 'India - Size and Location L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/734321280501620600.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4379155/174706443135147880624/174706443135147880624_7880624.m3u8' },
        { id: 'L2', title: 'India - Size and Location L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/734183618179824500.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4385836/174766937560807880624/174766937560807880624_7880624.m3u8' },
        { id: 'L3', title: 'India - Size and Location L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/50808763094542670.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4387074/174775592115227880624/174775592115227880624_7880624.m3u8' },
        { id: 'L4', title: 'India - Size and Location L4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/149232902457935520.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4388030/174783135735827880624/174783135735827880624_7880624.m3u8' },
        { id: 'L9', title: 'WPP #2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/708358583816420700.pdf`},
      ]
    },
    {
      name: 'The Story of Village Palampur',
      lectures: [
        { id: 'L1', title: 'The Story of Village Palampur L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/479463365409184960.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4392899/174827541880218165220/index_4.m3u8' },
        { id: 'L2', title: 'The Story of Village Palampur L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/477484595681899200.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4394021/174836179392228165220/index_4.m3u8' },
        { id: 'L3', title: 'The Story of Village Palampur L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/102756455791104770.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4394988/174843781540668165220/index_4.m3u8' },
        { id: 'L4', title: 'The Story of Village Palampur L4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/589183403000720000.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4398034/174878305850708165220/index_4.m3u8' },
       { id: 'L9', title: 'WPP #3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/554631426365239550.pdf`},
      ]
    },
    {
      name: 'What is Democracy & why is democracy',
      lectures: [
        { id: 'L1', title: 'What is Democracy & why is democracy L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/341265119950237300.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4405294/174948480645778165220/174948480645778165220_8165220.m3u8' },
        { id: 'L2', title: 'What is Democracy & why is democracy L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/353092261015565000.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4406373/174957083156418165220/index_4.m3u8' },
        { id: 'L3', title: 'What is Democracy & why is democracy L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/493110752813854600.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4407312/174964547257888165220/index_4.m3u8' },
        { id: 'L4', title: 'What is Democracy & why is democracy L4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/593029986503166100.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4411383/175008874685142809295/index_3.m3u8' },
        { id: 'L5', title: 'What is Democracy & why is democracy L5', notesTitle: "", notesLink: `https://drive.google.com/file/d/1WdT7n55ztCR_Waio5b2joVZpHVGNLPp8/view?usp=sharing`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4412652/175017742429362809295/index_4.m3u8' },
         { id: 'L9', title: 'WPP #4', notesTitle: "", notesLink: ``},
      ]
    },
    {
      name: 'Physical Features Of India',
      lectures: [
        { id: 'L1', title: 'Physical Features Of India L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/103422826082137570.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4413709/175025027154897125088/index_3.m3u8' },
        { id: 'L2', title: 'Physical Features Of India L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/385993737968055400.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4414844/175033680741617125088/index_3.m3u8' },
        { id: 'L3', title: 'Physical Features Of India L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/113403011293755860.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4417723/175069298432877125088/index_3.m3u8' },
        { id: 'L4', title: 'Physical Features Of India L4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/849330512463802200.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4418705/175077952347367125088/index_3.m3u8' },
        { id: 'L5', title: 'Physical Features Of India L5', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/669607229676525800.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4419626/175085488724317125088/index_3.m3u8' },
       { id: 'L9', title: 'WPP #5', notesTitle: "", notesLink: ``},
       { id: 'L6', title: 'DOUBT SOLVING CLASS', notesTitle: "", notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4420692/175094110369597125088/index_3.m3u8' },
      ]
    },
    {
      name: 'Drainage',    
      lectures: [
        { id: 'L1', title: ' Drainage 1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/394072420676638200.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4460160/175129794037967125088/index_3.m3u8' },
    { id: 'L2', title: 'Drainage 2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/576581663884886100.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4462028/175147111069297125088/index_3.m3u8' },
   { id: 'L3', title: 'Drainage 3', notesTitle: "L3 & 4 Notes", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/814461679296035300.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4464391/175154621428207125088/index_3.m3u8' },
      { id: 'L4', title: 'Drainage 4', notesTitle: "3 & 4 ", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/814461679296035300.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4464578/175155712912737125088/index_3.m3u8' },
 ]
    },
    {
      name: 'Socialism in Europe and the Russian Revolution',    
      lectures: [
        { id: 'L1', title: ' Socialism in Europe and the Russian Revolution 1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/851550215430970800.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4476028/175190236171387125088/index_4.m3u8' },
        { id: 'L2', title: ' Socialism in Europe and the Russian Revolution 2', notesTitle: "L2 & 3", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/706384299026803200.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4476962/175198896239247125088/175198896239247125088_7125088.m3u8' },
        { id: 'L3', title: ' Socialism in Europe and the Russian Revolution 3', notesTitle: "L2 & 3", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/706384299026803200.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4477955/175206460824077125088/index_4.m3u8' },
        { id: 'L4', title: ' Socialism in Europe and the Russian Revolution 4', notesTitle: "L4 and 5", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/595903458031875600.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4479048/175215101442707125088/index_4.m3u8' },
         { id: 'L5', title: ' Socialism in Europe and the Russian Revolution 5', notesTitle: "L4 and 5", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/595903458031875600.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4482039/175250749992707125088/index_4.m3u8' },
        { id: 'L6', title: ' Socialism in Europe and the Russian Revolution 6', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/159134390619897800.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4483088/175259387081697125088/index_4.m3u8' },
        { id: 'L7', title: ' Socialism in Europe and the Russian Revolution 7', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/159134390619897800.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4483914/175266969453997125088/index_4.m3u8' },
      { id: 'L8', title: ' Socialism in Europe and the Russian Revolution 8', notesTitle: "", notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4484954/175275601327827125088/175275601327827125088_7125088.m3u8' },
      
      ]
    },
  ],
  'Mathematics': [
    {
      name: 'Number System',
      lectures: [
        { id: 'L1', title: 'Number System L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/630773142527132200.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://youtu.be/F6v_8tOEYrc' },
        { id: 'L2', title: 'Number System L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/289476255780218430.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4360152/174550928629871097666/174550928629871097666_1097666.m3u8' },
        { id: 'L3', title: 'Number System L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/146415667329121730.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4361156/174558576440391097666/174558576440391097666_1097666.m3u8' },
        { id: 'L4', title: 'Number System L4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/366564110685032770.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4362008/174567183539581097666/174567183539581097666_1097666.m3u8' },
        { id: 'L5', title: 'Number System L5', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/434141207850167900.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4367149/174611361544421097666/174611361544421097666_1097666.m3u8' },
        { id: 'L6', title: 'Number System L6', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/989861Number%20System%20L6.pdf_Number%20System%20L6.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4368222/174619110643541097666/174619110643541097666_1097666.m3u8' },
        { id: 'L7', title: 'Number System L7', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/566549363460292200.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4370049/174627933537761097666/174627933537761097666_1097666.m3u8' },
      { id: 'L9', title: 'DPP #1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/898364746538794500.pdf`},
      { id: 'L11', title: 'DPP #2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/428966108575780160.pdf`},
      
      ]
    },
    {
      name: 'Polynomials',
      lectures: [
        { id: 'L1', title: 'Polynomials L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/74399702929336430.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4376184/174671865862761097666/174671865862761097666_1097666.m3u8' },
        { id: 'L2', title: 'Polynomials L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/502554344526904960.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377207/174679563175571097666/174679563175571097666_1097666.m3u8' },
        { id: 'L3', title: 'Polynomials L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/705180113669637000.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377938/174688306660241097666/174688306660241097666_1097666.m3u8' },
        { id: 'L4', title: 'Polynomials L4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/573948259537011260.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4383998/174739970880251097666/174739970880251097666_1097666.m3u8' },
        { id: 'L5', title: 'Polynomials L5', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/235407454948249120.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4384765/174748733028261097666/174748733028261097666_1097666.m3u8' },
        { id: 'L6', title: 'Polynomials L6', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/392776860527611100.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4384986/174757357814051097666/174757357814051097666_1097666.m3u8' },
        { id: 'L7', title: 'Polynomials L7', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/790702335187412500.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4389346/174793035190161097666/174793035190161097666_1097666.m3u8' },
        { id: 'L8', title: 'Polynomials L8', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/719024689970129900.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4390842/174800460375161097666/174800460375161097666_1097666.m3u8' },
        { id: 'L9', title: 'Polynomials L9', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/781709921566277400.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4391472/174809232290121097666/174809232290121097666_1097666.m3u8' },
        { id: 'L11', title: 'DPP #3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/181500649969413280.pdf`},
        { id: 'L12', title: 'DPP #4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/28274969th%20Aarambh%202026%20DPP%204.pdf.pdf_9th%20Aarambh%202026%20DPP%204.pdf.pdf`},
      ]
    },
    {
      name: 'Coordinate Geometry',
      lectures: [
        { id: 'L1', title: 'Coordinate Geometry L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/34085646867409710.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4396260/174853287832481261798/index_4.m3u8' },
        { id: 'L2', title: 'Coordinate Geometry L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/520128588958833200.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4397075/174860816936171261798/index_4.m3u8' },
        { id: 'L3', title: 'Coordinate Geometry L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/217701739676724700.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4397715/174869387171741261798/174869387171741261798_1261798.m3u8' },
      { id: 'L9', title: 'DPP #5', notesTitle: "", notesLink: ``},
      { id: 'L6', title: 'DPP #6', notesTitle: "", notesLink: ``},
      ]
    },
    {
      name: 'Linear Equations in Two Variables',
      lectures: [
        { id: 'L1', title: 'Linear Equations in Two Variables L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/28876332252753430.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4408426/174974223257041261798/index_4.m3u8' },
        { id: 'L2', title: 'Linear Equations in Two Variables L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/898296706271436700.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4409327/174981810598981261798/index_4.m3u8' },
        { id: 'L3', title: 'Linear Equations in Two Variables L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/647579420880400400.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4410122/174990428067631261798/index_4.m3u8' },
       { id: 'L9', title: 'DPP #7', notesTitle: "", notesLink: ``},
      ]
    },
    {
      name: 'Lines and Angles',
      lectures: [   
        { id: 'L1', title: 'Lines and Angles L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/741120386417670400.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4414993/175034844671898752407/index_4.m3u8' },
        { id: 'L2', title: 'Lines and Angles L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/178753601582443740.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4415948/175042402315178752407/index_4.m3u8' },
        { id: 'L3', title: 'Lines and Angles L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/588945404340775200.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4416586/175051018944158752407/index_4.m3u8' },  
          { id: 'L4', title: 'Lines and Angles L4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/768594604116359600.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4426270/175102838146088752407/index_4.m3u8' },  
           { id: 'L5', title: 'Lines and Angles L5', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/892325459170753300.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4427364/175111482017818752407/index_4.m3u8' },  
            { id: 'L6', title: 'Lines and Angles L6', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/310836165950808000.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4461096/175138425048988752407/index_4.m3u8' },  
    { id: 'L7', title: 'Lines and Angles L7', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/648745054789896700.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4479244/175216303598138752407/index_4.m3u8' },  
    { id: 'L8', title: 'Lines and Angles L8', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/375537386908395840.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4480065/175223691334828752407/index_4.m3u8' },  
     ]
    },
    {
      name: 'Triangles',
      lectures: [   
        { id: 'L1', title: 'Triangles L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/165917613057313250.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4480736/175232416413558752407/index_4.m3u8' },
          { id: 'L2', title: 'Triangles L2', notesTitle: "", notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4485929/175284331075788752407/175284331075788752407_8752407.m3u8' },
      
      ]
    },
  ],
  'English': [
    {
      name: 'The Fun They Had',
      lectures: [
        { id: 'c9-eng-lit-l1', title: 'The Fun They Had 1', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/5115291fun%20they%20had%20L1.pdf_fun%20they%20had%20L1.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4362885/1745829485_2048536674804334/sunny/1745824193994_820484776522091000_video_VOD720p30.m3u8' },
        { id: 'c9-eng-lit-l2', title: 'The Fun They Had 2', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/6861657fun%20they%20had%20%20L2.pdf_fun%20they%20had%20%20L2.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4362888/1745829005_4828557523576252/sunny/1745825520195_860858436100445400_video_VOD720p30.m3u8' },
      ]
    },
    {
      name: 'The Road Not Taken',
      lectures: [
        { id: 'c9-eng-wrt-l1', title: 'The Road Not Taken 1', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/3975724The%20Road%20Not%20Taken%20L1.pdf_The%20Road%20Not%20Taken%20L1.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4376945/1746790146_9952541808084121/sunny/1746785890101_885502576654220900_video_VOD720p30.m3u8' },
        { id: 'c9-eng-wrt-l2', title: 'The Road Not Taken 2', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/722803The%20Road%20Not%20Taken%20L2.pdf_The%20Road%20Not%20Taken%20L2.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4376944/1746789785_1046241985025655/sunny/1746785657092_863095031696032600_video_VOD720p30.m3u8' },
    ]
   },
    {
      name: 'The Lost Child',
      lectures: [
        { id: 'c9-eng-l1', title: 'The Lost Child 1', notesTitle: "", notesLink: '#', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4376942/1746789365_8519999002932256/sunny/1746784978966_22068690813281_video_VOD720p30.m3u8' },
        { id: 'c9-eng-l2', title: 'The Lost Child 2', notesTitle: "", notesLink: '#', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4376943/1746789425_1181554534695089/sunny/1746785432591_190200542431737380_video_VOD720p30.m3u8' },
   ]
  },
    {
    name: 'The Sound Of Music Part 1',
    lectures: [
      { id: 'L1', title: 'Sound of Music P1 L1', notesTitle: "Sound of Music 1 Notes", notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/7497880sound%20of%20music%20part%201%20L1.pdf_sound%20of%20music%20part%201%20L1.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4409060/1749824044_3361889869046858/sunny/1749811523668_756560226864072100_video_VOD720p30.m3u8' },
      { id: 'L2', title: 'Sound of Music P1 L2', notesTitle: "Sound of Music 2 Notes", notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/6803599sound%20of%20music%20part%201%20L2.pdf_sound%20of%20music%20part%201%20L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4409061/1749824105_2359363804227323/sunny/1749812109420_686057178732817300_video_VOD720p30.m3u8' }
    ]
  },
  {
    name: 'The Sound Of Music Part 2',
    lectures: [
      { id: 'L1', title: 'Sound of Music P2 L1', notesTitle: "Sound of Music Notes", notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/1936922Sound%20of%20Music%20Part%202%20L1.pdf_Sound%20of%20Music%20Part%202%20L1.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4415974/1750449905_7686784792214587/sunny/1750424933955_84986932078565730_video_VOD720p30.m3u8' },
      { id: 'L2', title: 'Sound of Music P2 L2', notesTitle: "Sound of Music Notes", notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/1830672Sound%20of%20Music%20Part%202%20L2.pdf_Sound%20of%20Music%20Part%202%20L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4415975/1750450385_4811330079792111/sunny/1750425472276_868704596787497100_video_VOD720p30.m3u8' }
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
      name: 'The Brook',
      lectures: [
        { id: 'brook-l1', title: 'The Brook L1', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/1581492The%20Brook%20L1.pdf_The%20Brook%20L1.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4376879/1746787444_6308807111409850/sunny/1746784412048_353490897491965700_video_VOD720p30.m3u8' },
        { id: 'brook-l2', title: 'The Brook L2', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/2483928The%20Brook%20L2.pdf_The%20Brook%20L2.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4376880/1746787626_3472742865214199/sunny/1746784668809_97286300912956000_video_VOD720p30.m3u8' }
      ]
    },
    {
      name: 'Wind',
      lectures: [
        { id: 'wind-l1', title: 'Wind L1', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/6982817Wind%20L1.pdf_Wind%20L1.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4479540/1752223565_5601503020926684/sunny/1752215205565_474713474318265500_video_VOD720p30.m3u8' },
        { id: 'wind-l2', title: 'Wind L2', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/1930706Wind%20L2.pdf_Wind%20L2.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4479541/1752223926_4820612734718728/sunny/1752215288107_288965548979669200_video_VOD720p30.m3u8' }
      ]
    },
    {
      name: 'The Adventure Of Toto',
      lectures: [
        { id: 'toto-l1', title: 'The Adventure Of Toto L1', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/3826260The%20Adventures%20of%20Toto%20L1.pdf_The%20Adventures%20of%20Toto%20L1.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4465234/1751625546_7220802615425796/sunn/1751624104066_871573264351351600_video_VOD480p30.m3u8' },
        { id: 'toto-l2', title: 'The Adventure Of Toto L2', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/2750854The%20Adventures%20of%20Toto%20L2.pdf_The%20Adventures%20of%20Toto%20L2.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4465234/1751625546_7220802615425796/sunn/1751624104066_871573264351351600_video_VOD480p30.m3u8' }
      ]
    }
  ],
  'IT': itTopicsForClass9,
   'Hindi': [
    {
      name: 'दो बैलों की कथा',
      lectures: [
        { 
          id: 'L1', 
          title: 'व्याख्या', 
          notesTitle: "व्याख्या नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/5557404%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BF%E0%A4%A4%E0%A4%BF%E0%A4%9C%20%E0%A4%AA%E0%A4%BE%E0%A4%A0%201%20%E0%A4%A6%E0%A5%8B%20%E0%A4%AC%E0%A5%88%E0%A4%B2%E0%A5%8B%E0%A4%82%20%E0%A4%95%E0%A5%80%20%E0%A4%95%E0%A4%A5%E0%A4%BE%20%20%28%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%AE%E0%A4%9A%E0%A4%82%E0%A4%A6%29%20Vyakhya.pdf_%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BF%E0%A4%A4%E0%A4%BF%E0%A4%9C%20%E0%A4%AA%E0%A4%BE%E0%A4%A0%201%20%E0%A4%A6%E0%A5%8B%20%E0%A4%AC%E0%A5%88%E0%A4%B2%E0%A5%8B%E0%A4%82%20%E0%A4%95%E0%A5%80%20%E0%A4%95%E0%A4%A5%E0%A4%BE%20%20%28%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%AE%E0%A4%9A%E0%A4%82%E0%A4%A6%29%20Vyakhya.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4367080/1746106806_8135080863582999/sunny/1746106442282_262131502527749950_video_VOD.m3u8' 
        },
        { 
          id: 'L2', 
          title: 'MCQs', 
          notesTitle: "MCQs नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/1349591%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BF%E0%A4%A4%E0%A4%BF%E0%A4%9C%20%E0%A4%AA%E0%A4%BE%E0%A4%A0%201%20%E0%A4%A6%E0%A5%8B%20%E0%A4%AC%E0%A5%88%E0%A4%B2%E0%A5%8B%E0%A4%82%20%E0%A4%95%E0%A5%80%20%E0%A4%95%E0%A4%A5%E0%A4%BE%20%20%28%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%AE%E0%A4%9A%E0%A4%82%E0%A4%A6%29%20mcqs.pdf_%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BF%E0%A4%A4%E0%A4%BF%E0%A4%9C%20%E0%A4%AA%E0%A4%BE%E0%A4%A0%201%20%E0%A4%A6%E0%A5%8B%20%E0%A4%AC%E0%A5%88%E0%A4%B2%E0%A5%8B%E0%A4%82%20%E0%A4%95%E0%A5%80%20%E0%A4%95%E0%A4%A5%E0%A4%BE%20%20%28%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%AE%E0%A4%9A%E0%A4%82%E0%A4%A6%29%20mcqs.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4366031/1746028505_8319272599648396/sunny/1746027182116_745126388311577200_video_VOD.m3u8' 
        },
        { 
          id: 'L3', 
          title: 'NCERT Solution', 
          notesTitle: "NCERT Solution नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/6858529%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BF%E0%A4%A4%E0%A4%BF%E0%A4%9C%20%E0%A4%AA%E0%A4%BE%E0%A4%A0%201%20%E0%A4%A6%E0%A5%8B%20%E0%A4%AC%E0%A5%88%E0%A4%B2%E0%A5%8B%E0%A4%82%20%E0%A4%95%E0%A5%80%20%E0%A4%95%E0%A4%A5%E0%A4%BE%20%20%28%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%AE%E0%A4%9A%E0%A4%82%E0%A4%A6%29%20ncert%20solution.pdf_%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BF%E0%A4%A4%E0%A4%BF%E0%A4%9C%20%E0%A4%AA%E0%A4%BE%E0%A4%A0%201%20%E0%A4%A6%E0%A5%8B%20%E0%A4%AC%E0%A5%88%E0%A4%B2%E0%A5%8B%E0%A4%82%20%E0%A4%95%E0%A5%80%20%E0%A4%95%E0%A4%A5%E0%A4%BE%20%20%28%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%AE%E0%A4%9A%E0%A4%82%E0%A4%A6%29%20ncert%20solution.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4366032/1746028926_4756110292278530/sunny/1746027291560_828715216555113600_video_VOD.m3u8' 
        },
        { 
          id: 'L4', 
          title: 'Complete Chapter Revision', 
          notesTitle: "Revision नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/1305734%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BF%E0%A4%A4%E0%A4%BF%E0%A4%9C%20%E0%A4%AA%E0%A4%BE%E0%A4%A0%201%20%E0%A4%A6%E0%A5%8B%20%E0%A4%AC%E0%A5%88%E0%A4%B2%E0%A5%8B%E0%A4%82%20%E0%A4%95%E0%A5%80%20%E0%A4%95%E0%A4%A5%E0%A4%BE%20%20%28%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%AE%E0%A4%9A%E0%A4%82%E0%A4%A6%29%20complete%20chapter%20revision.pdf_%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BF%E0%A4%A4%E0%A4%BF%E0%A4%9C%20%E0%A4%AA%E0%A4%BE%E0%A4%A0%201%20%E0%A4%A6%E0%A5%8B%20%E0%A4%AC%E0%A5%88%E0%A4%B2%E0%A5%8B%E0%A4%82%20%E0%A4%95%E0%A5%80%20%E0%A4%95%E0%A4%A5%E0%A4%BE%20%20%28%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%AE%E0%A4%9A%E0%A4%82%E0%A4%A6%29%20complete%20chapter%20revision.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4366030/1746028385_5555840611917236/sunny/1746027030840_510190781786052400_video_VOD.m3u8' 
        }
      ]
    },
    {
      name: 'ल्हासा की ओर',
      lectures: [
        { 
          id: 'L1', 
          title: 'व्याख्या', 
          notesTitle: "व्याख्या नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/767834%E0%A4%B2%E0%A5%8D%E0%A4%B9%E0%A4%BE%E0%A4%B8%E0%A4%BE%20%E0%A4%95%E0%A5%80%20%E0%A4%93%E0%A4%B0%20vyakha.pdf_%E0%A4%B2%E0%A5%8D%E0%A4%B9%E0%A4%BE%E0%A4%B8%E0%A4%BE%20%E0%A4%95%E0%A5%80%20%E0%A4%93%E0%A4%B0%20vyakha.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4376203/1746740285_7107764258422066/sunny/1746717777586_17737771606033458_video_VOD.m3u8' 
        },
        { 
          id: 'L2', 
          title: 'MCQs', 
          notesTitle: "MCQs नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/1197437%E0%A4%B2%E0%A5%8D%E0%A4%B9%E0%A4%BE%E0%A4%B8%E0%A4%BE%20%E0%A4%95%E0%A5%80%20%E0%A4%93%E0%A4%B0%20mcqs.pdf_%E0%A4%B2%E0%A5%8D%E0%A4%B9%E0%A4%BE%E0%A4%B8%E0%A4%BE%20%E0%A4%95%E0%A5%80%20%E0%A4%93%E0%A4%B0%20mcqs.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4376201/1746739924_4759946529826291/sunny/1746717110242_866673604247191900_video_VOD.m3u8' 
        },
        { 
          id: 'L3', 
          title: 'NCERT Solution', 
          notesTitle: "NCERT Solution नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/2994156%E0%A4%B2%E0%A5%8D%E0%A4%B9%E0%A4%BE%E0%A4%B8%E0%A4%BE%20%E0%A4%95%E0%A5%80%20%E0%A4%93%E0%A4%B0%20ncert%20solutions.pdf_%E0%A4%B2%E0%A5%8D%E0%A4%B9%E0%A4%BE%E0%A4%B8%E0%A4%BE%20%E0%A4%95%E0%A5%80%20%E0%A4%93%E0%A4%B0%20ncert%20solutions.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4376202/1746739984_8260503277960936/sunny/1746717515479_844372138106719900_video_VOD.m3u8' 
        },
        { 
          id: 'L4', 
          title: 'Complete Chapter Revision', 
          notesTitle: "Revision नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/3916017%E0%A4%B2%E0%A5%8D%E0%A4%B9%E0%A4%BE%E0%A4%B8%E0%A4%BE%20%E0%A4%95%E0%A5%80%20%E0%A4%93%E0%A4%B0%20ccr.pdf_%E0%A4%B2%E0%A5%8D%E0%A4%B9%E0%A4%BE%E0%A4%B8%E0%A4%BE%20%E0%A4%95%E0%A5%80%20%E0%A4%93%E0%A4%B0%20ccr.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4376200/1746739504_4859201909211251/sunny/1746716721540_653688282678292200_video_VOD.m3u8' 
        }
      ]
    },
    {
      name: 'उपभोक्तावाद की संस्कृति',
      lectures: [
        { 
          id: 'L1', 
          title: 'व्याख्या', 
          notesTitle: "व्याख्या नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/465725984675991740.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4376213/1746743104_8351129771375001/sunny/1746718066694_127223678751488050_video_VOD.m3u8' 
        },
        { 
          id: 'L2', 
          title: 'NCERT Solution', 
          notesTitle: "NCERT Solution नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/403938581338102660.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4376212/1746742805_8696796241526701/sunny/1746717822889_333289814431731650_video_VOD.m3u8' 
        },
        { 
          id: 'L3', 
          title: 'MCQs', 
          notesTitle: "MCQs नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/189689274663830460.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4376211/1746742684_7364011012455828/sunny/1746717519871_770126071727227000_video_VOD.m3u8' 
        },
        { 
          id: 'L4', 
          title: 'Revision', 
          notesTitle: "Revision नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/262781885648999230.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4376210/1746742025_8611897352527872/sunny/1746716746643_661563793766941700_video_VOD.m3u8' 
        }
      ]
    },
    {
      name: 'साँवले सपनों की याद',
      lectures: [
        { 
          id: 'L1', 
          title: 'व्याख्या', 
          notesTitle: "व्याख्या नोट्स", 
          notesLink: ``, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4376207/1746738545_4076596448388957/sunny/1746719415853_826829136546676000_video_VOD.m3u8' 
        },
        { 
          id: 'L2', 
          title: 'NCERT Solution', 
          notesTitle: "NCERT Solution नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/770728368550350300.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4391504/1748103304_2039914802212028/sunny/1748092512827_189480090668304200_video_VOD.m3u8' 
        },
        { 
          id: 'L3', 
          title: 'MCQs', 
          notesTitle: "MCQs नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/3483607%E0%A4%B8%E0%A4%BE%E0%A4%81%E0%A4%B5%E0%A4%B2%E0%A5%87%20%E0%A4%B8%E0%A4%AA%E0%A4%A8%E0%A5%8B%E0%A4%82%20%E0%A4%95%E0%A5%80%20%E0%A4%AF%E0%A4%BE%E0%A4%A6%20-%20MCQs.pdf_%E0%A4%B8%E0%A4%BE%E0%A4%81%E0%A4%B5%E0%A4%B2%E0%A5%87%20%E0%A4%B8%E0%A4%AA%E0%A4%A8%E0%A5%8B%E0%A4%82%20%E0%A4%95%E0%A5%80%20%E0%A4%AF%E0%A4%BE%E0%A4%A6%20-%20MCQs.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4391503/1748102945_9295347327198019/sunny/1748092390814_246902531730459780_video_VOD.m3u8' 
        },
        { 
          id: 'L4', 
          title: 'Revision', 
          notesTitle: "Revision नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/5043723%E0%A4%B8%E0%A4%BE%E0%A4%81%E0%A4%B5%E0%A4%B2%E0%A5%87%20%E0%A4%B8%E0%A4%AA%E0%A4%A8%E0%A5%8B%E0%A4%82%20%E0%A4%95%E0%A5%80%20%E0%A4%AF%E0%A4%BE%E0%A4%A6%20-%20Complete%20chapter%20Revision..pdf_%E0%A4%B8%E0%A4%BE%E0%A4%81%E0%A4%B5%E0%A4%B2%E0%A5%87%20%E0%A4%B8%E0%A4%AA%E0%A4%A8%E0%A5%8B%E0%A4%82%20%E0%A4%95%E0%A5%80%20%E0%A4%AF%E0%A4%BE%E0%A4%A6%20-%20Complete%20chapter%20Revision..pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4391505/1748103846_1872504026232330/sunny/1748092703606_806793085288063500_video_VOD.m3u8' 
        }
      ]
    },
    {
      name: 'दुःख का अधिकार',
      lectures: [
        { 
          id: 'L1', 
          title: 'व्याख्या', 
          notesTitle: "व्याख्या नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/7297203%E0%A4%AA%E0%A4%BE%E0%A4%A0%201%20%E0%A4%A6%E0%A5%81%E0%A4%83%E0%A4%96%20%E0%A4%95%E0%A4%BE%20%E0%A4%85%E0%A4%A7%E0%A4%BF%E0%A4%95%E0%A4%BE%E0%A4%B0%20%28%E0%A4%AF%E0%A4%B6%E0%A4%AA%E0%A4%BE%E0%A4%B2%29%20.pdf_%E0%A4%AA%E0%A4%BE%E0%A4%A0%201%20%E0%A4%A6%E0%A5%81%E0%A4%83%E0%A4%96%20%E0%A4%95%E0%A4%BE%20%E0%A4%85%E0%A4%A7%E0%A4%BF%E0%A4%95%E0%A4%BE%E0%A4%B0%20%28%E0%A4%AF%E0%A4%B6%E0%A4%AA%E0%A4%BE%E0%A4%B2%29%20.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4362878/1745827504_8254022878891386/sunny/1745824657756_449406760596636800_video_VOD.m3u8' 
        },
        { 
          id: 'L2', 
          title: 'MCQs', 
          notesTitle: "MCQs नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/5296424%E0%A4%AA%E0%A4%BE%E0%A4%A0%201%20%E0%A4%A6%E0%A5%81%E0%A4%83%E0%A4%96%20%E0%A4%95%E0%A4%BE%20%E0%A4%85%E0%A4%A7%E0%A4%BF%E0%A4%95%E0%A4%BE%E0%A4%B0%20%28%E0%A4%AF%E0%A4%B6%E0%A4%AA%E0%A4%BE%E0%A4%B2%29%20Multiple%20Choice%20questions.pdf_%E0%A4%AA%E0%A4%BE%E0%A4%A0%201%20%E0%A4%A6%E0%A5%81%E0%A4%83%E0%A4%96%20%E0%A4%95%E0%A4%BE%20%E0%A4%85%E0%A4%A7%E0%A4%BF%E0%A4%95%E0%A4%BE%E0%A4%B0%20%28%E0%A4%AF%E0%A4%B6%E0%A4%AA%E0%A4%BE%E0%A4%B2%29%20Multiple%20Choice%20questions.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4362881/1745828708_8027850534617536/sunny/1745825399600_638178197791770000_video_VOD.m3u8' 
        },
        { 
          id: 'L3', 
          title: 'Revision', 
          notesTitle: "Revision नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/3878617_%E0%A4%AA%E0%A4%BE%E0%A4%A0%201%20%E0%A4%A6%E0%A5%81%E0%A4%83%E0%A4%96%20%E0%A4%95%E0%A4%BE%20%E0%A4%85%E0%A4%A7%E0%A4%BF%E0%A4%95%E0%A4%BE%E0%A4%B0%20%28%E0%A4%AF%E0%A4%B6%E0%A4%AA%E0%A4%BE%E0%A4%B2%29%20Complete%20chapter%20revision%20.pdf__%E0%A4%AA%E0%A4%BE%E0%A4%A0%201%20%E0%A4%A6%E0%A5%81%E0%A4%83%E0%A4%96%20%E0%A4%95%E0%A4%BE%20%E0%A4%85%E0%A4%A7%E0%A4%BF%E0%A4%95%E0%A4%BE%E0%A4%B0%20%28%E0%A4%AF%E0%A4%B6%E0%A4%AA%E0%A4%BE%E0%A4%B2%29%20Complete%20chapter%20revision%20.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4362877/1745828705_3761006170981689/sunny/1745824255110_166106644150187650_video_VOD.m3u8' 
        },
        { 
          id: 'L4', 
          title: 'NCERT Solution', 
          notesTitle: "NCERT Solution नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/285701_%E0%A4%AA%E0%A4%BE%E0%A4%A0%201%20%E0%A4%A6%E0%A5%81%E0%A4%83%E0%A4%96%20%E0%A4%95%E0%A4%BE%20%E0%A4%85%E0%A4%A7%E0%A4%BF%E0%A4%95%E0%A4%BE%E0%A4%B0%20%28%E0%A4%AF%E0%A4%B6%E0%A4%AA%E0%A4%BE%E0%A4%B2%29%20NCERT%20Solutions.pdf__%E0%A4%AA%E0%A4%BE%E0%A4%A0%201%20%E0%A4%A6%E0%A5%81%E0%A4%83%E0%A4%96%20%E0%A4%95%E0%A4%BE%20%E0%A4%85%E0%A4%A7%E0%A4%BF%E0%A4%95%E0%A4%BE%E0%A4%B0%20%28%E0%A4%AF%E0%A4%B6%E0%A4%AA%E0%A4%BE%E0%A4%B2%29%20NCERT%20Solutions.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: '' 
        }
      ]
    },
    {
      name: 'एवरेस्ट मेरी शिखर यात्रा',
      lectures: [
        { 
          id: 'L1', 
          title: 'व्याख्या', 
          notesTitle: "व्याख्या नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/4331394%E0%A4%AA%E0%A4%BE%E0%A4%A0%202%20%E0%A4%8F%E0%A4%B5%E0%A4%B0%E0%A5%87%E0%A4%B8%E0%A5%8D%E0%A4%9F%20_%20%E0%A4%AE%E0%A5%87%E0%A4%B0%E0%A5%80%20%E0%A4%B6%E0%A4%BF%E0%A4%96%E0%A4%B0%20%E0%A4%AF%E0%A4%BE%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%BE%20%28%E0%A4%AC%E0%A4%9A%E0%A5%87%E0%A4%82%E0%A4%A6%E0%A5%8D%E0%A4%B0%E0%A5%80%20%E0%A4%AA%E0%A4%BE%E0%A4%B2%29%20%E0%A4%B5%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%96%E0%A5%8D%E0%A4%AF%E0%A4%BE.pdf_%E0%A4%AA%E0%A4%BE%E0%A4%A0%202%20%E0%A4%8F%E0%A4%B5%E0%A4%B0%E0%A5%87%E0%A4%B8%E0%A5%8D%E0%A4%9F%20_%20%E0%A4%AE%E0%A5%87%E0%A4%B0%E0%A5%80%20%E0%A4%B6%E0%A4%BF%E0%A4%96%E0%A4%B0%20%E0%A4%AF%E0%A4%BE%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%BE%20%28%E0%A4%AC%E0%A4%9A%E0%A5%87%E0%A4%82%E0%A4%A6%E0%A5%8D%E0%A4%B0%E0%A5%80%20%E0%A4%AA%E0%A4%BE%E0%A4%B2%29%20%E0%A4%B5%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%96%E0%A5%8D%E0%A4%AF%E0%A4%BE.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4376173/1746737224_8170206828923258/sunny/1746716296561_520832358582066600_video_VOD.m3u8' 
        },
        { 
          id: 'L2', 
          title: 'NCERT Solution', 
          notesTitle: "NCERT Solution नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/5711449%E0%A4%AA%E0%A4%BE%E0%A4%A0%202%20%E0%A4%8F%E0%A4%B5%E0%A4%B0%E0%A5%87%E0%A4%B8%E0%A5%8D%E0%A4%9F%20_%20%E0%A4%AE%E0%A5%87%E0%A4%B0%E0%A5%80%20%E0%A4%B6%E0%A4%BF%E0%A4%96%E0%A4%B0%20%E0%A4%AF%E0%A4%BE%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%BE%20%28%E0%A4%AC%E0%A4%9A%E0%A5%87%E0%A4%82%E0%A4%A6%E0%A5%8D%E0%A4%B0%E0%A5%80%20%E0%A4%AA%E0%A4%BE%E0%A4%B2%29%20NCERT%20Solutions.pdf_%E0%A4%AA%E0%A4%BE%E0%A4%A0%202%20%E0%A4%8F%E0%A4%B5%E0%A4%B0%E0%A5%87%E0%A4%B8%E0%A5%8D%E0%A4%9F%20_%20%E0%A4%AE%E0%A5%87%E0%A4%B0%E0%A5%80%20%E0%A4%B6%E0%A4%BF%E0%A4%96%E0%A4%B0%20%E0%A4%AF%E0%A4%BE%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%BE%20%28%E0%A4%AC%E0%A4%9A%E0%A5%87%E0%A4%82%E0%A4%A6%E0%A5%8D%E0%A4%B0%E0%A5%80%20%E0%A4%AA%E0%A4%BE%E0%A4%B2%29%20NCERT%20Solutions.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4376172/1746736928_7246616066092919/sunny/1746716190645_451467698255423900_video_VOD.m3u8' 
        },
        { 
          id: 'L3', 
          title: 'MCQs', 
          notesTitle: "MCQs नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/2317788%E0%A4%AA%E0%A4%BE%E0%A4%A0%202%20%E0%A4%8F%E0%A4%B5%E0%A4%B0%E0%A5%87%E0%A4%B8%E0%A5%8D%E0%A4%9F%20_%20%E0%A4%AE%E0%A5%87%E0%A4%B0%E0%A5%80%20%E0%A4%B6%E0%A4%BF%E0%A4%96%E0%A4%B0%20%E0%A4%AF%E0%A4%BE%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%BE%20%28%E0%A4%AC%E0%A4%9A%E0%A5%87%E0%A4%82%E0%A4%A6%E0%A5%8D%E0%A4%B0%E0%A5%80%20%E0%A4%AA%E0%A4%BE%E0%A4%B2%29%20Multiple%20Choice%20questions.pdf_%E0%A4%AA%E0%A4%BE%E0%A4%A0%202%20%E0%A4%8F%E0%A4%B5%E0%A4%B0%E0%A5%87%E0%A4%B8%E0%A5%8D%E0%A4%9F%20_%20%E0%A4%AE%E0%A5%87%E0%A4%B0%E0%A5%80%20%E0%A4%B6%E0%A4%BF%E0%A4%96%E0%A4%B0%20%E0%A4%AF%E0%A4%BE%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%BE%20%28%E0%A4%AC%E0%A4%9A%E0%A5%87%E0%A4%82%E0%A4%A6%E0%A5%8D%E0%A4%B0%E0%A5%80%20%E0%A4%AA%E0%A4%BE%E0%A4%B2%29%20Multiple%20Choice%20questions.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4376171/1746736865_9586660164585563/sunny/1746716102384_431264663935036200_video_VOD.m3u8' 
        },
        { 
          id: 'L4', 
          title: 'Revision', 
          notesTitle: "Revision नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/6015848%E0%A4%AA%E0%A4%BE%E0%A4%A0%202%20%E0%A4%8F%E0%A4%B5%E0%A4%B0%E0%A5%87%E0%A4%B8%E0%A5%8D%E0%A4%9F%20_%20%E0%A4%AE%E0%A5%87%E0%A4%B0%E0%A5%80%20%E0%A4%B6%E0%A4%BF%E0%A4%96%E0%A4%B0%20%E0%A4%AF%E0%A4%BE%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%BE%20%28%E0%A4%AC%E0%A4%9A%E0%A5%87%E0%A4%82%E0%A4%A6%E0%A5%8D%E0%A4%B0%E0%A5%80%20%E0%A4%AA%E0%A4%BE%E0%A4%B2%29%20Complete%20chapter%20revision.pdf_%E0%A4%AA%E0%A4%BE%E0%A4%A0%202%20%E0%A4%8F%E0%A4%B5%E0%A4%B0%E0%A5%87%E0%A4%B8%E0%A5%8D%E0%A4%9F%20_%20%E0%A4%AE%E0%A5%87%E0%A4%B0%E0%A5%80%20%E0%A4%B6%E0%A4%BF%E0%A4%96%E0%A4%B0%20%E0%A4%AF%E0%A4%BE%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%BE%20%28%E0%A4%AC%E0%A4%9A%E0%A5%87%E0%A4%82%E0%A4%A6%E0%A5%8D%E0%A4%B0%E0%A5%80%20%E0%A4%AA%E0%A4%BE%E0%A4%B2%29%20Complete%20chapter%20revision.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4376170/1746731945_5192141045295381/sunny/1746715901439_37622052615082360_video_VOD.m3u8' 
        }
      ]
    },
    {
      name: 'तुम कब जाओगे अतिथि',
      lectures: [
        { 
          id: 'L1', 
          title: 'व्याख्या', 
          notesTitle: "व्याख्या नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/6291233_%E0%A4%AA%E0%A4%BE%E0%A4%A0%203%20%E0%A4%A4%E0%A5%81%E0%A4%AE%20%E0%A4%95%E0%A4%AC%20%E0%A4%9C%E0%A4%BE%E0%A4%93%E0%A4%97%E0%A5%87%2C%20%E0%A4%85%E0%A4%A4%E0%A4%BF%E0%A4%A5%E0%A4%BF%20%28%E0%A4%B6%E0%A4%B0%E0%A4%A6%20%E0%A4%9C%E0%A5%8B%E0%A4%B6%E0%A5%80%29%20%E0%A4%B5%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%96%E0%A5%8D%E0%A4%AF%E0%A4%BE.pdf__%E0%A4%AA%E0%A4%BE%E0%A4%A0%203%20%E0%A4%A4%E0%A5%81%E0%A4%AE%20%E0%A4%95%E0%A4%AC%20%E0%A4%9C%E0%A4%BE%E0%A4%93%E0%A4%97%E0%A5%87%2C%20%E0%A4%85%E0%A4%A4%E0%A4%BF%E0%A4%A5%E0%A4%BF%20%28%E0%A4%B6%E0%A4%B0%E0%A4%A6%20%E0%A4%9C%E0%A5%8B%E0%A4%B6%E0%A5%80%29%20%E0%A4%B5%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%96%E0%A5%8D%E0%A4%AF%E0%A4%BE.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4410207/1749916446_6473700151096159/sunny/1749914254995_525048537454429000_video_VOD240p30.m3u8' 
        },
        { 
          id: 'L2', 
          title: 'NCERT Solution', 
          notesTitle: "NCERT Solution नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/1841557%E0%A4%AA%E0%A4%BE%E0%A4%A0%203%20%E0%A4%A4%E0%A5%81%E0%A4%AE%20%E0%A4%95%E0%A4%AC%20%E0%A4%9C%E0%A4%BE%E0%A4%93%E0%A4%97%E0%A5%87%2C%20%E0%A4%85%E0%A4%A4%E0%A4%BF%E0%A4%A5%E0%A4%BF%20%28%E0%A4%B6%E0%A4%B0%E0%A4%A6%20%E0%A4%9C%E0%A5%8B%E0%A4%B6%E0%A5%80%29%20NCERT%20Solutions%20.pdf_%E0%A4%AA%E0%A4%BE%E0%A4%A0%203%20%E0%A4%A4%E0%A5%81%E0%A4%AE%20%E0%A4%95%E0%A4%AC%20%E0%A4%9C%E0%A4%BE%E0%A4%93%E0%A4%97%E0%A5%87%2C%20%E0%A4%85%E0%A4%A4%E0%A4%BF%E0%A4%A5%E0%A4%BF%20%28%E0%A4%B6%E0%A4%B0%E0%A4%A6%20%E0%A4%9C%E0%A5%8B%E0%A4%B6%E0%A5%80%29%20NCERT%20Solutions%20.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4410210/1749917044_8399600522927768/sunny/1749914529743_742052701283870300_video_VOD720p30.m3u8' 
        },
        { 
          id: 'L3', 
          title: 'MCQs', 
          notesTitle: "MCQs नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/7168573_%E0%A4%AA%E0%A4%BE%E0%A4%A0%203%20%E0%A4%A4%E0%A5%81%E0%A4%AE%20%E0%A4%95%E0%A4%AC%20%E0%A4%9C%E0%A4%BE%E0%A4%93%E0%A4%97%E0%A5%87%2C%20%E0%A4%85%E0%A4%A4%E0%A4%BF%E0%A4%A5%E0%A4%BF%20%28%E0%A4%B6%E0%A4%B0%E0%A4%A6%20%E0%A4%9C%E0%A5%8B%E0%A4%B6%E0%A5%80%29%20Multiple%20Choice%20questions.pdf__%E0%A4%AA%E0%A4%BE%E0%A4%A0%203%20%E0%A4%A4%E0%A5%81%E0%A4%AE%20%E0%A4%95%E0%A4%AC%20%E0%A4%9C%E0%A4%BE%E0%A4%93%E0%A4%97%E0%A5%87%2C%20%E0%A4%85%E0%A4%A4%E0%A4%BF%E0%A4%A5%E0%A4%BF%20%28%E0%A4%B6%E0%A4%B0%E0%A4%A6%20%E0%A4%9C%E0%A5%8B%E0%A4%B6%E0%A5%80%29%20Multiple%20Choice%20questions.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4410209/1749916807_3654632768008049/sunny/1749914455005_175749411760681820_video_VOD720p30.m3u8' 
        },
        { 
          id: 'L4', 
          title: 'Revision', 
          notesTitle: "Revision नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/5462062_%E0%A4%AA%E0%A4%BE%E0%A4%A0%203%20%E0%A4%A4%E0%A5%81%E0%A4%AE%20%E0%A4%95%E0%A4%AC%20%E0%A4%9C%E0%A4%BE%E0%A4%93%E0%A4%97%E0%A5%87%2C%20%E0%A4%85%E0%A4%A4%E0%A4%BF%E0%A4%A5%E0%A4%BF%20%28%E0%A4%B6%E0%A4%B0%E0%A4%A6%20%E0%A4%9C%E0%A5%8B%E0%A4%B6%E0%A5%80%29%20Complete%20chapter%20revision.pdf__%E0%A4%AA%E0%A4%BE%E0%A4%A0%203%20%E0%A4%A4%E0%A5%81%E0%A4%AE%20%E0%A4%95%E0%A4%AC%20%E0%A4%9C%E0%A4%BE%E0%A4%93%E0%A4%97%E0%A5%87%2C%20%E0%A4%85%E0%A4%A4%E0%A4%BF%E0%A4%A5%E0%A4%BF%20%28%E0%A4%B6%E0%A4%B0%E0%A4%A6%20%E0%A4%9C%E0%A5%8B%E0%A4%B6%E0%A5%80%29%20Complete%20chapter%20revision.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4410208/1749916624_4139724354398230/sunny/1749914374150_547188533863034100_video_VOD240p30.m3u8' 
        }
      ]
    },
    {
      name: 'गिल्लू',
      lectures: [
        { 
          id: 'L1', 
          title: 'व्याख्या', 
          notesTitle: "व्याख्या नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/6927770%E0%A4%97%E0%A4%BF%E0%A4%B2%E0%A5%8D%E0%A4%B2%E0%A5%82%20%E0%A4%B5%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%96%E0%A5%8D%E0%A4%AF%E0%A4%BE.pdf_%E0%A4%97%E0%A4%BF%E0%A4%B2%E0%A5%8D%E0%A4%B2%E0%A5%82%20%E0%A4%B5%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%96%E0%A5%8D%E0%A4%AF%E0%A4%BE.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4425429/1751033525_4470078330612893/sunny/1751019596807_108319882873038860_video_VOD720p30.m3u8' 
        },
        { 
          id: 'L2', 
          title: 'NCERT Solution', 
          notesTitle: "NCERT Solution नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/2072197%E0%A4%97%E0%A4%BF%E0%A4%B2%E0%A5%8D%E0%A4%B2%E0%A5%82%20Ncert%20solutions.pdf_%E0%A4%97%E0%A4%BF%E0%A4%B2%E0%A5%8D%E0%A4%B2%E0%A5%82%20Ncert%20solutions.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4425430/1751033886_7367977643649442/sunny/1751019621372_756706376241641600_video_VOD720p30.m3u8' 
        },
        { 
          id: 'L3', 
          title: 'MCQs', 
          notesTitle: "MCQs नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/421425%E0%A4%97%E0%A4%BF%E0%A4%B2%E0%A5%8D%E0%A4%B2%E0%A5%82%20MCQs.pdf_%E0%A4%97%E0%A4%BF%E0%A4%B2%E0%A5%8D%E0%A4%B2%E0%A5%82%20MCQs.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4425427/1751033286_6179233091600334/sunny/1751019549183_184850483201025760_video_VOD720p30.m3u8' 
        },
        { 
          id: 'L4', 
          title: 'Revision', 
          notesTitle: "Revision नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/3447951%E0%A4%97%E0%A4%BF%E0%A4%B2%E0%A5%8D%E0%A4%B2%E0%A5%82%20CCR.pdf_%E0%A4%97%E0%A4%BF%E0%A4%B2%E0%A5%8D%E0%A4%B2%E0%A5%82%20CCR.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4425428/1751033465_5858389494462766/sunny/1751019566861_303626022391680830_video_VOD720p30.m3u8' 
        }
      ]
    },
    {
      name: 'वैज्ञानिक चेतना के वाहक: चंद्रशेखर वेंकट रमन',
      lectures: [
        { 
          id: 'L1', 
          title: 'व्याख्या', 
          notesTitle: "व्याख्या नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/7163076%E0%A4%AA%E0%A4%BE%E0%A4%A0%204%20%E0%A4%B5%E0%A5%88%E0%A4%9C%E0%A5%8D%E0%A4%9E%E0%A4%BE%E0%A4%A8%E0%A4%BF%E0%A4%95%20%E0%A4%9A%E0%A5%87%E0%A4%A4%E0%A4%A8%E0%A4%BE%20%E0%A4%95%E0%A5%87%20%E0%A4%B5%E0%A4%BE%E0%A4%B9%E0%A4%95%20%E0%A4%9A%E0%A4%82%E0%A4%A6%E0%A5%8D%E0%A4%B0%E0%A4%B6%E0%A5%87%E0%A4%96%E0%A4%B0%20%E0%A4%B5%E0%A5%87%E0%A4%82%E0%A4%95%E0%A4%9F%20%E0%A4%B0%E0%A4%BE%E0%A4%AE%E0%A4%A8%E0%A5%8D%20%28%20%E0%A4%A7%E0%A5%80%E0%A4%B0%E0%A4%82%E0%A4%9C%E0%A4%A8%20%E0%A4%AE%E0%A4%BE%E0%A4%B2%E0%A4%B5%E0%A5%87%20%29%20%20L1.pdf_%E0%A4%AA%E0%A4%BE%E0%A4%A0%204%20%E0%A4%B5%E0%A5%88%E0%A4%9C%E0%A5%8D%E0%A4%9E%E0%A4%BE%E0%A4%A8%E0%A4%BF%E0%A4%95%20%E0%A4%9A%E0%A5%87%E0%A4%A4%E0%A4%A8%E0%A4%BE%20%E0%A4%95%E0%A5%87%20%E0%A4%B5%E0%A4%BE%E0%A4%B9%E0%A4%95%20%E0%A4%9A%E0%A4%82%E0%A4%A6%E0%A5%8D%E0%A4%B0%E0%A4%B6%E0%A5%87%E0%A4%96%E0%A4%B0%20%E0%A4%B5%E0%A5%87%E0%A4%82%E0%A4%95%E0%A4%9F%20%E0%A4%B0%E0%A4%BE%E0%A4%AE%E0%A4%A8%E0%A5%8D%20%28%20%E0%A4%A7%E0%A5%80%E0%A4%B0%E0%A4%82%E0%A4%9C%E0%A4%A8%20%E0%A4%AE%E0%A4%BE%E0%A4%B2%E0%A4%B5%E0%A5%87%20%29%20%20L1.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4475676/1751883365_7313415582383447/sunny/1751882143535_681404504893227300_video_VOD720p30.m3u8' 
        },
        { 
          id: 'L2', 
          title: 'NCERT Solution', 
          notesTitle: "NCERT Solution नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/6307453%E0%A4%AA%E0%A4%BE%E0%A4%A0%204%20%E0%A4%B5%E0%A5%88%E0%A4%9C%E0%A5%8D%E0%A4%9E%E0%A4%BE%E0%A4%A8%E0%A4%BF%E0%A4%95%20%E0%A4%9A%E0%A5%87%E0%A4%A4%E0%A4%A8%E0%A4%BE%20%E0%A4%95%E0%A5%87%20%E0%A4%B5%E0%A4%BE%E0%A4%B9%E0%A4%95%20%E0%A4%9A%E0%A4%82%E0%A4%A6%E0%A5%8D%E0%A4%B0%E0%A4%B6%E0%A5%87%E0%A4%96%E0%A4%B0%20%E0%A4%B5%E0%A5%87%E0%A4%82%E0%A4%95%E0%A4%9F%20%E0%A4%B0%E0%A4%BE%E0%A4%AE%E0%A4%A8%E0%A5%8D%20%28%20%E0%A4%A7%E0%A5%80%E0%A4%B0%E0%A4%82%E0%A4%9C%E0%A4%A8%20%E0%A4%AE%E0%A4%BE%E0%A4%B2%E0%A4%B5%E0%A5%87%20%29%20%20L2.pdf_%E0%A4%AA%E0%A4%BE%E0%A4%A0%204%20%E0%A4%B5%E0%A5%88%E0%A4%9C%E0%A5%8D%E0%A4%9E%E0%A4%BE%E0%A4%A8%E0%A4%BF%E0%A4%95%20%E0%A4%9A%E0%A5%87%E0%A4%A4%E0%A4%A8%E0%A4%BE%20%E0%A4%95%E0%A5%87%20%E0%A4%B5%E0%A4%BE%E0%A4%B9%E0%A4%95%20%E0%A4%9A%E0%A4%82%E0%A4%A6%E0%A5%8D%E0%A4%B0%E0%A4%B6%E0%A5%87%E0%A4%96%E0%A4%B0%20%E0%A4%B5%E0%A5%87%E0%A4%82%E0%A4%95%E0%A4%9F%20%E0%A4%B0%E0%A4%BE%E0%A4%AE%E0%A4%A8%E0%A5%8D%20%28%20%E0%A4%A7%E0%A5%80%E0%A4%B0%E0%A4%82%E0%A4%9C%E0%A4%A8%20%E0%A4%AE%E0%A4%BE%E0%A4%B2%E0%A4%B5%E0%A5%87%20%29%20%20L2.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4475677/1751883368_5282914698466228/sunny/1751883079221_809102413540629900_video_VOD720p30.m3u8' 
        },
        { 
          id: 'L3', 
          title: 'Revision', 
          notesTitle: "Revision नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/2431506%E0%A4%AA%E0%A4%BE%E0%A4%A0%204%20%E0%A4%B5%E0%A5%88%E0%A4%9C%E0%A5%8D%E0%A4%9E%E0%A4%BE%E0%A4%A8%E0%A4%BF%E0%A4%95%20%E0%A4%9A%E0%A5%87%E0%A4%A4%E0%A4%A8%E0%A4%BE%20%E0%A4%95%E0%A5%87%20%E0%A4%B5%E0%A4%BE%E0%A4%B9%E0%A4%95%20%E0%A4%9A%E0%A4%82%E0%A4%A6%E0%A5%8D%E0%A4%B0%E0%A4%B6%E0%A5%87%E0%A4%96%E0%A4%B0%20%E0%A4%B5%E0%A5%87%E0%A4%82%E0%A4%95%E0%A4%9F%20%E0%A4%B0%E0%A4%BE%E0%A4%AE%E0%A4%A8%E0%A5%8D%20%28%20%E0%A4%A7%E0%A5%80%E0%A4%B0%E0%A4%82%E0%A4%9C%E0%A4%A8%20%E0%A4%AE%E0%A4%BE%E0%A4%B2%E0%A4%B5%E0%A5%87%20%29%20%20L3.pdf_%E0%A4%AA%E0%A4%BE%E0%A4%A0%204%20%E0%A4%B5%E0%A5%88%E0%A4%9C%E0%A5%8D%E0%A4%9E%E0%A4%BE%E0%A4%A8%E0%A4%BF%E0%A4%95%20%E0%A4%9A%E0%A5%87%E0%A4%A4%E0%A4%A8%E0%A4%BE%20%E0%A4%95%E0%A5%87%20%E0%A4%B5%E0%A4%BE%E0%A4%B9%E0%A4%95%20%E0%A4%9A%E0%A4%82%E0%A4%A6%E0%A5%8D%E0%A4%B0%E0%A4%B6%E0%A5%87%E0%A4%96%E0%A4%B0%20%E0%A4%B5%E0%A5%87%E0%A4%82%E0%A4%95%E0%A4%9F%20%E0%A4%B0%E0%A4%BE%E0%A4%AE%E0%A4%A8%E0%A5%8D%20%28%20%E0%A4%A7%E0%A5%80%E0%A4%B0%E0%A4%82%E0%A4%9C%E0%A4%A8%20%E0%A4%AE%E0%A4%BE%E0%A4%B2%E0%A4%B5%E0%A5%87%20%29%20%20L3.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4475678/1751883606_5792507950901064/sunny/1751883099626_231226812225187940_video_VOD720p30.m3u8' 
        },
        { 
          id: 'L4', 
          title: 'MCQs', 
          notesTitle: "MCQs नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/7205163%E0%A4%AA%E0%A4%BE%E0%A4%A0%204%20%E0%A4%B5%E0%A5%88%E0%A4%9C%E0%A5%8D%E0%A4%9E%E0%A4%BE%E0%A4%A8%E0%A4%BF%E0%A4%95%20%E0%A4%9A%E0%A5%87%E0%A4%A4%E0%A4%A8%E0%A4%BE%20%E0%A4%95%E0%A5%87%20%E0%A4%B5%E0%A4%BE%E0%A4%B9%E0%A4%95%20%E0%A4%9A%E0%A4%82%E0%A4%A6%E0%A5%8D%E0%A4%B0%E0%A4%B6%E0%A5%87%E0%A4%96%E0%A4%B0%20%E0%A4%B5%E0%A5%87%E0%A4%82%E0%A4%95%E0%A4%9F%20%E0%A4%B0%E0%A4%BE%E0%A4%AE%E0%A4%A8%E0%A5%8D%20%28%20%E0%A4%A7%E0%A5%80%E0%A4%B0%E0%A4%82%E0%A4%9C%E0%A4%A8%20%E0%A4%AE%E0%A4%BE%E0%A4%B2%E0%A4%B5%E0%A5%87%20%29%20%20L4.pdf_%E0%A4%AA%E0%A4%BE%E0%A4%A0%204%20%E0%A4%B5%E0%A5%88%E0%A4%9C%E0%A5%8D%E0%A4%9E%E0%A4%BE%E0%A4%A8%E0%A4%BF%E0%A4%95%20%E0%A4%9A%E0%A5%87%E0%A4%A4%E0%A4%A8%E0%A4%BE%20%E0%A4%95%E0%A5%87%20%E0%A4%B5%E0%A4%BE%E0%A4%B9%E0%A4%95%20%E0%A4%9A%E0%A4%82%E0%A4%A6%E0%A5%8D%E0%A4%B0%E0%A4%B6%E0%A5%87%E0%A4%96%E0%A4%B0%20%E0%A4%B5%E0%A5%87%E0%A4%82%E0%A4%95%E0%A4%9F%20%E0%A4%B0%E0%A4%BE%E0%A4%AE%E0%A4%A8%E0%A5%8D%20%28%20%E0%A4%A7%E0%A5%80%E0%A4%B0%E0%A4%82%E0%A4%9C%E0%A4%A8%20%E0%A4%AE%E0%A4%BE%E0%A4%B2%E0%A4%B5%E0%A5%87%20%29%20%20L4.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4475684/1751883845_2050912850803803/sunny/1751883753005_237968677955589380_video_VOD720p30.m3u8' 
        }
      ]
    },
    {
     name: 'प्रेमचंद के फटे जूते',
      lectures: [
        { 
          id: 'L1', 
          title: 'व्याख्या', 
          notesTitle: "व्याख्या नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/4309893%E0%A4%AA%E0%A4%BE%E0%A4%A0%205%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%AE%E0%A4%9A%E0%A4%82%E0%A4%A6%20%E0%A4%95%E0%A5%87%20%E0%A4%AB%E0%A4%9F%E0%A5%87%20%E0%A4%9C%E0%A5%82%E0%A4%A4%E0%A5%87%20%28%E0%A4%B9%E0%A4%B0%E0%A4%BF%E0%A4%B6%E0%A4%82%E0%A4%95%E0%A4%B0%20%E0%A4%AA%E0%A4%B0%E0%A4%B8%E0%A4%BE%E0%A4%88%29%20.pdf_%E0%A4%AA%E0%A4%BE%E0%A4%A0%205%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%AE%E0%A4%9A%E0%A4%82%E0%A4%A6%20%E0%A4%95%E0%A5%87%20%E0%A4%AB%E0%A4%9F%E0%A5%87%20%E0%A4%9C%E0%A5%82%E0%A4%A4%E0%A5%87%20%28%E0%A4%B9%E0%A4%B0%E0%A4%BF%E0%A4%B6%E0%A4%82%E0%A4%95%E0%A4%B0%20%E0%A4%AA%E0%A4%B0%E0%A4%B8%E0%A4%BE%E0%A4%88%29%20.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4475600/1751881385_6432026688525524/sunny/1751880968284_161990567353541120_video_VOD720p30.m3u8' 
        },
        { 
          id: 'L2', 
          title: 'NCERT Solution', 
          notesTitle: "NCERT Solution नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/139449%E0%A4%AA%E0%A4%BE%E0%A4%A0%205%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%AE%E0%A4%9A%E0%A4%82%E0%A4%A6%20%E0%A4%95%E0%A5%87%20%E0%A4%AB%E0%A4%9F%E0%A5%87%20%E0%A4%9C%E0%A5%82%E0%A4%A4%E0%A5%87%20%28%E0%A4%B9%E0%A4%B0%E0%A4%BF%E0%A4%B6%E0%A4%82%E0%A4%95%E0%A4%B0%20%E0%A4%AA%E0%A4%B0%E0%A4%B8%E0%A4%BE%E0%A4%88%29%20_%20L2.pdf_%E0%A4%AA%E0%A4%BE%E0%A4%A0%205%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%AE%E0%A4%9A%E0%A4%82%E0%A4%A6%20%E0%A4%95%E0%A5%87%20%E0%A4%AB%E0%A4%9F%E0%A5%87%20%E0%A4%9C%E0%A5%82%E0%A4%A4%E0%A5%87%20%28%E0%A4%B9%E0%A4%B0%E0%A4%BF%E0%A4%B6%E0%A4%82%E0%A4%95%E0%A4%B0%20%E0%A4%AA%E0%A4%B0%E0%A4%B8%E0%A4%BE%E0%A4%88%29%20_%20L2.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4475601/1751881388_1740351658395741/sunny/1751881037711_202939645189069630_video_VOD720p30.m3u8' 
        },
        { 
          id: 'L3', 
          title: 'Revision', 
          notesTitle: "Revision नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/1552415%E0%A4%AA%E0%A4%BE%E0%A4%A0%205%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%AE%E0%A4%9A%E0%A4%82%E0%A4%A6%20%E0%A4%95%E0%A5%87%20%E0%A4%AB%E0%A4%9F%E0%A5%87%20%E0%A4%9C%E0%A5%82%E0%A4%A4%E0%A5%87%20%28%E0%A4%B9%E0%A4%B0%E0%A4%BF%E0%A4%B6%E0%A4%82%E0%A4%95%E0%A4%B0%20%E0%A4%AA%E0%A4%B0%E0%A4%B8%E0%A4%BE%E0%A4%88%29%20_%20L3.pdf_%E0%A4%AA%E0%A4%BE%E0%A4%A0%205%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%AE%E0%A4%9A%E0%A4%82%E0%A4%A6%20%E0%A4%95%E0%A5%87%20%E0%A4%AB%E0%A4%9F%E0%A5%87%20%E0%A4%9C%E0%A5%82%E0%A4%A4%E0%A5%87%20%28%E0%A4%B9%E0%A4%B0%E0%A4%BF%E0%A4%B6%E0%A4%82%E0%A4%95%E0%A4%B0%20%E0%A4%AA%E0%A4%B0%E0%A4%B8%E0%A4%BE%E0%A4%88%29%20_%20L3.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4475606/1751882106_5941409968265029/sunny/1751881402501_842713970940805400_video_VOD720p30.m3u8' 
        },
        { 
          id: 'L4', 
          title: 'MCQs', 
          notesTitle: "MCQs नोट्स", 
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/4017143%E0%A4%AA%E0%A4%BE%E0%A4%A0%205%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%AE%E0%A4%9A%E0%A4%82%E0%A4%A6%20%E0%A4%95%E0%A5%87%20%E0%A4%AB%E0%A4%9F%E0%A5%87%20%E0%A4%9C%E0%A5%82%E0%A4%A4%E0%A5%87%20%28%E0%A4%B9%E0%A4%B0%E0%A4%BF%E0%A4%B6%E0%A4%82%E0%A4%95%E0%A4%B0%20%E0%A4%AA%E0%A4%B0%E0%A4%B8%E0%A4%BE%E0%A4%88%29%20_%20L4.pdf_%E0%A4%AA%E0%A4%BE%E0%A4%A0%205%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%AE%E0%A4%9A%E0%A4%82%E0%A4%A6%20%E0%A4%95%E0%A5%87%20%E0%A4%AB%E0%A4%9F%E0%A5%87%20%E0%A4%9C%E0%A5%82%E0%A4%A4%E0%A5%87%20%28%E0%A4%B9%E0%A4%B0%E0%A4%BF%E0%A4%B6%E0%A4%82%E0%A4%95%E0%A4%B0%20%E0%A4%AA%E0%A4%B0%E0%A4%B8%E0%A4%BE%E0%A4%88%29%20_%20L4.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4475602/1751882045_5797818455917674/sunny/1751881090431_764885094765959200_video_VOD720p30.m3u8' 
        }
      ]
    },
    {
      name: 'शुक्रतारे के समान',
      lectures: [
        { id: 'L1', title: 'शुक्रतारे के समान 1', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4483060/1752597905_3852082182304028/sunny/1752591603615_214089385433062430_video_VOD720p30.m3u8' },
        { id: 'L2', title: 'शुक्रतारे के समान 2', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4483059/1752597846_8132733717328630/sunny/1752591560616_83591436448876800_video_VOD720p30.m3u8' },
        { id: 'L3', title: 'शुक्रतारे के समान 3', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4483057/1752597006_6346764770550734/sunny/1752591428632_140539731125972000_video_VOD720p30.m3u8' },
        { id: 'L4', title: 'शुक्रतारे के समान 4', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4483058/1752597486_9387708529551132/sunny/1752591520534_536861725686827140_video_VOD720p30.m3u8' },
      ]
    },
    {
      name: 'इस जल प्रलय में',
      lectures: [
        { id: 'L1', title: 'इस जल प्रलय में 1', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4483875/1752672846_4552028801680913/sunny/1752668025641_702995260423636400_video_VOD720p30.m3u8' },
        { id: 'L2', title: 'इस जल प्रलय में 2', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4482636/1752575826_1220129822502829/sunny/1752573259028_714090343353667500_video_VOD720p30.m3u8' },
        { id: 'L3', title: 'इस जल प्रलय में 3', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4482637/1752576066_4895973779404768/sunny/1752573316829_245310935686288000_video_VOD720p30.m3u8' },
        { id: 'L4', title: 'इस जल प्रलय में 4', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4482635/1752575765_9564347718739844/sunny/1752573238537_149668693899733150_video_VOD720p30.m3u8' },
      ]
    },
    {
      name: 'रैदास के पद',
      lectures: [
        { id: 'L1', title: 'रैदास के पद 1', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4483056/1752596826_5283559306155690/sunny/1752591327162_259505734469819800_video_VOD720p30.m3u8' },
        { id: 'L2', title: 'रैदास के पद 2', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4483055/1752596586_2076988591833941/sunny/1752591296491_290533096009535100_video_VOD720p30.m3u8' },
        { id: 'L3', title: 'रैदास के पद 3', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4483053/1752595746_2336621769657682/sunny/1752591163052_173835360387712500_video_VOD720p30.m3u8' },
      ]
    }
  ],
  'Sanskrit': [
      {
        name: "Overview",
        lectures: [
          {
            id: "sanskrit-overview",
            title: "Overview",
            videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4392872/1748271368_9740389774405919/sunny/1748265761999_582795700698031100_video_VOD.m3u8",
            notesLink: "https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/25606539th%20Sanskrit%20Overview.pdf_9th%20Sanskrit%20Overview.pdf",
            videoEmbedType: 'hls'
          }
        ]
      },
      {
        name: "भारतीयवसंतगीत:",
        lectures: [
          {
            id: "ch1-l1",
            title: "Lecture 1",
            videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4392868/1748270527_4609550263536304/sunny/1748265146882_510695044544125060_video_VOD.m3u8",
            notesLink: "https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/6303001CH%20-01%20-%20%E0%A4%AD%E0%A4%BE%E0%A4%B0%E0%A4%A4%E0%A5%80%E0%A4%B5%E0%A4%B8%E0%A4%A8%E0%A5%8D%E0%A4%A4%E0%A4%97%E0%A5%80%E0%A4%A4%E0%A4%BF%E0%A4%83%20Explanation.pdf_CH%20-01%20-%20%E0%A4%AD%E0%A4%BE%E0%A4%B0%E0%A4%A4%E0%A5%80%E0%A4%B5%E0%A4%B8%E0%A4%A8%E0%A5%8D%E0%A4%A4%E0%A4%97%E0%A5%80%E0%A4%A4%E0%A4%BF%E0%A4%83%20Explanation.pdf",
            videoEmbedType: 'hls'
          },
          {
            id: "ch1-l2",
            title: "Lecture 2",
            videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4392869/1748270646_5088353861174354/sunny/1748265312219_828479133307742100_video_VOD.m3u8",
            notesLink: "https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/5530169CH%20-01%20-%20%E0%A4%AD%E0%A4%BE%E0%A4%B0%E0%A4%A4%E0%A5%80%E0%A4%B5%E0%A4%B8%E0%A4%A8%E0%A5%8D%E0%A4%A4%E0%A4%97%E0%A5%80%E0%A4%A4%E0%A4%BF%E0%A4%83%20NCERT.pdf_CH%20-01%20-%20%E0%A4%AD%E0%A4%BE%E0%A4%B0%E0%A4%A4%E0%A5%80%E0%A4%B5%E0%A4%B8%E0%A4%A8%E0%A5%8D%E0%A4%A4%E0%A4%97%E0%A5%80%E0%A4%A4%E0%A4%BF%E0%A4%83%20NCERT.pdf",
            videoEmbedType: 'hls'
          }
        ]
      },
      {
        name: "स्वर्णकाकः",
        lectures: [
          {
            id: "ch2-l1",
            title: "Lecture 1",
            videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4392870/1748270705_8950762022038790/sunny/1748265442814_317656173101077060_video_VOD480p30.m3u8",
            notesLink: "https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/5092125CH%20-02%20-%20%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A4%B0%E0%A5%8D%E0%A4%A3%E0%A4%95%E0%A4%BE%E0%A4%95%E0%A4%83%20%20Explanation.pdf_CH%20-02%20-%20%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A4%B0%E0%A5%8D%E0%A4%A3%E0%A4%95%E0%A4%BE%E0%A4%95%E0%A4%83%20%20Explanation.pdf",
            videoEmbedType: 'hls'
          },
          {
            id: "ch2-l2",
            title: "Lecture 2",
            videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4392871/1748271185_1836230378802404/sunny/1748265603321_322332742682814600_video_VOD360p30.m3u8",
            notesLink: "https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/3396941CH%20-02%20-%20%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A4%B0%E0%A5%8D%E0%A4%A3%E0%A4%95%E0%A4%BE%E0%A4%95%E0%A4%83%20%20NCERT.pdf_CH%20-02%20-%20%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A4%B0%E0%A5%8D%E0%A4%A3%E0%A4%95%E0%A4%BE%E0%A4%95%E0%A4%83%20%20NCERT.pdf",
            videoEmbedType: "hls"
          }
        ]
      },
      {
        name: "गोदोहनम्",
        lectures: [
          {
            id: "ch3-l1",
            title: "Lecture 1",
            videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4409087/1749828127_6997760553008653/sunny/1749809491176_234362182317603900_video_VOD720p30.m3u8",
            notesLink: "https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/5779980CH%20-03%20-%20%E0%A4%97%E0%A5%8B%E0%A4%A6%E0%A5%8B%E0%A4%B9%E0%A4%A8%E0%A4%AE%E0%A5%8D%20Explanation.pdf_CH%20-03%20-%20%E0%A4%97%E0%A5%8B%E0%A4%A6%E0%A5%8B%E0%A4%B9%E0%A4%A8%E0%A4%AE%E0%A5%8D%20Explanation.pdf",
            videoEmbedType: 'hls'
          },
          {
            id: "ch3-l2",
            title: "Lecture 2",
            videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4409088/1749829268_4900035308227741/sunny/1749810507115_361302695792077100_video_VOD720p30.m3u8",
            notesLink: "https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/6528958CH%20-03%20-%20%E0%A4%97%E0%A5%8B%E0%A4%A6%E0%A5%8B%E0%A4%B9%E0%A4%A8%E0%A4%AE%E0%A5%8D%20NCERT.pdf_CH%20-03%20-%20%E0%A4%97%E0%A5%8B%E0%A4%A6%E0%A5%8B%E0%A4%B9%E0%A4%A8%E0%A4%AE%E0%A5%8D%20NCERT.pdf",
            videoEmbedType: 'hls'
          }
        ]
      },
      {
        name: "सूक्तिमौक्तिकम्",
        lectures: [
          {
            id: "ch4-l1",
            title: "Lecture 1",
            videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4409089/1749829325_9144056009665889/sunny/1749810866747_332716238922341760_video_VOD720p30.m3u8",
            notesLink: "https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/2956430CH%20-04%20-%20%E0%A4%B8%E0%A5%82%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BF%E0%A4%AE%E0%A5%8C%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BF%E0%A4%95%E0%A4%AE%E0%A5%8D%20Explanation.pdf_CH%20-04%20-%20%E0%A4%B8%E0%A5%82%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BF%E0%A4%AE%E0%A5%8C%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BF%E0%A4%95%E0%A4%AE%E0%A5%8D%20Explanation.pdf",
            videoEmbedType: 'hls'
          },
          {
            id: "ch4-l2",
            title: "Lecture 2",
            videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4409090/1749829625_8692173308206863/sunny/1749811763102_517085010537473700_video_VOD720p30.m3u8",
            notesLink: "https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/636024CH%20-04%20-%20%E0%A4%B8%E0%A5%82%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BF%E0%A4%AE%E0%A5%8C%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BF%E0%A4%95%E0%A4%AE%E0%A5%8D%20NCERT.pdf_CH%20-04%20-%20%E0%A4%B8%E0%A5%82%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BF%E0%A4%AE%E0%A5%8C%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BF%E0%A4%95%E0%A4%AE%E0%A5%8D%20NCERT.pdf",
            videoEmbedType: 'hls'
          }
        ]
      },
      {
        name: "भ्रांतो बालः",
        lectures: [
          {
            id: 'ch5-l1',
            title: 'Lecture 1',
            videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4409091/1749829507_8740325201399211/sunny/1749812227248_732509357829837400_video_VOD720p30.m3u8',
            notesLink: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/2041012CH%20-05%20-%20%E0%A4%AD%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%A8%E0%A5%8D%E0%A4%A4%E0%A5%8B%20%E0%A4%AC%E0%A4%BE%E0%A4%B2%E0%A4%83%20Explanation.pdf_CH%20-05%20-%20%E0%A4%AD%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%A8%E0%A5%8D%E0%A4%A4%E0%A5%8B%20%E0%A4%AC%E0%A4%BE%E0%A4%B2%E0%A4%83%20Explanation.pdf',
            videoEmbedType: 'hls'
          },
          {
            id: 'ch5-l2',
            title: 'Lecture 2',
            videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4409092/1749830166_1527555170267367/sunny/1749812696243_858399658770064500_video_VOD240p30.m3u8',
            notesLink: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/2290956CH%20-05%20-%20%E0%A4%AD%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%A8%E0%A5%8D%E0%A4%A4%E0%A5%8B%20%E0%A4%AC%E0%A4%BE%E0%A4%B2%E0%A4%83%20NCERT.pdf_CH%20-05%20-%20%E0%A4%AD%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%A8%E0%A5%8D%E0%A4%A4%E0%A5%8B%20%E0%A4%AC%E0%A4%BE%E0%A4%B2%E0%A4%83%20NCERT.pdf',
            videoEmbedType: 'hls'
          }
        ]
      },
      {
        name: "लौहतुला",
        lectures: [
          {
            id: 'ch6-l1',
            title: 'Lecture 1',
            videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4479720/1752231606_2574691960784936/sunny/1752223072130_185917871452662080_video_VOD720p30.m3u8',
            notesLink: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/5755169CH%20-06%20-%20%E0%A4%B2%E0%A5%8C%E0%A4%B9%E0%A4%A4%E0%A5%81%E0%A4%B2%E0%A4%BE%20%20Explanation.pdf_CH%20-06%20-%20%E0%A4%B2%E0%A5%8C%E0%A4%B9%E0%A4%A4%E0%A5%81%E0%A4%B2%E0%A4%BE%20%20Explanation.pdf',
            videoEmbedType: 'hls'
          },
          {
            id: 'ch6-notes-only',
            title: 'लौहतुला Ncert',
            notesLink: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/1390368CH%20-06%20-%20%E0%A4%B2%E0%A5%8C%E0%A4%B9%E0%A4%A4%E0%A5%81%E0%A4%B2%E0%A4%BE%20%20NCERT.pdf_CH%20-06%20-%20%E0%A4%B2%E0%A5%8C%E0%A4%B9%E0%A4%A4%E0%A5%81%E0%A4%B2%E0%A4%BE%20%20NCERT.pdf'
          }
        ]
      },
      {
        name: "सिकतासेतुः",
        lectures: [
          {
            id: 'ch7-l1',
            title: 'Lecture 1',
            videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4479721/1752231666_2040612629205335/sunny/1752223404070_116203473861998910_video_VOD720p30.m3u8',
            videoEmbedType: 'hls'
          }
        ]
      }
  ]
}
    
