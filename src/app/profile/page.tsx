// src/app/profile/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, User as UserIcon, Mail, MapPin, Edit } from 'lucide-react';
import EditProfileDialog from '@/components/EditProfileDialog';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Profile | E-Leak Courses Hub",
};

export default function ProfilePage() {
  const router = useRouter();
  const { user, userData, loading: authLoading } = useAuth();
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      router.replace('/');
    }
  }, [user, authLoading, router]);

  const getInitials = (name: string | null | undefined) => {
    if (!name) return <UserIcon />;
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  const isLoading = authLoading || !userData;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (!user || !userData) {
    // This state is temporary while redirecting
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <p>Redirecting...</p>
      </div>
    );
  }

  const displayName = userData.displayName || user.displayName;
  const photoURL = userData.photoURL || user.photoURL;

  return (
    <>
      <div className="flex justify-center items-start min-h-screen bg-background p-4 sm:p-6 md:p-8">
        <Card className="w-full max-w-md animate-fadeIn-custom mt-8">
          <CardHeader className="text-center items-center space-y-4">
            <CardTitle className="text-2xl font-bold">Profile</CardTitle>
            <Avatar className="h-28 w-28 border-4 border-primary shadow-lg">
              <AvatarImage src={photoURL || ''} alt={displayName || 'User'} />
              <AvatarFallback className="text-4xl bg-muted">{getInitials(displayName)}</AvatarFallback>
            </Avatar>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Name</label>
              <p className="text-lg font-semibold text-foreground">{displayName}</p>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Email</label>
              <p className="text-lg text-foreground break-all">{userData.email}</p>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">State/City</label>
              <p className="text-lg text-foreground">{userData.stateCity || 'Not set'}</p>
            </div>
            <div className="pt-2">
              <Button variant="outline" className="w-full" onClick={() => setIsEditDialogOpen(true)}>
                <Edit className="mr-2 h-4 w-4" /> Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <EditProfileDialog
        open={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
      />
    </>
  );
}
