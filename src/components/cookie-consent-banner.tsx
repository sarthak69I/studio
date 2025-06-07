
'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle } from 'lucide-react';

const LOCAL_STORAGE_KEY = 'cookieConsentStatus';

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Ensure this code runs only on the client
    if (typeof window !== 'undefined') {
      const consentStatus = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (!consentStatus) {
        setIsVisible(true);
      }
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, 'rejected');
    setIsVisible(false);
    // Optional: You might want to disable certain cookie-setting functionalities here
    // if the user rejects, but for now, we'll just hide the banner.
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[1000] bg-background/95 backdrop-blur-sm p-4 border-t border-border shadow-lg animate-fadeInUp-custom">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground text-center sm:text-left">
          This site uses Cookies to enhance your experience.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <Button onClick={handleReject} variant="outline" size="sm" className="rounded-full">
            <XCircle className="mr-2 h-4 w-4" />
            Reject
          </Button>
          <Button onClick={handleAccept} variant="default" size="sm" className="rounded-full">
            <CheckCircle className="mr-2 h-4 w-4" />
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
