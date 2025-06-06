
import type {Metadata} from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script'; // Import next/script
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://e-leak.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'E-Leak Courses Hub',
  description: 'Explore a range of Next Toppers courses on E-Leak. Join live classes, access notes, and watch video lectures for Science, Commerce, and Aarambh batches.',
  keywords: [
    'eleak courses',
    'eleak course hub',
    'eleak app',
    'eleak apk',
    'E-leak app download',
    'E-leak NT',
    'eleak next toppers',
    'ELeak next toppers',
    'ELeak NT',
    'E-leak Commerce Batch',
    'eleak science batch',
    'eleak commerce',
    'E-Leak Science',
    'eleak course',
    'E-Leak Video',
    'E-leak Website',
    'E-leak',
    'eleak',
    'Next toppers Free',
    'Prarambh Class 11th Science',
    'Class 11th Commerce',
    'Class 10th Aarambh Foundation',
    'free online courses',
    'live classes',
    'study notes',
    'video lectures'
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: 'https://i.ibb.co/XZJkJ7xF/a5f7295b-f621-4163-b66d-8edadf7721d8-removebg-preview-1.png',
    apple: 'https://i.ibb.co/XZJkJ7xF/a5f7295b-f621-4163-b66d-8edadf7721d8-removebg-preview-1.png',
  },
  openGraph: {
    title: 'E Leak Courses Hub',
    description: 'Explore a range of Next Toppers courses on E-Leak. Join live classes, access notes, and watch video lectures for Science, Commerce, and Aarambh batches.',
    url: '/',
    siteName: 'E Leak Course Hub',
    images: [
      {
        url: 'https://i.ibb.co/XZJkJ7xF/a5f7295b-f621-4163-b66d-8edadf7721d8-removebg-preview-1.png',
        width: 500,
        height: 500,
        alt: 'E-Leak Logo',
      },
    ],
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
        <SpeedInsights />
      </body>
    </html>
  );
}
