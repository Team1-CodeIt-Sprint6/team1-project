import instance from '@/lib/apis/axios';
import { MyReservationsResponse } from '@/types/page/myReservationsPageTypes';

// 예약 현황
export const getMyReservations = async (): Promise<{
  data: MyReservationsResponse;
}> => {
  const response =
    await instance.get<MyReservationsResponse>('/my-reservations');
  return { data: response.data };
};
