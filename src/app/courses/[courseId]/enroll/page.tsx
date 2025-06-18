
'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft, Home as HomeIcon, ChevronRight, Bot, Lock, Unlock } from 'lucide-react';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import * as React from 'react';
import { getParamAsString } from '@/lib/utils';
import { getValidAccessKey } from '@/lib/access-manager';
import Image from 'next/image';
import {
  scienceCourseContent,
  commerceCourseContent,
  aarambhCourseContent,
  aarambh9CourseContent,
  type Topic,
  type CourseContentMap
} from '@/lib/course-data';

interface SubjectItemProps {
  name: string;
  onClick?: () => void;
  disabled?: boolean;
}

// --- Configuration Start ---
const REQUIRE_KEY_GENERATION = true;
// --- Configuration End ---


const courseSpecificSubjects: Record<string, string[]> = {
  '1': ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'English'], // Science Batch
  '2': ['Accountancy', 'Mathematics', 'Economics', 'Business Studies', 'English'], // Commerce Batch
  '3': ['Science', 'Mathematics', 'Social Science', 'English'], // Aarambh Batch (Class 10)
  '4': ['Science', 'Mathematics', 'Social Science', 'English'], // Aarambh Batch (Class 9)
};

const courseDisplayNames: Record<string, string> = {
  '1': "Science Batch (Class 11)",
  '2': "Commerce Batch (Class 11)",
  '3': "Aarambh Batch (Class 10)",
  '4': "Aarambh Batch (Class 9)",
};

const scienceSubjectImageMap: Record<string, string> = {
  'Physics': 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/category_management/subject/395380615606_Physics.jpeg',
  'Chemistry': 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/category_management/subject/203426323782_Chemestry.jpeg',
  'Mathematics': 'https://i.ibb.co/DfhJL87V/300c8aba-6815-4a44-a303-74b5987add62.png',
  'Biology': 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/category_management/subject/22273823798_Biology.jpeg',
  'English': 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/category_management/subject/724718721778_English.jpeg',
};

const commerceSubjectImageMap: Record<string, string> = {
  'Accountancy': 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/category_management/subject/360629323799_Account.jpeg',
  'Mathematics': 'https://i.ibb.co/DfhJL87V/300c8aba-6815-4a44-a303-74b5987add62.png',
  'Economics': 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/category_management/subject/56643923786_Economic.jpeg',
  'Business Studies': 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/category_management/subject/627728423781_BST.jpeg',
  'English': 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/category_management/subject/724718721778_English.jpeg',
};

const aarambhSubjectImageMap: Record<string, string> = { // For Class 10 (courseId '3')
  'Science': 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/category_management/subject/28070448615_WhatsApp%20Image%202025-04-25%20at%204.25.51%20PM.jpeg',
  'Mathematics': 'https://i.ibb.co/DfhJL87V/300c8aba-6815-4a44-a303-74b5987add62.png',
  'Social Science': 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/category_management/subject/60137688614_Social%20Science.jpeg',
  'English': 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/category_management/subject/724718721778_English.jpeg',
};

const aarambh9SubjectImageMap: Record<string, string> = { // For Class 9 (courseId '4')
  'Science': 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/category_management/subject/28070448615_WhatsApp%20Image%202025-04-25%20at%204.25.51%20PM.jpeg',
  'Mathematics': 'https://i.ibb.co/DfhJL87V/300c8aba-6815-4a44-a303-74b5987add62.png',
  'Social Science': 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/category_management/subject/60137688614_Social%20Science.jpeg',
  'English': 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/category_management/subject/724718721778_English.jpeg',
};


// Original SubjectItem for courses not using the new styled card
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

interface ImageOnlySubjectCardProps {
  subjectName: string;
  imageUrl: string;
  onClick?: () => void;
  topicCount: number;
}

const ImageOnlySubjectCard: React.FC<ImageOnlySubjectCardProps> = ({ subjectName, imageUrl, onClick, topicCount }) => (
  <button
    onClick={onClick}
    className="bg-slate-800 rounded-xl shadow-xl hover:scale-102 hover:shadow-2xl transition-transform duration-300 ease-in-out w-full h-[120px] overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background relative"
    aria-label={`Select ${subjectName}`}
  >
    <div className="relative w-full h-full">
      <Image
        src={imageUrl}
        alt={subjectName}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover rounded-xl"
        data-ai-hint={`${subjectName.toLowerCase()} education`}
      />
      <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/50 backdrop-blur-sm rounded-b-xl">
        <p className="text-white text-xs font-semibold text-center truncate">
          {topicCount} {topicCount === 1 ? 'Topic' : 'Topics'}
        </p>
      </div>
    </div>
  </button>
);


export default function EnrollPage() {
  const router = useRouter();
  const params = useParams();
  const courseId = getParamAsString(params.courseId);
  const [activeContentMode, setActiveContentMode] = React.useState<'notes' | 'video'>('video');
  const [isLoading, setIsLoading] = React.useState(true);
  const [isAccessGranted, setIsAccessGranted] = React.useState(!REQUIRE_KEY_GENERATION);

  React.useEffect(() => {
    if (!REQUIRE_KEY_GENERATION) {
      setIsAccessGranted(true);
      setIsLoading(false);
      return;
    }
    const validAccessKey = getValidAccessKey();
    if (!validAccessKey) {
      router.replace('/generate-access');
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
        } else {
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

  if (!isAccessGranted && REQUIRE_KEY_GENERATION) {
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

  const useImageOnlyCard = ['1', '2', '3', '4'].includes(courseId);
  let currentImageMap: Record<string, string> = {};
  let currentCourseContent: CourseContentMap | undefined;

  if (useImageOnlyCard) {
    if (courseId === '1') {
      currentImageMap = scienceSubjectImageMap;
      currentCourseContent = scienceCourseContent;
    } else if (courseId === '2') {
      currentImageMap = commerceSubjectImageMap;
      currentCourseContent = commerceCourseContent;
    } else if (courseId === '3') {
      currentImageMap = aarambhSubjectImageMap;
      currentCourseContent = aarambhCourseContent;
    } else if (courseId === '4') {
      currentImageMap = aarambh9SubjectImageMap;
      currentCourseContent = aarambh9CourseContent;
    }
  }

  const getTopicCount = (subjectName: string): number => {
    if (!currentCourseContent) return 0;
    const subjectData = currentCourseContent[subjectName];
    if (Array.isArray(subjectData)) {
      return subjectData.length;
    }
    return 0; // Return 0 if content is a string (e.g., "Coming Soon") or undefined
  };

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
              <div className={`grid grid-cols-1 sm:grid-cols-1 gap-4`}> {/* Simplified grid for vertical stacking */}
                {subjects.map((subject, index) => {
                  if (useImageOnlyCard && currentImageMap) {
                    const topicCount = getTopicCount(subject);
                    return (
                      <div
                        key={subject}
                        className="transform opacity-0 animate-fadeInUp-custom"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <ImageOnlySubjectCard
                          subjectName={subject}
                          imageUrl={currentImageMap[subject] || 'https://placehold.co/400x120.png'}
                          onClick={() => handleSubjectClick(subject)}
                          topicCount={topicCount}
                        />
                      </div>
                    );
                  } else { // Original card style for other courses
                    return (
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
                    );
                  }
                })}
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

    