
// src/components/NotificationItem.tsx
'use client';

import type { Announcement } from '@/app/notifications/page';
import { Timestamp } from 'firebase/firestore';
import { formatDistanceToNowStrict } from 'date-fns';
import { AlertTriangle, Info, Newspaper, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface NotificationItemProps {
  announcement: Announcement;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ announcement }) => {
  const formatDate = (timestamp: Timestamp | null): string => {
    if (!timestamp) return 'just now';
    return formatDistanceToNowStrict(timestamp.toDate(), { addSuffix: true });
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

  const cardClasses = `p-4 sm:p-5 bg-card rounded-xl shadow-lg border transition-all duration-300 hover:shadow-2xl hover:border-primary/50`;
  
  const content = (
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="mt-0.5">{getIcon()}</div>
      <div className="flex-grow">
        <p className="text-foreground text-sm sm:text-base leading-relaxed mb-1.5">{announcement.message}</p>
        <p className="text-xs text-muted-foreground">{formatDate(announcement.timestamp)}</p>
      </div>
      {announcement.link && (
        <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors flex-shrink-0 ml-2 mt-0.5" />
      )}
    </div>
  );

  if (announcement.link) {
    // Check if it's an external link
    const isExternal = announcement.link.startsWith('http://') || announcement.link.startsWith('https://');
    if (isExternal) {
      return (
        <a href={announcement.link} target="_blank" rel="noopener noreferrer" className={`block ${cardClasses}`}>
          {content}
        </a>
      );
    } else {
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
