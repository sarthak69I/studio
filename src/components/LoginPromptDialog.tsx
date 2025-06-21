
'use client';

import * as React from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { User, LogIn, AlertTriangle } from 'lucide-react';
import { signInWithGoogle } from '@/lib/firebase';

interface LoginPromptDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function LoginPromptDialog({ open, onOpenChange }: LoginPromptDialogProps) {
  const handleSignIn = async () => {
    await signInWithGoogle();
    onOpenChange(false); // Close dialog after sign-in attempt
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-xl">
        <DialogHeader className="text-center sm:text-left">
          <DialogTitle className="text-xl flex items-center justify-center sm:justify-start">
            <User className="mr-2 h-6 w-6 text-primary" />
            Sign In to Unlock More Features
          </DialogTitle>
          <DialogDescription className="pt-2 text-muted-foreground">
            Create a free account to save your course progress across devices, participate in discussions, and get a personalized experience.
          </DialogDescription>
        </DialogHeader>
        
        <div className="my-4 p-3 bg-destructive/10 border-l-4 border-destructive text-destructive-foreground rounded-md text-sm">
           <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold">Important Notice</p>
                <p>To ensure continuous access and prevent misuse, creating an account is highly recommended. Unregistered users may face access restrictions in the future.</p>
              </div>
           </div>
        </div>
        
        <DialogFooter className="mt-4">
          <Button type="button" onClick={handleSignIn} className="w-full group">
            <LogIn className="mr-2 h-4 w-4" />
            Sign In with Google
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
