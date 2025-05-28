
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Home as HomeIcon, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Corrected import

interface SubjectItemProps {
  name: string;
  onClick?: () => void;
}

const SubjectItem: React.FC<SubjectItemProps> = ({ name, onClick }) => (
  <Button
    variant="secondary"
    className="w-full justify-between p-6 text-lg rounded-xl shadow-sm hover:bg-muted/80"
    onClick={onClick}
  >
    {name}
    <ChevronRight className="h-5 w-5 text-muted-foreground" />
  </Button>
);

export default function EnrollPage({ params }: { params: { courseId: string } }) {
  const router = useRouter();

  // In a real app, you might fetch course details using params.courseId
  // For now, the layout is static as per the image.

  const handleSubjectClick = (subjectName: string) => {
    console.log(`Clicked on ${subjectName} for course ${params.courseId}`);
    // Navigate to subject specific page or handle action
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground p-4 md:p-6">
      <header className="flex items-center justify-between mb-8">
        <Button variant="outline" size="lg" onClick={() => router.back()} className="rounded-lg">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back
        </Button>
        <Link href="/" passHref>
          <Button variant="outline" size="lg" className="rounded-lg">
            <HomeIcon className="mr-2 h-5 w-5" />
            Home
          </Button>
        </Link>
      </header>

      <main className="flex-grow flex flex-col items-center">
        <div className="w-full max-w-md space-y-6">
          <Button size="lg" className="w-full py-6 text-xl rounded-full bg-primary hover:bg-primary/90">
            JOIN LIVE CLASS
          </Button>

          <div className="flex gap-4">
            <Button variant="outline" className="flex-1 py-4 text-md rounded-xl">
              DPP
            </Button>
            <Button variant="secondary" className="flex-1 py-4 text-md rounded-xl bg-blue-500 hover:bg-blue-600 text-white">
              Video
            </Button>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-center text-foreground">
              Subjects
            </h2>
            <div className="space-y-3">
              <SubjectItem name="Physics" onClick={() => handleSubjectClick('Physics')} />
              <SubjectItem name="Maths" onClick={() => handleSubjectClick('Maths')} />
              <SubjectItem name="Chemistry" onClick={() => handleSubjectClick('Chemistry')} />
            </div>
          </div>
        </div>
      </main>

      <footer className="text-center text-sm text-muted-foreground mt-12 py-4">
        <p>© E-Leak All rights reserved.</p>
      </footer>
    </div>
  );
}
