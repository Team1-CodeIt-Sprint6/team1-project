import axios from 'axios';

import { token } from './getPresignedUrl';

export interface ProfileProps {
  email: string;
  nickname: string;
  password: string;
  newPassword: string;
  profileImageUrl: string;
}

// 유저 정보 수정 요청 함수
export const updateUserData = async (data: Partial<ProfileProps>) => {
  const res = await axios.patch(
    'https://sp-globalnomad-api.vercel.app/6-1/users/me',
    data,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
};
