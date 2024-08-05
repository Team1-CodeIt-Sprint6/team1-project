import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { getActivity } from '@/lib/apis/getActivity';
import { ActivityResponse } from '@/types/activityTypes';

export const useActivity = (
  activityId: number,
): UseQueryResult<ActivityResponse> => {
  return useQuery({
    queryKey: ['activity', activityId],
    queryFn: () => getActivity(activityId),
  });
};
