
"use client";

import { useState, useEffect } from 'react';
import { CourseCard } from '@/components/course-card';
import { Menu, HelpCircle, Sun, Moon, Bot, Download } from 'lucide-react'; // Removed Bell
import Image from 'next/image';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaqDialogContent } from '@/components/faq-dialog-content';

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
    subtitle: 'Science Batch',
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
    subtitle: 'Foundation Batch',
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
    subtitle: 'Commerce Batch',
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
    subtitle: 'Foundation Batch',
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
  const [isFaqsDialogOpen, setIsFaqsDialogOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<string>('dark');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setCurrentTheme(storedTheme);
      document.documentElement.className = storedTheme;
    } else {
      setCurrentTheme('dark');
      localStorage.setItem('theme', 'dark');
      document.documentElement.className = 'dark';
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);
    document.documentElement.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  return (
    <>
    <div className="flex min-h-screen flex-col items-center p-5 pt-10 md:pt-16 sm:p-8 md:p-10 animate-fadeIn-custom">

      <Dialog open={isFaqsDialogOpen} onOpenChange={setIsFaqsDialogOpen}>
        <DialogContent className="sm:max-w-lg rounded-xl">
          <DialogHeader>
            <DialogTitle className="text-xl">Frequently Asked Questions</DialogTitle>
          </DialogHeader>
          <FaqDialogContent />
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="fixed top-6 right-6 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              aria-label="Open menu"
              className="p-2 rounded-full text-foreground bg-background/80 backdrop-blur-sm hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 p-0 flex flex-col">
            <SheetHeader className="p-6 pb-2">
              <SheetTitle className="text-2xl font-semibold">Menu</SheetTitle>
            </SheetHeader>
            <div className="space-y-1 p-4 flex-grow">
              <Button
                variant="ghost"
                className="w-full justify-start p-3 text-base font-normal rounded-md hover:bg-muted/50 focus:ring-ring focus:ring-2"
                onClick={toggleTheme}
                aria-label={currentTheme === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}
              >
                {currentTheme === 'light' ? (
                  <Moon className="mr-3 h-5 w-5 text-primary" />
                ) : (
                  <Sun className="mr-3 h-5 w-5 text-primary" />
                )}
                {currentTheme === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}
              </Button>

              <Button
                variant="ghost"
                className="w-full justify-start p-3 text-base font-normal rounded-md hover:bg-muted/50 focus:ring-ring focus:ring-2"
                aria-label="View FAQs"
                onClick={() => setIsFaqsDialogOpen(true)}
              >
                <HelpCircle className="mr-3 h-5 w-5 text-primary" />
                FAQs
              </Button>

              <Button
                variant="ghost"
                className="w-full justify-start p-3 text-base font-normal rounded-md hover:bg-muted/50 focus:ring-ring focus:ring-2"
                aria-label="Download App"
                asChild
              >
                <a href="https://e-leak-in.vercel.app/">
                  <Download className="mr-3 h-5 w-5 text-primary" />
                  Download App
                </a>
              </Button>

              <Button
                variant="ghost"
                className="w-full justify-start p-3 text-base font-normal rounded-md hover:bg-muted/50 focus:ring-ring focus:ring-2"
                aria-label="Open E-Leak 24/7 Support"
                asChild
              >
                <Link href="/help-center">
                   <Bot className="mr-3 h-5 w-5 text-primary" />
                  E-Leak 24/7 Support
                </Link>
              </Button>

            </div>
            <SheetFooter className="p-4 border-t border-border">
              <SheetClose asChild>
                <Button variant="outline" className="w-full">Close Menu</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <header className="text-center my-8 md:my-12">
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
    </>
  );
}
