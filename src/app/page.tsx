
"use client";

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { CourseCard } from '@/components/course-card';
import { Loader2, Flame, CheckCircle, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Turnstile } from '@marsidev/react-turnstile';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "E-Leak Courses Hub",
};

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
  overviewDetails?: {
    title: string;
    description: string;
    points: string[];
  };
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
    overviewDetails: {
      title: 'Course Overview: PRARAMBH 2.O Class 11th - Science',
      description: 'A yearlong live interactive course designed to help you excel in the 2026 11th class exams.',
      points: [
        "We'll cover Physics, Maths, Chemistry, Biology, Hindi and English for class 11th students.",
        "Live lectures will be conducted, and in case you miss a session, recordings will be available to students in the Next Toppers app.",
        "Classes will be scheduled to align with your school timings.",
        "There will be two classes per day, each lasting 1 to 1.5 hours.",
        "A weekly schedule will be provided for your convenience.",
        "Class notes will be provided in PDF format after each class on the Next Toppers App.",
        "Regular tests will be conducted to assess your progress.",
        "The entire course will remain accessible to you until your final exams in 2026.",
        "English will be covered in recorded format, so that you can cover it as per your convenience."
      ]
    }
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
     overviewDetails: {
      title: 'Course Overview: CLASS 9th Aarambh',
      description: 'A complete course to build a strong foundation for future academic success.',
      points: [
        "We'll cover Science, Maths, Social Science, English (Both), Hindi (Both), Information Technology(IT), Artificial Intelligence (AI), and Sanskrit.",
        "It is a Live Interaction Course.",
        "NOTE: English, Hindi, IT, AI and Sanskrit will be in a Recorded Mode.",
        "Backlog Chapter’s recorded lectures will be available + We’ll cover those chapters in a live marathon on Youtube.",
        "Class notes will be provided in PDF format for each class on the Next Toppers App.",
        "Frequent Tests will be conducted to assess your progress on completion of a certain amount of syllabus.",
        "Syllabus will be completed by October End. However, the entire course will remain accessible to you until your final exams in 2026."
      ]
    }
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
    overviewDetails: {
      title: 'Course Overview: PRARAMBH 2.0 Class 11th - Commerce',
      description: 'A yearlong live interactive course designed to help you excel in the 2026 11th class exams.',
      points: [
        "We'll cover Accounts, Economics, Business Studies, Maths, Hindi & English for class 11th students.",
        "Live lectures will be conducted, and in case you miss a session, recordings will be available to students in the Next Toppers app.",
        "Classes will be scheduled to align with your school timings.",
        "There will be two classes per day, each lasting 1 to 1.5 hours.",
        "A weekly schedule will be provided for your convenience.",
        "Class notes will be provided in PDF format after each class on the Next Toppers App.",
        "Regular tests will be conducted to assess your progress.",
        "The entire course will remain accessible to you until your final exams in 2026.",
        "English will be covered in recorded format, so that you can cover it as per your convenience."
      ]
    }
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
    overviewDetails: {
      title: 'Course Overview: Class 10th Aarambh',
      description: 'A complete course designed for success in your board exams.',
      points: [
        "We'll cover Science, Maths, Social Science, English (Both), Hindi (Both), Information Technology(IT), Artificial Intelligence (AI), and Sanskrit.",
        "It is a Live Interaction Course.",
        "NOTE: English, Hindi, IT, AI and Sanskrit will be in a Recorded Mode.",
        "Backlog Chapter’s recorded lectures will be available + We’ll cover those chapters in a live marathon on Youtube.",
        "Class notes will be provided in PDF format for each class on the Next Toppers App.",
        "Frequent Tests will be conducted to assess your progress on completion of a certain amount of syllabus.",
        "Syllabus will be completed by October End. However, the entire course will remain accessible to you until your final exams in 2026."
      ]
    }
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
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 280px"
                  className="object-cover"
                  data-ai-hint={course.imageAiHint}
                />
              </div>
            </CardContent>
            <CardFooter className="p-3 grid grid-cols-2 gap-2 bg-slate-50 dark:bg-card/50 border-t">
               {course.overviewDetails ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full font-semibold">Explore</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl max-h-[90vh] flex flex-col">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-primary">{course.overviewDetails.title}</DialogTitle>
                      <DialogDescription className="pt-2">{course.overviewDetails.description}</DialogDescription>
                    </DialogHeader>
                    <div className="flex-grow overflow-y-auto pr-4 -mr-4 space-y-3 py-4">
                      {course.overviewDetails.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm animate-fadeInUp-custom" style={{ animationDelay: `${i * 100}ms`}}>
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <p className="text-foreground/90">{point}</p>
                        </div>
                      ))}
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button type="button" variant="secondary">Close</Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              ) : (
                <Button variant="outline" className="w-full font-semibold" disabled>Explore</Button>
              )}
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
  const { loading: authLoading } = useAuth();
  const [isVerifiedInSession, setIsVerifiedInSession] = React.useState(false);
  const [isCheckingSession, setIsCheckingSession] = React.useState(true);
  const [isCaptchaVerified, setIsCaptchaVerified] = React.useState(false);
  const isMobile = useIsMobile();

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const verified = sessionStorage.getItem('isHumanVerified');
      if (verified === 'true') {
        setIsVerifiedInSession(true);
      }
      setIsCheckingSession(false);
    }
  }, []);

  const handleVerificationSuccess = () => {
    setIsCaptchaVerified(true);
  };

  const handleContinue = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('isHumanVerified', 'true');
    }
    setIsVerifiedInSession(true);
  };
  
  const isLoading = authLoading || isCheckingSession || isMobile === undefined;

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (!isVerifiedInSession && !isMobile) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background p-4">
        <div className="w-full max-w-md rounded-lg border bg-card p-6 shadow-lg text-center animate-fadeIn-custom">
          <div className="flex justify-center mb-4">
            <ShieldCheck className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-xl font-bold text-foreground">Please Verify You Are Human</h1>
          <p className="text-muted-foreground mt-2 mb-6">
            This quick check helps us protect our community from automated bots.
          </p>
          <div className="flex justify-center py-4 scale-90 sm:scale-100">
            <Turnstile
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
              onSuccess={handleVerificationSuccess}
            />
          </div>
          <Button
            className="w-full mt-4"
            onClick={handleContinue}
            disabled={!isCaptchaVerified}
          >
            Continue to Site
          </Button>
        </div>
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
