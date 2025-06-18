
// src/lib/aarambh9-data.ts
import type { CourseContentMap, Lecture } from './course-utils';
import { slugify } from './course-utils';

const aarambh9BasePath = '/assets/courses/aarambh9'; // This path isn't used if notes/videos are #

const itTopicsForClass9and10: CourseContentMap['IT'] = [
  {
    name: "Overview",
    lectures: [
      {
        id: "L1",
        title: "Overview",
        videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4391690/1748179084_2580180814420977/sunny/1748177591970_70156498151999930_video_VOD720p30.m3u8",
        notesLink: "", // from null
        videoEmbedType: 'hls'
      }
    ]
  },
  {
    name: "Communication Skills",
    lectures: [
      {
        id: "L2",
        title: "Communication Skills - L1",
        videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4391691/1748179089_8667406066067348/sunny/1748177660740_217256690396284670_video_VOD720p30.m3u8",
        notesLink: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/563827473449322750.pdf",
        videoEmbedType: 'hls'
      },
      {
        id: "L3",
        title: "Communication Skills - L2",
        videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4393991/1748364784_5017725046609362/sunny/1748356442252_86529907763754190_video_VOD720p30.m3u8",
        notesLink: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/37833447878276420.pdf",
        videoEmbedType: 'hls'
      }
    ]
  },
  {
    name: "Self Management Skills",
    lectures: [
      {
        id: "L4",
        title: "Self Management - L1",
        videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4398520/1748854269_7032334158082272/sunny/1748854130932_455431202240548030_video_VOD720p30.m3u8",
        notesLink: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/596857939255353100.pdf",
        videoEmbedType: 'hls'
      },
      {
        id: "L5",
        title: "Self Management - L2",
        videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4403235/1749235927_6400627130495496/sunny/1749222493198_533557279449811200_video_VOD720p30.m3u8",
        notesLink: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/898042366895235000.pdf",
        videoEmbedType: 'hls'
      },
      {
        id: "L6",
        title: "Self Management - L3",
        videoEmbedUrl: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4411250/1750089971_2490412765566086/sunny/1750078811761_514574969298403000_video_VOD720p30.m3u8",
        notesLink: "https://drive.google.com/file/d/116WTsVxjbJVHG6YAvxDxpuRUGSheAUqC/view?usp=drivesdk",
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
        { id: 'L1', title: 'Motion L1', notesLink: `#`, videoEmbedType: 'youtube', videoEmbedUrl: 'https://www.youtube.com/live/dmgct2gWAJY?si=9lSqUy3LCKKZjlR8' },
        { id: 'L2', title: 'Motion L2', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357724/174532620129898296383/174532620129898296383_8296383.m3u8' },
        { id: 'L3', title: 'Motion L3', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4359011/174542283188648296383/174542283188648296383_8296383.m3u8' },
        { id: 'L4', title: 'Motion L4', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4363242/174584458672078296383/174584458672078296383_8296383.m3u8' },
        { id: 'L5', title: 'Motion L5', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4364523/174592976773988296383/174592976773988296383_8296383.m3u8' },
        { id: 'L6', title: 'Motion L6', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4366027/174602777136308296383/174602777136308296383_8296383.m3u8' },
        { id: 'L7', title: 'Motion L7', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4372218/174645099842398296383/174645099842398296383_8296383.m3u8' },
      ]
    },
    {
      name: 'Matter in our Surroundings',
      lectures: [
        { id: 'L1', title: 'Matter in our Surroundings L1', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4373763/174653575278717555169/174653575278717555169_7555169.m3u8' },
        { id: 'L2', title: 'Matter in our Surroundings L2', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4375004/174663371989087555169/174663371989087555169_7555169.m3u8' },
        { id: 'L3', title: 'Matter in our Surroundings L3', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4379021/174705453261387555169/174705453261387555169_7555169.m3u8' },
        { id: 'L4', title: 'Matter in our Surroundings L4', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4380507/174714048756637555169/174714048756637555169_7555169.m3u8' },
        { id: 'L5', title: 'Matter in our Surroundings L5', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4381981/174723737820747555169/174723737820747555169_7555169.m3u8' },
      ]
    },
    {
      name: 'Is matter around us pure?',
      lectures: [
        { id: 'L1', title: 'Is matter around us pure? L1', notesLink: `${aarambh9BasePath}/science/${slugify('Is matter around us pure?')}/notes/L1.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4406208/174956007294357555169/index_4.m3u8' },
        { id: 'L2', title: 'Is matter around us pure? L2', notesLink: `${aarambh9BasePath}/science/${slugify('Is matter around us pure?')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4407492/174965677724307555169/index_4.m3u8' },
        { id: 'L3', title: 'Is matter around us pure? L3', notesLink: `${aarambh9BasePath}/science/${slugify('Is matter around us pure?')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4411204/175007761623082764802/index_5.m3u8' },
      ]
    },
    {
      name: 'The Fundamental Unit of Life',
      lectures: [
        { id: 'L1', title: 'The Fundamental Unit of Life L1', notesLink: `${aarambh9BasePath}/science/${slugify('The Fundamental Unit of Life')}/notes/L1.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4385663/174765778737748296383/174765778737748296383_8296383.m3u8' },
        { id: 'L2', title: 'The Fundamental Unit of Life L2', notesLink: `${aarambh9BasePath}/science/${slugify('The Fundamental Unit of Life')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4388166/174784311082348296383/174784311082348296383_8296383.m3u8' },
        { id: 'L3', title: 'The Fundamental Unit of Life L3', notesLink: `${aarambh9BasePath}/science/${slugify('The Fundamental Unit of Life')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4392729/174826422289318296383/index_4.m3u8' },
        { id: 'L4', title: 'The Fundamental Unit of Life L4', notesLink: `${aarambh9BasePath}/science/${slugify('The Fundamental Unit of Life')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4393920/174834967737708296383/index_1.m3u8' },
        { id: 'L5', title: 'The Fundamental Unit of Life L5', notesLink: `${aarambh9BasePath}/science/${slugify('The Fundamental Unit of Life')}/notes/L5.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4395109/174844706284808296383/index_1.m3u8' },
        { id: 'L6', title: 'The Fundamental Unit of Life L6', notesLink: `${aarambh9BasePath}/science/${slugify('The Fundamental Unit of Life')}/notes/L6.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4404108/174931141517868296383/174931141517868296383_8296383.m3u8' },
      ]
    },
  ],
  'Social Science': [
    {
      name: 'The French Revolution',
      lectures: [
        { id: 'L1', title: 'The French Revolution L1', notesLink: `#`, videoEmbedType: 'youtube', videoEmbedUrl: 'https://www.youtube.com/live/EDMXz3jVgZA?si=BvCXav6zfaUMg1UT' },
        { id: 'L2', title: 'The French Revolution L2', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4359911/174549813759727880624/174549813759727880624_7880624.m3u8' },
        { id: 'L3', title: 'The French Revolution L3', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4364774/174594113722007880624/174594113722007880624_7880624.m3u8' },
        { id: 'L4', title: 'The French Revolution L4', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4365809/174601655378227880624/174601655378227880624_7880624.m3u8' },
        { id: 'L5', title: 'The French Revolution L5', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4366987/174610309713617880624/174610309713617880624_7880624.m3u8' },
        { id: 'L6', title: 'The French Revolution L6', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4372289/174645974230447880624/174645974230447880624_7880624.m3u8' },
        { id: 'L7', title: 'The French Revolution L7', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4373916/174654612513167880624/174654612513167880624_7880624.m3u8' },
        { id: 'L8', title: 'The French Revolution L8', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4374872/174662189759057880624/174662189759057880624_7880624.m3u8' },
      ]
    },
    {
      name: 'India - Size and Location',
      lectures: [
        { id: 'L1', title: 'India - Size and Location L1', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4379155/174706443135147880624/174706443135147880624_7880624.m3u8' },
        { id: 'L2', title: 'India - Size and Location L2', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4385836/174766937560807880624/174766937560807880624_7880624.m3u8' },
        { id: 'L3', title: 'India - Size and Location L3', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4387074/174775592115227880624/174775592115227880624_7880624.m3u8' },
        { id: 'L4', title: 'India - Size and Location L4', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4388030/174783135735827880624/174783135735827880624_7880624.m3u8' },
      ]
    },
    {
      name: 'The Story of Village Palampur',
      lectures: [
        { id: 'L1', title: 'The Story of Village Palampur L1', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4392899/174827541880218165220/index_4.m3u8' },
        { id: 'L2', title: 'The Story of Village Palampur L2', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4394021/174836179392228165220/index_4.m3u8' },
        { id: 'L3', title: 'The Story of Village Palampur L3', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4394988/174843781540668165220/index_4.m3u8' },
        { id: 'L4', title: 'The Story of Village Palampur L4', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4398034/174878305850708165220/index_4.m3u8' },
      ]
    },
    {
      name: 'What is Democracy & why is democracy',
      lectures: [
        { id: 'L1', title: 'What is Democracy & why is democracy L1', notesLink: `${aarambh9BasePath}/social-science/${slugify('What is Democracy & why is democracy')}/notes/L1.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4405294/174948480645778165220/174948480645778165220_8165220.m3u8' },
        { id: 'L2', title: 'What is Democracy & why is democracy L2', notesLink: `${aarambh9BasePath}/social-science/${slugify('What is Democracy & why is democracy')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4406373/174957083156418165220/index_4.m3u8' },
        { id: 'L3', title: 'What is Democracy & why is democracy L3', notesLink: `${aarambh9BasePath}/social-science/${slugify('What is Democracy & why is democracy')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4407312/174964547257888165220/index_4.m3u8' },
        { id: 'L4', title: 'What is Democracy & why is democracy L4', notesLink: `${aarambh9BasePath}/social-science/${slugify('What is Democracy & why is democracy')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4411383/175008874685142809295/index_3.m3u8' },
        { id: 'L5', title: 'What is Democracy & why is democracy L5', notesLink: `${aarambh9BasePath}/social-science/${slugify('What is Democracy & why is democracy')}/notes/L5.pdf`, videoEmbedType: 'hls', videoEmbedUrl: '#' },
      ]
    },
  ],
  'Mathematics': [
    {
      name: 'Number System',
      lectures: [
        { id: 'L1', title: 'Number System L1', notesLink: `#`, videoEmbedType: 'youtube', videoEmbedUrl: 'https://www.youtube.com/live/F6v_8tOEYrc?si=g-oAx-P-9Sa5BjXo' },
        { id: 'L2', title: 'Number System L2', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4360152/174550928629871097666/174550928629871097666_1097666.m3u8' },
        { id: 'L3', title: 'Number System L3', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4361156/174558576440391097666/174558576440391097666_1097666.m3u8' },
        { id: 'L4', title: 'Number System L4', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4362008/174567183539581097666/174567183539581097666_1097666.m3u8' },
        { id: 'L5', title: 'Number System L5', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4367149/174611361544421097666/174611361544421097666_1097666.m3u8' },
        { id: 'L6', title: 'Number System L6', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4368222/174619110643541097666/174619110643541097666_1097666.m3u8' },
        { id: 'L7', title: 'Number System L7', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4370049/174627933537761097666/174627933537761097666_1097666.m3u8' },
        { id: 'L8', title: 'Number System L8', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4376184/174671865862761097666/174671865862761097666_1097666.m3u8' },
      ]
    },
    {
      name: 'Polynomials',
      lectures: [
        { id: 'L1', title: 'Polynomials L1', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377207/174679563175571097666/174679563175571097666_1097666.m3u8' },
        { id: 'L2', title: 'Polynomials L2', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377938/174688306660241097666/174688306660241097666_1097666.m3u8' },
        { id: 'L3', title: 'Polynomials L3', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4383998/174739970880251097666/174739970880251097666_1097666.m3u8' },
        { id: 'L4', title: 'Polynomials L4', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4384765/174748733028261097666/174748733028261097666_1097666.m3u8' },
        { id: 'L5', title: 'Polynomials L5', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4384986/174757357814051097666/174757357814051097666_1097666.m3u8' },
        { id: 'L6', title: 'Polynomials L6', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4389346/174793035190161097666/174793035190161097666_1097666.m3u8' },
        { id: 'L7', title: 'Polynomials L7', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4390842/174800460375161097666/174800460375161097666_1097666.m3u8' },
        { id: 'L8', title: 'Polynomials L8', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4391472/174809232290121097666/174809232290121097666_1097666.m3u8' },
        { id: 'L9', title: 'Polynomials L9', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4396260/174853287832481261798/index_4.m3u8' },
      ]
    },
    {
      name: 'Coordinate Geometry',
      lectures: [
        { id: 'L1', title: 'Coordinate Geometry L1', notesLink: `${aarambh9BasePath}/mathematics/${slugify('Coordinate Geometry')}/notes/L1.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4396260/174853287832481261798/index_4.m3u8' },
        { id: 'L2', title: 'Coordinate Geometry L2', notesLink: `${aarambh9BasePath}/mathematics/${slugify('Coordinate Geometry')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4397075/174860816936171261798/index_4.m3u8' },
        { id: 'L3', title: 'Coordinate Geometry L3', notesLink: `${aarambh9BasePath}/mathematics/${slugify('Coordinate Geometry')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4397715/174869387171741261798/174869387171741261798_1261798.m3u8' },
       ]
    },
    {
      name: 'Linear Equations in Two Variables',
      lectures: [
        { id: 'L1', title: 'Linear Equations in Two Variables L1', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/28876332252753430.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4408426/174974223257041261798/index_4.m3u8' },
        { id: 'L2', title: 'Linear Equations in Two Variables L2', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/898296706271436700.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4409327/174981810598981261798/index_4.m3u8' },
        { id: 'L3', title: 'Linear Equations in Two Variables L3', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/647579420880400400.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4410122/174990428067631261798/index_4.m3u8' },
      ]
    },
  ],
  'English': [
    {
      name: 'Tenses',
      lectures: [
        { id: 'c9-eng-grm-l1', title: 'Tenses 1', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/498967843075806340.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4376992/1746790926_2620131171601548/sunny/1746785842321_68968204127858800_video_VOD720p30.m3u8' },
        { id: 'c9-eng-grm-l2', title: 'Tenses 2', notesLink: '#', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4376993/1746791165_4683530659641818/sunny/1746786281807_635426128592612900_video_VOD720p30.m3u8' },
        { id: 'c9-eng-grm-l3', title: 'Tenses 3', notesLink: '#', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4376994/1746791225_3697514107018118/sunny/1746786504709_85453328252238460_video_VOD720p30.m3u8' },
      ]
    },
    {
      name: 'The Fun They Had',
      lectures: [
        { id: 'c9-eng-lit-l1', title: 'The Fun They Had 1', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/5115291fun%20they%20had%20L1.pdf_fun%20they%20had%20L1.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4362885/1745829485_2048536674804334/sunny/1745824193994_820484776522091000_video_VOD720p30.m3u8' },
        { id: 'c9-eng-lit-l2', title: 'The Fun They Had 2', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/6861657fun%20they%20had%20%20L2.pdf_fun%20they%20had%20%20L2.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4362888/1745829005_4828557523576252/sunny/1745825520195_860858436100445400_video_VOD720p30.m3u8' },
      ]
    },
    {
      name: 'The Road Not Taken',
      lectures: [
        { id: 'c9-eng-wrt-l1', title: 'The Road Not Taken 1', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/3975724The%20Road%20Not%20Taken%20L1.pdf_The%20Road%20Not%20Taken%20L1.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4376945/1746790146_9952541808084121/sunny/1746785890101_885502576654220900_video_VOD720p30.m3u8' },
        { id: 'c9-eng-wrt-l2', title: 'The Road Not Taken 2', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/722803The%20Road%20Not%20Taken%20L2.pdf_The%20Road%20Not%20Taken%20L2.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4376944/1746789785_1046241985025655/sunny/1746785657092_863095031696032600_video_VOD720p30.m3u8' },     
    ]
   }, 
    {
      name: 'The Lost Child',
      lectures: [
        { id: 'c9-eng-l1', title: 'The Lost Child 1', notesLink: '#', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4376942/1746789365_8519999002932256/sunny/1746784978966_22068690813281_video_VOD720p30.m3u8' },
        { id: 'c9-eng-l2', title: 'The Lost Child 2', notesLink: '#', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4376943/1746789425_1181554534695089/sunny/1746785432591_190200542431737380_video_VOD720p30.m3u8' },     
   ]
  }, 
    {
      name: 'The Sound Of Music',
      lectures: [
        { id: 'c9-enl1', title: 'The Sound Of Music 1', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/7497880sound%20of%20music%20part%201%20L1.pdf_sound%20of%20music%20part%201%20L1.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4409060/1749824044_3361889869046858/sunny/1749811523668_756560226864072100_video_VOD720p30.m3u8' },
        { id: 'c9-enl2', title: 'The Sound Of Music 2', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/6803599sound%20of%20music%20part%201%20L2.pdf_sound%20of%20music%20part%201%20L2.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4409061/1749824105_2359363804227323/sunny/1749812109420_686057178732817300_video_VOD720p30.m3u8' },     
   ]
  }, 
    {
      name: 'Poetic Devices',
      lectures: [
        { id: 'c9l1', title: 'Poetic Devices 1', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/276001057449717760.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4355434/1745094064_6558196120167470/sunny/1745074746600_243414202639413570_video_VOD720p30.m3u8' },
        { id: 'c9l2', title: 'Poetic Devices 2', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/498967843075806340.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4355436/1745094844_9240190758365079/sunny/1745075412050_483337412598451650_video_VOD720p30.m3u8' },     
      ]
    }
  ],
  'IT': itTopicsForClass9and10,
  'Hindi': "Content Coming Soon",
};

    