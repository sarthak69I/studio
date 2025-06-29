'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { createShortUrl } from './actions';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Link as LinkIcon, Copy, Check, Home } from 'lucide-react';
import Link from 'next/link';

const shortenerSchema = z.object({
  longUrl: z.string().url({ message: "Please enter a valid URL." }),
  alias: z.string().max(50, { message: "Alias cannot be more than 50 characters." }).optional(),
});

export default function ShortenerPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  
  const form = useForm<z.infer<typeof shortenerSchema>>({
    resolver: zodResolver(shortenerSchema),
    defaultValues: {
      longUrl: "",
      alias: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof shortenerSchema>) => {
    setIsLoading(true);
    setShortUrl(null);
    const result = await createShortUrl(values.longUrl, values.alias);
    setIsLoading(false);

    if (result.success && result.shortUrl) {
      setShortUrl(result.shortUrl);
      toast({
        title: "Success!",
        description: "Your shortened URL has been created.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error || "Failed to shorten URL.",
      });
    }
  };

  const handleCopy = () => {
    if (shortUrl) {
      navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <div className="absolute top-4 right-4">
          <Button asChild variant="outline">
              <Link href="/">
                  <Home className="mr-2 h-4 w-4" /> Home
              </Link>
          </Button>
      </div>
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-2xl">URL Shortener</CardTitle>
          <CardDescription>Create a short, shareable link from a long URL.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="longUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Long URL</FormLabel>
                    <FormControl>
                      <Input placeholder="https://example.com/very/long/url/to/shorten" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="alias"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Custom Alias (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="my-custom-link" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Shortening...
                  </>
                ) : (
                  <>
                    <LinkIcon className="mr-2 h-4 w-4" />
                    Shorten URL
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
        {shortUrl && (
          <CardFooter className="flex-col items-start space-y-2 pt-4">
            <h3 className="font-semibold">Your Short URL:</h3>
            <div className="flex w-full items-center space-x-2">
              <Input value={shortUrl} readOnly className="flex-grow" />
              <Button variant="outline" size="icon" onClick={handleCopy}>
                {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
            <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
              Test your link
            </a>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
