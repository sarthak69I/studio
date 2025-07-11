// src/app/admin/layout.tsx
'use client';

import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { Loader2, ShieldAlert } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// IMPORTANT: Replace this with your actual Firebase User ID (UID)
const ADMIN_UID = 'YOUR_FIREBASE_ADMIN_UID_HERE';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, userData, loading } = useAuth();
  const router = useRouter();

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="ml-4">Verifying admin access...</p>
      </div>
    );
  }

  if (!user || user.uid !== ADMIN_UID) {
    return (
       <div className="flex h-screen w-full items-center justify-center bg-background p-4">
         <div className="w-full max-w-md rounded-lg border border-destructive bg-card p-8 shadow-lg text-center">
           <div className="flex justify-center mb-4">
             <ShieldAlert className="h-16 w-16 text-destructive" />
           </div>
           <h1 className="text-2xl font-bold text-foreground">Access Denied</h1>
           <p className="text-muted-foreground mt-2 mb-6">
             You do not have permission to view this page. This area is for administrators only.
           </p>
           <Button asChild>
            <Link href="/">Return to Homepage</Link>
           </Button>
         </div>
       </div>
    );
  }

  return <>{children}</>;
}
