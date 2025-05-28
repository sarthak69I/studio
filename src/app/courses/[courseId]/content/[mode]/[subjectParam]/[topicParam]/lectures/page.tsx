
'use client';

import * as React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home as HomeIcon, ChevronRight } from 'lucide-react';

export default function TopicLecturesPage() {
  const router = useRouter();
  const params = useParams();

  const courseId = typeof params.courseId === 'string' ? params.courseId : '';
  const mode = typeof params.mode === 'string' ? params.mode : '';
  const subjectParam = typeof params.subjectParam === 'string' ? params.subjectParam : '';
  const topicParam = typeof params.topicParam === 'string' ? params.topicParam : '';
  
  const [topicName, setTopicName] = React.useState('');
  const [subjectName, setSubjectName] = React.useState('');
  const [lectures, setLectures] = React.useState<string[]>([]);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    if (topicParam && subjectParam) {
      try {
        const decodedTopicName = decodeURIComponent(topicParam);
        const decodedSubjectName = decodeURIComponent(subjectParam);
        setTopicName(decodedTopicName);
        setSubjectName(decodedSubjectName);

        if (decodedTopicName === 'Some Basic Concepts of Chemistry') {
          const generatedLectures = Array.from({ length: 6 }, (_, i) => `${decodedTopicName} L${i + 1}`);
          setLectures(generatedLectures);
        } else {
          setLectures([`Lectures for ${decodedTopicName} are not yet available.`]);
        }
      } catch (e) {
        console.error("Failed to decode params:", e);
        setTopicName("Invalid Topic");
        setLectures(["Could not load lectures due to a decoding error."]);
      }
    } else {
      setTopicName('Unknown Topic');
      setLectures(['No topic specified in URL.']);
    }
  }, [topicParam, subjectParam]);

  React.useEffect(() => {
    if (isMounted && topicName) {
      const modeText = mode === 'notes' ? 'Notes' : 'Videos';
      document.title = `Lectures: ${topicName} - ${modeText} | E-Leak`;
    } else if (isMounted) {
      document.title = 'Lectures | E-Leak';
    }
  }, [isMounted, topicName, mode]);

  if (!isMounted) {
    return (
      <div className="flex flex-col min-h-screen bg-background text-foreground justify-center items-center p-4 md:p-6">
        <p>Loading...</p>
      </div>
    );
  }

  const renderLectureCard = (lectureTitle: string, index: number) => (
    <div 
      key={index}
      className="bg-card text-card-foreground p-6 sm:px-8 sm:py-6 rounded-xl shadow-xl w-full max-w-md cursor-pointer 
                 transform opacity-0 animate-fadeInUp-custom mb-6
                 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-card/90"
      style={{ animationDelay: `${index * 0.1}s` }}
      // onClick={() => router.push(`/lecture-content-page`)} // Placeholder for future navigation
    >
      <div className="flex items-center justify-between">
        <span className="text-xl sm:text-2xl font-semibold">{lectureTitle}</span>
        <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7 text-muted-foreground" />
      </div>
      <p className="text-sm text-muted-foreground mt-2 capitalize">
        {mode} for {topicName} ({subjectName})
      </p>
    </div>
  );

  return (
    <>
      <div className="flex flex-col min-h-screen bg-background text-foreground p-4 md:p-6">
        <header className="flex items-center justify-between mb-8 w-full max-w-4xl mx-auto">
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

        <main className="flex-grow flex flex-col justify-start items-center pt-10 md:pt-16 w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            {topicName} <span className="capitalize">{mode}</span>
          </h1>
          {lectures.length > 0 && !lectures[0].includes('not yet available') && !lectures[0].includes('Could not load') ? (
            lectures.map((lecture, index) => renderLectureCard(lecture, index))
          ) : (
             (topicName === 'Unknown Topic' || lectures[0].includes('Could not load')) ? (
              <p className="text-xl text-destructive-foreground bg-destructive p-4 rounded-md">{lectures[0]}</p>
            ) : (
               <p className="text-xl text-muted-foreground">{lectures[0]}</p>
            )
          )}
        </main>

        <footer className="text-center text-sm text-muted-foreground mt-auto py-4">
          <p>© E-Leak All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
