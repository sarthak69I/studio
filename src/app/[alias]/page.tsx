import { doc, getDoc, updateDoc, increment } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { redirect, notFound } from 'next/navigation';
import { type Metadata } from 'next';

interface AliasPageProps {
  params: {
    alias: string;
  };
}

export async function generateMetadata({ params }: AliasPageProps): Promise<Metadata> {
    return {
        title: 'Redirecting... | E-Leak Courses Hub'
    };
}


export default async function AliasPage({ params }: AliasPageProps) {
  const { alias } = params;

  // Basic validation: ignore common static file requests
  if (alias.includes('.')) {
    notFound();
  }
  
  // These are known routes in the app, ignore them.
  const knownRoutes = ['courses', 'dashboard', 'generate-access', 'help-center', 'leaderboard', 'notifications', 'shortener', 'auth', 'api'];
  if (knownRoutes.includes(alias)) {
    notFound();
  }

  const docRef = doc(db, 'shortenedUrls', alias);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    try {
        // Increment the click count atomically.
        // We do this without waiting for it to complete to speed up redirection.
        updateDoc(docRef, { clickCount: increment(1) });
    } catch (error) {
        console.error("Failed to update click count:", error);
        // We still redirect even if the count update fails.
    }
      
    const data = docSnap.data();
    const longUrl = data.longUrl;
    if (longUrl) {
      redirect(longUrl);
    }
  }

  // If the document doesn't exist or doesn't have a longUrl, show a 404 page.
  notFound();
}
