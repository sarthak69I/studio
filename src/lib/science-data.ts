// src/lib/science-data.ts
import type { CourseContentMap } from './course-data';
import { slugify } from './course-data';

const scienceBasePath = '/assets/courses/science'; // This path isn't used if notes/videos are #

export const scienceCourseContent: CourseContentMap = {
  'Physics': [
    {
      name: 'Units and Measurement',
      lectures: [
        { id: 'L1', title: 'Units and Measurement L1', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/350215509469119700.pdf`, videoEmbedType: 'youtube', videoEmbedUrl: 'https://www.youtube.com/embed/eYHkwzP0TkY' },
        { id: 'L2', title: 'Units and Measurement L2', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/320554157609896960.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354032/174490568189301097666/index_5.m3u8' },
        { id: 'L3', title: 'Units and Measurement L3', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/282566967198221150.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354885/174499396879388296383/index_4.m3u8' },
        { id: 'L4', title: 'Units and Measurement L4', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/141795108468127550.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4360178/174551194721888296383/index_4.m3u8' },
        { id: 'L5', title: 'Units and Measurement L5', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/4024933903930072.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4361337/174559902322678296383/index_4.m3u8' },
        { id: 'L6', title: 'Units and Measurement L6', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/42711989017558184.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4362139/174568479092198296383/index_4.m3u8' },
      ]
    },
    {
      name: 'Motion In a Straight Line',
      lectures: [
        { id: 'L1', title: 'Motion In a Straight Line L1', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/671154171864929000.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4367211/174611702457038296383/index_4.m3u8' },
        { id: 'L2', title: 'Motion In a Straight Line L2', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/534474456291874800.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4384135/174741235930878296383/index_4.m3u8' },
        { id: 'L3', title: 'Motion In a Straight Line L3', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/197692296755338560.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4384839/174749905027548296383/index_4.m3u8' },
        { id: 'L4', title: 'Motion In a Straight Line L4', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/258346732119085800.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4389362/174793149686398296383/index_4.m3u8' },
        { id: 'L5', title: 'Motion In a Straight Line L5', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/822723306838902300.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4390995/174801802012768296383/index_4.m3u8' },
        { id: 'L6', title: 'Motion In a Straight Line L6', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/547569735312311360.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4391550/174810397274838296383/index_4.m3u8' },
      ]
    },
    {
      name: 'Motion in a Plane',
      lectures: [
        { id: 'L1', title: 'Motion in a Plane L1', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/811749587134053100.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4396270/174853512223368296383/index_4.m3u8' },
        { id: 'L2', title: 'Motion in a Plane L2', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/882950906399658500.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4397274/174862200978868296383/index_4.m3u8' },
        { id: 'L3', title: 'Motion in a Plane L3', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/63779615092842720.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4408448/174974624946198296383/index_4.m3u8' },
        { id: 'L4', title: 'Motion in a Plane L4', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/377581231189625900.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4409511/174983228258958296383/index_4.m3u8' },
        { id: 'L5', title: 'Motion in a Plane L5', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/858212590728421200.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4410224/174991883860928296383/index_4.m3u8' },
        
      ]
    },
    {
      name: 'Basic Mathematics',
      lectures: [
        { id: 'L1', title: 'Basic Mathematics L1', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/63080286597865820.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4368402/174620181785161071993/index_4.m3u8' },
        { id: 'L2', title: 'Basic Mathematics L2', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/781289778058012200.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4370179/174628987185681071993/index_4.m3u8' },
        { id: 'L3', title: 'Basic Mathematics L3', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/311010593170532600.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4376221/174672074184601071993/index_4.m3u8' },
        { id: 'L4', title: 'Basic Mathematics L4', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/512879724400887040.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377330/174680770411381071993/index_4.m3u8' },
        { id: 'L5', title: 'Basic Mathematics L5', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/294291601749770000.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377993/174689329024511071993/index_4.m3u8' },
      ]
    },
  ],
  'Chemistry': [
    {
      name: 'Some Basic Concepts of Chemistry',
      lectures: [
        { id: 'L1', title: 'Some Basic Concepts of Chemistry L1', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/365664162104436740.pdf`, videoEmbedType: 'youtube', videoEmbedUrl: 'https://www.youtube.com/embed/EVU_Bvc3HpE' },
        { id: 'L2', title: 'Some Basic Concepts of Chemistry L2', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/60665227316336800.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4353000/174481993295887555169/index_4.m3u8' },
        { id: 'L3', title: 'Some Basic Concepts of Chemistry L3', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/563943491510636200.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4355452/174507897732027555169/index_4.m3u8' },
        { id: 'L4', title: 'Some Basic Concepts of Chemistry L4', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/646257785235418800.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357309/174530949861477555169/index_4.m3u8' },
        { id: 'L5', title: 'Some Basic Concepts of Chemistry L5', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/492924385069963100.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357831/174533736975997555169/index_4.m3u8' },
        { id: 'L6', title: 'Some Basic Concepts of Chemistry L6', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/776962540288405800.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4358829/174541226159937555169/index_4.m3u8' },
      ]
    },
    {
      name: 'Structure of Atom',
      lectures: [
        { id: 'L1', title: 'Structure of Atom L1', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/648524728566613900.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4363320/174584946237347555169/index_4.m3u8' },
        { id: 'L2', title: 'Structure of Atom L2', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/882253112379514100.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4364789/174594373555637555169/index_4.m3u8' },
        { id: 'L3', title: 'Structure of Atom L3', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/725318515177342300.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4365831/174601791723957555169/index_4.m3u8' },
        { id: 'L4', title: 'Structure of Atom L4', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/129927195937409060.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4372294/174646064983197555169/index_4.m3u8' },
        { id: 'L5', title: 'Structure of Atom L5', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/64128366459183150.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4373927/174654700417617555169/index_4.m3u8' },
        { id: 'L6', title: 'Structure of Atom L6', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/295746695513876900.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4374900/174662289939277555169/index_4.m3u8' },
        { id: 'L7', title: 'Structure of Atom L7', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/570113084186052900.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4379161/174706558456287555169/index_4.m3u8' },
        { id: 'L8', title: 'Structure of Atom L8', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/793662167351692000.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4380760/174715119572127555169/index_4.m3u8' },
        { id: 'L9', title: 'Structure of Atom L9', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/759793162637350300.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4381822/174722718560337555169/index_4.m3u8' },
        { id: 'L10', title: 'Structure of Atom L10', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/286340414077823100.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4385842/174767006769507555169/index_4.m3u8' },
      ]
    },
    {
      name: 'Classification of Elements',
      lectures: [
        { id: 'L1', title: 'Classification of Elements L1', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/339389933433131260.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4387083/174775728734717555169/index_4.m3u8' },
        { id: 'L2', title: 'Classification of Elements L2', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/57056784804374670.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4388067/174783286454367555169/index_4.m3u8' },
        { id: 'L3', title: 'Classification of Elements L3', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/491303024172372400.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4392905/174827564478927555169/index_4.m3u8' },
        { id: 'L4', title: 'Classification of Elements L4', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/320680653076158800.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4394025/174836245685127555169/index_4.m3u8' },
        { id: 'L5', title: 'Classification of Elements L5', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/880517372972588500.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4394991/174843803458707555169/index_4.m3u8' },
        { id: 'L6', title: 'Classification of Elements L6', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/819360381627027700.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4406376/174957160517507555169/index_4.m3u8' },
        { id: 'L7', title: 'Classification of Elements L7', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/279084987190089100.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4407338/174964691183307555169/index_4.m3u8' },
     ]
    },
    {
      name: 'Redox Reaction',
      lectures: [
        { id: 'L1', title: 'Redox Reaction 1', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/599116557212790000.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4411390/175008942555082764802/index_5.m3u8' },
        { id: 'L2', title: 'Redox Reaction 2', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/774174145147878800.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4412647/175017601245432764802/index_5.m3u8' },
        
      ]
    },
  ],
  'Mathematics': [
    {
      name: 'Sets',
      lectures: [
        { id: 'L1', title: 'Sets L1', notesLink: `https://drive.google.com/file/d/19Q6y1QGvyPJo3t87MnndIgWWiGalcT-o/preview`, videoEmbedType: 'youtube', videoEmbedUrl: 'https://www.youtube.com/embed/UT9CN9XFGYw' },
        { id: 'L2', title: 'Sets L2', notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/5110820Sets%20L2.pdf_Sets%20L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4353889/174489667533668296383/index_4.m3u8' },
        { id: 'L3', title: 'Sets L3', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/798181586567513700.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4356690/174524049345081097666/index_5.m3u8' },
        { id: 'L4', title: 'Sets L4', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/452267096067597250.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357736/174532685248651097666/index_5.m3u8' },
        { id: 'L5', title: 'Sets L5', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/397684346174967800.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4359038/174542426999201097666/index_5.m3u8' },
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
        { id: 'L6', title: 'Complex Numbers L6', notesLink: '', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4373799/174653642467251261798/index_4.m3u8' },
        { id: 'L7', title: 'Complex Numbers L7', notesLink: '', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4375005/174663383331301261798/index_4.m3u8' },
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
    {
      name: 'Trigonometry Function',
      lectures: [
        { id: 'L1', title: 'Trigonometry Function L1', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/763322370598215200.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4405153/174947369130311261798/index_4.m3u8' },
        { id: 'L2', title: 'Trigonometry Function L2', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/19035367772427812.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4406215/174956025952221261798/index_4.m3u8' },
        { id: 'L3', title: 'Trigonometry Function L3', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/104188128771684820.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4407505/174965818393941261798/index_4.m3u8' },
        { id: 'L4', title: 'Trigonometry Function L4', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/599391613802409200.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4411239/175007836684925373082/index_4.m3u8' },
        { id: 'L5', title: 'Trigonometry Function L5', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/767035803064220800.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4412499/175016476027615373082/index_4.m3u8' },
        
      ]
    },
  ],
  'Biology': [
    {
      name: 'The Living World',
      lectures: [
        { id: 'L1', title: 'The Living World L1', notesLink: `https://drive.google.com/file/d/1pwuQqik49QOyY2MD4eWUwdPpKX6TpXlX/view?usp=drive_link`, videoEmbedType: 'youtube', videoEmbedUrl: 'https://www.youtube.com/embed/RF6xfHVo9xc' },
        { id: 'L2', title: 'The Living World L2', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/840347643747496200.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4353875/174489575453452621696/index_4.m3u8' },
        { id: 'L3', title: 'The Living World L3', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/568137344888524700.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354742/174498168131232621696/index_4.m3u8' },
      ]
    },
    {
      name: 'Biological Classification',
      lectures: [
        { id: 'L1', title: 'Biological Classification L1', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/835803105287866900.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4356754/174524546772032621696/index_4.m3u8' },
        { id: 'L2', title: 'Biological Classification L2', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/379080259263586700.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357796/174533217995822621696/index_4.m3u8' },
        { id: 'L3', title: 'Biological Classification L3', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/24216229661638776.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4359956/174549899862182621696/index_4.m3u8' },
        { id: 'L4', title: 'Biological Classification L4', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/559946917947088400.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4363375/174585552159492621696/index_4.m3u8' },
        { id: 'L5', title: 'Biological Classification L5', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/634399216622604700.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4364707/174593615136972621696/index_4.m3u8' },
        { id: 'L6', title: 'Biological Classification L6', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/470449113809566500.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4366969/174610253788082621696/index_4.m3u8' },
        { id: 'L7', title: 'Biological Classification L7', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/688116353569951400.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4372260/174645518133352621696/index_4.m3u8' },
        { id: 'L8', title: 'Biological Classification L8', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/76093981534603400.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4373877/174654161051022621696/index_4.m3u8' },
        { id: 'L9', title: 'Biological Classification L9', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/140042583048903940.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4376014/174670815163022621696/index_4.m3u8' },
        { id: 'L10', title: 'Biological Classification L10', notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/398695359949883840.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4379100/174705957021312621696/index_4.m3u8' },
      ]
    },
    {
      name: 'Plant Kingdom',
      lectures: [
        { id: 'L1', title: 'Plant Kingdom L1', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/607933502624565900.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4380724/174714587348772621696/index_4.m3u8' },
        { id: 'L2', title: 'Plant Kingdom L2', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/552204249141935300.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4382830/174731342734562621696/index_4.m3u8' },
        { id: 'L3', title: 'Plant Kingdom L3', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/105419329944292660.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4385775/174766412670572621696/index_4.m3u8' },
        { id: 'L4', title: 'Plant Kingdom L4', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/469918673531784100.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4387033/174775110681002621696/index_4.m3u8' },
        { id: 'L5', title: 'Plant Kingdom L5', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/690234138408011500.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4389241/174791848422382621696/index_4.m3u8' },
        { id: 'L6', title: 'Plant Kingdom L6', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/697102475548157000.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4392848/174826911678352621696/index_4.m3u8' },
        { id: 'L7', title: 'Plant Kingdom L7', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/265996105822722700.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4393968/174835523751212621696/index_4.m3u8' },
        { id: 'L8', title: 'Plant Kingdom L8', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/379225517365767300.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4396104/174852080879932621696/index_4.m3u8' },
      ]
    },
    {
      name: 'Animal Kingdom',
      lectures: [
        { id: 'L1', title: 'Animal Kingdom L1', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/313588302261492500.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4405246/174947952083222621696/index_4.m3u8' },
        { id: 'L2', title: 'Animal Kingdom L2', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/685521775893209900.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4406311/174956537678522621696/index_4.m3u8' },
        { id: 'L3', title: 'Animal Kingdom L3', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/14218466333748936.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4408305/174973168472882621696/index_4.m3u8' },
        { id: 'L4', title: 'Animal Kingdom L4', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/35600704906820824.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4411317/175008298317313740487/index_4.m3u8' },
        { id: 'L5', title: 'Animal Kingdom L5', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/521588388759391550.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4412598/175017045022253740487/index_4.m3u8' },
        
      ]
    },
  ],
  'English': [
    {
      name: 'The Portrait of a lady ',
      lectures: [
        { id: 'l1', title: 'The Portrait of a lady 1', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/3791390The%20Portrait%20of%20a%20Lady%20%28Prose%29%20%20%20L1.pdf_The%20Portrait%20of%20a%20Lady%20%28Prose%29%20%20%20L1.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4355612/1745159224_9384778348109423/sunny/1745158131261_464915711062529660_video_VOD720p30.m3u8' },
        { id: 'l2', title: 'The Portrait of a lady 2', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/1786690The%20Portrait%20of%20a%20Lady%20%28Prose%29%20%20%20L2.pdf_The%20Portrait%20of%20a%20Lady%20%28Prose%29%20%20%20L2.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4362029/1745700364_6861508399271443/sunny/1745672208426_612520282028803100_video_VOD720p30.m3u8' },
      ]
    },
    {
      name: 'A Photograph',
      lectures: [
        { id: 'l1', title: 'A Photograph 1', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/59141A%20photograph%20%20%20L1.pdf_A%20photograph%20%20%20L1.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4362027/1745699824_5382116785203709/sunny/1745672048539_449041945338372300_video_VOD720p30.m3u8' },
        { id: 'l2', title: 'A Photograph 2', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/1875512A%20Photograph%20%20%20L2.pdf_A%20Photograph%20%20%20L2.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4362028/1745700123_7827683171701798/sunny/1745672142046_1468116101409511_video_VOD720p30.m3u8' },
      ]
    },
    {
      name: 'We"re not afraid to die',
      lectures: [
        { id: 'l1', title: 'We"re not afraid to die 1', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/6959710We%E2%80%99re%20Not%20Afraid%20to%20Die%E2%80%A6%20if%20We%20Can%20Be%20Together%20L1.pdf_We%E2%80%99re%20Not%20Afraid%20to%20Die%E2%80%A6%20if%20We%20Can%20Be%20Together%20L1.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4376841/1746782584_5615518054046778/sunny/1746782168362_44751792912049930_video_VOD720p30.m3u8' },
        { id: 'l2', title: 'We"re not afraid to die 2', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/1490688We%E2%80%99re%20Not%20Afraid%20to%20Die%E2%80%A6%20if%20We%20Can%20Be%20Together%20L2.pdf_We%E2%80%99re%20Not%20Afraid%20to%20Die%E2%80%A6%20if%20We%20Can%20Be%20Together%20L2.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4376842/1746782588_1716697312405945/sunny/1746782291885_47950164792380220_video_VOD720p30.m3u8' },
        { id: 'l3', title: 'We"re not afraid to die 3', notesLink: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/6835826We%E2%80%99re%20Not%20Afraid%20to%20Die%E2%80%A6%20if%20We%20Can%20Be%20Together%20L3.pdf_We%E2%80%99re%20Not%20Afraid%20to%20Die%E2%80%A6%20if%20We%20Can%20Be%20Together%20L3.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4376843/1746783246_9612936247338730/sunny/1746782427627_664906068054696800_video_VOD720p30.m3u8' }, 
      ]
    }
  ],
};
