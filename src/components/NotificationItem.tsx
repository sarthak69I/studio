
// src/components/NotificationItem.tsx
'use client';

import type { Timestamp } from 'firebase/firestore'; // Keep Timestamp import
import { formatDistanceToNowStrict } from 'date-fns';
import { AlertTriangle, Info, Newspaper, ExternalLink } from 'lucide-react';
import Link from 'next/link';

// Exporting Announcement type here if it's not defined globally
export interface Announcement {
  id: string;
  message: string;
  timestamp: Timestamp | null; // Firestore Timestamp
  link?: string;
  type?: 'info' | 'warning' | 'new_content' | string;
}

interface NotificationItemProps {
  announcement: Announcement;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ announcement }) => {
  const formatDate = (timestamp: Timestamp | null): string => {
    if (!timestamp) return 'just now';
    try {
      return formatDistanceToNowStrict(timestamp.toDate(), { addSuffix: true });
    } catch (error) {
      console.error("Error formatting date from timestamp:", timestamp, error);
      return "a while ago"; // Fallback for invalid timestamps
    }
  };

  const getIcon = () => {
    switch (announcement.type) {
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0" />;
      case 'new_content':
        return <Newspaper className="h-5 w-5 text-green-500 flex-shrink-0" />;
      case 'info':
      default:
        return <Info className="h-5 w-5 text-primary flex-shrink-0" />;
    }
  };

  // Reduced padding and adjusted styles for a more compact look within the Sheet
  const cardClasses = `p-3 bg-card rounded-lg shadow-md border border-border/70 transition-all duration-200 hover:shadow-lg hover:border-primary/40`;
  
  const content = (
    <div className="flex items-start gap-3">
      <div className="mt-0.5">{getIcon()}</div>
      <div className="flex-grow">
        <p className="text-foreground text-sm leading-snug mb-1">{announcement.message}</p>
        <p className="text-xs text-muted-foreground">{formatDate(announcement.timestamp)}</p>
      </div>
      {announcement.link && (
        <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors flex-shrink-0 ml-1 mt-0.5" />
      )}
    </div>
  );

  if (announcement.link) {
    const isExternal = announcement.link.startsWith('http://') || announcement.link.startsWith('https://');
    if (isExternal) {
      return (
        <a href={announcement.link} target="_blank" rel="noopener noreferrer" className={`block ${cardClasses}`}>
          {content}
        </a>
      );
    } else {
      // Assuming internal links might close the sheet, which is handled by Sheet's onOpenChange or SheetClose
      return (
        <Link href={announcement.link} className={`block ${cardClasses}`}>
          {content}
        </Link>
      );
    }
  }

  return (
    <div className={cardClasses}>
      {content}
    </div>
  );
};

export default NotificationItem;
