
// src/components/Footer.tsx
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Bot, Bug } from 'lucide-react'; // Added Bug icon

export default function Footer() {
  return (
    <footer className="w-full bg-card text-card-foreground py-10 border-t border-border">
      <div className="container mx-auto text-center flex flex-col items-center space-y-4 px-4">
        <h3 className="text-xl text-muted-foreground">Having Trouble?</h3>
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
           <Button asChild variant="outline" className="flex-1 py-3 text-base rounded-lg shadow-sm hover:bg-muted">
              <Link href="/help-center">
                <Bot className="mr-2 h-5 w-5" />
                Get Help via Bot
              </Link>
           </Button>
            <Button asChild variant="destructive" className="flex-1 py-3 text-base rounded-lg shadow-sm">
                <Link href="/reports">
                    <Bug className="mr-2 h-5 w-5" />
                    Report a Bug
                </Link>
            </Button>
        </div>
        <p className="text-sm text-muted-foreground pt-4">
          © E-Leak All rights reserved.
        </p>
      </div>
    </footer>
  );
}
