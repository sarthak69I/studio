
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function CustomInAppBanner() {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={cn(
      "fixed top-24 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-lg",
      "bg-card text-card-foreground p-4 rounded-2xl shadow-2xl border border-border/50",
      "flex items-center gap-4 animate-in fade-in-0 slide-in-from-top-10 duration-500 ease-out"
    )}>
      <Image
        src="https://i.ibb.co/XZJkJ7xF/a5f7295b-f621-4163-b66d-8edadf7721d8-removebg-preview-1.png"
        alt="E-Leak Icon"
        width={40}
        height={40}
        className="hidden sm:block flex-shrink-0"
      />
      <div className="flex-grow">
        <h4 className="font-bold text-md sm:text-lg text-primary">New Features Added!</h4>
        <p className="text-sm text-muted-foreground mt-1">
          Class 9 No Class And 10th Metals & Non Metals on sunday.
        </p>
      </div>
      <Button 
        variant="ghost" 
        size="icon"
        onClick={handleDismiss}
        className="absolute top-2 right-2 h-7 w-7 sm:h-8 sm:w-8 rounded-full flex-shrink-0"
        aria-label="Close banner"
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
}
