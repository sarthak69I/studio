
'use client';

import React, { useEffect, useState } from 'react';
import { collection, query, where, orderBy, limit, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { UserData } from '@/context/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import LeaderboardListItem from '@/components/LeaderboardListItem';
import { Trophy, Clock, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface LeaderboardUser {
  rank: number;
  user: UserData;
  score: number;
}

const LEADERBOARD_EPOCH_DURATION_MS = 4 * 24 * 60 * 60 * 1000;

export default function LeaderboardCard() {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [countdown, setCountdown] = useState('');

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

        // Filter, map, sort, and limit on the client side
        const unsortedData: Omit<LeaderboardUser, 'rank'>[] = results
          .filter(r => r.userDoc.exists() && r.progressData.score?.points > 0)
          .map(r => ({
              user: r.userDoc.data() as UserData,
              score: r.progressData.score?.points || 0
          }));
        
        const sortedData: LeaderboardUser[] = unsortedData
            .sort((a, b) => b.score - a.score)
            .slice(0, 5) // Limit to top 5 for the card
            .map((item, index) => ({
                ...item,
                rank: index + 1
            }));
        
        setLeaderboardData(sortedData);
      } catch (error) {
        console.error("Error fetching leaderboard card data:", error);
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
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl"><Trophy className="text-amber-500" />Leaderboard</CardTitle>
            <CardDescription>See who's at the top this period! The leaderboard resets periodically.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
             <div className="text-center p-2 rounded-lg bg-muted border">
                <p className="text-sm font-semibold text-primary">Resets in: {countdown}</p>
             </div>
            {isLoading ? (
              <div className="space-y-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-center gap-4 p-2">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="flex-grow space-y-2">
                        <Skeleton className="h-4 w-2/3" />
                    </div>
                    <Skeleton className="h-4 w-1/5" />
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
                <div className="text-center py-6 text-muted-foreground">
                    <p className="font-semibold">Leaderboard is getting ready!</p>
                    <p className="text-sm">Start learning to claim your spot.</p>
                </div>
            )}
        </CardContent>
        <CardFooter>
            <Button asChild variant="outline" className="w-full">
                <Link href="/leaderboard">
                    View Full Leaderboard
                    <ChevronRight className="h-4 w-4 ml-2" />
                </Link>
            </Button>
        </CardFooter>
    </Card>
  )
}
