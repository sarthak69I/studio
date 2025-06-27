
"use client";

import { CourseCard } from '@/components/course-card';

interface Course {
  id: string;
  badgeText?: string;
  title: string;
  subtitle:string;
  imageUrl: string;
  imageAlt: string;
  imageAiHint?: string;
  highlightText: string;
  startDate: string;
  enrollLink: string;
  youtubeLink: string;
  timeTableImageUrl?: string;
  liveSlots?: LiveSlot[];
}

interface LiveSlot {
  targetHour: number;
  targetMinute: number;
  durationMinutes: number;
}

const coursesData: Course[] = [
  {
    id: '1',
    badgeText: 'NEW',
    title: 'PRARAMBH CLASS 11th',
    subtitle: '',
    imageUrl: 'https://i.ibb.co/qMN2dh3Q/Addaheadin.jpg',
    imageAlt: '11th Science Course Cover',
    imageAiHint: 'science education',
    highlightText: 'Batch for 11th Science',
    startDate: 'Started from Apr 2025',
    enrollLink: '/courses/1/enroll',
    youtubeLink: 'https://youtube.com/@prarambh-free?si=jT5p0zC1qYfDd-pR',
    timeTableImageUrl: 'https://drive.google.com/file/d/1NeenjN2AfvXmTB6_JKVps4_uVZ66jmaj/preview',
    liveSlots: [
      { targetHour: 17, targetMinute: 10, durationMinutes: 90 },
      { targetHour: 20, targetMinute: 10, durationMinutes: 90 },
    ],
  },
  {
    id: '4', // New Class 9 Aarambh Batch
    badgeText: 'NEW',
    title: 'CLASS 9th Aarambh',
    subtitle: '',
    imageUrl: 'https://i.ibb.co/bfm5bLc/download-1.jpg',
    imageAlt: 'Class 9 Aarambh Foundation Batch Course Cover',
    imageAiHint: 'education foundation',
    highlightText: 'Batch for Class 9th',
    startDate: 'Started from Apr 2025',
    enrollLink: '/courses/4/enroll',
    youtubeLink: 'https://youtube.com/@prarambh-free?si=jT5p0zC1qYfDd-pR',
    timeTableImageUrl: 'https://i.ibb.co/WNf8vK29/IMG-20250612-220549.jpg',
    liveSlots: [
      { targetHour: 17, targetMinute: 10, durationMinutes: 90 },
      { targetHour: 20, targetMinute: 10, durationMinutes: 90 },
    ],
  },
  {
    id: '2',
    badgeText: 'NEW',
    title: 'CLASS 11th Commerce',
    subtitle: '',
    imageUrl: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/bundle_management/course/202309028610_11th%20prarambh%20comm%20app%20final%203499.jpg',
    imageAlt: '11th Commerce Course Cover',
    imageAiHint: 'commerce study',
    highlightText: 'Batch for 11th Commerce',
    startDate: 'Started from Apr 2025',
    enrollLink: '/courses/2/enroll',
    youtubeLink: 'https://youtube.com/@prarambh-free?si=jT5p0zC1qYfDd-pR',
    timeTableImageUrl: 'https://drive.google.com/file/d/1HFt3JlBQQtSme-RKzmHWDrDaZiZfj2S3/preview',
    liveSlots: [
      { targetHour: 17, targetMinute: 10, durationMinutes: 90 },
      { targetHour: 20, targetMinute: 10, durationMinutes: 90 },
    ],
  },
  {
    id: '3',
    badgeText: 'NEW',
    title: 'Class 10th Aarambh',
    subtitle: '',
    imageUrl: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/bundle_management/course/538903229246_aarambh%20banner%20app.jpg',
    imageAlt: '10th Aarambh Course Cover',
    imageAiHint: 'student learning',
    highlightText: 'Batch for Class 10th',
    startDate: 'Started from Apr 2025',
    enrollLink: '/courses/3/enroll',
    youtubeLink: 'https://youtube.com/@prarambh-free?si=jT5p0zC1qYfDd-pR',
    timeTableImageUrl: 'https://drive.google.com/file/d/1rvCnep_eVn6QgM8CvrYeGJxpaZDCNPb_/preview',
    liveSlots: [
      { targetHour: 17, targetMinute: 10, durationMinutes: 90 },
      { targetHour: 20, targetMinute: 10, durationMinutes: 90 },
    ],
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center p-5 pt-24 sm:p-8 md:p-10 md:pt-28 animate-fadeIn-custom">

      <header className="text-center mb-8 md:mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wider logo-gradient-text animate-gradient">
          E-Leak
        </h1>
      </header>

      <main className="w-full max-w-6xl flex-grow flex flex-col items-center">
        <div className="flex items-center justify-between mb-6 w-full">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Our Courses</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center w-full">
          {coursesData.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </main>

    </div>
  );
}
