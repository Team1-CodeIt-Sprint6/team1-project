import { setCookie } from 'cookies-next';

import axios from '@/lib/apis/axios';

// access token을 업데이트 하기 위한 요청
export const updateAccessToken = async () => {
  const { data } = await axios.post('/auth/tokens');

  const newAccessToken = data.accessToken;
  setCookie('accessToken', newAccessToken);
};
