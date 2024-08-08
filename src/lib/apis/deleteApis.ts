import instance from './axios';

export const deleteActivity = async (activityId: number) => {
  await instance.delete(`/activities/${activityId}`);
};
