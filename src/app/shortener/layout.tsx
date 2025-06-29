import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://e-leak.vercel.app";

export const metadata: Metadata = {
  title: "Free URL Shortener with Click Tracking | E-Leak",
  description: "Create short, custom, and trackable links for free with the E-Leak URL Shortener. Enjoy unlimited URL shortening with real-time click tracking at no cost.",
  keywords: [
    "URL shortener", 
    "free URL shortener", 
    "link shortener", 
    "custom URL", 
    "link tracker", 
    "click counter", 
    "E-Leak shortener", 
    "unlimited URL shortener",
    "trackable links",
    "free link tracking",
  ],
  alternates: {
    canonical: `${BASE_URL}/shortener`,
  },
  openGraph: {
    title: "Free URL Shortener with Click Tracking | E-Leak",
    description: "Create short, custom, and trackable links for free with the E-Leak URL Shortener. Unlimited URL shortening with real-time click tracking.",
    url: `${BASE_URL}/shortener`,
    siteName: 'E Leak Course Hub',
    images: [
      {
        url: 'https://i.postimg.cc/ZKGmmSyr/a5f7295b-f621-4163-b66d-8edadf7721d8-removebg-preview-1-1.webp',
        width: 500,
        height: 500,
        alt: 'E-Leak Logo - URL Shortener',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function ShortenerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
