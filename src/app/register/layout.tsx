import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://e-leak.vercel.app";

export const metadata: Metadata = {
  title: "Register | E-Leak Courses Hub",
  description: "Create a free account on E-Leak Courses Hub to track your progress, earn points, and get a personalized learning experience. Sign up now!",
  keywords: [
    "eleak register",
    "eleak sign up",
    "eleak course hub",
    "eleak courses hub",
    "eleak",
    "eleak app",
    "eleak apk",
    "eleak next toppers",
    "free online courses",
    "student registration"
  ],
  alternates: {
    canonical: `${BASE_URL}/register`,
  },
  openGraph: {
    title: "Register for E-Leak Courses Hub",
    description: "Join E-Leak for free to access a world of learning.",
    url: `${BASE_URL}/register`,
  },
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
