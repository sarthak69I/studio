
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Bot } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-card text-card-foreground py-10 border-t border-border">
      <div className="container mx-auto text-center flex flex-col items-center space-y-4 px-4">
        <h3 className="text-xl text-muted-foreground">Need Support?</h3>
        <Button asChild variant="outline" className="max-w-xs w-full py-6 text-base rounded-lg shadow-sm hover:bg-muted">
          <Link href="/help-center">
            <Bot className="mr-2 h-5 w-5" />
            E-Leak 24/7 Support
          </Link>
        </Button>
        <p className="text-sm text-muted-foreground pt-4">
          © E-Leak All rights reserved.
        </p>
      </div>
    </footer>
  );
}
