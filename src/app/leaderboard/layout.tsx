
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Leaderboard | E-Leak Courses Hub",
  description: "See who's at the top of the class! Track your points and compete with other students on the E-Leak Courses Hub leaderboard.",
  keywords: ["leaderboard", "eleak leaderboard", "course rankings", "student points", "top students"],
};

export default function LeaderboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
