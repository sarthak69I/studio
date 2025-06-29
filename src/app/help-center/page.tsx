
'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { MessageSquare, RefreshCw, AlertCircle, CheckCircle, X as CloseIcon } from 'lucide-react';
import Image from 'next/image'; // Import next/image

interface QnA {
  id: string;
  question: string;
  answer: string | React.ReactNode;
}

const predefinedQAs: QnA[] = [
  {
    id: 'join-live',
    question: "How do I join a live class?",
    answer: "From the homepage, click 'Enroll Now' on your desired course. On the next page, click the 'JOIN LIVE CLASS' button. If a class is currently live, the video player will appear. Otherwise, you'll see a countdown to the next session.",
  },
  {
    id: 'video-issues',
    question: "Video is buffering or not playing smoothly.",
    answer: "Please check your internet connection first. Try refreshing the page or using a different browser. Sometimes, very high demand can cause temporary slowdowns. You can also report persistent issues on our Telegram channel.",
  },
  {
    id: 'live-class-not-playing',
    question: "Live class video is not playing or showing errors.",
    answer: (
      <>
        <p className="mb-2">If a live class video isn't playing:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>First, please check your internet connection. A stable connection is crucial for streaming.</li>
          <li>Try refreshing the live class page.</li>
          <li>Sometimes, using a different web browser can resolve compatibility issues.</li>
          <li>If the issue persists, it might be a temporary problem with the stream or high server load. Please check our Telegram channel for any announcements or report the issue there for faster assistance.</li>
        </ol>
      </>
    ),
  },
  {
    id: 'find-content',
    question: "I can't find specific notes or videos.",
    answer: (
      <>
        <p className="mb-2">If you're having trouble finding content:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Ensure you've selected the correct course and subject on the 'Enroll' page (after clicking 'Enroll Now' on the homepage).</li>
          <li>Toggle between 'Notes' and 'Video' modes on the enrollment page to see the respective content types.</li>
          <li>Navigate to the specific subject, then topic. Some topics have individual lectures listed; click on a lecture to find its notes or video player link.</li>
          <li>Content is regularly updated. If something is missing, it might be added soon. Check our Telegram channel for announcements!</li>
        </ol>
      </>
    ),
  },
  {
    id: 'timetable-access',
    question: "How do I view the class timetable?",
    answer: "On the homepage, each course card has a 'Time Table' button. Clicking it will open a dialog showing the schedule for that specific course.",
  },
  {
    id: 'content-free',
    question: "Is all the content on E-Leak free?",
    answer: "Yes, all lectures, notes, and live classes currently available on E-Leak are provided free of charge. Our goal is to make quality education accessible.",
  },
  {
    id: 'how-to-signup',
    question: "How do I create an account or sign up?",
    answer: "You can sign up by clicking the 'Login/Register' button on the homepage. A dialog will appear with a 'Sign Up' tab. Fill in your name, email, and password to create your free account. This will unlock features like progress tracking and the leaderboard.",
  },
  {
    id: 'account-benefits',
    question: "What are the benefits of creating an account?",
    answer: (
      <>
        <p className="mb-2">Creating a free account unlocks several key features to enhance your learning:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Track Progress:</strong> See which lectures you've started or completed.</li>
          <li><strong>Earn Points:</strong> Get points for watching lectures and compete on the leaderboard.</li>
          <li><strong>Personalized Dashboard:</strong> Access your recently viewed content and enrolled courses in one place.</li>
          <li><strong>Customize Profile:</strong> Set your own display name and profile picture.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'edit-profile',
    question: "How can I change my display name or profile picture?",
    answer: "Once you are logged in, click your profile icon in the top-right corner and select 'Dashboard' from the dropdown menu. On your dashboard, you'll find an 'Edit Profile' button to update your details.",
  },
  {
    id: 'account-needed',
    question: "Do I need an account to watch videos or read notes?",
    answer: "No, you do not need an account to access the core content like videos and notes. However, creating a free account is required to track your progress, earn points, and use other personalized features.",
  },
  {
    id: 'forgot-password',
    question: "I forgot my password. What should I do?",
    answer: "Currently, our website does not have an automated password reset feature. Please be careful with your password. If you have lost access to your account, please contact us on our Telegram channel for assistance.",
  },
  {
    id: 'contact-support',
    question: "How can I contact support if my issue isn't listed here?",
    answer: (
      <>
        For further assistance or issues not covered, please join our Telegram channel:
        <a href="https://t.me/DatabaseCourseNT" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
          Telegram Support
        </a>.
      </>
    ),
  },
  {
    id: 'site-not-responsive',
    question: "Site is not responsive or looks broken on my device.",
    answer: (
      <>
        <p className="mb-2">We design E-Leak to be responsive on various devices. If you're experiencing layout issues:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Ensure your internet connection is stable.</li>
          <li>Try refreshing the page.</li>
          <li>Clear your browser's cache and cookies.</li>
          <li>Try using a different web browser or device to see if the issue persists.</li>
          <li>If the problem is specific to one device or browser, please let us know on our Telegram channel with details about your device and browser version, so we can investigate.</li>
        </ol>
      </>
    ),
  },
  {
    id: 'subjects-not-clickable',
    question: "Subject cards are not clickable or not taking me anywhere.",
    answer: (
      <>
        <p className="mb-2">Subject cards on the enrollment page link to further content like topics or lectures.</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Make sure you've selected a mode ('Notes' or 'Video') first.</li>
          <li>If a subject card for a specific mode (Notes/Video) isn't clickable or doesn't lead anywhere, it might mean content for that particular subject in that mode is still being prepared or hasn't been linked yet.</li>
          <li>We are constantly updating our content. Please check back later or look for announcements on our Telegram channel.</li>
        </ol>
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
  const [userName, setUserName] = React.useState<string>('there'); // Generic name


  React.useEffect(() => {
    setIsMounted(true);
    document.title = 'E-Leak 24/7 Support | E-Leak';
  }, []);

  React.useEffect(() => {
    if (step === 'showingQuestions') {
      setSelectedQ(null);
      setDisplayedAnswer('');
    }
  }, [step]);

  const handleQuestionClick = (qna: QnA) => {
    setSelectedQ(qna);
    setStep('thinking');
    setDisplayedAnswer('');
    
    setTimeout(() => {
      setDisplayedAnswer(qna.answer);
      setStep('showingAnswer');
    }, 2000);
  };

  const handleFollowUp = (action: 'askAgain' | 'stillHelp' | 'resolved') => {
    if (action === 'askAgain') {
      setStep('showingQuestions');
    } else if (action === 'stillHelp') {
      const contactQ = predefinedQAs.find(q => q.id === 'contact-support');
      setDisplayedAnswer(
        <>
          <p className="mb-2">We're sorry to hear you're still having trouble!</p>
          {contactQ ? contactQ.answer : <p>Please reach out to us on Telegram.</p>}
        </>
      );
      setSelectedQ(null); 
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
             <Image
              src="https://i.ibb.co/XZJkJ7xF/a5f7295b-f621-4163-b66d-8edadf7721d8-removebg-preview-1.png"
              alt="E-Leak Bot"
              width={64} 
              height={64}
              className="animate-bounce mb-6"
            />
            <p className="text-xl text-muted-foreground">E-Leak Bot is thinking...</p>
            {selectedQ && <p className="mt-3 text-md text-center text-foreground/80">Regarding: "{selectedQ.question}"</p>}
          </div>
        );
      case 'showingAnswer':
        return (
          <div className="space-y-4 p-2">
            {selectedQ && (
              <div className="mb-4 p-3 bg-primary/10 rounded-lg shadow text-sm">
                <p className="font-semibold text-foreground">You asked: "{selectedQ.question}"</p>
              </div>
            )}
            <div className="flex items-start gap-3">
              <div className="p-1 rounded-full flex items-center justify-center h-8 w-8 flex-shrink-0 mt-1">
                <Image
                  src="https://i.ibb.co/XZJkJ7xF/a5f7295b-f621-4163-b66d-8edadf7721d8-removebg-preview-1.png"
                  alt="E-Leak Logo"
                  width={20}
                  height={20}
                />
              </div>
              <div className="bg-muted/70 text-foreground p-3 rounded-lg rounded-tl-none shadow-md max-w-xs sm:max-w-md break-words text-sm prose prose-sm">
                {typeof displayedAnswer === 'string' ? <p>{displayedAnswer}</p> : displayedAnswer}
              </div>
            </div>
            <div className="mt-6 space-y-2">
              <Button onClick={() => handleFollowUp('askAgain')} variant="outline" className="w-full py-3 text-sm rounded-full bg-card hover:bg-muted/80">
                <RefreshCw className="mr-2 h-4 w-4" /> Ask another question
              </Button>
              <Button onClick={() => handleFollowUp('stillHelp')} variant="outline" className="w-full py-3 text-sm rounded-full bg-card hover:bg-muted/80">
                <AlertCircle className="mr-2 h-4 w-4" /> I still need help
              </Button>
              <Button onClick={() => handleFollowUp('resolved')} variant="default" className="w-full py-3 text-sm rounded-full">
                <CheckCircle className="mr-2 h-4 w-4" /> Issue resolved!
              </Button>
            </div>
          </div>
        );
      case 'showingQuestions':
      default:
        return (
          <div className="space-y-2 p-2">
            {predefinedQAs.map((qna) => (
              <Button
                key={qna.id}
                variant="outline" 
                className="w-full justify-start text-left h-auto py-3 px-4 text-sm rounded-full bg-card hover:bg-muted/80 shadow-sm whitespace-normal"
                onClick={() => handleQuestionClick(qna)}
              >
                <div className="flex items-center gap-2 w-full">
                   <MessageSquare className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                   <span className="flex-grow">{qna.question}</span>
                </div>
              </Button>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-card shadow-md border-b border-border">
        <div className="flex items-center gap-3">
          <div className="p-1 rounded-full flex items-center justify-center h-10 w-10">
            <Image
              src="https://i.ibb.co/XZJkJ7xF/a5f7295b-f621-4163-b66d-8edadf7721d8-removebg-preview-1.png"
              alt="E-Leak Logo"
              width={28}
              height={28}
            />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">E-Leak</h1>
            <p className="text-xs text-green-500">Online</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={() => router.back()} className="text-muted-foreground hover:text-foreground">
          <CloseIcon className="h-6 w-6" />
        </Button>
      </header>

      <main className="flex-grow flex flex-col p-4 space-y-4 overflow-y-auto">
        <div className="text-center text-xs text-muted-foreground my-2">Today</div>
        
        <div className="flex items-start gap-3">
            <div className="p-1 rounded-full flex items-center justify-center h-8 w-8 flex-shrink-0 mt-1">
              <Image
                src="https://i.ibb.co/XZJkJ7xF/a5f7295b-f621-4163-b66d-8edadf7721d8-removebg-preview-1.png"
                alt="E-Leak Logo"
                width={20}
                height={20}
              />
            </div>
            <div className="bg-muted/70 text-foreground p-3 rounded-lg rounded-tl-none shadow-md max-w-xs sm:max-w-md break-words text-sm">
                <p>Hey {userName}, Hope your studies are going well.</p>
            </div>
        </div>
        <div className="flex items-start gap-3">
            <div className="h-8 w-8 flex-shrink-0 mt-1 opacity-0" /> {/* Spacer for alignment */}
            <div className="bg-muted/70 text-foreground p-3 rounded-lg rounded-tl-none shadow-md max-w-xs sm:max-w-md break-words text-sm">
                <p>If you are facing an issue, please select from the below options.</p>
            </div>
        </div>

        <div className="mt-4 overflow-x-hidden">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
