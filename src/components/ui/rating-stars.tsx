
// src/components/ui/rating-stars.tsx
'use client';

import * as React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RatingStarsProps {
  currentRating: number;
  onRatingChange?: (rating: number) => void;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean; // If false, only displays the rating
  className?: string;
}

const RatingStars: React.FC<RatingStarsProps> = ({
  currentRating,
  onRatingChange,
  maxRating = 5,
  size = 'md',
  interactive = true,
  className,
}) => {
  const [hoverRating, setHoverRating] = React.useState(0);

  const handleStarClick = (rating: number) => {
    if (interactive && onRatingChange) {
      onRatingChange(rating);
    }
  };

  const handleStarHover = (rating: number) => {
    if (interactive) {
      setHoverRating(rating);
    }
  };

  const starSizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  return (
    <div className={cn("flex items-center space-x-1", className)}>
      {[...Array(maxRating)].map((_, index) => {
        const ratingValue = index + 1;
        const isFilled = ratingValue <= (hoverRating || currentRating);
        return (
          <Star
            key={ratingValue}
            className={cn(
              starSizeClasses[size],
              isFilled ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/50',
              interactive && 'cursor-pointer transition-colors hover:text-yellow-300'
            )}
            onClick={() => handleStarClick(ratingValue)}
            onMouseEnter={() => handleStarHover(ratingValue)}
            onMouseLeave={() => handleStarHover(0)}
          />
        );
      })}
    </div>
  );
};

export default RatingStars;
