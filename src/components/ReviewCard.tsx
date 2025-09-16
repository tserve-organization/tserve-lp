import icon from '../assets/icons/inverted-commas-icon.svg';
import type { ReviewProps } from '../mocks/reviews';
import { cn } from '../utils/cn';

interface ReviewCardProps {
  review: ReviewProps
  index: number
}

export function ReviewCard({review, index}: ReviewCardProps) {
  return (
    <div className={cn(
      'flex flex-col rounded-[20px] p-[20px] gap-[16px]', 
      index % 2 === 0 ? 'bg-primary-10' : 'bg-secondary-15'
    )}>
      <img
        src={icon}
        alt="icon"
        className={cn('w-[32px] h-[32px]', index % 2 !== 0 ? 'fill-primary-10' : 'fill-secondary-15')}
      />
      <div className="gap-[4px]">
        <p className={cn(
          'text-[16px] font-semibold', 
          index % 2 === 0 ? 'text-primary-100' : 'text-secondary-100'
        )}>
          {review.name}
        </p>
        <p className="text-neutral-60 text-[14px]">{review.info}</p>
      </div>
      <p className="text-tertiary-100 text-[16px] italic">{review.description}</p>
    </div>
  );
}