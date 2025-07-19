
'use client';

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Send, Youtube, Heart, Loader2 } from 'lucide-react';

interface SubscriptionPromptProps {
  open: boolean;
  onClose: () => void;
}

const TELEGRAM_URL = "https://t.me/eleakcoursehub";
const YOUTUBE_URL = "https://youtube.com/@nexttopper-freebatch?si=SgEYNb-mxjw3AFpP";
const CLOSE_DELAY_MS = 2500; // 2.5 seconds

export default function SubscriptionPrompt({ open, onClose }: SubscriptionPromptProps) {
  const [isClosable, setIsClosable] = useState(false);
  const [countdown, setCountdown] = useState(Math.ceil(CLOSE_DELAY_MS / 1000));

  useEffect(() => {
    if (open) {
      // Reset state every time the dialog opens
      setIsClosable(false);
      setCountdown(Math.ceil(CLOSE_DELAY_MS / 1000));

      const enableCloseTimer = setTimeout(() => {
        setIsClosable(true);
      }, CLOSE_DELAY_MS);

      const countdownInterval = setInterval(() => {
        setCountdown(prev => (prev > 1 ? prev - 1 : 0));
      }, 1000);
      
      // Cleanup timers when the dialog closes or component unmounts
      return () => {
        clearTimeout(enableCloseTimer);
        clearInterval(countdownInterval);
      };
    }
  }, [open]);

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen && isClosable) {
      onClose();
    }
    // If !isClosable, prevent closing via overlay click or escape key
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md rounded-xl" showCloseButton={false}>
        <DialogHeader>
          <div className="flex justify-center">
            <Heart className="h-16 w-16 text-red-500 mb-4 animate-pulse-custom" />
          </div>
          <DialogTitle className="text-center text-2xl font-bold">Support Free Education!</DialogTitle>
          <DialogDescription className="text-center text-muted-foreground pt-2">
            Your support helps us keep our content free for everyone. Please consider joining our community and subscribing to our channels.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-4">
          <Button asChild className="w-full bg-sky-600 hover:bg-sky-700 text-white text-base py-6 rounded-lg">
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
              <Send className="mr-3" /> Join our Telegram
            </a>
          </Button>
          <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white text-base py-6 rounded-lg">
            <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer">
              <Youtube className="mr-3" /> Subscribe on YouTube
            </a>
          </Button>
        </div>
        <DialogFooter>
          <Button 
            type="button" 
            variant="outline" 
            onClick={onClose} 
            className="w-full"
            disabled={!isClosable}
          >
            {isClosable ? (
              'Maybe Later'
            ) : (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait... ({countdown})
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
