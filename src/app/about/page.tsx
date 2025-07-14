'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Lightbulb, BookHeart, Users, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const teamMembers = [
  { name: 'Sarthak', role: 'Founder & Lead Developer', initials: 'S',  imageUrl: 'https://i.ibb.co/6y40gNB/image-1.png' },
];

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

          <section className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">Meet the Team</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <Avatar className="w-24 h-24 mb-4 border-4 border-primary">
                    <AvatarImage src={member.imageUrl} alt={member.name} />
                    <AvatarFallback className="text-3xl bg-muted">{member.initials}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 text-center bg-card border rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of students on their learning journey. Explore our courses and find everything you need to excel in your studies.
            </p>
            <Button asChild size="lg">
              <Link href="/">Explore Courses</Link>
            </Button>
          </section>
        </main>
      </div>
    </div>
  );
}
