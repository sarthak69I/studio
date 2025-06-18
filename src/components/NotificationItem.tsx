
// src/components/NotificationItem.tsx
'use client';

import type { Timestamp } from 'firebase/firestore';
import { formatDistanceToNowStrict } from 'date-fns';
import { AlertTriangle, Info, Newspaper, ExternalLink, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface Announcement {
  id: string;
  message: string;
  timestamp: Timestamp | null;
  link?: string;
  type?: 'info' | 'warning' | 'new_content' | string; // Added 'general' for default
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
      return "a while ago";
    }
  };

  const getTypeSpecifics = () => {
    switch (announcement.type) {
      case 'warning':
        return {
          icon: <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0" />,
          borderColor: 'border-amber-500',
          bgColor: 'bg-amber-500/5 hover:bg-amber-500/10',
        };
      case 'new_content':
        return {
          icon: <Newspaper className="h-5 w-5 text-green-500 flex-shrink-0" />,
          borderColor: 'border-green-500',
          bgColor: 'bg-green-500/5 hover:bg-green-500/10',
        };
      case 'info':
      default:
        return {
          icon: <Info className="h-5 w-5 text-primary flex-shrink-0" />,
          borderColor: 'border-primary',
          bgColor: 'bg-primary/5 hover:bg-primary/10',
        };
    }
  };

  const { icon, borderColor, bgColor } = getTypeSpecifics();

  const cardClasses = cn(
    `relative p-4 rounded-lg shadow-sm border border-border/80 border-l-4 transition-all duration-200`,
    borderColor,
    bgColor
  );
  
  const content = (
    <div className="flex items-start gap-3">
      <div className="mt-0.5">{icon}</div>
      <div className="flex-grow min-w-0"> {/* Added min-w-0 for better text wrapping */}
        <p className="text-foreground text-sm font-medium leading-snug mb-0.5 break-words"> {/* Added break-words */}
          {announcement.message}
        </p>
        <p className="text-xs text-muted-foreground">{formatDate(announcement.timestamp)}</p>
      </div>
      {announcement.link && (
        <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors flex-shrink-0 ml-2 mt-0.5" />
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

