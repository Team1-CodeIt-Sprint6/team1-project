import { useQuery } from '@tanstack/react-query';

import { User } from '@/types/userTypes';

import instance from './axios';

const getUserData = async (): Promise<User> => {
  const { data } = await instance.get<User>('/users/me');
  return data;
};

export const useUserData = () => {
  return useQuery<User>({ queryKey: ['user'], queryFn: getUserData });
};
