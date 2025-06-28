
'use client';

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Crown, Gem } from 'lucide-react';
import type { UserData } from '@/context/AuthContext';
import { cn } from '@/lib/utils';

interface LeaderboardListItemProps {
    rank: number;
    user: UserData;
    score: number;
}

const getInitials = (name: string | null | undefined) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
};

export default function LeaderboardListItem({ rank, user, score }: LeaderboardListItemProps) {
  const rankColor = rank === 1 ? 'text-amber-400' : rank === 2 ? 'text-slate-400' : rank === 3 ? 'text-amber-600' : 'text-muted-foreground';

  return (
    <div className={cn(
        "flex items-center gap-4 p-2 rounded-lg transition-colors",
        rank <= 3 ? "bg-muted/50" : "hover:bg-muted/50"
    )}>
      <div className={cn("flex-none w-8 text-center text-lg font-bold", rankColor)}>
        {rank === 1 ? <Crown className="mx-auto" /> : rank}
      </div>
      <Avatar className="h-10 w-10 border-2 border-border">
        <AvatarImage src={user.photoURL || ''} alt={user.displayName} />
        <AvatarFallback>{getInitials(user.displayName)}</AvatarFallback>
      </Avatar>
      <div className="flex-grow">
        <p className="font-semibold text-sm truncate">{user.displayName}</p>
      </div>
      <div className="flex-none flex items-center gap-1.5 font-bold text-sm text-primary">
        <Gem className="h-3.5 w-3.5" />
        {score.toLocaleString()}
      </div>
    </div>
  )
}
