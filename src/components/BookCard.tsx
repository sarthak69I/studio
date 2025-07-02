
'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Download, User } from 'lucide-react';
import type { Book } from '@/lib/books-data';

interface BookCardProps {
  book: Book;
}

const renderDownloadButton = (book: Book) => {
    if (typeof book.download === 'string') {
        return (
            <a href={book.download} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full">
                    <Download className="mr-2 h-4 w-4" /> Download
                </Button>
            </a>
        );
    }

    // Handle multiple download links
    return (
        <div className="grid grid-cols-1 gap-2 w-full">
            {Object.entries(book.download).map(([key, url]) => (
                 <a key={key} href={url} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full">
                        <Download className="mr-2 h-4 w-4" /> Download {key}
                    </Button>
                </a>
            ))}
        </div>
    );
};

export default function BookCard({ book }: BookCardProps) {
  return (
    <Card className="flex flex-col h-full bg-card hover:shadow-xl transition-shadow duration-300 border-border/60">
      <CardHeader>
        <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-lg">
                <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <div>
                <CardTitle className="text-lg leading-tight">{book.title}</CardTitle>
            </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center text-sm text-muted-foreground">
          <User className="mr-2 h-4 w-4" />
          <span>{book.author}</span>
        </div>
      </CardContent>
      <CardFooter>
        {renderDownloadButton(book)}
      </CardFooter>
    </Card>
  );
}
