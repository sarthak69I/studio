import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "My Courses | E-Leak Courses Hub",
    description: "Access all your enrolled courses in one place. Continue your learning journey with E-Leak.",
    keywords: ["my courses", "enrolled courses", "eleak courses", "student dashboard"],
};

export default function MyCoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
