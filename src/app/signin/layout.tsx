import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://e-leak.vercel.app";

export const metadata: Metadata = {
  title: "Sign In | E-Leak Courses Hub",
  description: "Sign in to your E-Leak Courses Hub account to access your courses, track your progress, and join live classes.",
  keywords: [
    "eleak sign in",
    "eleak login",
    "eleak course hub",
    "eleak courses hub",
    "eleak",
    "eleak app",
    "eleak apk",
    "eleak next toppers",
    "free online courses",
    "student login"
  ],
  alternates: {
    canonical: `${BASE_URL}/signin`,
  },
  openGraph: {
    title: "Sign In to E-Leak Courses Hub",
    description: "Access your E-Leak account.",
    url: `${BASE_URL}/signin`,
  },
};

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
