import { setCookie } from 'cookies-next';

import instance from '@/lib/apis/axios';
import { LogInForm, LogInResponse } from '@/types/post/loginTypes';
import {
  ReservationRequest,
  ReservationResponse,
} from '@/types/post/reservationTypes';

// access token을 업데이트 하기 위한 요청
export const updateAccessToken = async () => {
  const { data } = await instance.post('/auth/tokens');

  const newAccessToken = data.accessToken;
  setCookie('accessToken', newAccessToken);
};

// 로그인
export const postLogin = async (
  formData: LogInForm,
): Promise<LogInResponse> => {
  const response = await instance.post<LogInResponse>('/auth/login', formData);
  return response.data;
};

// 예약 신청
export const createReservation = async (
  activityId: number,
  data: ReservationRequest,
): Promise<ReservationResponse> => {
  const response = await instance.post<ReservationResponse>(
    `/activities/${activityId}/reservations`,
    data,
  );
  return response.data;
};
