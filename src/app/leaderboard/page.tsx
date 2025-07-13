
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { collection, query, where, orderBy, limit, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAuth, type UserData } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import LeaderboardListItem from '@/components/LeaderboardListItem';
import { ArrowLeft, Trophy, Clock, LogIn } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Leaderboard | E-Leak Courses Hub",
};

interface LeaderboardUser {
  rank: number;
  user: UserData;
  score: number;
}

const LEADERBOARD_EPOCH_DURATION_MS = 4 * 24 * 60 * 60 * 1000;

export default function LeaderboardPage() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [countdown, setCountdown] = useState('');
  const [nextReset, setNextReset] = useState('');

  useEffect(() => {
    document.title = "Leaderboard | E-Leak Courses Hub";
  }, []);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      setIsLoading(true);
      try {
        const currentEpoch = Math.floor(Date.now() / LEADERBOARD_EPOCH_DURATION_MS);
        
        // Fetch all documents for the current epoch without ordering
        const q = query(
          collection(db, 'userProgress'),
          where('score.epoch', '==', currentEpoch)
        );
        
        const progressSnapshot = await getDocs(q);

        // Fetch user data for each progress entry
        const userPromises = progressSnapshot.docs.map(progressDoc => {
            const userDocRef = doc(db, 'users', progressDoc.id);
            return getDoc(userDocRef).then(userDoc => ({
                userDoc: userDoc,
                progressData: progressDoc.data()
            }));
        });
        
        const results = await Promise.all(userPromises);

        // Filter, map, sort, and then limit the data on the client side
        const unsortedData: Omit<LeaderboardUser, 'rank'>[] = results
          .filter(r => r.userDoc.exists() && r.progressData.score?.points > 0)
          .map(r => ({
              user: r.userDoc.data() as UserData,
              score: r.progressData.score?.points || 0
          }));
        
        const sortedData: LeaderboardUser[] = unsortedData
            .sort((a, b) => b.score - a.score)
            .slice(0, 50) // Limit to top 50
            .map((item, index) => ({
                ...item,
                rank: index + 1
            }));
        
        setLeaderboardData(sortedData);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentEpoch = Math.floor(Date.now() / LEADERBOARD_EPOCH_DURATION_MS);
      const currentEpochStartTime = currentEpoch * LEADERBOARD_EPOCH_DURATION_MS;
      const nextEpochStartTime = currentEpochStartTime + LEADERBOARD_EPOCH_DURATION_MS;
      const remainingTime = nextEpochStartTime - Date.now();
      
      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));

      setCountdown(`${days}d ${hours}h ${minutes}m`);
      setNextReset(new Date(nextEpochStartTime).toLocaleDateString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-background p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-3xl mx-auto space-y-6 animate-fadeIn-custom">
        <header className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="h-10 w-10" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex-grow">
            <h1 className="text-3xl font-bold logo-gradient-text animate-gradient">Leaderboard</h1>
            <p className="text-muted-foreground">See who's at the top of the class!</p>
          </div>
        </header>
        
        <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center gap-2 text-sm text-primary">
                    <Clock className="h-4 w-4" />
                    <span>Leaderboard resets in:</span>
                    <span className="font-bold">{countdown}</span>
                </div>
                <p className="text-xs text-muted-foreground">(Next reset on {nextReset})</p>
            </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 md:p-6">
            {isLoading ? (
              <div className="space-y-4">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="flex-grow space-y-2">
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-1/4" />
                    </div>
                  </div>
                ))}
              </div>
            ) : leaderboardData.length > 0 ? (
                <div className="space-y-2">
                    {leaderboardData.map((item) => (
                        <LeaderboardListItem key={item.user.uid} {...item} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-10 text-muted-foreground">
                    <Trophy className="mx-auto h-12 w-12 opacity-50 mb-4" />
                    <p className="font-semibold">The leaderboard is empty!</p>
                    <p className="text-sm">Start watching lectures to get on the board.</p>
                </div>
            )}
          </CardContent>
        </Card>

        {!authLoading && !user && (
          <Card className="mt-6 border-primary/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <LogIn className="text-primary" />
                You're Viewing as a Guest
              </CardTitle>
              <CardDescription>
                Sign in or register to get on the leaderboard and unlock all features.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/signin">
                    <LogIn className="mr-2 h-4 w-4" />
                    Sign In to Participate
                </Link>
              </Button>
            </CardFooter>
          </Card>
        )}

      </div>
    </div>
  );
}
