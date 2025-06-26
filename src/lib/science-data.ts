
// src/lib/science-data.ts
import type { CourseContentMap } from './course-utils';
import { sharedClass11SubjectsContent } from './shared-class11-subjects-data';

// Science-specific subjects
const scienceOnlySubjects: CourseContentMap = {
  'Physics': [
    {
      name: 'Units and Measurement',
      lectures: [
        { id: 'L1', title: 'Units and Measurement L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/350215509469119700.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://www.youtube.com/embed/eYHkwzP0TkY' },
        { id: 'L2', title: 'Units and Measurement L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/320554157609896960.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354032/174490568189301097666/index_5.m3u8' },
        { id: 'L3', title: 'Units and Measurement L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/282566967198221150.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354885/174499396879388296383/index_4.m3u8' },
        { id: 'L4', title: 'Units and Measurement L4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/141795108468127550.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4360178/174551194721888296383/index_4.m3u8' },
        { id: 'L5', title: 'Units and Measurement L5', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/4024933903930072.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4361337/174559902322678296383/index_4.m3u8' },
        { id: 'L6', title: 'Units and Measurement L6', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/42711989017558184.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4362139/174568479092198296383/index_4.m3u8' },
      ]
    },
    {
      name: 'Motion In a Straight Line',
      lectures: [
        { id: 'L1', title: 'Motion In a Straight Line L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/671154171864929000.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4367211/174611702457038296383/index_4.m3u8' },
        { id: 'L2', title: 'Motion In a Straight Line L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/534474456291874800.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4384135/174741235930878296383/index_4.m3u8' },
        { id: 'L3', title: 'Motion In a Straight Line L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/197692296755338560.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4384839/174749905027548296383/index_4.m3u8' },
        { id: 'L4', title: 'Motion In a Straight Line L4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/258346732119085800.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4389362/174793149686398296383/index_4.m3u8' },
        { id: 'L5', title: 'Motion In a Straight Line L5', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/822723306838902300.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4390995/174801802012768296383/index_4.m3u8' },
        { id: 'L6', title: 'Motion In a Straight Line L6', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/547569735312311360.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4391550/174810397274838296383/index_4.m3u8' },
      ]
    },
    {
      name: 'Motion in a Plane',
      lectures: [
        { id: 'L1', title: 'Motion in a Plane L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/811749587134053100.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4396270/174853512223368296383/index_4.m3u8' },
        { id: 'L2', title: 'Motion in a Plane L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/882950906399658500.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4397274/174862200978868296383/index_4.m3u8' },
        { id: 'L3', title: 'Motion in a Plane L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/63779615092842720.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4408448/174974624946198296383/index_4.m3u8' },
        { id: 'L4', title: 'Motion in a Plane L4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/377581231189625900.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4409511/174983228258958296383/index_4.m3u8' },
        { id: 'L5', title: 'Motion in a Plane L5', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/858212590728421200.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4410224/174991883860928296383/index_4.m3u8' },
        { id: 'L6', title: 'Motion in a Plane L6', notesTitle: "", notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4415009/175035109311478929414/index_4.m3u8' },
        { id: 'L7', title: 'Motion in a Plane L7', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/887967050474244900.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4416071/175043766229598929414/index_4.m3u8' },
        { id: 'L8', title: 'Motion in a Plane L8', notesTitle: "", notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4416703/175052339715868929414/index_4.m3u8' },
      ]
    },
    {
      name: 'Basic Mathematics',
      lectures: [
        { id: 'L1', title: 'Basic Mathematics L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/63080286597865820.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4368402/174620181785161071993/index_4.m3u8' },
        { id: 'L2', title: 'Basic Mathematics L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/781289778058012200.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4370179/174628987185681071993/index_4.m3u8' },
        { id: 'L3', title: 'Basic Mathematics L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/311010593170532600.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4376221/174672074184601071993/index_4.m3u8' },
        { id: 'L4', title: 'Basic Mathematics L4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/512879724400887040.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377330/174680770411381071993/index_4.m3u8' },
        { id: 'L5', title: 'Basic Mathematics L5', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/294291601749770000.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377993/174689329024511071993/index_4.m3u8' },
        ]
    },
    {
      name: 'Laws of Motion',
      lectures: [
        { id: 'L1', title: ' L1', notesTitle: "", notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4420958/175095472124975910848/index_4.m3u8' },
        
      ]
    },
  ],
  'Chemistry': [
    {
      name: 'Some Basic Concepts of Chemistry',
      lectures: [
        { id: 'L1', title: 'Some Basic Concepts of Chemistry L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/365664162104436740.pdf`, videoEmbedType: 'youtube', videoEmbedUrl: 'https://www.youtube.com/embed/EVU_Bvc3HpE' },
        { id: 'L2', title: 'Some Basic Concepts of Chemistry L2', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/60665227316336800.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4353000/174481993295887555169/index_4.m3u8' },
        { id: 'L3', title: 'Some Basic Concepts of Chemistry L3', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/563943491510636200.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4355452/174507897732027555169/index_4.m3u8' },
        { id: 'L4', title: 'Some Basic Concepts of Chemistry L4', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/646257785235418800.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357309/174530949861477555169/index_4.m3u8' },
        { id: 'L5', title: 'Some Basic Concepts of Chemistry L5', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/492924385069963100.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357831/174533736975997555169/index_4.m3u8' },
        { id: 'L6', title: 'Some Basic Concepts of Chemistry L6', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/776962540288405800.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4358829/174541226159937555169/index_4.m3u8' },
      ]
    },
    {
      name: 'Structure of Atom',
      lectures: [
        { id: 'L1', title: 'Structure of Atom L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/648524728566613900.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4363320/174584946237347555169/index_4.m3u8' },
        { id: 'L2', title: 'Structure of Atom L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/882253112379514100.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4364789/174594373555637555169/index_4.m3u8' },
        { id: 'L3', title: 'Structure of Atom L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/725318515177342300.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4365831/174601791723957555169/index_4.m3u8' },
        { id: 'L4', title: 'Structure of Atom L4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/129927195937409060.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4372294/174646064983197555169/index_4.m3u8' },
        { id: 'L5', title: 'Structure of Atom L5', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/64128366459183150.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4373927/174654700417617555169/index_4.m3u8' },
        { id: 'L6', title: 'Structure of Atom L6', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/295746695513876900.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4374900/174662289939277555169/index_4.m3u8' },
        { id: 'L7', title: 'Structure of Atom L7', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/570113084186052900.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4379161/174706558456287555169/index_4.m3u8' },
        { id: 'L8', title: 'Structure of Atom L8', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/793662167351692000.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4380760/174715119572127555169/index_4.m3u8' },
        { id: 'L9', title: 'Structure of Atom L9', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/759793162637350300.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4381822/174722718560337555169/index_4.m3u8' },
        { id: 'L10', title: 'Structure of Atom L10', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/286340414077823100.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4385842/174767006769507555169/index_4.m3u8' },
      ]
    },
    {
      name: 'Classification of Elements',
      lectures: [
        { id: 'L1', title: 'Classification of Elements L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/339389933433131260.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4387083/174775728734717555169/index_4.m3u8' },
        { id: 'L2', title: 'Classification of Elements L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/57056784804374670.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4388067/174783286454367555169/index_4.m3u8' },
        { id: 'L3', title: 'Classification of Elements L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/491303024172372400.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4392905/174827564478927555169/index_4.m3u8' },
        { id: 'L4', title: 'Classification of Elements L4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/320680653076158800.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4394025/174836245685127555169/index_4.m3u8' },
        { id: 'L5', title: 'Classification of Elements L5', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/880517372972588500.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4394991/174843803458707555169/index_4.m3u8' },
        { id: 'L6', title: 'Classification of Elements L6', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/819360381627027700.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4406376/174957160517507555169/index_4.m3u8' },
        { id: 'L7', title: 'Classification of Elements L7', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/279084987190089100.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4407338/174964691183307555169/index_4.m3u8' },
      ]
    },
    {
      name: 'Redox Reaction',
      lectures: [
        { id: 'L1', title: 'Redox Reaction 1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/599116557212790000.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4411390/175008942555082764802/index_5.m3u8' },
        { id: 'L2', title: 'Redox Reaction 2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/774174145147878800.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4412647/175017601245432764802/index_5.m3u8' },
        { id: 'L3', title: 'Redox Reaction 3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/566424016679826750.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4413737/175025171821132764802/index_5.m3u8' },
        { id: 'L4', title: 'Redox Reaction 4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/882823727762434200.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4417737/175069489128322764802/index_5.m3u8' },
        { id: 'L5', title: 'Redox Reaction 5', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/136986275193504830.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4418728/175078208680382764802/index_5.m3u8' },
        ]
    },
    {
      name: 'SURPRISE TEST',
      lectures: [
        { id: 'L1', title: 'SURPRISE TEST', notesTitle: "", notesLink: ``, videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4419713/175085599785582764802/index_5.m3u8' },
    
        
      ]
    },
  ],
  'Mathematics': [
    {
      name: 'Sets',
      lectures: [
        { id: 'L1', title: 'Sets L1', notesTitle: "", notesLink: `https://drive.google.com/file/d/19Q6y1QGvyPJo3t87MnndIgWWiGalcT-o/preview`, videoEmbedType: 'hls', videoEmbedUrl: 'https://www.youtube.com/embed/UT9CN9XFGYw' },
        { id: 'L2', title: 'Sets L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/5110820Sets%20L2.pdf_Sets%20L2.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4353889/174489667533668296383/index_4.m3u8' },
        { id: 'L3', title: 'Sets L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/798181586567513700.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4356690/174524049345081097666/index_5.m3u8' },
        { id: 'L4', title: 'Sets L4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/452267096067597250.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357736/174532685248651097666/index_5.m3u8' },
        { id: 'L5', title: 'Sets L5', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/397684346174967800.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4359038/174542426999201097666/index_5.m3u8' },
      ]
    },
    {
      name: 'Complex Numbers',
      lectures: [
        { id: 'L1', title: 'Complex Numbers L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/750226558976804600.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4363249/174584513794761261798/index_4.m3u8' },
        { id: 'L2', title: 'Complex Numbers L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/485152155798966900.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4364488/174592875146111261798/index_4.m3u8' },
        { id: 'L3', title: 'Complex Numbers L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/21963317727613020.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4366039/174602857795961261798/index_4.m3u8' },
        { id: 'L4', title: 'Complex Numbers L4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/348718648836124700.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4367111/174610963914991261798/index_4.m3u8' },
        { id: 'L5', title: 'Complex Numbers L5', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/446451742730990000.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4372190/174645001549831261798/index_4.m3u8' },
        { id: 'L6', title: 'Complex Numbers L6', notesTitle: "", notesLink: '', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4373799/174653642467251261798/index_4.m3u8' },
        { id: 'L7', title: 'Complex Numbers L7', notesTitle: "", notesLink: '', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4375005/174663383331301261798/index_4.m3u8' },
      ]
    },
    {
      name: 'Relation & Functions',
      lectures: [
        { id: 'L1', title: 'Relation & Functions L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/637408089698646100.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4379033/174705494887511097666/index_5.m3u8' },
        { id: 'L2', title: 'Relation & Functions L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/370453582506231700.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4385645/174765739956571097666/index_5.m3u8' },
        { id: 'L3', title: 'Relation & Functions L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/473411909681269900.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4386945/174774606477081097666/index_5.m3u8' },
        { id: 'L4', title: 'Relation & Functions L4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/864747801583342300.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4388168/174784321070651097666/index_5.m3u8' },
        { id: 'L5', title: 'Relation & Functions L5', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/392480627577880450.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4392734/174826442633201097666/index_5.m3u8' },
        { id: 'L6', title: 'Relation & Functions L6', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/816874047918533500.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4393953/174835206745611097666/index_5.m3u8' },
        { id: 'L7', title: 'Relation & Functions L7', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/817730254422810200.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4395110/174844717954831097666/index_5.m3u8' },
      ]
    },
    {
      name: 'Trigonometry Function',
      lectures: [
        { id: 'L1', title: 'Trigonometry Function L1', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/763322370598215200.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4405153/174947369130311261798/index_4.m3u8' },
        { id: 'L2', title: 'Trigonometry Function L2', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/19035367772427812.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4406215/174956025952221261798/index_4.m3u8' },
        { id: 'L3', title: 'Trigonometry Function L3', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/104188128771684820.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4407505/174965818393941261798/index_4.m3u8' },
        { id: 'L4', title: 'Trigonometry Function L4', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/599391613802409200.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4411239/175007836684925373082/index_4.m3u8' },
        { id: 'L5', title: 'Trigonometry Function L5', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/767035803064220800.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4412499/175016476027615373082/index_4.m3u8' },
        { id: 'L6', title: 'Trigonometry Function L6', notesTitle: "", notesLink: '', videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4413863/175026237552875373082/index_4.m3u8' },
      ]
    },
  ],
  'Biology': [
    {
      name: 'The Living World',
      lectures: [
        { id: 'L1', title: 'The Living World L1', notesTitle: "", notesLink: `https://drive.google.com/file/d/1pwuQqik49QOyY2MD4eWUwdPpKX6TpXlX/view?usp=drive_link`, videoEmbedType: 'hls', videoEmbedUrl: 'https://www.youtube.com/embed/RF6xfHVo9xc?si=brqVi6ajJpepWicA' },
        { id: 'L2', title: 'The Living World L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/840347643747496200.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4353875/174489575453452621696/index_4.m3u8' },
        { id: 'L3', title: 'The Living World L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/568137344888524700.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354742/174498168131232621696/index_4.m3u8' },
      ]
    },
    {
      name: 'Biological Classification',
      lectures: [
        { id: 'L1', title: 'Biological Classification L1', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/835803105287866900.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4356754/174524546772032621696/index_4.m3u8' },
        { id: 'L2', title: 'Biological Classification L2', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/379080259263586700.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357796/174533217995822621696/index_4.m3u8' },
        { id: 'L3', title: 'Biological Classification L3', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/24216229661638776.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4359956/174549899862182621696/index_4.m3u8' },
        { id: 'L4', title: 'Biological Classification L4', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/559946917947088400.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4363375/174585552159492621696/index_4.m3u8' },
        { id: 'L5', title: 'Biological Classification L5', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/634399216622604700.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4364707/174593615136972621696/index_4.m3u8' },
        { id: 'L6', title: 'Biological Classification L6', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/470449113809566500.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4366969/174610253788082621696/index_4.m3u8' },
        { id: 'L7', title: 'Biological Classification L7', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/688116353569951400.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4372260/174645518133352621696/index_4.m3u8' },
        { id: 'L8', title: 'Biological Classification L8', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/76093981534603400.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4373877/174654161051022621696/index_4.m3u8' },
        { id: 'L9', title: 'Biological Classification L9', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/140042583048903940.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4376014/174670815163022621696/index_4.m3u8' },
        { id: 'L10', title: 'Biological Classification L10', notesTitle: "", notesLink: `https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/398695359949883840.pdf`, videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4379100/174705957021312621696/index_4.m3u8' },
      ]
    },
    {
      name: 'Plant Kingdom',
      lectures: [
        { id: 'L1', title: 'Plant Kingdom L1', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/607933502624565900.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4380724/174714587348772621696/index_4.m3u8' },
        { id: 'L2', title: 'Plant Kingdom L2', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/552204249141935300.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4382830/174731342734562621696/index_4.m3u8' },
        { id: 'L3', title: 'Plant Kingdom L3', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/105419329944292660.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4385775/174766412670572621696/index_4.m3u8' },
        { id: 'L4', title: 'Plant Kingdom L4', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/469918673531784100.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4387033/174775110681002621696/index_4.m3u8' },
        { id: 'L5', title: 'Plant Kingdom L5', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/690234138408011500.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4389241/174791848422382621696/index_4.m3u8' },
        { id: 'L6', title: 'Plant Kingdom L6', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/697102475548157000.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4392848/174826911678352621696/index_4.m3u8' },
        { id: 'L7', title: 'Plant Kingdom L7', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/265996105822722700.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4393968/174835523751212621696/index_4.m3u8' },
        { id: 'L8', title: 'Plant Kingdom L8', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/379225517365767300.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4396104/174852080879932621696/index_4.m3u8' },
      ]
    },
    {
      name: 'Animal Kingdom',
      lectures: [
        { id: 'L1', title: 'Animal Kingdom L1', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/313588302261492500.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4405246/174947952083222621696/index_4.m3u8' },
        { id: 'L2', title: 'Animal Kingdom L2', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/685521775893209900.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4406311/174956537678522621696/index_4.m3u8' },
        { id: 'L3', title: 'Animal Kingdom L3', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/14218466333748936.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4408305/174973168472882621696/index_4.m3u8' },
        { id: 'L4', title: 'Animal Kingdom L4', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/35600704906820824.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4411317/175008298317313740487/index_4.m3u8' },
        { id: 'L5', title: 'Animal Kingdom L5', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/521588388759391550.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4412598/175017045022253740487/index_4.m3u8' },
        { id: 'L6', title: 'Animal Kingdom L6', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/857175346896140000.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4414812/175033535661553740487/index_4.m3u8' },
        { id: 'L7', title: 'Animal Kingdom L7', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/302439581726665300.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4417680/175068839657313740487/index_4.m3u8' },
        { id: 'L8', title: 'Animal Kingdom L8', notesTitle: "", notesLink: 'https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/682273925071040000.pdf', videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4418662/175077474924783740487/index_4.m3u8' },
        { id: 'L9', title: 'Animal Kingdom L9', notesTitle: "", notesLink: '', videoEmbedType: 'hls', videoEmbedUrl: 'https://d274dp7v20n4nf.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4420719/175094220969903740487/index_4.m3u8' },
      
      ]
    },
  ],
};

// Combine science-only subjects with shared subjects
export const scienceCourseContent: CourseContentMap = {
  ...scienceOnlySubjects,
  ...sharedClass11SubjectsContent,
};

