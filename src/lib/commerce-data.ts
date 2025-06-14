
// src/lib/commerce-data.ts
import type { CourseContentMap } from './course-utils';
import { slugify } from './course-utils';

const commerceBasePath = '/assets/courses/commerce'; // This path isn't used if notes/videos are #

export const commerceCourseContent: CourseContentMap = {
  'Business Studies': [
    { name: 'Business, Trade & Commerce',
      lectures: [
        { id: 'L1', title: 'Business, Trade & Commerce L1', notesLink: `#`, videoEmbedType: 'youtube', videoEmbedUrl: 'https://www.youtube.com/embed/PUa2-buHJII' },
        { id: 'L2', title: 'Business, Trade & Commerce L2', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4352997/174481925589108661500/index_4.m3u8' },
        { id: 'L3', title: 'Business, Trade & Commerce L3', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354036/174490571525318661500/index_4.m3u8' },
        { id: 'L4', title: 'Business, Trade & Commerce L4', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4356791/174525158582868661500/index_4.m3u8' },
        { id: 'L5', title: 'Business, Trade & Commerce L5', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357840/174533779119448661500/index_4.m3u8' },
        { id: 'L6', title: 'Business, Trade & Commerce L6', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4358827/174541222825788661500/index_4.m3u8' },
        { id: 'L7', title: 'Business, Trade & Commerce L7', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4363370/174585516974368661500/index_4.m3u8' },
        { id: 'L8', title: 'Business, Trade & Commerce L8', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4364782/174594193147598661500/index_4.m3u8' },
        { id: 'L9', title: 'Business, Trade & Commerce L9', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4365823/174601759672428661500/index_4.m3u8' },
      ]
    },
    { name: 'Forms of Business Organisations',
      lectures: [
        { id: 'L1', title: 'Forms of Business Organisations L1', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4372297/174646087088698661500/index_4.m3u8' },
        { id: 'L2', title: 'Forms of Business Organisations L2', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4373926/174654697344648661500/index_4.m3u8' },
        { id: 'L3', title: 'Forms of Business Organisations L3', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4374884/174662261770168661500/index_4.m3u8' },
        { id: 'L4', title: 'Forms of Business Organisations L4', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4379158/174706487485118661500/index_4.m3u8' },
        { id: 'L5', title: 'Forms of Business Organisations L5', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4380752/174715045969568661500/index_4.m3u8' },
        { id: 'L6', title: 'Forms of Business Organisations L6', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4385844/174767049839008661500/index_4.m3u8' },
        { id: 'L7', title: 'Forms of Business Organisations L7', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4387080/174775705352788661500/index_4.m3u8' },
        { id: 'L8', title: 'Forms of Business Organisations L8', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4388072/174783296668778661500/index_4.m3u8' },
        { id: 'L9', title: 'Forms of Business Organisations L9', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4392903/174827554771168661500/index_4.m3u8' },
        { id: 'L10', title: 'Forms of Business Organisations L10', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4394020/174836176027458661500/index_4.m3u8' },
        { id: 'L11', title: 'Forms of Business Organisations L11', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4394995/174843818528908661500/index_4.m3u8' },
      ]
    },
  ],
  'Accountancy': [
    {
      name: 'Basic Concepts of Accounts',
      lectures: [
        { id: 'L1', title: 'Basic Accounting terms L1', notesLink: `#`, videoEmbedType: 'youtube', videoEmbedUrl: 'https://www.youtube.com/embed/N0UH3xznWko' },
        { id: 'L2', title: 'Basic Accounting terms L2', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354736/174498147635838037481/index_3.m3u8' },
        { id: 'L3', title: 'Basic Accounting terms L3', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4355332/174506775549578037481/index_4.m3u8' },
        { id: 'L4', title: 'Basic Accounting terms L4', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4360049/174550144387958037481/index_3.m3u8' },
      ],
    },
    {
      name: 'Introduction To accounting',
      lectures: [
        { id: 'L1', title: 'Introduction To Accounting L1', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4361169/174558615865988037481/index_4.m3u8' },
        { id: 'L2', title: 'Introduction To Accounting L2', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4362045/174567417274348037481/index_4.m3u8' },
        { id: 'L3', title: 'Introduction To Accounting L3', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4367025/174610386875138037481/index_4.m3u8' },
        { id: 'L4', title: 'Introduction To Accounting L4', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4368221/174619101874588037481/index_4.m3u8' },
        { id: 'L5', title: 'Introduction To Accounting L5', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4370044/174627841879878037481/index_4.m3u8' },
      ],
    },
    {
      name: 'Accounting Principles',
      lectures: [
        { id: 'L1', title: 'Accounting Principles L1', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4384771/174748750880628037481/index_4.m3u8' },
        { id: 'L2', title: 'Accounting Principles L2', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4389259/174791900427358037481/index_4.m3u8' },
        { id: 'L3', title: 'Accounting Principles L3', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4390873/174800541698838037481/index_4.m3u8' },
        { id: 'L4', title: 'Accounting Principles L4', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4391460/174809140367138037481/index_4.m3u8' },
      ]
    },
    {
      name: 'Rule of Debit & Credit',
      lectures: [
        { id: 'L1', title: 'Rule of Debit & Credit L1', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4396176/174852449790338037481/index_4.m3u8' },
      ]
    },
    {
      name: 'Accounting Equations',
      lectures: [
        { id: 'L1', title: 'Accounting Equations L1', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4376039/174670969584618037481/index_4.m3u8' },
        { id: 'L2', title: 'Accounting Equations L2', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377210/174679578632678037481/index_4.m3u8' },
        { id: 'L3', title: 'Accounting Equations L3', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377926/174688241250748037481/index_4.m3u8' },
        { id: 'L4', title: 'Accounting Equations L4', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4382851/174731428796208037481/index_4.m3u8' },
        { id: 'L5', title: 'Accounting Equations L5', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4384003/174739986338128037481/index_4.m3u8' },
      ]
    }
  ],
  'Economics': [
    {
      name: 'Introduction to Microeconomics',
      lectures: [
        { id: 'L1', title: 'Introduction to Microeconomics L1', notesLink: `#`, videoEmbedType: 'youtube', videoEmbedUrl: 'https://www.youtube.com/embed/DC5GfUSomWc' },
        { id: 'L2', title: 'Introduction to Microeconomics L2', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354870/174499154434222805408/index_4.m3u8' },
        { id: 'L3', title: 'Introduction to Microeconomics L3', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4355506/174513048136192805408/index_4.m3u8' },
        { id: 'L4', title: 'Introduction to Microeconomics L4', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4360163/174551052232072805408/index_4.m3u8' },
        { id: 'L5', title: 'Introduction to Microeconomics L5', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4361318/174559672274232805408/index_4.m3u8' },
      ],
    },
    {
      name: 'Economics: An Introduction',
      lectures: [
        { id: 'L1', title: 'Economics: An Introduction L1', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4363914/174591024154512805408/index_4.m3u8' },
      ],
    },
    {
      name: 'Statistics For Economic',
      lectures: [
        { id: 'L1', title: 'Statistics For Economic L1', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4367643/174617438052112805408/index_4.m3u8' },
        { id: 'L2', title: 'Statistics For Economic L2', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4368696/174625119772212805408/index_4.m3u8' },
        { id: 'L3', title: 'Statistics For Economic L3', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4370292/174636039220762805408/index_4.m3u8' },
        { id: 'L4', title: 'Statistics For Economic L4', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4376224/174672114274758165220/index_4.m3u8' },
      ],
    },
    {
      name: 'Consumer Equilibrium',
      lectures: [
        { id: 'L1', title: 'Consumer Equilibrium L1', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377326/174680634443828165220/index_4.m3u8' },
        { id: 'L2', title: 'Consumer Equilibrium L2', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377990/174689309671428165220/index_4.m3u8' },
        { id: 'L3', title: 'Consumer Equilibrium L3', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4382944/174732514667448165220/index_4.m3u8' },
        { id: 'L4', title: 'Consumer Equilibrium L4', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4384131/174741109370988165220/index_4.m3u8' },
        { id: 'L5', title: 'Consumer Equilibrium L5', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4384835/174749801151288165220/index_4.m3u8' },
        { id: 'L6', title: 'Consumer Equilibrium L6', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4389344/174793009659368165220/index_4.m3u8' },
        { id: 'L7', title: 'Consumer Equilibrium L7', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4390977/174801620736918165220/index_4.m3u8' },
        { id: 'L8', title: 'Consumer Equilibrium L8', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4391544/174810293134278165220/index_4.m3u8' },
        { id: 'L9', title: 'Consumer Equilibrium L9', notesLink: `#`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4396269/174853508641878165220/index_4.m3u8'},
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
          videoEmbedType: 'youtube',
          videoEmbedUrl: 'https://www.youtube.com/embed/UT9CN9XFGYw',
        },
        {
          id: `L2`,
          title: `Sets L2`,
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/5110820Sets%20L2.pdf_Sets%20L2.pdf`,
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4353889/174489667533668296383/index_4.m3u8',
        },
        {
          id: `L3`,
          title: `Sets L3`,
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/798181586567513700.pdf`,
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4356690/174524049345081097666/index_5.m3u8',
        },
        {
          id: `L4`,
          title: `Sets L4`,
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/452267096067597250.pdf`,
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357736/174532685248651097666/index_5.m3u8',
        },
        {
          id: `L5`,
          title: `Sets L5`,
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/397684346174967800.pdf`,
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4359038/174542426999201097666/index_5.m3u8',
        },
      ]
    },
    {
      name: 'Complex Numbers',
      lectures: [
        { id: 'L1', title: 'Complex Numbers L1', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/750226558976804600.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4363249/174584513794761261798/index_4.m3u8' },
        { id: 'L2', title: 'Complex Numbers L2', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/485152155798966900.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4364488/174592875146111261798/index_4.m3u8' },
        { id: 'L3', title: 'Complex Numbers L3', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/21963317727613020.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4366039/174602857795961261798/index_4.m3u8' },
        { id: 'L4', title: 'Complex Numbers L4', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/348718648836124700.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4367111/174610963914991261798/index_4.m3u8' },
        { id: 'L5', title: 'Complex Numbers L5', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/446451742730990000.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4372190/174645001549831261798/index_4.m3u8' },
        { id: 'L6', title: 'Complex Numbers L6', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4373799/174653642467251261798/index_4.m3u8' },
        { id: 'L7', title: 'Complex Numbers L7', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4375005/174663383331301261798/index_4.m3u8' },
      ]
    },
    {
      name: 'Relation & Functions',
      lectures: [
        { id: 'L1', title: 'Relation & Functions L1', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/637408089698646100.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4379033/174705494887511097666/index_5.m3u8' },
        { id: 'L2', title: 'Relation & Functions L2', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/370453582506231700.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4385645/174765739956571097666/index_5.m3u8' },
        { id: 'L3', title: 'Relation & Functions L3', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/473411909681269900.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4386945/174774606477081097666/index_5.m3u8' },
        { id: 'L4', title: 'Relation & Functions L4', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/864747801583342300.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4388168/174784321070651097666/index_5.m3u8' },
        { id: 'L5', title: 'Relation & Functions L5', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/392480627577880450.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4392734/174826442633201097666/index_5.m3u8' },
        { id: 'L6', title: 'Relation & Functions L6', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/816874047918533500.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4393953/174835206745611097666/index_5.m3u8' },
        { id: 'L7', title: 'Relation & Functions L7', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/817730254422810200.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4395110/174844717954831097666/index_5.m3u8' },
      ]
    },
  ],
  'English': [
    {
      name: 'Grammar Fundamentals',
      lectures: [
        { id: 'com-eng-grm-l1', title: 'Nouns and Pronouns', notesLink: '#', videoEmbedType: 'youtube', videoEmbedUrl: '#' },
        { id: 'com-eng-grm-l2', title: 'Verbs and Adjectives', notesLink: '#', videoEmbedType: 'youtube', videoEmbedUrl: '#' },
        { id: 'com-eng-grm-l3', title: 'Tenses and Usage', notesLink: '#', videoEmbedType: 'youtube', videoEmbedUrl: '#' },
      ]
    },
    {
      name: 'Reading Comprehension',
      lectures: [
        { id: 'com-eng-read-l1', title: 'Analyzing Passages', notesLink: '#', videoEmbedType: 'youtube', videoEmbedUrl: '#' },
        { id: 'com-eng-read-l2', title: 'Identifying Main Ideas', notesLink: '#', videoEmbedType: 'youtube', videoEmbedUrl: '#' },
      ]
    },
    {
      name: 'Business Communication',
      lectures: [
        { id: 'com-eng-biz-l1', title: 'Formal Letter Writing', notesLink: '#', videoEmbedType: 'youtube', videoEmbedUrl: '#' },
        { id: 'com-eng-biz-l2', title: 'Report Writing Basics', notesLink: '#', videoEmbedType: 'youtube', videoEmbedUrl: '#' },
      ]
    }
  ],
};
