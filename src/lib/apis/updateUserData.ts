import { UpdateUser } from '@/types/userTypes';

import instance from './axios';
import { token } from './getPresignedUrl';

// 유저 정보 수정 요청 함수
export const updateUserData = async (data: Partial<UpdateUser>) => {
  const res = await instance.patch('/users/me', data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
