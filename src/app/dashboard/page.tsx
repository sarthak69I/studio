
'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Loader2, LogOut, ShieldCheck, Mail, User } from 'lucide-react';
import { logout } from '@/lib/firebase';
import Link from 'next/link';

export default function DashboardPage() {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    // If auth is done loading and there's no user, redirect to homepage
    if (!loading && !user) {
      router.replace('/');
    }
  }, [user, loading, router]);
  
  useEffect(() => {
    if (user) {
      document.title = `${user.displayName}'s Dashboard | E-Leak`;
    }
  }, [user]);

  const getInitials = (name: string | null | undefined) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    // This state is brief as the useEffect will redirect.
    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <p>Redirecting...</p>
        </div>
    );
  }

  const handleSignOut = async () => {
    await logout();
    router.push('/'); // Redirect to homepage after signing out
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4 sm:p-6">
      <Card className="w-full max-w-lg shadow-2xl animate-fadeIn-custom">
        <CardHeader className="text-center">
          <Avatar className="mx-auto h-24 w-24 mb-4 border-4 border-primary">
            <AvatarImage src={user.photoURL || ''} alt={user.displayName || 'User'} />
            <AvatarFallback className="text-3xl">{getInitials(user.displayName)}</AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl">{user.displayName}</CardTitle>
          <CardDescription>Welcome to your E-Leak Dashboard!</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
           <div className="flex items-center p-3 bg-muted rounded-lg">
                <Mail className="h-5 w-5 mr-3 text-primary"/>
                <span className="text-sm text-muted-foreground">{user.email}</span>
           </div>
           <div className="flex items-center p-3 bg-muted rounded-lg">
                <User className="h-5 w-5 mr-3 text-primary"/>
                <span className="text-sm text-muted-foreground">Student</span>
           </div>
           <div className="flex items-center p-3 bg-green-500/10 text-green-700 rounded-lg">
                <ShieldCheck className="h-5 w-5 mr-3"/>
                <span className="text-sm font-medium">Account Verified</span>
           </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 pt-6">
            <Button asChild className="w-full">
                <Link href="/">Go to Courses</Link>
            </Button>
            <Button onClick={handleSignOut} variant="destructive" className="w-full">
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
            </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
