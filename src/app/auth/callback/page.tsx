
'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  setAccessKey,
  getValidPendingActivationToken,
  clearPendingActivationToken,
  getAccessKeyExpiry,
} from '@/lib/access-manager';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';

function AuthCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'processing' | 'success' | 'error'>('processing');
  const [message, setMessage] = useState('Processing your activation...');
  const [expiryTime, setExpiryTime] = useState<string | null>(null);

  useEffect(() => {
    const tokenFromUrl = searchParams.get('token');
    const pendingToken = getValidPendingActivationToken();

    let activationSuccess = false;

    // Scenario 1: Token in URL (ideal, but Linkcents may not support it)
    if (tokenFromUrl && pendingToken && tokenFromUrl === pendingToken.value) {
      const accessKey = setAccessKey();
      if (accessKey) {
        clearPendingActivationToken();
        const keyExpiry = getAccessKeyExpiry();
        if (keyExpiry) {
          setExpiryTime(new Date(keyExpiry).toLocaleString());
        }
        setMessage(`Access Key Activated! Valid for 12 hours.`);
        setStatus('success');
        activationSuccess = true;
      } else {
        setMessage('Activation failed: Could not set access key.');
        setStatus('error');
      }
    }
    // Scenario 2: No token in URL, but a valid pending token exists in localStorage.
    // This is the primary path given Linkcents' limitation.
    else if (!tokenFromUrl && pendingToken) {
      console.warn('Activating based on localStorage pending token only. This is the expected flow with current Linkcents limitations.');
      const accessKey = setAccessKey();
      if (accessKey) {
        clearPendingActivationToken();
        const keyExpiry = getAccessKeyExpiry();
        if (keyExpiry) {
          setExpiryTime(new Date(keyExpiry).toLocaleString());
        }
        setMessage(`Access Key Activated! Valid for 12 hours.`);
        setStatus('success');
        activationSuccess = true;
      } else {
        setMessage('Activation failed: Could not set access key (fallback).');
        setStatus('error');
      }
    }
    // Scenario 3: No valid pending token found in localStorage, or other errors.
    else {
      let errorReason = "Invalid or expired activation process.";
      if (!pendingToken) {
        errorReason = "No pending activation found or it has expired. Please start the process again from the 'Generate Key' page.";
      }
      else if (tokenFromUrl && pendingToken && tokenFromUrl !== pendingToken.value) {
        errorReason = "Activation token mismatch.";
      }
      setMessage(`Activation failed: ${errorReason}`);
      setStatus('error');
      clearPendingActivationToken();
    }

    if (activationSuccess) {
      window.history.replaceState(null, '', window.location.pathname);
      router.push('/'); // Redirect to homepage immediately
    } else {
      // For errors, redirect to generate key page after a short delay
      setTimeout(() => {
        router.push('/generate-access');
      }, 2000); // Reduced delay to 2 seconds for error message display
    }
  }, [router, searchParams]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-6">
      <div className="bg-card p-8 rounded-xl shadow-2xl text-center max-w-md w-full">
        {status === 'processing' && (
          <>
            <Loader2 className="h-12 w-12 text-primary animate-spin mb-6 mx-auto" />
            <h1 className="text-2xl font-semibold mb-2">Processing Activation</h1>
          </>
        )}
        {status === 'success' && (
          <>
            <CheckCircle className="h-16 w-16 text-green-500 mb-6 mx-auto" />
            <h1 className="text-2xl font-bold text-green-500 mb-2">Activation Successful!</h1>
            {expiryTime && <p className="text-sm text-muted-foreground mb-1">Access Key valid until: {expiryTime}</p>}
          </>
        )}
        {status === 'error' && (
          <>
            <XCircle className="h-16 w-16 text-destructive mb-6 mx-auto" />
            <h1 className="text-2xl font-bold text-destructive mb-2">Activation Failed</h1>
          </>
        )}
        <p className="text-muted-foreground mt-4">{message}</p>
        <p className="text-xs text-muted-foreground mt-6">
          {status === 'success' && 'Redirecting to homepage...'}
          {status === 'error' && 'Redirecting to key generation page...'}
          {status === 'processing' && 'Please wait...'}
        </p>
      </div>
    </div>
  );
}

export default function AuthCallbackPage() {
  return (
    <Suspense fallback={<div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-6"><Loader2 className="h-12 w-12 text-primary animate-spin" /> <p className="mt-4">Loading...</p></div>}>
      <AuthCallbackContent />
    </Suspense>
  );
}
