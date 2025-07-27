
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://e-leak.vercel.app";

export const metadata: Metadata = {
  title: "Our Social Channels | E-Leak Courses Hub",
  description: "Connect with E-Leak Courses Hub on YouTube and Telegram to stay updated with the latest announcements, new courses, and community events.",
  keywords: [
    "eleak social media",
    "eleak youtube",
    "eleak telegram",
    "next topper youtube",
    "e-leak course hub socials"
  ],
  alternates: {
    canonical: `${BASE_URL}/socials`,
  },
  openGraph: {
    title: "Connect with E-Leak Courses Hub",
    description: "Follow us on our social media channels for the latest updates.",
    url: `${BASE_URL}/socials`,
  },
};

export default function SocialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
