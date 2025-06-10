
// src/app/generate-access/page.tsx
'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle, CheckCircle, ExternalLink, HelpCircle, Youtube } from 'lucide-react';
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

const LINKCENTS_URL = 'https://linkcents.com/E-Leak'; // Replace with your actual Linkcents URL

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
      setStatusMessage('You already have an active access key.');
      return;
    }

    const pendingToken = getValidPendingToken();
    if (pendingToken) {
      setPageState('pendingConfirmation');
      setStatusMessage('Welcome back! Please confirm to activate your access.');
    } else {
      setPageState('initial');
      setStatusMessage('Complete two simple steps to get 6-hour access to all course batches.');
    }
  }, []);

  const handleStep1Click = () => {
    setPendingToken();
    setPageState('pendingConfirmation');
    setStatusMessage('Please complete the action on the partner site and then return here to activate.');
    window.open(LINKCENTS_URL, '_blank');
  };

  const handleStep2Click = () => {
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
        setStatusMessage('Access granted for 6 hours!');
      } else {
        setPageState('error');
        setStatusMessage('Error generating access key. Please try again.');
        clearPendingToken(); // Clear potentially corrupted token
      }
    } else {
      setPageState('error');
      setStatusMessage('Pending confirmation expired or invalid. Please start over.');
    }
  };

  const handleStartOver = () => {
    clearPendingToken();
    clearAccessKey();
    setPageState('initial');
    setStatusMessage('Complete two simple steps to get 6-hour access to all course batches.');
    setAccessKeyExpiryTime(null);
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-background to-muted/30 p-4 text-foreground">
      <div className="w-full max-w-md bg-card p-6 sm:p-8 rounded-xl shadow-2xl space-y-6 transform opacity-0 animate-fadeInUp-custom">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Course Access Gateway</h1>
          <p className="text-sm text-muted-foreground">
            {statusMessage || "Follow the steps to unlock course content."}
          </p>
        </div>

        {pageState === 'initial' && (
          <Button
            onClick={handleStep1Click}
            className="w-full py-3 text-base font-semibold rounded-lg bg-primary hover:bg-primary/90 transition-all duration-300 ease-in-out hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Step 1: Visit Partner Site <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        )}

        {pageState === 'pendingConfirmation' && (
          <Button
            onClick={handleStep2Click}
            className="w-full py-3 text-base font-semibold rounded-lg bg-green-600 hover:bg-green-700 text-white transition-all duration-300 ease-in-out hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Step 2: Confirm & Get Key <CheckCircle className="ml-2 h-5 w-5" />
          </Button>
        )}

        {pageState === 'accessGranted' && (
          <div className="text-center p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-3" />
            <p className="font-semibold text-green-600">Access Key Activated!</p>
            {accessKeyExpiryTime && (
              <p className="text-xs text-muted-foreground mt-1">
                Valid until: {accessKeyExpiryTime}
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
            <Button
              onClick={handleStartOver}
              variant="outline"
              className="mt-4"
            >
              Start Over
            </Button>
          </div>
        )}

        {(pageState === 'initial' || pageState === 'pendingConfirmation') && (
           <p className="text-xs text-muted-foreground text-center pt-2">
            {pageState === 'initial' ? 'Click "Visit Partner Site". After completing the action there, return to this page and click "Confirm & Get Key".' 
                                     : 'You have 25 seconds to confirm after returning from the partner site.'}
          </p>
        )}

        <div className="mt-6 border-t border-border pt-6">
          <Dialog open={isVideoDialogOpen} onOpenChange={setIsVideoDialogOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="w-full py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50"
                onClick={() => setIsVideoDialogOpen(true)}
              >
                <Youtube className="mr-2 h-5 w-5 text-red-500" /> How To Generate A Key
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-xl md:max-w-2xl p-0 rounded-xl overflow-hidden">
              <DialogHeader className="p-4 border-b">
                <DialogTitle className="text-lg">Video Tutorial: How To Generate Access Key</DialogTitle>
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

        {pageState === 'accessGranted' && (
           <Button
              onClick={handleStartOver}
              variant="outline"
              className="w-full mt-4"
            >
              Generate New Key (Resets Current)
            </Button>
        )}
      </div>

      <footer className="text-center text-xs text-muted-foreground mt-8 py-4">
        <p>© E-Leak All rights reserved. Key system for access validation.</p>
         <Link href="/" className="hover:underline text-primary">Go to Homepage</Link>
      </footer>
    </div>
  );
}
