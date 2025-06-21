
'use client';

import React, { createContext, useContext, ReactNode, useEffect, useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, signInWithGoogle, saveUserToFirestore } from '@/lib/firebase';
import { getRedirectResult } from "firebase/auth";
import type { User } from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';

interface AuthContextType {
  user: User | null | undefined;
  loading: boolean;
  error: Error | undefined;
  signIn: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { toast } = useToast();
  const [user, loading, error] = useAuthState(auth);
  // Ref to prevent showing the welcome message more than once per session
  const welcomeToastShownRef = useRef(false);

  useEffect(() => {
    const processRedirectResult = async () => {
      // Don't run if the main auth state is still loading, or if we've already welcomed the user.
      if (loading || welcomeToastShownRef.current) return;

      try {
        const result = await getRedirectResult(auth);

        // If 'result' is not null, the user has just signed in via redirect.
        if (result && result.user) {
          // Mark the toast as shown *before* we show it to prevent race conditions
          welcomeToastShownRef.current = true;
          const isNewUser = await saveUserToFirestore(result.user);
          toast({
            title: 'Sign In Successful!',
            description: `${isNewUser ? 'Welcome to E-Leak' : 'Welcome back'}, ${result.user.displayName || 'User'}!`,
          });
        }
      } catch (redirectError) {
        // Handle specific errors from the redirect result if necessary
        console.error('Error processing redirect result:', redirectError);
        toast({
          variant: 'destructive',
          title: 'Sign-in failed',
          description: 'Could not complete the sign-in process. Please try again.',
        });
      }
    };

    processRedirectResult();
  }, [loading, toast]); // Dependency on `loading` ensures it runs after initial auth state is determined.

  const value = {
    user,
    loading,
    error,
    signIn: signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
