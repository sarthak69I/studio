
'use client';

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Send, Youtube, Heart } from 'lucide-react';

interface SubscriptionPromptProps {
  open: boolean;
  onClose: () => void;
}

const TELEGRAM_URL = "https://t.me/eleakcoursehub";
const YOUTUBE_URL = "https://youtube.com/@nexttopper-freebatch?si=SgEYNb-mxjw3AFpP";

export default function SubscriptionPrompt({ open, onClose }: SubscriptionPromptProps) {
  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="sm:max-w-md rounded-xl">
        <DialogHeader>
          <div className="flex justify-center">
            <Heart className="h-16 w-16 text-red-500 mb-4" />
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
          <Button type="button" variant="outline" onClick={onClose} className="w-full">
            Maybe Later
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
