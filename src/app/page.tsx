
import { CourseCard } from '@/components/course-card';
import { Menu, Info } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
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
}

const coursesData: Course[] = [
  {
    id: '1',
    badgeText: 'NEW',
    title: 'PRARAMBH CLASS 11th',
    subtitle: 'DPPS & videos',
    imageUrl: 'https://placehold.co/340x180.png',
    imageAlt: '11th Science Course Cover',
    imageAiHint: 'science education',
    highlightText: 'Batch for 11th Science DPPS & videos',
    startDate: 'Started from Apr 2025',
    enrollLink: '#',
    youtubeLink: 'https://www.youtube.com/@BACKUP-CHANNEL-NT',
  },
  {
    id: '2',
    badgeText: 'NEW',
    title: 'CLASS 11th Commerce',
    subtitle: 'DPPS & videos',
    imageUrl: 'https://placehold.co/340x180.png',
    imageAlt: '11th Commerce Course Cover',
    imageAiHint: 'commerce study',
    highlightText: 'Batch for 11th Commerce DPPS & videos',
    startDate: 'Started from Apr 2025',
    enrollLink: '#',
    youtubeLink: 'https://www.youtube.com/@BACKUP-CHANNEL-NT',
  },
  {
    id: '3',
    badgeText: 'NEW',
    title: 'Class 10th Aarambh',
    subtitle: 'DPPS & videos',
    imageUrl: 'https://placehold.co/340x180.png',
    imageAlt: '10th Aarambh Course Cover',
    imageAiHint: 'student learning',
    highlightText: 'Batch for Class 10th DPPS & videos',
    startDate: 'Started from Apr 2025',
    enrollLink: '#',
    youtubeLink: 'https://www.youtube.com/@BACKUP-CHANNEL-NT',
  },
];

export default function HomePage() {
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
          <SheetContent side="right" className="w-full sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 p-6">
            <SheetHeader className="mb-4">
              <SheetTitle className="text-2xl font-semibold">Menu</SheetTitle>
            </SheetHeader>
            <div className="space-y-4">
              <SheetClose asChild>
                 <button className="flex items-center w-full p-3 rounded-md hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring">
                    <Info className="mr-3 h-5 w-5 text-primary" />
                    <span className="text-base">Information</span>
                  </button>
              </SheetClose>
              {/* Add more sheet items here if needed */}
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
