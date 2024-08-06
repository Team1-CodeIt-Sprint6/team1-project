import { useRouter } from 'next/router';

import CustomKebab from '@/components/activity/CustomKebab';
import Location from '@/components/activity/Location';
import { ReviewRating } from '@/components/activity/Review';
import { useActivity } from '@/hooks/useActivity';
import { useUserData } from '@/lib/apis/getUserData';

export default function ActivityPage() {
  const router = useRouter();
  const { id } = router.query;

  const activityId = id ? parseInt(id as string, 10) : undefined;
  if (!activityId) {
    return <div>로딩중</div>;
  }

  const { data: activityData, isLoading } = useActivity(activityId);
  const { data: userData } = useUserData();

  if (isLoading) return <div>로딩중</div>;
  if (!activityData) return <div>존재하지 않는 체험입니다.</div>;

  return (
    <div className="flex items-center justify-between">
      <div>
        <span>{activityData.category}</span>
        <h2 className="mb-4 mt-2 text-kv-3xl font-kv-bold mobile:text-kv-2xl">
          {activityData.title}
        </h2>
        <div className="flex items-center gap-3">
          <ReviewRating activityData={activityData} />
          <Location activityData={activityData} />
        </div>
      </div>
      {activityData.userId === userData?.id && (
        <CustomKebab activityId={activityId} />
      )}
    </div>
  );
}
