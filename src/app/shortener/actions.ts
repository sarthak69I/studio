'use server';

import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { nanoid } from 'nanoid';

export interface ShortenUrlResult {
  success: boolean;
  shortUrl?: string;
  alias?: string;
  clickCount?: number;
  error?: string;
}

export async function createShortUrl(
  longUrl: string,
  alias?: string
): Promise<ShortenUrlResult> {
  try {
    // Validate the URL format
    new URL(longUrl);
  } catch (error) {
    return { success: false, error: 'Please enter a valid URL.' };
  }

  const slug = alias ? alias.trim().replace(/\s+/g, '-') : nanoid(7);

  if (!slug) {
      return { success: false, error: 'Custom alias cannot be empty.' };
  }

  // Check if custom alias is already taken
  const docRef = doc(db, 'shortenedUrls', slug);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { success: false, error: 'This custom alias is already taken.' };
  }

  // Save the new shortened URL
  await setDoc(docRef, {
    longUrl: longUrl,
    createdAt: serverTimestamp(),
    clickCount: 0, // Initialize click count
  });
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://e-leak.vercel.app';
  const shortUrl = `${baseUrl}/${slug}`;

  return { success: true, shortUrl, alias: slug, clickCount: 0 };
}
