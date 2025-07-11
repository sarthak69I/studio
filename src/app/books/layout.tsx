
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://e-leak.vercel.app";

export const metadata: Metadata = {
  title: "Books | E-Leak Courses Hub",
  description: "Explore a comprehensive library of academic books for Class 9, 10, and 11 on E-Leak. Find and download essential study materials from authors like RD Sharma, S Chand, and NCERT to boost your learning.",
  keywords: [
    "E-Leak books",
    "free study material",
    "download NCERT books",
    "download RD Sharma",
    "Class 9 books",
    "Class 10 books",
    "Class 11 books",
    "CBSE books pdf",
    "academic books download",
  ],
  alternates: {
    canonical: `${BASE_URL}/books`,
  },
  openGraph: {
    title: "Books | E-Leak Courses Hub",
    description: "Your one-stop library for essential study materials for CBSE Class 9, 10, and 11. Download for free.",
    url: `${BASE_URL}/books`,
    siteName: 'E Leak Course Hub',
    images: [
      {
        url: 'https://i.postimg.cc/ZKGmmSyr/a5f7295b-f621-4163-b66d-8edadf7721d8-removebg-preview-1-1.webp',
        width: 500,
        height: 500,
        alt: 'E-Leak Books Library',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function BooksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
