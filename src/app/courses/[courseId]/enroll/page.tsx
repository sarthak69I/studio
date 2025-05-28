
'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft, Home as HomeIcon, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import * as React from 'react';
import { getParamAsString } from '@/lib/utils';

interface SubjectItemProps {
  name: string;
  onClick?: () => void;
  disabled?: boolean;
}

const SubjectItem: React.FC<SubjectItemProps> = ({ name, onClick, disabled }) => (
  <Button
    variant="secondary"
    className="w-full justify-between p-7 text-lg rounded-xl shadow-sm hover:bg-muted/80 
               transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
    onClick={onClick}
    disabled={disabled}
  >
    {name}
    <ChevronRight className="h-5 w-5 text-muted-foreground" />
  </Button>
);

interface CourseSubjects {
  [key: string]: string[];
}

const courseSpecificSubjects: CourseSubjects = {
  '1': ['Physics', 'Chemistry', 'Mathematics', 'Biology'], // Science Batch
  '2': ['Business Studies', 'Accountancy', 'Economics', 'Mathematics'], // Commerce Batch
  '3': ['Social Science', 'Science', 'Mathematics'], // Aarambh Batch
};

export default function EnrollPage() {
  const router = useRouter();
  const params = useParams();
  const courseId = getParamAsString(params.courseId);
  const [activeContentMode, setActiveContentMode] = React.useState<'notes' | 'video'>('video');

  const subjects = courseSpecificSubjects[courseId] || [];

  const handleSubjectClick = (subjectName: string) => {
    router.push(`/courses/${courseId}/content/${activeContentMode}/${encodeURIComponent(subjectName)}`);
  };

  const handleModeChange = (mode: 'notes' | 'video') => {
    setActiveContentMode(mode);
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

      <main className="flex-grow flex flex-col items-center pt-8 md:pt-12">
        <div className="w-full max-w-md space-y-6">
          <Button
            size="lg"
            className="w-full py-6 text-xl rounded-full bg-primary hover:bg-primary/90 
                       transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
            onClick={() => router.push(`/courses/${courseId}/live`)}
          >
            JOIN LIVE CLASS
          </Button>

          <div className="flex gap-4">
            <Button
              variant={activeContentMode === 'notes' ? 'default' : 'outline'}
              className="flex-1 py-4 text-md rounded-xl"
              onClick={() => handleModeChange('notes')}
            >
              Notes
            </Button>
            <Button
              variant={activeContentMode === 'video' ? 'default' : 'outline'}
              className="flex-1 py-4 text-md rounded-xl"
              onClick={() => handleModeChange('video')}
            >
              Video
            </Button>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-center text-foreground mb-6">
              Subjects
            </h2>
            {subjects.length > 0 ? (
              <div className="space-y-3">
                {subjects.map((subject, index) => (
                  <div
                    key={subject}
                    className="transform opacity-0 animate-fadeInUp-custom"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <SubjectItem
                      name={subject}
                      onClick={() => handleSubjectClick(subject)}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground">No subjects listed for this course.</p>
            )}
          </div>
        </div>
      </main>

      <footer className="text-center text-sm text-muted-foreground mt-12 py-4">
        <p>© E-Leak All rights reserved.</p>
      </footer>
    </div>
  );
}
