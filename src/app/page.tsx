
import { CourseCard } from '@/components/course-card';
import { Menu } from 'lucide-react';

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
    startDate: 'Starting from Apr 2025',
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
    startDate: 'Starting from Apr 2025',
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
    startDate: 'Starting from Apr 2025',
    enrollLink: '#',
    youtubeLink: 'https://www.youtube.com/@BACKUP-CHANNEL-NT',
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center p-5 pt-10 md:pt-16 sm:p-8 md:p-10 animate-fadeIn-custom">
      {/* Menu Icon Button - Fixed to viewport top right */}
      <div className="fixed top-6 right-6 z-50">
        <button
          aria-label="Open menu"
          className="p-2 rounded-full text-foreground bg-background/80 backdrop-blur-sm hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <Menu className="h-6 w-6" />
        </button>
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
