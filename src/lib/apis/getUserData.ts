import axios from 'axios';

import { token } from './getPresignedUrl';

// 유저 정보 요청 함수
export const getUserData = async () => {
  const res = await axios.get(
    'https://sp-globalnomad-api.vercel.app/6-1/users/me',
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
};
