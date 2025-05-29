
'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home as HomeIcon, Bot, MessageSquare, RefreshCw, AlertCircle, CheckCircle } from 'lucide-react';
// Removed ScrollArea import as it's no longer used directly here for the main content.

interface QnA {
  id: string;
  question: string;
  answer: string | React.ReactNode;
  title?: string; // Optional title for more specific issues
}

const predefinedQAs: QnA[] = [
  {
    id: 'enroll',
    question: "How do I enroll in a course?",
    answer: "You can enroll by clicking the 'Enroll Now' button on any course card from the homepage. This will take you to the course-specific page where you can access content or join live classes.",
  },
  {
    id: 'content-access',
    question: "Where can I find class notes or videos?",
    answer: "On the course enrollment page (after clicking 'Enroll Now'), select 'Notes' or 'Video' mode. Then, choose your subject and topic. If content is available, it will be listed there. Video lectures can also be accessed from the lecture list page, and then by clicking on a specific lecture to play.",
  },
  {
    id: 'live-class-video',
    question: "What if a live class video isn't working?",
    answer: "First, ensure your internet connection is stable. Try refreshing the page. If the issue persists, it might be a temporary problem with the stream. You can also check our Telegram channel for any updates regarding technical difficulties.",
  },
  {
    id: 'video-playback',
    title: 'Video Playback Problems (Recorded Lectures)',
    question: 'Recorded video is not playing or buffering.',
    answer: 'Ensure you have a stable internet connection. Try refreshing the page. If using an external player like YouTube, check if YouTube itself is working. For M3U8 streams, if the problem persists across multiple checks, the video source might be temporarily down. Please check back later or contact us via Telegram for updates.'
  },
  {
    id: 'notes-loading',
    title: 'Notes Not Loading or Displaying Incorrectly',
    question: 'Notes Not Loading or Displaying Incorrectly',
    answer: "Ensure your browser has a built-in PDF viewer enabled, or you have a PDF reader application installed (like Adobe Acrobat Reader). Try downloading the PDF file and opening it directly with a dedicated PDF reader application. If the issue continues, the file might be corrupted or the link broken. Please report this on our Telegram channel."
  },
  {
    id: 'theme-switching',
    question: "How to switch between light and dark mode?",
    answer: "You can toggle the theme using the 'Enable Light Mode' / 'Enable Dark Mode' option available in the main menu (accessible via the three-lines icon in the top-right corner of the homepage).",
  },
  {
    id: 'live-class-schedule',
    question: "How do I find the live class schedule?",
    answer: "Click 'Enroll Now' on a course, then click the 'JOIN LIVE CLASS' button. This page shows the schedule and allows you to join live sessions. Countdown timers indicate when classes start.",
  },
  {
    id: 'free-content',
    question: "Is all the content on E-Leak free?",
    answer: "Yes, all lectures, notes, and live classes currently available on E-Leak are provided free of charge. Our goal is to make quality education accessible."
  },
  {
    id: 'contact-support',
    question: "How can I contact support if my issue isn't listed here?",
    answer: (
      <>
        For further assistance, please join our Telegram channel:
        <a href="https://t.me/DatabaseCourseNT" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
          Telegram Support
        </a>.
      </>
    ),
  }
];

type BotStep = 'showingQuestions' | 'thinking' | 'showingAnswer';

