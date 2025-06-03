
import type {Metadata} from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script'; // Import next/script
import { Analytics } from "@vercel/analytics/next";
import './globals.css';
import ClientLayoutWrapper from '@/components/client-layout-wrapper';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// IMPORTANT: Replace "https://your-domain.com" with your actual domain
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://your-domain.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'E-Leak Course Hub',
  description: 'Explore a wide range of courses on E-Leak. Join live classes, access notes, and watch video lectures for Science, Commerce, and Aarambh batches.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'E-Leak Course Hub',
    description: 'Explore a wide range of courses on E-Leak. Join live classes, access notes, and watch video lectures for Science, Commerce, and Aarambh batches.',
    url: '/',
    siteName: 'E-Leak',
    // images: [ // Optionally add a default image for sharing
    //   {
    //     url: '/og-image.png', // Create this image in your /public folder
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    locale: 'en_US',
    type: 'website',
  },
  other: {
    'google-adsense-account': 'ca-pub-7372814899455347',
  },
  verification: {
    google: 'xVUZLpoXMp0utqG7cQh-faRAO-BIdkcADQ1TyQh2uCo',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
        <Script
          id="adsbygoogle-script"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7372814899455347"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        <Analytics />
      </body>
    </html>
  );
}
