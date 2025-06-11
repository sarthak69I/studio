
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
    console.warn('AuthCallback: useEffect triggered. Token from URL:', tokenFromUrl);

    const pendingToken = getValidPendingActivationToken();
    console.warn('AuthCallback: Pending token from localStorage:', pendingToken);

    let activationSuccess = false;

    // Scenario 1: Token in URL (ideal, but Linkcents may not support it)
    if (tokenFromUrl && pendingToken && tokenFromUrl === pendingToken.value) {
      console.warn('AuthCallback: Activating via Scenario 1 (URL token match).');
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
        console.error('AuthCallback: Scenario 1 failed - Could not set access key.');
        setMessage('Activation failed: Could not set access key.');
        setStatus('error');
      }
    }
    // Scenario 2: No token in URL, but a valid pending token exists in localStorage.
    // This is the primary path given Linkcents' limitation.
    else if (!tokenFromUrl && pendingToken) {
      console.warn('AuthCallback: Activating via Scenario 2 (localStorage pending token only). This is the expected flow with current Linkcents limitations.');
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
        console.error('AuthCallback: Scenario 2 failed - Could not set access key (fallback).');
        setMessage('Activation failed: Could not set access key (fallback).');
        setStatus('error');
      }
    }
    // Scenario 3: No valid pending token found in localStorage, or other errors.
    else {
      let errorReason = "Invalid or expired activation process.";
      if (!pendingToken) {
        errorReason = "No pending activation found or it has expired. This could be because the 5-minute window passed, the token was not set correctly, or it was already used. Please start the process again from the 'Generate Key' page.";
        console.error('AuthCallback: Activation failed - Scenario 3: No valid pendingToken in localStorage.');
      }
      else if (tokenFromUrl && pendingToken && tokenFromUrl !== pendingToken.value) { // Should not be hit if Linkcents sends no token
        errorReason = "Activation token mismatch. The token in the URL does not match the expected token.";
        console.error('AuthCallback: Activation failed - Scenario 3: Token mismatch.');
      } else {
        // This case might occur if tokenFromUrl is null, and pendingToken is also null (already covered by the first if in this block)
        // or if tokenFromUrl is present but pendingToken is null (meaning pending token expired before URL token could be checked).
        errorReason = "Activation failed. The activation process might have timed out or the link is invalid.";
        console.error('AuthCallback: Activation failed - Scenario 3: Unexpected condition or pending token expired after URL check.');
      }
      setMessage(`Activation failed: ${errorReason}`);
      setStatus('error');
      clearPendingActivationToken(); // Clear any potentially invalid/orphaned token
    }

    if (activationSuccess) {
      window.history.replaceState(null, '', window.location.pathname); // Clean URL
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
