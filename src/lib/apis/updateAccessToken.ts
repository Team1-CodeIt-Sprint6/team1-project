import { setCookie } from 'cookies-next';

import axios from '@/lib/apis/axios';

export const updateAccessToken = async () => {
  const { data } = await axios.post('/auth/tokens');

  const newAccessToken = data.accessToken;
  setCookie('accessToken', newAccessToken);
};
