
'use client';

import React, { createContext, useContext, ReactNode, useEffect, useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, signInWithGoogle, saveUserToFirestore } from '@/lib/firebase';
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
  const prevLoadingRef = useRef(true); // Assume it's loading initially

  useEffect(() => {
    // This effect detects the moment authentication finishes after a redirect.
    // It checks if the PREVIOUS state was loading, and the CURRENT state is not.
    if (prevLoadingRef.current && !loading) {
      if (user) {
        // This is the moment a user has successfully signed in.
        saveUserToFirestore(user);
        toast({
          title: 'Sign In Successful!',
          description: `Welcome back, ${user.displayName || 'User'}!`,
        });
      }
    }
    // Update the ref to the current loading state for the next render.
    prevLoadingRef.current = loading;
  }, [user, loading, toast]);

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
