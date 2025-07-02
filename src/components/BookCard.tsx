
'use client';

import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
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
    <Card className="flex flex-col h-full bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-border/60">
      <CardContent className="p-4 flex-grow">
        <div className="flex items-center gap-3 mb-3">
          <BookOpen className="h-5 w-5 text-primary flex-shrink-0" />
          <h3 className="font-semibold text-base leading-tight text-card-foreground">{book.title}</h3>
        </div>
        <p className="flex items-center text-xs text-muted-foreground pl-1">
          <User className="mr-2 h-3.5 w-3.5" />
          <span>{book.author}</span>
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        {renderDownloadButton(book)}
      </CardFooter>
    </Card>
  );
}
