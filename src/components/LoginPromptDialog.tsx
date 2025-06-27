
'use client';

import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LogIn, ShieldCheck, TrendingUp, UserCog } from 'lucide-react';

interface LoginPromptDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onOpenLoginDialog: () => void;
}

export default function LoginPromptDialog({ open, onOpenChange, onOpenLoginDialog }: LoginPromptDialogProps) {
  const [canClose, setCanClose] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      setCanClose(false); // Reset on open
      const timer = setTimeout(() => {
        setCanClose(true);
      }, 4000); // 4 seconds

      return () => clearTimeout(timer);
    }
  }, [open]);

  const handleOpenChange = (isOpen: boolean) => {
    if (canClose && !isOpen) {
      onOpenChange(false);
    }
  };

  const handleInteractOutside = (event: Event) => {
    if (!canClose) {
      event.preventDefault();
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className="sm:max-w-md rounded-xl"
        onEscapeKeyDown={handleInteractOutside}
        onInteractOutside={handleInteractOutside}
      >
        <DialogHeader className="text-center sm:text-left">
          <DialogTitle className="text-xl flex items-center justify-center sm:justify-start">
            Sign In to Unlock All Features
          </DialogTitle>
          <DialogDescription className="pt-2 text-muted-foreground">
            You need to sign in to this website to get the best experience.
          </DialogDescription>
        </DialogHeader>
        
        <ul className="space-y-3 text-left my-6 text-sm text-foreground">
          <li className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0" />
            <span>Advance level security for your account.</span>
          </li>
          <li className="flex items-center gap-3">
            <TrendingUp className="h-5 w-5 text-primary flex-shrink-0" />
            <span>Track your course progress across all devices.</span>
          </li>
          <li className="flex items-center gap-3">
            <UserCog className="h-5 w-5 text-primary flex-shrink-0" />
            <span>Get a personalized learning experience.</span>
          </li>
        </ul>
        
        <DialogFooter className="mt-4 flex-col sm:flex-row-reverse gap-2">
            <Button type="button" onClick={onOpenLoginDialog} className="w-full group">
                <LogIn className="mr-2 h-4 w-4" />
                Sign In / Register
            </Button>
            {canClose && (
                <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="w-full">
                    Close
                </Button>
            )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
