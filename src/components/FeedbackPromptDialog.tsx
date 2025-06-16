
// src/components/FeedbackPromptDialog.tsx
'use client';

import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircleQuestion, Send } from 'lucide-react';

interface FeedbackPromptDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onGoToFeedback: () => void;
  onDismiss: () => void;
}

export default function FeedbackPromptDialog({
  open,
  onOpenChange,
  onGoToFeedback,
  onDismiss,
}: FeedbackPromptDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-xl">
        <DialogHeader className="text-center sm:text-left">
          <DialogTitle className="text-xl flex items-center justify-center sm:justify-start">
            <MessageCircleQuestion className="mr-2 h-6 w-6 text-primary" />
            Your Feedback Matters!
          </DialogTitle>
          <DialogDescription className="pt-2 text-muted-foreground">
            We're always looking to improve E-Leak. Would you like to share your thoughts and help us make the platform better?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-4 flex flex-col sm:flex-row sm:justify-end gap-2">
          <Button type="button" variant="outline" onClick={onDismiss}>
            Maybe Later
          </Button>
          <Button type="button" onClick={onGoToFeedback} className="group">
            <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            Give Feedback
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
