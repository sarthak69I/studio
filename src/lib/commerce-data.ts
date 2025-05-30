
// src/lib/commerce-data.ts
import type { CourseContentMap } from './course-data';
import { slugify, m3u8PlayerBase } from './course-data';

const commerceBasePath = '/assets/courses/commerce';

export const commerceCourseContent: CourseContentMap = {
  'Business Studies': [
    { name: 'Business, Trade & Commerce',
      lectures: [
        { id: 'L1', title: 'Business, Trade & Commerce L1', notesLink: `${commerceBasePath}/business-studies/${slugify('Business, Trade & Commerce')}/notes/L1.pdf`, videoEmbedType: 'youtube', videoEmbedUrl: 'https://www.youtube.com/embed/PUa2-buHJII' },
        { id: 'L2', title: 'Business, Trade & Commerce L2', notesLink: `${commerceBasePath}/business-studies/${slugify('Business, Trade & Commerce')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4352997/174481925589108661500/index_4.m3u8')}` },
        { id: 'L3', title: 'Business, Trade & Commerce L3', notesLink: `${commerceBasePath}/business-studies/${slugify('Business, Trade & Commerce')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354036/174490571525318661500/index_4.m3u8')}` },
        { id: 'L4', title: 'Business, Trade & Commerce L4', notesLink: `${commerceBasePath}/business-studies/${slugify('Business, Trade & Commerce')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4356791/174525158582868661500/index_4.m3u8')}` },
        { id: 'L5', title: 'Business, Trade & Commerce L5', notesLink: `${commerceBasePath}/business-studies/${slugify('Business, Trade & Commerce')}/notes/L5.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357840/174533779119448661500/index_4.m3u8')}` },
        { id: 'L6', title: 'Business, Trade & Commerce L6', notesLink: `${commerceBasePath}/business-studies/${slugify('Business, Trade & Commerce')}/notes/L6.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4358827/174541222825788661500/index_4.m3u8')}` },
        { id: 'L7', title: 'Business, Trade & Commerce L7', notesLink: `${commerceBasePath}/business-studies/${slugify('Business, Trade & Commerce')}/notes/L7.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4363370/174585516974368661500/index_4.m3u8')}` },
        { id: 'L8', title: 'Business, Trade & Commerce L8', notesLink: `${commerceBasePath}/business-studies/${slugify('Business, Trade & Commerce')}/notes/L8.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4364782/174594193147598661500/index_4.m3u8')}` },
        { id: 'L9', title: 'Business, Trade & Commerce L9', notesLink: `${commerceBasePath}/business-studies/${slugify('Business, Trade & Commerce')}/notes/L9.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4365823/174601759672428661500/index_4.m3u8')}` },
      ]
    },
    { name: 'Forms of Business Organisations',
      lectures: [
        { id: 'L1', title: 'Forms of Business Organisations L1', notesLink: `${commerceBasePath}/business-studies/${slugify('Forms of Business Organisations')}/notes/L1.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4372297/174646087088698661500/index_4.m3u8')}` },
        { id: 'L2', title: 'Forms of Business Organisations L2', notesLink: `${commerceBasePath}/business-studies/${slugify('Forms of Business Organisations')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4373926/174654697344648661500/index_4.m3u8')}` },
        { id: 'L3', title: 'Forms of Business Organisations L3', notesLink: `${commerceBasePath}/business-studies/${slugify('Forms of Business Organisations')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4374884/174662261770168661500/index_4.m3u8')}` },
        { id: 'L4', title: 'Forms of Business Organisations L4', notesLink: `${commerceBasePath}/business-studies/${slugify('Forms of Business Organisations')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4379158/174706487485118661500/index_4.m3u8')}` },
        { id: 'L5', title: 'Forms of Business Organisations L5', notesLink: `${commerceBasePath}/business-studies/${slugify('Forms of Business Organisations')}/notes/L5.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4380752/174715045969568661500/index_4.m3u8')}` },
        { id: 'L6', title: 'Forms of Business Organisations L6', notesLink: `${commerceBasePath}/business-studies/${slugify('Forms of Business Organisations')}/notes/L6.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4385844%2F174767049839008661500%2Findex_4.m3u8` },
        { id: 'L7', title: 'Forms of Business Organisations L7', notesLink: `${commerceBasePath}/business-studies/${slugify('Forms of Business Organisations')}/notes/L7.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4387080%2F174775705352788661500%2Findex_4.m3u8` },
        { id: 'L8', title: 'Forms of Business Organisations L8', notesLink: `${commerceBasePath}/business-studies/${slugify('Forms of Business Organisations')}/notes/L8.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4388072%2F174783296668778661500%2Findex_4.m3u8` },
        { id: 'L9', title: 'Forms of Business Organisations L9', notesLink: `${commerceBasePath}/business-studies/${slugify('Forms of Business Organisations')}/notes/L9.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4392903%2F174827554771168661500%2Findex_4.m3u8` },
        { id: 'L10', title: 'Forms of Business Organisations L10', notesLink: `${commerceBasePath}/business-studies/${slugify('Forms of Business Organisations')}/notes/L10.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4394020%2F174836176027458661500%2Findex_4.m3u8` },
        { id: 'L11', title: 'Forms of Business Organisations L11', notesLink: `${commerceBasePath}/business-studies/${slugify('Forms of Business Organisations')}/notes/L11.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4394995%2F174843818528908661500%2Findex_4.m3u8` },
      ]
    },
  ],
  'Accountancy': [
    {
      name: 'Basic Concepts of Accounts',
      lectures: [
        { id: 'L1', title: 'Basic Accounting terms L1', notesLink: `${commerceBasePath}/accountancy/${slugify('Basic Concepts of Accounts')}/notes/L1.pdf`, videoEmbedType: 'youtube', videoEmbedUrl: 'https://www.youtube.com/embed/N0UH3xznWko' },
        { id: 'L2', title: 'Basic Accounting terms L2', notesLink: `${commerceBasePath}/accountancy/${slugify('Basic Concepts of Accounts')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354736/174498147635838037481/index_3.m3u8')}` },
        { id: 'L3', title: 'Basic Accounting terms L3', notesLink: `${commerceBasePath}/accountancy/${slugify('Basic Concepts of Accounts')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4355332/174506775549578037481/index_4.m3u8')}` },
        { id: 'L4', title: 'Basic Accounting terms L4', notesLink: `${commerceBasePath}/accountancy/${slugify('Basic Concepts of Accounts')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4360049/174550144387958037481/index_3.m3u8')}` },
      ],
    },
    {
      name: 'Introduction To accounting',
      lectures: [
        { id: 'L1', title: 'Introduction To Accounting L1', notesLink: `${commerceBasePath}/accountancy/${slugify('Introduction To accounting')}/notes/L1.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4361169/174558615865988037481/index_4.m3u8')}` },
        { id: 'L2', title: 'Introduction To Accounting L2', notesLink: `${commerceBasePath}/accountancy/${slugify('Introduction To accounting')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4362045/174567417274348037481/index_4.m3u8')}` },
        { id: 'L3', title: 'Introduction To Accounting L3', notesLink: `${commerceBasePath}/accountancy/${slugify('Introduction To accounting')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4367025/174610386875138037481/index_4.m3u8')}` },
        { id: 'L4', title: 'Introduction To Accounting L4', notesLink: `${commerceBasePath}/accountancy/${slugify('Introduction To accounting')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4368221/174619101874588037481/index_4.m3u8')}` },
        { id: 'L5', title: 'Introduction To Accounting L5', notesLink: `${commerceBasePath}/accountancy/${slugify('Introduction To accounting')}/notes/L5.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4370044/174627841879878037481/index_4.m3u8')}` },
      ],
    },
    {
      name: 'Accounting Principles',
      lectures: [
        { id: 'L1', title: 'Accounting Principles L1', notesLink: `${commerceBasePath}/accountancy/${slugify('Accounting Principles')}/notes/L1.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4384771%2F174748750880628037481%2Findex_4.m3u8` },
        { id: 'L2', title: 'Accounting Principles L2', notesLink: `${commerceBasePath}/accountancy/${slugify('Accounting Principles')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4389259%2F174791900427358037481%2Findex_4.m3u8` },
        { id: 'L3', title: 'Accounting Principles L3', notesLink: `${commerceBasePath}/accountancy/${slugify('Accounting Principles')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4390873%2F174800541698838037481%2Findex_4.m3u8` },
        { id: 'L4', title: 'Accounting Principles L4', notesLink: `${commerceBasePath}/accountancy/${slugify('Accounting Principles')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4391460%2F174809140367138037481%2Findex_4.m3u8` },
      ]
    },
    {
      name: 'Rule of Debit & Credit',
      lectures: [
        { id: 'L1', title: 'Rule of Debit & Credit L1', notesLink: `${commerceBasePath}/accountancy/${slugify('Rule of Debit & Credit')}/notes/L1.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4396176%2F174852449790338037481%2Findex_4.m3u8` },
      ]
    },
    {
      name: 'Accounting Equations',
      lectures: [
        { id: 'L1', title: 'Accounting Equations L1', notesLink: `${commerceBasePath}/accountancy/${slugify('Accounting Equations')}/notes/L1.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4376039/174670969584618037481/index_4.m3u8')}` },
        { id: 'L2', title: 'Accounting Equations L2', notesLink: `${commerceBasePath}/accountancy/${slugify('Accounting Equations')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377210/174679578632678037481/index_4.m3u8')}` },
        { id: 'L3', title: 'Accounting Equations L3', notesLink: `${commerceBasePath}/accountancy/${slugify('Accounting Equations')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377926/174688241250748037481/index_4.m3u8')}` },
        { id: 'L4', title: 'Accounting Equations L4', notesLink: `${commerceBasePath}/accountancy/${slugify('Accounting Equations')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4382851/174731428796208037481/index_4.m3u8')}` },
        { id: 'L5', title: 'Accounting Equations L5', notesLink: `${commerceBasePath}/accountancy/${slugify('Accounting Equations')}/notes/L5.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4384003%2F174739986338128037481%2Findex_4.m3u8` },
      ]
    }
  ],
  'Economics': [
    {
      name: 'Introduction to Microeconomics',
      lectures: [
        { id: 'L1', title: 'Introduction to Microeconomics L1', notesLink: `${commerceBasePath}/economics/${slugify('Introduction to Microeconomics')}/notes/L1.pdf`, videoEmbedType: 'youtube', videoEmbedUrl: 'https://www.youtube.com/embed/DC5GfUSomWc' },
        { id: 'L2', title: 'Introduction to Microeconomics L2', notesLink: `${commerceBasePath}/economics/${slugify('Introduction to Microeconomics')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354870/174499154434222805408/index_4.m3u8')}` },
        { id: 'L3', title: 'Introduction to Microeconomics L3', notesLink: `${commerceBasePath}/economics/${slugify('Introduction to Microeconomics')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4355506/174513048136192805408/index_4.m3u8')}` },
        { id: 'L4', title: 'Introduction to Microeconomics L4', notesLink: `${commerceBasePath}/economics/${slugify('Introduction to Microeconomics')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4360163/174551052232072805408/index_4.m3u8')}` },
        { id: 'L5', title: 'Introduction to Microeconomics L5', notesLink: `${commerceBasePath}/economics/${slugify('Introduction to Microeconomics')}/notes/L5.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4361318/174559672274232805408/index_4.m3u8')}` },
      ],
    },
    {
      name: 'Economics: An Introduction',
      lectures: [
        { id: 'L1', title: 'Economics: An Introduction L1', notesLink: `${commerceBasePath}/economics/${slugify('Economics: An Introduction')}/notes/L1.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4363914/174591024154512805408/index_4.m3u8')}` },
      ],
    },
    {
      name: 'Statistics For Economic',
      lectures: [
        { id: 'L1', title: 'Statistics For Economic L1', notesLink: `${commerceBasePath}/economics/${slugify('Statistics For Economic')}/notes/L1.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4367643/174617438052112805408/index_4.m3u8')}` },
        { id: 'L2', title: 'Statistics For Economic L2', notesLink: `${commerceBasePath}/economics/${slugify('Statistics For Economic')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4368696/174625119772212805408/index_4.m3u8')}` },
        { id: 'L3', title: 'Statistics For Economic L3', notesLink: `${commerceBasePath}/economics/${slugify('Statistics For Economic')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4370292/174636039220762805408/index_4.m3u8')}` },
        { id: 'L4', title: 'Statistics For Economic L4', notesLink: `${commerceBasePath}/economics/${slugify('Statistics For Economic')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4376224/174672114274758165220/index_4.m3u8')}` },
      ],
    },
    {
      name: 'Consumer Equilibrium',
      lectures: [
        { id: 'L1', title: 'Consumer Equilibrium L1', notesLink: `${commerceBasePath}/economics/${slugify('Consumer Equilibrium')}/notes/L1.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377326/174680634443828165220/index_4.m3u8')}` },
        { id: 'L2', title: 'Consumer Equilibrium L2', notesLink: `${commerceBasePath}/economics/${slugify('Consumer Equilibrium')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377990/174689309671428165220/index_4.m3u8')}` },
        { id: 'L3', title: 'Consumer Equilibrium L3', notesLink: `${commerceBasePath}/economics/${slugify('Consumer Equilibrium')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4382944/174732514667448165220/index_4.m3u8')}` },
        { id: 'L4', title: 'Consumer Equilibrium L4', notesLink: `${commerceBasePath}/economics/${slugify('Consumer Equilibrium')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4384131%2F174741109370988165220%2Findex_4.m3u8` },
        { id: 'L5', title: 'Consumer Equilibrium L5', notesLink: `${commerceBasePath}/economics/${slugify('Consumer Equilibrium')}/notes/L5.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4384835%2F174749801151288165220%2Findex_4.m3u8` },
        { id: 'L6', title: 'Consumer Equilibrium L6', notesLink: `${commerceBasePath}/economics/${slugify('Consumer Equilibrium')}/notes/L6.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4389344%2F174793009659368165220%2Findex_4.m3u8` },
        { id: 'L7', title: 'Consumer Equilibrium L7', notesLink: `${commerceBasePath}/economics/${slugify('Consumer Equilibrium')}/notes/L7.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4390977%2F174801620736918165220%2Findex_4.m3u8` },
        { id: 'L8', title: 'Consumer Equilibrium L8', notesLink: `${commerceBasePath}/economics/${slugify('Consumer Equilibrium')}/notes/L8.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4391544%2F174810293134278165220%2Findex_4.m3u8` },
        { id: 'L9', title: 'Consumer Equilibrium L9', notesLink: `${commerceBasePath}/economics/${slugify('Consumer Equilibrium')}/notes/L9.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}https%3A%2F%2Fd1qcficr3lu37x.cloudfront.net%2Ffile_library%2Fvideos%2Fchannel_vod_non_drm_hls%2F4396269%2F174853508641878165220%2Findex_4.m3u8`},
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
          notesLink: `${commerceBasePath}/mathematics/${slugify('Sets')}/notes/L2.pdf`,
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4353889/174489667533668296383/index_4.m3u8',
        },
        {
          id: `L3`,
          title: `Sets L3`,
          notesLink: `${commerceBasePath}/mathematics/${slugify('Sets')}/notes/L3.pdf`,
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4356690/174524049345081097666/index_5.m3u8',
        },
        {
          id: `L4`,
          title: `Sets L4`,
          notesLink: `${commerceBasePath}/mathematics/${slugify('Sets')}/notes/L4.pdf`,
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357736/174532685248651097666/index_5.m3u8',
        },
        {
          id: `L5`,
          title: `Sets L5`,
          notesLink: `${commerceBasePath}/mathematics/${slugify('Sets')}/notes/L5.pdf`,
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4359038/174542426999201097666/index_5.m3u8',
        },
      ]
    },
    {
      name: 'Complex Numbers',
      lectures: [
        { id: 'L1', title: 'Complex Numbers L1', notesLink: `${commerceBasePath}/mathematics/${slugify('Complex Numbers')}/notes/L1.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4363249/174584513794761261798/index_4.m3u8' },
        { id: 'L2', title: 'Complex Numbers L2', notesLink: `${commerceBasePath}/mathematics/${slugify('Complex Numbers')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4364488/174592875146111261798/index_4.m3u8' },
        { id: 'L3', title: 'Complex Numbers L3', notesLink: `${commerceBasePath}/mathematics/${slugify('Complex Numbers')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4366039/174602857795961261798/index_4.m3u8' },
        { id: 'L4', title: 'Complex Numbers L4', notesLink: `${commerceBasePath}/mathematics/${slugify('Complex Numbers')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4367111/174610963914991261798/index_4.m3u8' },
        { id: 'L5', title: 'Complex Numbers L5', notesLink: `${commerceBasePath}/mathematics/${slugify('Complex Numbers')}/notes/L5.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4372190/174645001549831261798/index_4.m3u8' },
        { id: 'L6', title: 'Complex Numbers L6', notesLink: `${commerceBasePath}/mathematics/${slugify('Complex Numbers')}/notes/L6.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4373799/174653642467251261798/index_4.m3u8' },
        { id: 'L7', title: 'Complex Numbers L7', notesLink: `${commerceBasePath}/mathematics/${slugify('Complex Numbers')}/notes/L7.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4375005/174663383331301261798/index_4.m3u8' },
      ]
    },
    {
      name: 'Relation & Functions',
      lectures: [
        { id: 'L1', title: 'Relation & Functions L1', notesLink: `${commerceBasePath}/mathematics/${slugify('Relation & Functions')}/notes/L1.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4379033/174705494887511097666/index_5.m3u8')}` },
        { id: 'L2', title: 'Relation & Functions L2', notesLink: `${commerceBasePath}/mathematics/${slugify('Relation & Functions')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4385645/174765739956571097666/index_5.m3u8')}` },
        { id: 'L3', title: 'Relation & Functions L3', notesLink: `${commerceBasePath}/mathematics/${slugify('Relation & Functions')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4386945/174774606477081097666/index_5.m3u8')}` },
        { id: 'L4', title: 'Relation & Functions L4', notesLink: `${commerceBasePath}/mathematics/${slugify('Relation & Functions')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4388168/174784321070651097666/index_5.m3u8')}` },
        { id: 'L5', title: 'Relation & Functions L5', notesLink: `${commerceBasePath}/mathematics/${slugify('Relation & Functions')}/notes/L5.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4392734/174826442633201097666/index_5.m3u8')}` },
        { id: 'L6', title: 'Relation & Functions L6', notesLink: `${commerceBasePath}/mathematics/${slugify('Relation & Functions')}/notes/L6.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4393953/174835206745611097666/index_5.m3u8')}` },
        { id: 'L7', title: 'Relation & Functions L7', notesLink: `${commerceBasePath}/mathematics/${slugify('Relation & Functions')}/notes/L7.pdf`, videoEmbedType: 'hls', videoEmbedUrl: `${m3u8PlayerBase}${encodeURIComponent('https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4395110/174844717954831097666/index_5.m3u8')}` },
      ]
    },
  ],
};
