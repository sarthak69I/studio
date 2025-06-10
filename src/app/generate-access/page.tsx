
// src/app/generate-access/page.tsx
'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle, CheckCircle, ExternalLink, Youtube } from 'lucide-react';
import {
  setPendingToken,
  getValidPendingToken,
  clearPendingToken,
  setAccessKey,
  getValidAccessKey,
  getAccessKeyExpiry,
  clearAccessKey,
} from '@/lib/access-manager';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter
} from "@/components/ui/dialog";

type PageState = 'initial' | 'pendingConfirmation' | 'accessGranted' | 'error';

const LINKCENTS_URL = 'https://linkcents.com/E-Leak'; // Your actual Linkcents URL

export default function GenerateAccessPage() {
  const router = useRouter();
  const [pageState, setPageState] = React.useState<PageState>('initial');
  const [statusMessage, setStatusMessage] = React.useState<string | null>(null);
  const [accessKeyExpiryTime, setAccessKeyExpiryTime] = React.useState<string | null>(null);
  const [isVideoDialogOpen, setIsVideoDialogOpen] = React.useState(false);

  React.useEffect(() => {
    document.title = "Generate Course Access | E-Leak";

    const validAccessKey = getValidAccessKey();
    if (validAccessKey) {
      setPageState('accessGranted');
      const expiry = getAccessKeyExpiry();
      if (expiry) {
        setAccessKeyExpiryTime(new Date(expiry).toLocaleString());
      }
      // The main message for accessGranted is in the JSX, but this can be a fallback.
      setStatusMessage('You already have an active access key.'); 
      return;
    }

    const pendingToken = getValidPendingToken();
    if (pendingToken) {
      setPageState('pendingConfirmation');
      setStatusMessage("You have initiated the process. Click 'Activate Access Key' below to complete. Your access key will be valid for 6 hours from activation.");
    } else {
      setPageState('initial');
      setStatusMessage("To access course content, you need to generate an access key. This key will be valid for 6 hours. After it expires, you'll need to generate a new one. Please follow the steps below.");
    }
  }, []);

  const handleInitiateAccess = () => {
    setPendingToken();
    setStatusMessage('Redirecting to partner site... Return here after completing the action to activate your key.');
    window.open(LINKCENTS_URL, '_blank');
    // Optimistically update state, useEffect will confirm on focus/return if needed.
    setPageState('pendingConfirmation'); 
    setStatusMessage("You have initiated the process. Click 'Activate Access Key' below to complete. Your access key will be valid for 6 hours from activation.");
  };

  const handleActivateKey = () => {
    const pendingToken = getValidPendingToken();
    if (pendingToken) {
      const newAccessKey = setAccessKey();
      if (newAccessKey) {
        clearPendingToken();
        setPageState('accessGranted');
        const expiry = getAccessKeyExpiry();
        if (expiry) {
          setAccessKeyExpiryTime(new Date(expiry).toLocaleString());
        }
        // Success message is primarily handled by the JSX for 'accessGranted' state
      } else {
        setPageState('error');
        setStatusMessage('Error generating access key. Please try again.');
        clearPendingToken(); 
      }
    } else {
      setPageState('error');
      setStatusMessage('Activation step failed: pending confirmation may have expired or is invalid. Please start over.');
    }
  };

  const handleStartOver = () => {
    clearPendingToken();
    clearAccessKey();
    setPageState('initial');
    setStatusMessage("To access course content, you need to generate a 6-hour access key. This key will be valid for 6 hours. After it expires, you'll need to generate a new one. Please follow the steps below.");
    setAccessKeyExpiryTime(null);
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-background to-muted/30 p-4 text-foreground">
      <div className="w-full max-w-md bg-card p-6 sm:p-8 rounded-xl shadow-2xl space-y-6 transform opacity-0 animate-fadeInUp-custom">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Course Access Gateway</h1>
          <p className="text-sm text-muted-foreground">
            {statusMessage || "Follow the steps to unlock course content for 6 hours."}
          </p>
        </div>

        {pageState === 'initial' && (
          <Button
            onClick={handleInitiateAccess}
            className="w-full py-3 text-base font-semibold rounded-lg bg-primary hover:bg-primary/90 transition-all duration-300 ease-in-out hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Generate Access Key (Step 1: Visit Site) <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        )}

        {pageState === 'pendingConfirmation' && (
          <Button
            onClick={handleActivateKey}
            className="w-full py-3 text-base font-semibold rounded-lg bg-green-600 hover:bg-green-700 text-white transition-all duration-300 ease-in-out hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Activate Access Key (Step 2) <CheckCircle className="ml-2 h-5 w-5" />
          </Button>
        )}

        {pageState === 'accessGranted' && (
          <div className="text-center p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-3" />
            <p className="font-semibold text-green-600">Access Key Activated!</p>
            {accessKeyExpiryTime && (
              <p className="text-xs text-muted-foreground mt-1">
                Your access is valid for 6 hours. Expires: {accessKeyExpiryTime}
              </p>
            )}
            <Button
              onClick={() => router.push('/')}
              variant="link"
              className="mt-3 text-primary"
            >
              Go to Homepage
            </Button>
          </div>
        )}

        {pageState === 'error' && (
          <div className="text-center p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
            <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-3" />
            <p className="font-semibold text-destructive-foreground">{statusMessage}</p>
          </div>
        )}
        
        {/* Tutorial Button - visible when action is needed or error */}
        {(pageState === 'initial' || pageState === 'pendingConfirmation' || pageState === 'error') && (
            <div className="mt-6 border-t border-border pt-6">
            <Dialog open={isVideoDialogOpen} onOpenChange={setIsVideoDialogOpen}>
                <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className="w-full py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    onClick={() => setIsVideoDialogOpen(true)}
                >
                    <Youtube className="mr-2 h-5 w-5 text-red-500" /> 
                    How to Generate/Activate Key
                </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-xl md:max-w-2xl p-0 rounded-xl overflow-hidden">
                <DialogHeader className="p-4 border-b">
                    <DialogTitle className="text-lg">Video Tutorial: How To Generate/Activate Access Key</DialogTitle>
                </DialogHeader>
                <div className="aspect-video w-full bg-black">
                    <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/qfI_cSI3MSc?autoplay=1"
                    title="YouTube video player: How to Generate Key"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    ></iframe>
                </div>
                <DialogFooter className="p-4 border-t sm:justify-start">
                    <DialogClose asChild>
                    <Button type="button" variant="outline">
                        Close Video
                    </Button>
                    </DialogClose>
                </DialogFooter>
                </DialogContent>
            </Dialog>
            </div>
        )}

        {/* Start Over / Generate New Key Button */}
        {(pageState === 'initial' || pageState === 'pendingConfirmation' || pageState === 'error') && (
             <Button
                onClick={handleStartOver}
                variant="outline"
                className="w-full"
              >
                {pageState === 'error' ? 'Start Over' : 'Reset / Start Over'}
              </Button>
        )}
        {pageState === 'accessGranted' && (
           <Button
              onClick={handleStartOver} // This button allows generating a new key, resetting the current one
              variant="outline"
              className="w-full mt-4"
            >
              Generate New Key (Resets Current)
            </Button>
        )}
      </div>

      <footer className="text-center text-xs text-muted-foreground mt-8 py-4">
        <p>© E-Leak All rights reserved. Key system for access validation (6-hour validity per key).</p>
         <Link href="/" className="hover:underline text-primary">Go to Homepage</Link>
      </footer>
    </div>
  );
}

    