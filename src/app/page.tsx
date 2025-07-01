
"use client";

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { CourseCard } from '@/components/course-card';
import { Loader2, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

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
    imageUrl: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/bundle_management/course/183130728609_Prarambh%20BATCh%20Science%20Class%2011.png',
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
    imageUrl: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/bundle_management/course/152792333113_9th%20aarambh%202.0%20banner%20app.jpg',
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
    imageUrl: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/bundle_management/course/737975028610_Prarambh%20BATCh%20Commerce%2011.png',
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
    imageUrl: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/bundle_management/course/285939929246_10th%20aarambh%202.0%20banner%20app.jpg',
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

const TrendingCoursesScroller: React.FC<{courses: Course[]}> = ({ courses }) => {
  const scrollerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scroller.setAttribute("data-animated", "true");

      const scrollerInner = scroller.querySelector('.scroller__inner');
      if (scrollerInner) {
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach(item => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      }
    }
  }, []);

  return (
    <div ref={scrollerRef} className="scroller">
      <div className="scroller__inner">
        {courses.map((course, index) => (
          <Card key={`${course.id}-${index}`} className="trending-card overflow-hidden rounded-2xl shadow-lg border border-border/50 bg-card">
            <CardContent className="p-0">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={course.imageUrl}
                  alt={course.imageAlt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 300px"
                  className="object-cover"
                  data-ai-hint={course.imageAiHint}
                />
              </div>
            </CardContent>
            <CardFooter className="p-3 grid grid-cols-2 gap-2 bg-slate-50 dark:bg-card/50 border-t">
              <Button variant="outline" className="w-full font-semibold" disabled>Explore</Button>
              <Button asChild className="w-full font-semibold bg-indigo-600 hover:bg-indigo-700 text-white">
                <Link href={course.enrollLink}>Enroll Now</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};


export default function HomePage() {
  const { loading } = useAuth();
  
  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center p-5 pt-8 sm:p-8 md:p-10 md:pt-12 animate-fadeIn-custom">

      <header className="text-center mb-8 md:mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wider logo-gradient-text animate-gradient">
          E-Leak
        </h1>
      </header>
      
      <section className="w-full max-w-7xl mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 flex items-center gap-2 px-2">
          <Flame className="text-amber-500" />
          Trending Courses
        </h2>
        <TrendingCoursesScroller courses={coursesData} />
      </section>


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
