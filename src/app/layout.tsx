
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

export const metadata: Metadata = {
  title: 'E-Leak Course Hub',
  description: 'Find your next course with E-Leak.',
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
