import instance from '@/lib/apis/axios';
import {
  MyActivitiesResponse,
  ReservationDashboardResponse,
} from '@/types/page/ReservationDashboardPageTypes';

// 내 체험 리스트 조회 // 드롭다운에 넣을 타이들과 id
export const getMyActivities = async (): Promise<{
  data: MyActivitiesResponse;
}> => {
  const response = await instance.get<MyActivitiesResponse>('/my-activities');
  return { data: response.data };
};

// 내 체험 월별 예약 현황 조회
export const getReservationDashboard = async (
  activityId: number,
): Promise<{ data: ReservationDashboardResponse }> => {
  const response = await instance.get<ReservationDashboardResponse>(
    `/my-activities/${activityId}/reservation-dashboard`,
    {
      params: { year: '2024', month: '08' },
    },
  );
  return { data: response.data };
};
