import { redirect } from 'next/navigation';

export default function NotificationsPage() {
  // This page is obsolete and now redirects to the homepage.
  // Notifications are handled in a sheet component in the main layout.
  redirect('/');

  // This part is unreachable but good practice to include.
  return null;
}
