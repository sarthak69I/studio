
"use client"; // Required for useState and event handlers

import * as React from 'react'; // Import React for useState
import { CourseCard } from '@/components/course-card';
import { Menu, Info, Mail, ArrowLeft, Home as HomeIcon, ChevronRight } from 'lucide-react'; // Added Mail icon
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';

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
    youtubeLink: 'https://www.youtube.com/@BACKUP-CHANNEL-NT',
    timeTableImageUrl: 'https://i.ibb.co/jPs6ZzSP/SCIENCE.jpg',
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
    youtubeLink: 'https://www.youtube.com/@BACKUP-CHANNEL-NT',
    timeTableImageUrl: 'https://i.ibb.co/LzNSqqsf/COMMERCE.jpg',
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
    youtubeLink: 'https://www.youtube.com/@BACKUP-CHANNEL-NT',
    timeTableImageUrl: 'https://i.ibb.co/QF2zR9Tn/57643650-Aarambh-10th-Timetable.png',
  },
];

export default function HomePage() {
  const [isInfoDialogOpen, setIsInfoDialogOpen] = React.useState(false);

  return (
    <div className="flex min-h-screen flex-col items-center p-5 pt-10 md:pt-16 sm:p-8 md:p-10 animate-fadeIn-custom">
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
          <SheetContent side="right" className="w-full sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 p-0">
            <SheetHeader className="p-6 pb-2">
              <SheetTitle className="text-2xl font-semibold">Menu</SheetTitle>
            </SheetHeader>
            <div className="space-y-1 p-4">
              <Dialog open={isInfoDialogOpen} onOpenChange={setIsInfoDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-start p-3 text-base font-normal rounded-md hover:bg-muted/50 focus:ring-ring focus:ring-2"
                    aria-label="View Information"
                  >
                    <Info className="mr-3 h-5 w-5 text-primary" />
                    Information
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md rounded-xl">
                  <DialogHeader>
                    <DialogTitle className="text-xl">Information</DialogTitle>
                  </DialogHeader>
                  <div className="py-4 space-y-1 text-sm">
                    <p><span className="font-medium">Developer:</span> SKJ & Firebase</p>
                    <p><span className="font-medium">Version:</span> 15.1.3</p>
                  </div>
                  <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                      <Button type="button" variant="outline">
                        Close
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Button
                variant="ghost"
                className="w-full justify-start p-3 text-base font-normal rounded-md hover:bg-muted/50 focus:ring-ring focus:ring-2"
                aria-label="Contact Us"
                onClick={() => {
                  // Placeholder for Contact Us functionality
                  console.log("Contact Us clicked");
                }}
              >
                <Mail className="mr-3 h-5 w-5 text-primary" />
                Contact Us
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <header className="text-center my-8 md:my-12">
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wider logo-gradient-text animate-gradient">
          E-Leak
        </h1>
      </header>

      <main className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {coursesData.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </main>

      <footer className="text-center text-sm text-muted-foreground my-10 md:my-12 animate-pulse-custom">
        <p>© E-Leak All rights reserved.</p>
      </footer>
    </div>
  );
}
