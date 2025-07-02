
export interface Book {
  title: string;
  author: string;
  download: string | { [key: string]: string };
}

interface BookCategory {
  categoryName: string;
  books: Book[];
}

export const booksData: BookCategory[] = [
  {
    categoryName: 'Class 10 Books',
    books: [
      {
        title: 'English Language & Literature CBSE Class 10 (2022-2023)',
        author: 'Nandni Sharma',
        download: 'https://drive.google.com/file/d/1N5tQVDsyavh58yYFcylCb2Uk8FlgiDcz/view',
      },
      {
        title: 'Hindi Course A Class 10 QB',
        author: 'Oswal',
        download: 'https://drive.google.com/file/d/1jrf91KwBJ2W57s7puI33A_mJb09GqDv8/view',
      },
      {
        title: 'IT Arihant All In One Class 10 (2020-21)',
        author: 'Neetu Gaikwad, Shweta Agarwal',
        download: 'https://drive.google.com/file/d/1b0vr0mqbkS92oiX_lyw5x3CnwaQ3568h/view',
      },
      {
        title: 'Lakhmir Singh Science Class 10',
        author: 'S Chand',
        download: {
          Physics: 'https://drive.google.com/file/d/1sMr25JQg8jwhiJXHnS5lBULAifZQ6re5/view',
          Chemistry: 'https://drive.google.com/file/d/10P7ELFfLbTquhtExOi3nicj0xeqECtgT/view',
          Biology: 'https://drive.google.com/file/d/1SL0HJuEeTd5fQ94YJJOWPEhQ5pHbcoEW/view',
        },
      },
      {
        title: 'RD Sharma Mathematics Class 10 (2025-26 Edition)',
        author: 'RD Sharma',
        download: 'https://drive.google.com/file/d/1sKoawaJf2PUk8dWSFvrcoGjC_0V0k8GS/view',
      },
      {
        title: 'Oswaal CBSE & NCERT One for All Class 10 Mathematics Standard (2026 Exam)',
        author: 'Oswaal Editorial Board',
        download: 'https://drive.google.com/file/d/1F3BDefPa0BxjLo4cC6ecNVq9r7ZfbEaN/view',
      },
      {
        title: 'Owsaal English Literature Question Bank 10 (2025)',
        author: 'Oswaal',
        download: 'https://drive.google.com/file/d/1OuHBY3d_bHSa_V4XZNABvHzSLHTxC0N5/view',
      },
      {
        title: 'Owsaal Science Question Bank Class 10 CBSE (2025)',
        author: 'Oswaal',
        download: 'https://drive.google.com/file/d/1GPV2pSd3FC0K0-Kef_srwy7ejF52vnhT/view',
      },
      {
        title: 'Owsaal Social Science Question Bank Class 10 CBSE (2025)',
        author: 'Oswaal',
        download: 'https://drive.google.com/file/d/1oNzE11QkxJKIX_7lcvi1IrFDyL_rtxAu/view',
      },
      {
        title: 'PW CBSE Question and Concept Bank (QCB) Class 10 Science (2025)',
        author: 'PW',
        download: 'https://drive.google.com/file/d/1jeGUfK0YPpmHxWGuAKjS-oOB_bAga5ju/view',
      },
      {
        title: '1 O\'clock Revision By Kriti Shama Social',
        author: 'Kriti Sharma',
        download: 'https://drive.google.com/file/d/1GtaIT5NCNvnGNgorexsR9FvVImjgjbQH/view',
      },
      {
        title: '33 Days Challenge CBSE Class 10 Mathematics Standard',
        author: 'Padhle Akshay',
        download: 'https://drive.google.com/file/d/1XFOWzcUDjNFgQlwszuF1BMkWnmVa5xqV/view',
      },
      {
        title: 'Arihant All in One Science Class 10',
        author: 'Arihant',
        download: 'https://drive.google.com/file/d/1GGQ4npxny5MljsZns3MeMtViV2G29BTW/view',
      },
      {
        title: 'Educart CBSE Question Bank Class 10 Social Science',
        author: 'Digraj Singh Rajput',
        download: 'https://drive.google.com/file/d/1XuSNC5QGwTL-o5z1aY_zlbScZSQwkTUP/view',
      },
      {
        title: 'Educart One-shot Science CBSE Class 10',
        author: 'Educart',
        download: 'https://drive.google.com/file/d/12ydACSjwg1zS3Ign12OSp8j_sKqzHe3t/view',
      },
    ],
  },
  {
    categoryName: 'Class 11 Books',
    books: [
      {
        title: 'Jawahar Navodaya Class 11 Previous Year Paper',
        author: 'Unknown',
        download: 'https://drive.google.com/file/d/15I0JvuLkBBev2hJl_qf3BTx4bnkYJq58/view',
      },
      {
        title: 'NCERT Class 11 Computer Science',
        author: 'NCERT',
        download: 'https://drive.google.com/file/d/1KlGKVuR2R7IOdVsuZYAymq3Ivn1p-QOj/view',
      },
      {
        title: 'Sumita Arora Class 11 Computer Science',
        author: 'Sumita Arora',
        download: 'https://drive.google.com/file/d/1f2TR6yHX7H4Ka0nhFQ2Wb81uDsylu_z_/view',
      },
      {
        title: 'R.S. Aggarwal Class 11',
        author: 'R.S. Aggarwal',
        download: 'https://drive.google.com/file/d/1ju7JapjdwbgsArHWIcyydFdZ4Yqa6eKc/view',
      },
      {
        title: 'Class 11 Biology NCERT',
        author: 'NCERT',
        download: 'https://drive.google.com/file/d/1VfDDXYTeYzGT-19JJk-2SfvkhK_2hIgs/view',
      },
      {
        title: 'Concept of Physics (Vol. 1)',
        author: 'H.C. Verma',
        download: 'https://drive.google.com/file/d/1UhklXKi-I-6KBpx3SlNmxpYxKTCFTaVQ/view',
      },
      {
        title: 'ALLEN JEE Chemistry Module (11&12)',
        author: 'ALLEN',
        download: 'https://drive.google.com/file/d/1cyjuX92lm6q8L3Ceks8Air9Ho8LJq0sg/view',
      },
    ],
  },
  {
    categoryName: 'Class 9 Books',
    books: [
      {
        title: 'MATHEMATICS',
        author: 'RD SHARMA',
        download: 'https://drive.google.com/file/d/16XQ-BWVeDMy2ddosjk129yWH5jy8gVtT/view',
      },
      {
        title: 'Maths Class 9TH',
        author: 'NCERT',
        download: 'https://drive.google.com/file/d/16HSR0JnfQUb685YwMqH73m5RfRTH6uW2/view',
      },
      {
        title: 'Class 9 Social Science Most Expected Question by Digraj Sir',
        author: 'Digraj Sir',
        download: 'https://drive.google.com/file/d/17nfkYj1mwxQRRvNtCtX0sTyNliXMhGrB/view',
      },
    ],
  },
];