export default function ELeakSupportPage() {
  const router = useRouter();
  const [isMounted, setIsMounted] = React.useState(false);
  const [step, setStep] = React.useState<BotStep>('showingQuestions');
  const [selectedQ, setSelectedQ] = React.useState<QnA | null>(null);
  const [displayedAnswer, setDisplayedAnswer] = React.useState<string | React.ReactNode>('');

  React.useEffect(() => {
    setIsMounted(true);
    document.title = 'E-Leak 24/7 Support | E-Leak';
  }, []);

  React.useEffect(() => {
    // Reset when dialog is closed/opened, or when navigating back to questions
    if (step === 'showingQuestions') {
      setSelectedQ(null);
      setDisplayedAnswer('');
    }
  }, [step]);

  const handleQuestionClick = (qna: QnA) => {
    setSelectedQ(qna);
    setStep('thinking');
    setDisplayedAnswer(''); // Clear previous answer
    
    setTimeout(() => {
      setDisplayedAnswer(qna.answer);
      setStep('showingAnswer');
    }, 2000); // 2-second delay
  };

  const handleFollowUp = (action: 'askAgain' | 'stillHelp' | 'resolved') => {
    if (action === 'askAgain') {
      setStep('showingQuestions');
    } else if (action === 'stillHelp') {
      // The answer for "contact-support" already includes the Telegram link.
      // If a different question led here, we can show a generic message.
      const contactQ = predefinedQAs.find(q => q.id === 'contact-support');
      setDisplayedAnswer(
        <>
          <p className="mb-2">We're sorry to hear you're still having trouble!</p>
          {contactQ ? contactQ.answer : <p>Please reach out to us on Telegram.</p>}
        </>
      );
      setSelectedQ(null); // Clear selected question so it doesn't show "You asked:"
      setStep('showingAnswer'); 
    } else if (action === 'resolved') {
      setDisplayedAnswer("Great! We're glad the issue is resolved. Feel free to ask another question if needed.");
      setSelectedQ(null);
      setStep('showingAnswer');
      setTimeout(() => { 
        setStep('showingQuestions');
      }, 3000);
    }
  };

  if (!isMounted) {
    return (
      <div className="flex flex-col min-h-screen bg-background text-foreground justify-center items-center p-4 md:p-6">
        <p>Loading Support...</p>
      </div>
    );
  }
  
  const renderContent = () => {
    switch (step) {
      case 'thinking':
        return (
          <div className="flex flex-col items-center justify-center p-8 min-h-[300px]">
            <Bot className="h-16 w-16 text-primary animate-bounce mb-6" />
            <p className="text-xl text-muted-foreground">E-Leak Bot is thinking...</p>
            {selectedQ && <p className="mt-3 text-md text-center text-foreground/80">Regarding: "{selectedQ.question}"</p>}
          </div>
        );
      case 'showingAnswer':
        return (
          <div className="p-2 space-y-6">
            {selectedQ && (
              <div className="mb-4 p-4 bg-muted/30 rounded-lg shadow">
                <p className="font-semibold text-foreground text-md">You asked: "{selectedQ.question}"</p>
              </div>
            )}
            <div className="p-4 border border-primary/40 rounded-xl bg-card shadow-lg">
              <div className="flex items-start gap-4">
                <Bot className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div className="text-md text-card-foreground prose prose-sm max-w-none prose-p:my-1">
                  {typeof displayedAnswer === 'string' ? <p>{displayedAnswer}</p> : displayedAnswer}
                </div>
              </div>
            </div>
            <div className="mt-8 space-y-3">
              <Button onClick={() => handleFollowUp('askAgain')} variant="outline" className="w-full py-3 text-md rounded-lg">
                <RefreshCw className="mr-2 h-5 w-5" /> Ask another question
              </Button>
              <Button onClick={() => handleFollowUp('stillHelp')} variant="outline" className="w-full py-3 text-md rounded-lg">
                <AlertCircle className="mr-2 h-5 w-5" /> I still need help
              </Button>
              <Button onClick={() => handleFollowUp('resolved')} variant="default" className="w-full py-3 text-md rounded-lg">
                <CheckCircle className="mr-2 h-5 w-5" /> Issue resolved!
              </Button>
            </div>
          </div>
        );
      case 'showingQuestions':
      default:
        return (
          <div className="space-y-4 p-2">
            <p className="text-md text-muted-foreground mb-4 text-center">
              Hello! I'm the E-Leak 24/7 Support Bot. How can I help you today? Please select an issue/question:
            </p>
            {predefinedQAs.map((qna) => (
              <Button
                key={qna.id}
                variant="secondary"
                className="w-full justify-start text-left h-auto py-4 px-5 text-md rounded-lg shadow-sm hover:bg-muted/80 
                           transition-all duration-200 ease-in-out transform hover:scale-[1.02] whitespace-normal"
                onClick={() => handleQuestionClick(qna)}
              >
                <div className="flex items-start w-full">
                  <MessageSquare className="mr-3 h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="flex-1">{qna.question}</span>
                </div>
              </Button>
            ))}
          </div>
        );
    }
  };

  return (
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

      <main className="flex-grow flex flex-col items-center pt-8 md:pt-12 w-full">
        <div className="w-full max-w-2xl bg-card p-6 sm:p-8 rounded-xl shadow-2xl border border-border">
          <div className="text-center mb-8">
            <Bot className="h-12 w-12 text-primary mx-auto mb-3" />
            <h1 className="text-2xl md:text-3xl font-bold text-primary">
              E-Leak 24/7 Support
            </h1>
          </div>
          {/* ScrollArea removed, content will expand naturally */}
          <div className="overflow-x-hidden"> {/* Kept overflow-x-hidden to prevent horizontal scroll from content */}
            {renderContent()}
          </div>
        </div>
      </main>

      <footer className="text-center text-sm text-muted-foreground mt-12 py-4">
        <p>© E-Leak All rights reserved.</p>
      </footer>
    </div>
  );
}
