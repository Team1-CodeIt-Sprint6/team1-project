import { AxiosError, AxiosResponse } from 'axios';

import { User } from '@/types/userTypes';

import instance from './axios';

export const getUserMe = async (
  accessToken: string | undefined,
): Promise<User> => {
  const URL = '/users/me';

  try {
    if (accessToken) {
      const response: AxiosResponse<User> = await instance.get(URL);
      return response.data;
    } else {
      {
        throw new Error('AccessToken이 없습니다.');
      }
    }
  } catch (error) {
    const err = error as AxiosError;
    if (err.response) {
      console.error('Response error:', err.response.status);
      console.error('Response data:', err.response.data);
      throw err;
    }
    console.error(error);
    throw error;
  }
};
