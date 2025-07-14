import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://e-leak.vercel.app";

export const metadata: Metadata = {
  title: "About Us | E-Leak Courses Hub",
  description: "Learn more about E-Leak Courses Hub, our mission to provide free, high-quality education, and the story behind our platform. Join our community dedicated to accessible learning for all.",
  keywords: [
    "about eleak",
    "eleak course hub",
    "our mission",
    "free education",
    "online learning platform",
    "student community",
    "accessible learning"
  ],
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title: "About E-Leak Courses Hub | Our Mission and Story",
    description: "Discover the purpose behind E-Leak: to make quality education universally accessible and free.",
    url: `${BASE_URL}/about`,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
