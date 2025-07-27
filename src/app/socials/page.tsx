
'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Youtube, Send, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const socials = [
  {
    name: 'Main YouTube Channel',
    href: 'https://www.youtube.com/@NEXTTOPPER-freeBATCH',
    icon: <Youtube className="mr-3 h-6 w-6 text-red-600" />,
    className: "hover:bg-red-500/10",
  },
  {
    name: 'Backup YouTube Channel',
    href: 'https://www.youtube.com/@e-leakcoursehub',
    icon: <Youtube className="mr-3 h-6 w-6 text-red-500" />,
    className: "hover:bg-red-500/10",
  },
  {
    name: 'Telegram Channel',
    href: 'https://t.me/eleakcoursehub',
    icon: <Send className="mr-3 h-6 w-6 text-sky-500" />,
    className: "hover:bg-sky-500/10",
  },
];

export default function SocialsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground p-4 md:p-6">
      <header className="flex items-center justify-between mb-8 w-full max-w-2xl mx-auto">
        <Link href="/" passHref>
          <Button variant="outline" size="lg" className="rounded-lg">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Button>
        </Link>
      </header>

      <main className="flex-grow flex flex-col items-center pt-8 md:pt-12 w-full">
        <Card className="w-full max-w-md animate-fadeInUp-custom">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold logo-gradient-text animate-gradient">Connect With Us</CardTitle>
            <CardDescription>
              Follow us on our social channels to stay updated with the latest news, announcements, and content.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  variant="outline"
                  className={`w-full h-16 text-lg justify-start p-4 rounded-xl shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105 ${social.className}`}
                >
                  {social.icon}
                  {social.name}
                </Button>
              </a>
            ))}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
