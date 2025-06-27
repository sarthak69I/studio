
'use client';

import React, { createContext, useContext, ReactNode, useEffect, useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, saveUserToFirestore } from '@/lib/firebase';
import { getRedirectResult } from "firebase/auth";
import type { User } from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';

interface AuthContextType {
  user: User | null | undefined;
  loading: boolean;
  error: Error | undefined;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { toast } = useToast();
  const [user, loading, error] = useAuthState(auth);
  const welcomeToastShownRef = useRef(false);

  useEffect(() => {
    const processRedirectResult = async () => {
      if (loading || welcomeToastShownRef.current) return;

      try {
        const result = await getRedirectResult(auth);
        if (result && result.user) {
          welcomeToastShownRef.current = true;
          // The saveUserToFirestore function now handles both new and existing users.
          await saveUserToFirestore(result.user);
          toast({
            title: 'Sign In Successful!',
            description: `Welcome, ${result.user.displayName || 'User'}!`,
          });
        }
      } catch (redirectError: any) {
        console.error('Error processing redirect result:', redirectError);
        toast({
          variant: 'destructive',
          title: 'Sign-in failed',
          description: redirectError.message || 'Could not complete the sign-in process. Please try again.',
        });
      }
    };

    if (!loading) {
      processRedirectResult();
    }
  }, [loading, toast]);

  const value = {
    user,
    loading,
    error,
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
