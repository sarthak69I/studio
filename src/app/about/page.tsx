
'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Lightbulb, BookHeart, Users, ArrowLeft, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const TELEGRAM_URL = "https://t.me/eleakcoursehub";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <div className="container mx-auto max-w-5xl p-4 sm:p-6 md:p-8 space-y-12 animate-fadeIn-custom">
        <header className="flex items-center justify-between w-full">
            <Link href="/" passHref>
                <Button variant="outline" size="lg" className="rounded-lg">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Back to Home
                </Button>
            </Link>
        </header>

        <main>
          <section className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold logo-gradient-text animate-gradient">
              About E-Leak
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Your partner in accessible and quality education, completely free of charge.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Lightbulb className="text-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                To break down the barriers to quality education by providing comprehensive, reliable, and completely free learning resources for every student. We believe knowledge should be accessible to all, not a privilege for a few.
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <BookHeart className="text-primary" />
                  Our Story
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                E-Leak was born from a simple idea: that every student deserves the best resources to succeed, regardless of their financial background. We started as a small project to share notes and have grown into a community-driven platform dedicated to open and free learning.
              </CardContent>
            </Card>
          </div>

          <section className="mt-16 text-center bg-card border rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of students on their learning journey. Explore our courses and find everything you need to excel in your studies.
            </p>
            <Button asChild size="lg">
              <Link href="/">Explore Courses</Link>
            </Button>
          </section>

          <section className="mt-16 text-center bg-card border rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Become a part of the E-Leak family! Join our Telegram channel to get the latest updates, ask questions, and connect with fellow students and educators.
            </p>
            <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
                <Send className="mr-2 h-5 w-5" />
                Join on Telegram
              </a>
            </Button>
          </section>
        </main>
      </div>
    </div>
  );
}
