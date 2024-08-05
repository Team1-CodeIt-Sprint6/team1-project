import { ActivityResponse } from '@/types/activityTypes';

import instance from './axios';

export const getActivity = async (activityId: number) => {
  const res = await instance.get<ActivityResponse>(`/activities/${activityId}`);
  return res.data;
};
