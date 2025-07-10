
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
        title: 'Hindi Course A Class 10',
        author: 'Oswal',
        download: 'https://drive.google.com/file/d/1jrf91KwBJ2W57s7puI33A_mJb09GqDv8/view',
      },
      {
        title: 'IT Arihant All In One Class 10',
        author: 'Neetu Gaikwad, Shweta Agarwal',
        download: 'https://drive.google.com/file/d/1b0vr0mqbkS92oiX_lyw5x3CnwaQ3568h/view',
      },
      {
        title: 'Lakhmir Science Class 10',
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
        title: 'Owsaal English Literature Question Bank 10',
        author: 'Oswaal',
        download: 'https://drive.google.com/file/d/1OuHBY3d_bHSa_V4XZNABvHzSLHTxC0N5/view',
      },
      {
        title: 'Owsaal Science Question Bank Class 10 CBSE',
        author: 'Oswaal',
        download: 'https://drive.google.com/file/d/1GPV2pSd3FC0K0-Kef_srwy7ejF52vnhT/view',
      },
      {
        title: 'Owsaal Social Science Question Bank Class 10 CBSE (2025)',
        author: 'Oswaal',
        download: 'https://drive.google.com/file/d/1oNzE11QkxJKIX_7lcvi1IrFDyL_rtxAu/view',
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
        title: 'Educart CBSE Question Bank Class 10 Social Science',
        author: 'Digraj Singh Rajput',
        download: 'https://drive.google.com/file/d/1XuSNC5QGwTL-o5z1aY_zlbScZSQwkTUP/view',
      },
      {
        title: 'Educart One-shot Science CBSE Class 10',
        author: 'Educart',
        download: 'https://drive.google.com/file/d/12ydACSjwg1zS3Ign12OSp8j_sKqzHe3t/view',
      },
      {
        title: 'Padhle akshay 99 pages E-Book Mathematics',
        author: 'Padhle Akshay',
        download: 'https://drive.google.com/file/d/1PnXaboiutM_wUjZhQfppjgkeldO34GCG/view',
      },
      {
        title: 'Padhle akshay 99 pages E-Book Science',
        author: 'Padhle Akshay',
        download: 'https://drive.google.com/file/d/1g7Nx1GPx60HwybOMLMPkbz401yBkqklV/view',
      },
      {
        title: 'Padhle akshay 99 pages E-Book Social Science',
        author: 'Padhle Akshay',
        download: 'https://drive.google.com/file/d/1jL1AqRigTwb2kBP3v6q4t7Grmd1-IgJJ/view',
      },
    ],
  },
  {
    categoryName: 'Class 11 Books',
    books: [
      {
        title: 'R.S. Aggarwal Class 11',
        author: 'R.S. Aggarwal',
        download: 'https://drive.google.com/file/d/1ju7JapjdwbgsArHWIcyydFdZ4Yqa6eKc/view',
     },
      {
        title: 'Accountancy E-Book Volume 1',
        author: 'PW',
        download: 'https://drive.google.com/file/d/1UbOecJsxB9-QZYG-oWmNAucOXSaO7GJR/view?usp=drivesdk',
      },
      {
        title: 'Concept of Physics (Volume 1)',
        author: 'H.C. Verma',
        download: 'https://drive.google.com/file/d/1UhklXKi-I-6KBpx3SlNmxpYxKTCFTaVQ/view',
     },
      {
        title: 'Accountancy E-Book Volume 2',
        author: 'PW',
        download: 'https://drive.google.com/file/d/1UeKPrPV5NRSJWfuhkomxwFoqZ5sOMrwN/view?usp=drivesdk',
      },
      {
        title: 'ALLEN JEE Chemistry',
        author: 'ALLEN',
        download: 'https://drive.google.com/file/d/1cyjuX92lm6q8L3Ceks8Air9Ho8LJq0sg/view',
      },
      {
        title: 'Micro Economics E-Book',
        author: 'PW',
        download: 'https://drive.google.com/file/d/1UgVf21-o5OIMApCeLOmGl9NMtRyRDZcw/view?usp=drivesdk',
        },
      {
        title: 'Statitics E-Book',
        author: 'PW',
        download: 'https://drive.google.com/file/d/1UgxhjIJP8kprREDMX2W3Z9KXaF78v9SR/view?usp=drivesdk',
        },
      {
        title: 'Business Studies E-Book',
        author: 'PW',
        download: 'https://drive.google.com/file/d/1UwiPFXS85kGRoLuB788v7oYKU2NlrDgz/view?usp=drivesdk',
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
    ],
  },
];
