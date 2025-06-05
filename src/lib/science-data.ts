
// src/lib/science-data.ts
import type { CourseContentMap } from './course-data';
import { slugify } from './course-data';

const scienceBasePath = '/assets/courses/science';

export const scienceCourseContent: CourseContentMap = {
  'Physics': [
    {
      name: 'Units and Measurement',
      lectures: [
        {
          id: 'L1',
          title: 'Units and Measurement L1',
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/350215509469119700.pdf`,
          videoEmbedType: 'youtube',
          videoEmbedUrl: 'https://www.youtube.com/embed/eYHkwzP0TkY',
        },
        {
          id: 'L2',
          title: 'Units and Measurement L2',
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/320554157609896960.pdf`,
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354032/174490568189301097666/index_5.m3u8',
        },
        {
          id: 'L3',
          title: 'Units and Measurement L3',
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/282566967198221150.pdf`,
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354885/174499396879388296383/index_4.m3u8',
        },
        {
          id: 'L4',
          title: 'Units and Measurement L4',
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/141795108468127550.pdf`,
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4360178/174551194721888296383/index_4.m3u8',
        },
        {
          id: 'L5',
          title: 'Units and Measurement L5',
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/4024933903930072.pdf`,
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4361337/174559902322678296383/index_4.m3u8',
        },
        {
          id: 'L6',
          title: 'Units and Measurement L6',
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/42711989017558184.pdf`,
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4362139/174568479092198296383/index_4.m3u8',
        },
      ],
    },
    {
      name: 'Motion In a Straight Line',
      lectures: [
        {
          id: 'L1',
          title: 'Motion In a Straight Line L1',
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/671154171864929000.pdf`,
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4367211/174611702457038296383/index_4.m3u8',
        },
        {
          id: 'L2',
          title: 'Motion In a Straight Line L2',
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/534474456291874800.pdf`,
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4384135/174741235930878296383/index_4.m3u8',
        },
        {
          id: 'L3',
          title: 'Motion In a Straight Line L3',
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/197692296755338560.pdf`,
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4384839/174749905027548296383/index_4.m3u8',
        },
        {
          id: 'L4',
          title: 'Motion In a Straight Line L4',
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/258346732119085800.pdf`,
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4389362/174793149686398296383/index_4.m3u8',
        },
        {
          id: 'L5',
          title: 'Motion In a Straight Line L5',
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/822723306838902300.pdf`,
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4390995/174801802012768296383/index_4.m3u8',
        },
        {
          id: 'L6',
          title: 'Motion In a Straight Line L6',
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/547569735312311360.pdf`,
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4391550/174810397274838296383/index_4.m3u8',
        },
      ],
    },
    {
      name: 'Motion in a Plane',
      lectures: [
        {
          id: 'L1',
          title: 'Motion in a Plane L1',
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/547569735312311360.pdf`,
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4396270/174853512223368296383/index_4.m3u8',
        },
        {
          id: 'L2',
          title: 'Motion in a Plane L2',
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/882950906399658500.pdf`,
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4397274/174862200978868296383/index_4.m3u8',
        },
      ],
    },
    {
      name: 'Basic Mathematics',
      lectures: [
        {
          id: 'L1',
          title: 'Basic Mathematics L1',
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/63080286597865820.pdf`,
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4368402/174620181785161071993/index_4.m3u8',
        },
        {
          id: 'L2',
          title: 'Basic Mathematics L2',
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/781289778058012200.pdf`,
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4370179/174628987185681071993/index_4.m3u8',
        },
        {
          id: 'L3',
          title: 'Basic Mathematics L3',
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/311010593170532600.pdf`,
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4376221/174672074184601071993/index_4.m3u8',
        },
        {
          id: 'L4',
          title: 'Basic Mathematics L4',
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/512879724400887040.pdf`,
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377330/174680770411381071993/index_4.m3u8',
        },
        {
          id: 'L5',
          title: 'Basic Mathematics L5',
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/294291601749770000.pdf`,
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377993/174689329024511071993/index_4.m3u8',
        },
      ],
    },
  ],
  'Chemistry': [
    {
      name: 'Some Basic Concepts of Chemistry',
      lectures: [
        {
          id: 'L1',
          title: 'Some Basic Concepts of Chemistry L1',
          notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/365664162104436740.pdf`,
          videoEmbedType: 'youtube',
          videoEmbedUrl: 'https://www.youtube.com/embed/EVU_Bvc3HpE',
        },
        {
          id: 'L2',
          title: 'Some Basic Concepts of Chemistry L2',
          notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/60665227316336800.pdf',
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4353000/174481993295887555169/index_4.m3u8',
        },
        {
          id: 'L3',
          title: 'Some Basic Concepts of Chemistry L3',
          notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/563943491510636200.pdf',
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4355452/174507897732027555169/index_4.m3u8',
        },
        {
          id: 'L4',
          title: 'Some Basic Concepts of Chemistry L4',
          notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/646257785235418800.pdf',
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357309/174530949861477555169/index_4.m3u8',
        },
        {
          id: 'L5',
          title: 'Some Basic Concepts of Chemistry L5',
          notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/492924385069963100.pdf',
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357831/174533736975997555169/index_4.m3u8',
        },
        {
          id: 'L6',
          title: 'Some Basic Concepts of Chemistry L6',
          notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/776962540288405800.pdf',
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4358829/174541226159937555169/index_4.m3u8',
        },
      ],
    },
    {
      name: 'Structure of Atom',
      lectures: [
        { id: 'L1', title: 'Structure of Atom L1', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4363320/174584946237347555169/index_4.m3u8' },
        { id: 'L2', title: 'Structure of Atom L2', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4364789/174594373555637555169/index_4.m3u8' },
        { id: 'L3', title: 'Structure of Atom L3', notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4365831/174601791723957555169/index_4.m3u8' },
        { id: 'L4', title: 'Structure of Atom L4', notesLink: `${scienceBasePath}/chemistry/${slugify('Structure of Atom')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4372294/174646064983197555169/index_4.m3u8' },
        { id: 'L5', title: 'Structure of Atom L5', notesLink: `${scienceBasePath}/chemistry/${slugify('Structure of Atom')}/notes/L5.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4373927/174654700417617555169/index_4.m3u8' },
        { id: 'L6', title: 'Structure of Atom L6', notesLink: `${scienceBasePath}/chemistry/${slugify('Structure of Atom')}/notes/L6.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4374900/174662289939277555169/index_4.m3u8' },
        { id: 'L7', title: 'Structure of Atom L7', notesLink: `${scienceBasePath}/chemistry/${slugify('Structure of Atom')}/notes/L7.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4379161/174706558456287555169/index_4.m3u8' },
        { id: 'L8', title: 'Structure of Atom L8', notesLink: `${scienceBasePath}/chemistry/${slugify('Structure of Atom')}/notes/L8.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4380760/174715119572127555169/index_4.m3u8' },
        { id: 'L9', title: 'Structure of Atom L9', notesLink: `${scienceBasePath}/chemistry/${slugify('Structure of Atom')}/notes/L9.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4381822/174722718560337555169/index_4.m3u8' },
        { id: 'L10', title: 'Structure of Atom L10', notesLink: `${scienceBasePath}/chemistry/${slugify('Structure of Atom')}/notes/L10.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4385842/174767006769507555169/index_4.m3u8' },
      ],
    },
    {
      name: 'Classification of Elements',
      lectures: [
        { id: 'L1', title: 'Classification of Elements L1', notesLink: `${scienceBasePath}/chemistry/${slugify('Classification of Elements')}/notes/L1.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4387083/174775728734717555169/index_4.m3u8' },
        { id: 'L2', title: 'Classification of Elements L2', notesLink: `${scienceBasePath}/chemistry/${slugify('Classification of Elements')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4388067/174783286454367555169/index_4.m3u8' },
        { id: 'L3', title: 'Classification of Elements L3', notesLink: `${scienceBasePath}/chemistry/${slugify('Classification of Elements')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4392905/174827564478927555169/index_4.m3u8' },
        { id: 'L4', title: 'Classification of Elements L4', notesLink: `${scienceBasePath}/chemistry/${slugify('Classification of Elements')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4394025/174836245685127555169/index_4.m3u8' },
        { id: 'L5', title: 'Classification of Elements L5', notesLink: `${scienceBasePath}/chemistry/${slugify('Classification of Elements')}/notes/L5.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4394991/174843803458707555169/index_4.m3u8' },
      ]
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
          videoEmbedType: 'youtube',
          videoEmbedUrl: 'https://www.youtube.com/embed/UT9CN9XFGYw',
        },
        {
          id: `L2`,
          title: `Sets L2`,
          notesLink: `${scienceBasePath}/mathematics/${slugify('Sets')}/notes/L2.pdf`,
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4353889/174489667533668296383/index_4.m3u8',
        },
        {
          id: `L3`,
          title: `Sets L3`,
          notesLink: `${scienceBasePath}/mathematics/${slugify('Sets')}/notes/L3.pdf`,
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4356690/174524049345081097666/index_5.m3u8',
        },
        {
          id: `L4`,
          title: `Sets L4`,
          notesLink: `${scienceBasePath}/mathematics/${slugify('Sets')}/notes/L4.pdf`,
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357736/174532685248651097666/index_5.m3u8',
        },
        {
          id: `L5`,
          title: `Sets L5`,
          notesLink: `${scienceBasePath}/mathematics/${slugify('Sets')}/notes/L5.pdf`,
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4359038/174542426999201097666/index_5.m3u8',
        },
      ]
    },
    {
      name: 'Complex Numbers',
      lectures: [
        { id: 'L1', title: 'Complex Numbers L1', notesLink: `${scienceBasePath}/mathematics/${slugify('Complex Numbers')}/notes/L1.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4363249/174584513794761261798/index_4.m3u8' },
        { id: 'L2', title: 'Complex Numbers L2', notesLink: `${scienceBasePath}/mathematics/${slugify('Complex Numbers')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4364488/174592875146111261798/index_4.m3u8' },
        { id: 'L3', title: 'Complex Numbers L3', notesLink: `${scienceBasePath}/mathematics/${slugify('Complex Numbers')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4366039/174602857795961261798/index_4.m3u8' },
        { id: 'L4', title: 'Complex Numbers L4', notesLink: `${scienceBasePath}/mathematics/${slugify('Complex Numbers')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4367111/174610963914991261798/index_4.m3u8' },
        { id: 'L5', title: 'Complex Numbers L5', notesLink: `${scienceBasePath}/mathematics/${slugify('Complex Numbers')}/notes/L5.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4372190/174645001549831261798/index_4.m3u8' },
        { id: 'L6', title: 'Complex Numbers L6', notesLink: `${scienceBasePath}/mathematics/${slugify('Complex Numbers')}/notes/L6.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4373799/174653642467251261798/index_4.m3u8' },
        { id: 'L7', title: 'Complex Numbers L7', notesLink: `${scienceBasePath}/mathematics/${slugify('Complex Numbers')}/notes/L7.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4375005/174663383331301261798/index_4.m3u8' },
      ]
    },
    {
      name: 'Relation & Functions',
      lectures: [
        { id: 'L1', title: 'Relation & Functions L1', notesLink: `${scienceBasePath}/mathematics/${slugify('Relation & Functions')}/notes/L1.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4379033/174705494887511097666/index_5.m3u8' },
        { id: 'L2', title: 'Relation & Functions L2', notesLink: `${scienceBasePath}/mathematics/${slugify('Relation & Functions')}/notes/L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4385645/174765739956571097666/index_5.m3u8' },
        { id: 'L3', title: 'Relation & Functions L3', notesLink: `${scienceBasePath}/mathematics/${slugify('Relation & Functions')}/notes/L3.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4386945/174774606477081097666/index_5.m3u8' },
        { id: 'L4', title: 'Relation & Functions L4', notesLink: `${scienceBasePath}/mathematics/${slugify('Relation & Functions')}/notes/L4.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4388168/174784321070651097666/index_5.m3u8' },
        { id: 'L5', title: 'Relation & Functions L5', notesLink: `${scienceBasePath}/mathematics/${slugify('Relation & Functions')}/notes/L5.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4392734/174826442633201097666/index_5.m3u8' },
        { id: 'L6', title: 'Relation & Functions L6', notesLink: `${scienceBasePath}/mathematics/${slugify('Relation & Functions')}/notes/L6.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4393953/174835206745611097666/index_5.m3u8' },
        { id: 'L7', title: 'Relation & Functions L7', notesLink: `${scienceBasePath}/mathematics/${slugify('Relation & Functions')}/notes/L7.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4395110/174844717954831097666/index_5.m3u8' },
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
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4353875/174489575453452621696/index_4.m3u8',
        },
        {
          id: 'L3',
          title: 'The Living World L3',
          notesLink: `${scienceBasePath}/biology/${slugify('The Living World')}/notes/L3.pdf`,
          videoEmbedType: 'hls',
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354742/174498168131232621696/index_4.m3u8',
        },
      ],
    },
    {
      name: 'Biological Classification',
      lectures: [
        { 
          id: 'L1', 
          title: 'Biological Classification L1', 
          notesLink: `${scienceBasePath}/biology/${slugify('Biological Classification')}/notes/L1.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4356824/174525216684262621696/index_4.m3u8'
        },
        { 
          id: 'L2', 
          title: 'Biological Classification L2', 
          notesLink: `${scienceBasePath}/biology/${slugify('Biological Classification')}/notes/L2.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357746/174532727651952621696/index_4.m3u8'
        },
        { 
          id: 'L3', 
          title: 'Biological Classification L3', 
          notesLink: `${scienceBasePath}/biology/${slugify('Biological Classification')}/notes/L3.pdf`, 
          videoEmbedType: 'hls', 
          videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4359040/174542518059332621696/index_4.m3u8'
        },
      ],
    },
  ],
};

