'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { createShortUrl, getUrlStats, type ShortenUrlResult } from './actions';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Link as LinkIcon, Copy, Check, Home, BarChart2, History, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';

const shortenerSchema = z.object({
  longUrl: z.string().url({ message: "Please enter a valid URL." }),
  alias: z.string().max(50, { message: "Alias cannot be more than 50 characters." }).optional(),
});

interface CopiedState {
  [key: string]: boolean;
}

export default function ShortenerPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [resultData, setResultData] = useState<ShortenUrlResult | null>(null);
  
  const [linkHistory, setLinkHistory] = useState<ShortenUrlResult[]>([]);
  const [isLoadingHistory, setIsLoadingHistory] = useState(true);
  const [copiedStates, setCopiedStates] = useState<CopiedState>({});
  
  const form = useForm<z.infer<typeof shortenerSchema>>({
    resolver: zodResolver(shortenerSchema),
    defaultValues: {
      longUrl: "",
      alias: "",
    },
  });

  useEffect(() => {
    const fetchLinkHistory = async () => {
        const aliasesJson = localStorage.getItem('shortenedUrlAliases');
        if (aliasesJson) {
            try {
                const aliases: string[] = JSON.parse(aliasesJson);
                if (aliases.length > 0) {
                    const promises = aliases.map(alias => getUrlStats(alias));
                    const results = await Promise.all(promises);
                    const successfulLinks = results.filter(r => r.success);
                    setLinkHistory(successfulLinks);
                }
            } catch (e) {
                console.error("Failed to parse aliases from localStorage", e);
                localStorage.removeItem('shortenedUrlAliases'); // Clear corrupted data
            }
        }
        setIsLoadingHistory(false);
    };
    fetchLinkHistory();
  }, []);


  const onSubmit = async (values: z.infer<typeof shortenerSchema>) => {
    setIsLoading(true);
    setResultData(null);
    const result = await createShortUrl(values.longUrl, values.alias);
    setIsLoading(false);

    if (result.success && result.alias) {
      setResultData(result);
      toast({
        title: "Success!",
        description: "Your shortened URL has been created.",
      });

      // Update history in local storage
      const aliasesJson = localStorage.getItem('shortenedUrlAliases') || '[]';
      const aliases: string[] = JSON.parse(aliasesJson);
      const newAliases = [result.alias, ...aliases.filter(a => a !== result.alias)].slice(0, 50);
      localStorage.setItem('shortenedUrlAliases', JSON.stringify(newAliases));
      
      // Update UI state
      setLinkHistory(prevLinks => [result, ...prevLinks.filter(l => l.alias !== result.alias)]);
      form.reset();

    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error || "Failed to shorten URL.",
      });
    }
  };

  const handleCopy = (textToCopy: string, key: string) => {
    navigator.clipboard.writeText(textToCopy);
    setCopiedStates(prev => ({ ...prev, [key]: true }));
    setTimeout(() => setCopiedStates(prev => ({ ...prev, [key]: false })), 2000);
  };
  
  const handleRemoveFromHistory = (aliasToRemove: string) => {
    setLinkHistory(prevLinks => prevLinks.filter(link => link.alias !== aliasToRemove));
    
    const aliasesJson = localStorage.getItem('shortenedUrlAliases') || '[]';
    const aliases: string[] = JSON.parse(aliasesJson);
    const newAliases = aliases.filter(a => a !== aliasToRemove);
    localStorage.setItem('shortenedUrlAliases', JSON.stringify(newAliases));
    
    toast({ description: "Link removed from your history." });
  };


  return (
    <div className="flex flex-col items-center min-h-screen bg-background p-4 space-y-8">
      <div className="absolute top-4 right-4">
          <Button asChild variant="outline">
              <Link href="/">
                  <Home className="mr-2 h-4 w-4" /> Home
              </Link>
          </Button>
      </div>
      <Card className="w-full max-w-lg mt-16">
        <CardHeader>
          <CardTitle className="text-2xl">URL Shortener</CardTitle>
          <CardDescription>Create a short, shareable link with click tracking.</CardDescription>
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
                      <Input placeholder="https://example.com/very/long/url" {...field} />
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
        {resultData && resultData.shortUrl && (
          <CardFooter className="flex-col items-start space-y-4 pt-4 border-t">
            <div>
                <h3 className="font-semibold">Your Short URL:</h3>
                <div className="flex w-full items-center space-x-2 mt-1">
                <Input value={resultData.shortUrl} readOnly className="flex-grow" />
                <Button variant="outline" size="icon" onClick={() => handleCopy(resultData.shortUrl!, 'new')}>
                    {copiedStates['new'] ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </Button>
                </div>
                <a href={resultData.shortUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline mt-1 inline-block">
                Test your link
                </a>
            </div>
            <div className="bg-muted p-3 rounded-md w-full">
                <h3 className="font-semibold text-sm flex items-center"><BarChart2 className="mr-2 h-4 w-4 text-primary" />Click Stats</h3>
                <p className="text-sm text-muted-foreground mt-1">
                    Initial Clicks: <span className="font-bold text-foreground">{resultData.clickCount ?? 0}</span>
                </p>
                <p className="text-xs text-muted-foreground mt-2">The click count will update each time the short link is visited. Your history below will show the latest count.</p>
            </div>
          </CardFooter>
        )}
      </Card>

      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2"><History /> Your Links</CardTitle>
          <CardDescription>Links you've created are saved.</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoadingHistory ? (
             <div className="space-y-4">
                {[...Array(3)].map((_, i) => <Skeleton key={i} className="h-16 w-full" />)}
             </div>
          ) : linkHistory.length > 0 ? (
            <div className="space-y-4 max-h-[40vh] overflow-y-auto pr-2">
                {linkHistory.map((link) => (
                    <div key={link.alias} className="flex items-center gap-4 p-3 border rounded-lg">
                        <div className="flex-grow overflow-hidden">
                           <div className="flex items-center gap-2">
                             <a href={link.shortUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary truncate hover:underline">{link.shortUrl}</a>
                             <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => handleCopy(link.shortUrl!, link.alias!)}>
                                {copiedStates[link.alias!] ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                             </Button>
                           </div>
                            <p className="text-xs text-muted-foreground truncate">To: {link.longUrl}</p>
                            <p className="text-xs text-muted-foreground mt-1">
                                Clicks: <span className="font-bold text-foreground">{link.clickCount ?? 0}</span>
                            </p>
                        </div>
                        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive h-8 w-8" onClick={() => handleRemoveFromHistory(link.alias!)}>
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </div>
                ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-4">You haven't shortened any links yet.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
