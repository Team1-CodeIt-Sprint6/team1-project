import instance from '@/lib/apis/axios';
import { ReservationDashboardResponse } from '@/types/page/ReservationDashboardPageTypes';

// 예약 현황
export const getReservationDashboard = async (): Promise<{
  data: ReservationDashboardResponse;
}> => {
  const response =
    await instance.get<ReservationDashboardResponse>('/my-reservations');
  return { data: response.data };
};
