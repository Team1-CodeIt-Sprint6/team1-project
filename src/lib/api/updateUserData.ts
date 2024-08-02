import axios from 'axios';

import { ProfileProps } from '@/components/userProfile/EditProfileForm';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzIwLCJ0ZWFtSWQiOiI2LTEiLCJpYXQiOjE3MjI2MjU0NjEsImV4cCI6MTcyMjYyNzI2MSwiaXNzIjoic3AtZ2xvYmFsbm9tYWQifQ.ipzQTVeQ-GTz_QQIMFsD051OC7DYLLggUyFfR8oIHIs';

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
