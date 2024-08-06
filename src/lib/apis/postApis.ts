import { setCookie } from 'cookies-next';

import axios from '@/lib/apis/axios';
import instance from '@/lib/apis/axios';
import {
  LogInForm,
  LogInResponse,
  SignUpForm,
  SignUpResponse,
} from '@/types/AuthTypes';

// access token을 업데이트 하기 위한 요청
export const updateAccessToken = async () => {
  const { data } = await axios.post('/auth/tokens');

  const newAccessToken = data.accessToken;
  setCookie('accessToken', newAccessToken);
};

// 로그인
export const postLogin = async (
  formData: LogInForm,
): Promise<LogInResponse> => {
  const response = await instance.post<LogInResponse>(`/auth/login`, formData);
  return response.data;
};

export const postSignup = async (
  formData: SignUpForm,
): Promise<SignUpResponse> => {
  const { email, nickname, password } = formData;
  const response = await instance.post<SignUpResponse>(`/users`, {
    email,
    nickname,
    password,
  });
  return response.data;
};
