
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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-xl">
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
        
        <DialogFooter className="mt-4">
          <Button type="button" onClick={onOpenLoginDialog} className="w-full group">
            <LogIn className="mr-2 h-4 w-4" />
            Sign In / Register
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
