import axios from 'axios';

import { ProfileProps } from '@/components/userProfile/EditProfileForm';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzIwLCJ0ZWFtSWQiOiI2LTEiLCJpYXQiOjE3MjI2MjY4MzMsImV4cCI6MTcyMjYyODYzMywiaXNzIjoic3AtZ2xvYmFsbm9tYWQifQ.ven9YdSBpi-yV4JTV54Zt3vQc1pBy2PUJ4sjv2y1vPs';

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
