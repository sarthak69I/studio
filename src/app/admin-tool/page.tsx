
'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Home as HomeIcon, KeyRound } from 'lucide-react';

// IMPORTANT: CHANGE THIS PASSWORD if deploying, but for now it's "systumelvish"
const ADMIN_PASSWORD = "systumelvish"; 

export default function AdminToolPage() {
  const router = useRouter();
  const [passwordInput, setPasswordInput] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    document.title = 'Admin Tool | E-Leak';
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setPasswordInput('');
    }
  };

  if (!isMounted) {
    return (
      <div className="flex flex-col min-h-screen bg-background text-foreground justify-center items-center p-4 md:p-6">
        <p>Loading Admin Tool...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground p-4 md:p-6">
      <header className="flex items-center justify-between mb-8 w-full max-w-4xl mx-auto">
        <Button variant="outline" size="lg" onClick={() => router.back()} className="rounded-lg">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back
        </Button>
        <Link href="/" passHref>
          <Button variant="outline" size="lg" className="rounded-lg">
            <HomeIcon className="mr-2 h-5 w-5" />
            Home
          </Button>
        </Link>
      </header>

      <main className="flex-grow flex flex-col justify-center items-center w-full">
        {!isAuthenticated ? (
          <Card className="w-full max-w-md shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Admin Access</CardTitle>
              <CardDescription>Enter the password to access the admin tool.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="admin-password">
                    <KeyRound className="inline h-4 w-4 mr-2" />
                    Password
                  </Label>
                  <Input
                    id="admin-password"
                    type="password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Enter admin password"
                    className="text-base"
                    required
                  />
                </div>
                {error && (
                  <p className="text-sm font-medium text-destructive text-center bg-destructive/10 p-3 rounded-md">
                    {error}
                  </p>
                )}
                <Button type="submit" className="w-full py-3 text-base font-semibold rounded-full">
                  Login
                </Button>
              </form>
            </CardContent>
            <CardFooter className="text-center text-xs text-muted-foreground pt-6">
              <p>Note: This is basic client-side protection. For true security, server-side authentication (e.g., Firebase Auth) is recommended.</p>
            </CardFooter>
          </Card>
        ) : (
          <div className="text-center p-8 bg-card rounded-xl shadow-2xl max-w-lg w-full">
            <h1 className="text-3xl font-bold text-primary mb-6">Admin Helper Tool</h1>
            <p className="text-lg text-foreground mb-4">
              Welcome, Admin!
            </p>
            <p className="text-muted-foreground mb-8">
              This area will contain forms and tools to help you generate content snippets for lectures, notes, and live stream configurations. You'll copy the generated output and manually update your project files, then re-deploy.
            </p>
            <div className="space-y-4">
              <div className="p-4 border border-dashed border-border rounded-md">
                <h2 className="text-xl font-semibold text-foreground mb-2">Lecture Data Generator</h2>
                <p className="text-sm text-muted-foreground">Form to input lecture details (title, notes URL, video URL) and get TypeScript code.</p>
                {/* Placeholder for actual form */}
              </div>
              <div className="p-4 border border-dashed border-border rounded-md">
                <h2 className="text-xl font-semibold text-foreground mb-2">Live Stream Configurator</h2>
                <p className="text-sm text-muted-foreground">Form to update live stream URLs and subjects, generating code for `live/page.tsx`.</p>
                {/* Placeholder for actual form */}
              </div>
            </div>
            <Button 
              variant="outline" 
              onClick={() => {
                setIsAuthenticated(false); 
                setPasswordInput('');
              }} 
              className="mt-10"
            >
              Log Out
            </Button>
          </div>
        )}
      </main>

      <footer className="text-center text-sm text-muted-foreground mt-auto py-4">
        <p>© E-Leak All rights reserved.</p>
      </footer>
    </div>
  );
}
