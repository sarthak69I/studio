
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
  // Use a ref to track if the post-login logic has already run for this user instance
  const processedUserRef = useRef<string | null>(null);

  useEffect(() => {
    // This effect handles the post-login logic after a redirect.
    if (!loading && user && user.uid !== processedUserRef.current) {
      // A user is logged in, and we haven't processed this specific user yet.
      
      saveUserToFirestore(user).then((isNewUser) => {
         toast({
           title: 'Sign In Successful!',
           description: `${isNewUser ? 'Welcome to E-Leak' : 'Welcome back'}, ${user.displayName || 'User'}!`,
         });
      });

      // Mark this user as processed to prevent the effect from re-running
      processedUserRef.current = user.uid;
    }

    // If the user signs out, reset the ref.
    if (!loading && !user) {
      processedUserRef.current = null;
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
