
'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { booksData, type Book } from '@/lib/books-data';
import BookCard from '@/components/BookCard';

export default function BooksPage() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filteredBooks, setFilteredBooks] = React.useState(booksData);

  React.useEffect(() => {
    const lowercasedFilter = searchTerm.toLowerCase();
    const newFilteredBooks = booksData.map(category => {
      const filtered = category.books.filter(book =>
        book.title.toLowerCase().includes(lowercasedFilter) ||
        book.author.toLowerCase().includes(lowercasedFilter)
      );
      return { ...category, books: filtered };
    }).filter(category => category.books.length > 0);
    setFilteredBooks(newFilteredBooks);
  }, [searchTerm]);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground p-4 md:p-6">
      <header className="flex items-center justify-between mb-8 w-full max-w-5xl mx-auto">
        <Link href="/" passHref>
          <Button variant="outline" size="lg" className="rounded-lg">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Button>
        </Link>
      </header>

      <main className="flex-grow flex flex-col items-center pt-8 md:pt-12 w-full">
        <div className="w-full max-w-4xl space-y-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold logo-gradient-text animate-gradient">
              E-Leak Books
            </h1>
            <p className="text-muted-foreground mt-2 text-lg">Your one-stop library for essential study materials.</p>
          </div>

          <div className="relative w-full max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by book title or author..."
              className="w-full pl-12 pr-4 py-6 text-base rounded-full shadow-inner bg-muted/50 border-border"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {filteredBooks.length > 0 ? (
            filteredBooks.map((category) => (
              <section key={category.categoryName}>
                <h2 className="text-2xl font-bold text-foreground mb-6 border-b-2 border-primary pb-2">
                  {category.categoryName}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.books.map((book, index) => (
                     <div
                        key={`${category.categoryName}-${index}`}
                        className="transform opacity-0 animate-fadeInUp-custom"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <BookCard book={book} />
                     </div>
                  ))}
                </div>
              </section>
            ))
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No books found for "{searchTerm}".</p>
              <p className="text-sm text-muted-foreground mt-2">Try a different search term or clear the search.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
