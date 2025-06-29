import { doc, getDoc } from 'firebase/firestore';
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
        title: 'Redirecting...'
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
    const data = docSnap.data();
    const longUrl = data.longUrl;
    if (longUrl) {
      redirect(longUrl);
    }
  }

  // If the document doesn't exist or doesn't have a longUrl, show a 404 page.
  notFound();
}
