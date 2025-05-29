
// src/components/help-bot-dialog.tsx
'use client';

import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Bot, MessageSquare, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

interface QnA {
  id: string;
  question: string;
  answer: string | React.ReactNode;
}

const predefinedQAs: QnA[] = [
  {
    id: 'q1',
    question: "How do I enroll in a course?",
    answer: "You can enroll by clicking the 'Enroll Now' button on any course card from the homepage. This will take you to the course-specific page where you can access content or join live classes.",
  },
  {
    id: 'q2',
    question: "Where can I find class notes or videos?",
    answer: "On the course enrollment page (after clicking 'Enroll Now'), select 'Notes' or 'Video' mode. Then, choose your subject and topic. If content is available, it will be listed there. Video lectures can also be accessed from the lecture list page.",
  },
  {
    id: 'q3',
    question: "What if a live class video isn't working?",
    answer: "First, ensure your internet connection is stable. Try refreshing the page. If the issue persists, it might be a temporary problem with the stream. You can also check our Telegram channel for any updates regarding technical difficulties.",
  },
  {
    id: 'q4',
    question: "How to switch between light and dark mode?",
    answer: "You can toggle the theme using the 'Enable Light Mode' / 'Enable Dark Mode' option available in the main menu (accessible via the icon in the top-right corner of the homepage).",
  },
  {
    id: 'q5',
    question: "How do I find the live class schedule?",
    answer: "Click 'Enroll Now' on a course, then click the 'JOIN LIVE CLASS' button. This page shows the schedule and allows you to join live sessions.",
  },
  {
    id: 'q6',
    question: "Where can I find notes for the lectures?",
    answer: "On the course enrollment page, select the 'Notes' mode. Then, choose your subject and topic. If notes are available for specific lectures, they will be listed, and you can click to view/download them.",
  },
  {
    id: 'q7',
    question: "Is all the content on E-Leak free?",
    answer: "Yes, all lectures, notes, and live classes currently available on E-Leak are provided free of charge. Our goal is to make quality education accessible."
  },
  {
    id: 'q8',
    question: "What if a video is buffering or not playing smoothly?",
    answer: "Please check your internet connection first. If the problem persists, try refreshing the page or using a different browser. Sometimes, very high demand can cause temporary slowdowns. You can also report persistent issues on our Telegram channel."
  },
  {
    id: 'q9',
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

type BotStep = 'showingQuestions' | 'thinking' | 'showingAnswer' | 'showingFollowUp';

interface HelpBotDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function HelpBotDialog({ open, onOpenChange }: HelpBotDialogProps) {
  const [step, setStep] = useState<BotStep>('showingQuestions');
  const [selectedQ, setSelectedQ] = useState<QnA | null>(null);
  const [displayedAnswer, setDisplayedAnswer] = useState<string | React.ReactNode>('');

  useEffect(() => {
    // Reset when dialog is closed/opened
    if (open) {
      setStep('showingQuestions');
      setSelectedQ(null);
      setDisplayedAnswer('');
    }
  }, [open]);

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
      setSelectedQ(null);
      setDisplayedAnswer('');
    } else if (action === 'stillHelp') {
      setDisplayedAnswer(
        <>
          <p className="mb-2">We're sorry to hear you're still having trouble!</p>
          <p>Please join our <a href="https://t.me/DatabaseCourseNT" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Telegram channel</a> for further assistance.</p>
        </>
      );
      setStep('showingAnswer'); 
    } else if (action === 'resolved') {
      setDisplayedAnswer("Great! We're glad the issue is resolved. Feel free to ask another question if needed.");
      setStep('showingAnswer');
      setTimeout(() => { 
        setStep('showingQuestions');
        setSelectedQ(null);
        setDisplayedAnswer('');
      }, 3000);
    }
  };
  
  const renderContent = () => {
    switch (step) {
      case 'thinking':
        return (
          <div className="flex flex-col items-center justify-center p-8 min-h-[200px]">
            <Bot className="h-12 w-12 text-primary animate-bounce mb-4" />
            <p className="text-lg text-muted-foreground">E-Leak Bot is thinking...</p>
            {selectedQ && <p className="mt-2 text-sm text-center">Regarding: "{selectedQ.question}"</p>}
          </div>
        );
      case 'showingAnswer':
        return (
          <div className="p-1">
            {selectedQ && (
              <div className="mb-4 p-3 bg-muted/50 rounded-md">
                <p className="font-semibold text-foreground">You asked: "{selectedQ.question}"</p>
              </div>
            )}
            <div className="p-3 border border-primary/30 rounded-md bg-background shadow-sm">
              <div className="flex items-start gap-3">
                <Bot className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div className="text-sm text-foreground prose prose-sm max-w-none">
                  {typeof displayedAnswer === 'string' ? <p>{displayedAnswer}</p> : displayedAnswer}
                </div>
              </div>
            </div>
            <div className="mt-6 space-y-2">
              <Button onClick={() => handleFollowUp('askAgain')} variant="outline" className="w-full">
                <RefreshCw className="mr-2 h-4 w-4" /> Ask another question
              </Button>
              <Button onClick={() => handleFollowUp('stillHelp')} variant="outline" className="w-full">
                <AlertCircle className="mr-2 h-4 w-4" /> I still need help
              </Button>
              <Button onClick={() => handleFollowUp('resolved')} variant="outline" className="w-full">
                <CheckCircle className="mr-2 h-4 w-4" /> Issue resolved
              </Button>
            </div>
          </div>
        );
      case 'showingQuestions':
      default:
        return (
          <div className="space-y-3 p-1">
            <p className="text-sm text-muted-foreground mb-3">
              Hello! I'm the E-Leak 24/7 Support Bot. How can I help you today? Please select an issue/question:
            </p>
            {predefinedQAs.map((qna) => (
              <Button
                key={qna.id}
                variant="outline"
                className="w-full justify-start text-left h-auto py-3"
                onClick={() => handleQuestionClick(qna)}
              >
                <MessageSquare className="mr-3 h-5 w-5 text-primary flex-shrink-0" />
                {qna.question}
              </Button>
            ))}
          </div>
        );
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md md:max-w-lg rounded-xl">
        <DialogHeader className="mb-2">
          <DialogTitle className="text-xl flex items-center">
            <Bot className="mr-2 h-6 w-6 text-primary" /> E-Leak 24/7 Support
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-3">
          {renderContent()}
        </ScrollArea>
        <DialogFooter className="mt-4 sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

    