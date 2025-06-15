
import type {Metadata} from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
// Script import for Adsense is removed
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
        url: 'https://i.ibb.co/XZJkJ7xF/a5f7295b-f621-4163-b66d-8edadf7721d8-removebg-preview-1.png', // E-Leak Logo
        width: 500,
        height: 500,
        alt: 'E-Leak Logo - Online Courses Hub',
      },
      {
        url: 'https://i.ibb.co/qMN2dh3Q/Addaheadin.jpg', // Science Course Image
        width: 1200, // Assuming a common banner width
        height: 675,  // Assuming a 16:9 aspect ratio
        alt: 'PRARAMBH CLASS 11th Science Batch Course Cover',
      },
      {
        url: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/bundle_management/course/202309028610_11th%20prarambh%20comm%20app%20final%203499.jpg', // Commerce Course Image
        width: 1200,
        height: 675,
        alt: 'CLASS 11th Commerce Batch Course Cover',
      },
      {
        url: 'https://dxixtlyravvxx.cloudfront.net/540/admin_v1/bundle_management/course/538903229246_aarambh%20banner%20app.jpg', // Aarambh Course Image
        width: 1200,
        height: 675,
        alt: 'Class 10th Aarambh Foundation Batch Course Cover',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  // other: { // Removed google-adsense-account
  //   'google-adsense-account': 'ca-pub-7372814899455347',
  // },
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
        {/* Adsense script removed */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
