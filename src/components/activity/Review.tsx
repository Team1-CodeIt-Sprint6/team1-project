import StartIcon from '@/assets/icons/icon_star.svg';
import { ActivityItem } from '@/types/activityTypes';

interface ReviewProps {
  activityData: ActivityItem;
  className?: string;
}

export function ReviewRating({ activityData }: ReviewProps) {
  return (
    <div className="flex items-center gap-1">
      <StartIcon alt="별 아이콘" />
      <p>
        {activityData.rating} ({activityData.reviewCount.toLocaleString()})
      </p>
    </div>
  );
}

export function ReviewCount({ activityData }: ReviewProps) {
  return (
    <div className="flex items-center gap-1">
      <StartIcon alt="별 아이콘" />
      <p>{activityData.reviewCount.toLocaleString()}개</p>
    </div>
  );
}
