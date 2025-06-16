
'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft, Home as HomeIcon, ChevronRight, Bot, Lock, Unlock } from 'lucide-react';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import * as React from 'react';
import { getParamAsString } from '@/lib/utils';
import { getValidAccessKey } from '@/lib/access-manager';

interface SubjectItemProps {
  name: string;
  onClick?: () => void;
  disabled?: boolean;
}

// --- Configuration Start ---
// To toggle access key generation requirement, change this value and redeploy.
// true: Key generation is REQUIRED for course access.
// false: Key generation is BYPASSED (access is open).
const REQUIRE_KEY_GENERATION = true; 
// --- Configuration End ---


const SubjectItem: React.FC<SubjectItemProps> = ({ name, onClick, disabled }) => (
  <Button
    variant="secondary"
    className="w-full justify-between p-6 text-lg rounded-xl shadow-sm hover:bg-muted/80 
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
  '1': ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'English'], // Science Batch
  '2': ['Business Studies', 'Accountancy', 'Economics', 'Mathematics', 'English'], // Commerce Batch
  '3': ['Social Science', 'Science', 'Mathematics', 'English'], // Aarambh Batch (Class 10)
  '4': ['Science', 'Social Science', 'Mathematics', 'English'], // Aarambh Batch (Class 9)
};

const courseDisplayNames: Record<string, string> = {
  '1': "Science Batch (Class 11)",
  '2': "Commerce Batch (Class 11)",
  '3': "Aarambh Batch (Class 10)",
  '4': "Aarambh Batch (Class 9)",
};


export default function EnrollPage() {
  const router = useRouter();
  const params = useParams();
  const courseId = getParamAsString(params.courseId);
  const [activeContentMode, setActiveContentMode] = React.useState<'notes' | 'video'>('video');
  const [isLoading, setIsLoading] = React.useState(true);
  const [isAccessGranted, setIsAccessGranted] = React.useState(!REQUIRE_KEY_GENERATION); // Grant access if key gen is off

  React.useEffect(() => {
    if (!REQUIRE_KEY_GENERATION) {
      setIsAccessGranted(true);
      setIsLoading(false);
      return;
    }

    // Logic for when key generation IS required
    const validAccessKey = getValidAccessKey();
    if (!validAccessKey) {
      router.replace('/generate-access'); // Use replace to prevent back button to this locked page
    } else {
      setIsAccessGranted(true);
    }
    setIsLoading(false);
  }, [router, courseId]);

  React.useEffect(() => {
    if (!isLoading && isAccessGranted) {
        let courseName = courseDisplayNames[courseId] || "";
        
        if (courseName) {
          document.title = `Enroll: ${courseName} | E-Leak`;
        } else if (courseId) { 
          document.title = `Enroll Course ${courseId} | E-Leak`;
        }
         else {
          document.title = 'Enroll | E-Leak';
        }
    } else if (!isLoading && !isAccessGranted) {
        document.title = 'Access Required | E-Leak';
    }
  }, [courseId, isLoading, isAccessGranted]);


  const handleJoinLiveClassClick = () => {
    router.push(`/courses/${courseId}/live`);
  };

  const subjects = courseSpecificSubjects[courseId] || [];

  const handleSubjectClick = (subjectName: string) => {
    router.push(`/courses/${courseId}/content/${activeContentMode}/${encodeURIComponent(subjectName)}`);
  };

  const handleModeChange = (mode: 'notes' | 'video') => {
    setActiveContentMode(mode);
  };
  
  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center bg-background p-4 text-foreground">
        <p>Loading access status...</p> 
      </div>
    );
  }

  if (!isAccessGranted && REQUIRE_KEY_GENERATION) { // Only show locked state if key gen is required
    return (
      <div className="flex flex-col min-h-screen items-center justify-center bg-background p-6 text-foreground">
        <div className="bg-card p-8 rounded-xl shadow-xl text-center max-w-md">
          <Lock className="h-16 w-16 text-destructive mx-auto mb-6" />
          <h1 className="text-2xl font-bold mb-3">Access Denied</h1>
          <p className="text-muted-foreground mb-6">
            You need to generate an access key to view this content.
          </p>
          <Button onClick={() => router.push('/generate-access')} size="lg">
            Generate Access Key
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
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
        <div className="w-full max-w-2xl space-y-6">
          {!REQUIRE_KEY_GENERATION && (
            <div className="p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded-md shadow-sm mb-6">
              <div className="flex items-center">
                <Unlock className="h-6 w-6 mr-3 text-green-600" />
                <div>
                  <p className="font-semibold">Access Open!</p>
                  <p className="text-sm">Key generation is currently not required. Enjoy the courses!</p>
                </div>
              </div>
            </div>
          )}
          <button
            className="join-button w-full"
            onClick={handleJoinLiveClassClick}
          >
            <span>JOIN LIVE CLASS</span>
          </button>

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
              Subjects for {courseDisplayNames[courseId] || `Course ${courseId}`}
            </h2>
            {subjects.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              <p className="text-center text-muted-foreground">Select a course to see subjects or no subjects listed for this course.</p>
            )}
          </div>
        </div>
      </main>

      <div className="mt-12 mb-6 text-center">
        <p className="text-muted-foreground mb-2">Need Support?</p>
        <Link href="/help-center">
          <Button variant="outline" size="lg" className="rounded-lg">
            <Bot className="mr-2 h-5 w-5" />
            E-Leak 24/7 Support
          </Button>
        </Link>
      </div>

      <footer className="text-center text-sm text-muted-foreground mt-12 py-4">
        <p>© E-Leak All rights reserved.</p>
      </footer>
    </div>
    </>
  );
}
    
