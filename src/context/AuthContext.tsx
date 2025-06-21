
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

  useEffect(() => {
    // This effect handles the post-login logic after a redirect.
    if (!loading && user) {
      // Check if our 'isNewLogin' flag was set in sessionStorage before the redirect.
      const isNewLogin = sessionStorage.getItem('isNewLogin');

      if (isNewLogin === 'true') {
        // The user has just logged in.
        saveUserToFirestore(user);
        toast({
          title: 'Sign In Successful!',
          description: `Welcome back, ${user.displayName || 'User'}!`,
        });

        // IMPORTANT: Remove the flag so this block doesn't run again on page refresh.
        sessionStorage.removeItem('isNewLogin');
      }
    }
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
