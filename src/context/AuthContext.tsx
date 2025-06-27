
'use client';

import React, { createContext, useContext, ReactNode, useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, saveUserToFirestore, db } from '@/lib/firebase';
import { getRedirectResult, type User } from "firebase/auth";
import { doc, onSnapshot, Timestamp } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { syncProgressOnLogin } from '@/lib/progress-manager';

export interface UserData {
    uid: string;
    displayName: string;
    email: string;
    photoURL: string;
    lastLogin: Timestamp;
    createdAt: Timestamp;
}

interface AuthContextType {
  user: User | null | undefined;
  userData: UserData | null;
  loading: boolean;
  error: Error | undefined;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { toast } = useToast();
  const [user, authLoading, error] = useAuthState(auth);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isUserDataLoading, setIsUserDataLoading] = useState(true);
  const welcomeToastShownRef = useRef(false);
  const progressSyncedRef = useRef(false);

  useEffect(() => {
    const processRedirectResult = async () => {
      if (authLoading || welcomeToastShownRef.current) return;

      try {
        const result = await getRedirectResult(auth);
        if (result && result.user) {
          welcomeToastShownRef.current = true;
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

    if (!authLoading) {
      processRedirectResult();
    }
  }, [authLoading, toast]);
  
  useEffect(() => {
    if (user) {
      setIsUserDataLoading(true);
      const userDocRef = doc(db, 'users', user.uid);
      const unsubscribe = onSnapshot(userDocRef, (docSnap) => {
        if (docSnap.exists()) {
          setUserData(docSnap.data() as UserData);
        } else {
          // This might happen if the user doc creation failed.
          // We can try to create it again.
          saveUserToFirestore(user);
          setUserData(null);
        }
        setIsUserDataLoading(false);
      }, (err) => {
        console.error("Error listening to user data:", err);
        setIsUserDataLoading(false);
      });

      return () => unsubscribe();
    } else {
      setUserData(null);
      setIsUserDataLoading(false);
    }
  }, [user]);

  useEffect(() => {
    // When user logs in, sync their local progress with Firestore
    if (user && !authLoading && !progressSyncedRef.current) {
      syncProgressOnLogin(user);
      progressSyncedRef.current = true;
    }
    // Reset sync flag on logout
    if (!user && !authLoading) {
      progressSyncedRef.current = false;
    }
  }, [user, authLoading]);

  const value = {
    user,
    userData,
    loading: authLoading || isUserDataLoading,
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
