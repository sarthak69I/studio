'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// To show a new banner to all users, simply change this ID (e.g., 'custom-banner-v2')
const BANNER_ID = 'custom-banner-v1';

export default function CustomInAppBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // This effect runs only in the browser
    // Check if the banner has been dismissed before
    if (localStorage.getItem(BANNER_ID) !== 'dismissed') {
      // Use a timeout to make the banner slide in after the page loads
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    // Remember that the user has dismissed this specific banner
    localStorage.setItem(BANNER_ID, 'dismissed');
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
        <h4 className="font-bold text-md sm:text-lg">New Feature Coming Soon!</h4>
        <p className="text-sm text-muted-foreground mt-1">
          We're working on something exciting. Stay tuned for updates!
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
