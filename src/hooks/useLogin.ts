import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';

import { postLogin } from '@/lib/apis/postApis';
import { LogInForm, LogInResponse } from '@/types/AuthTypes';

// NOTE: 로그인 성공시 쿠키에 토큰 저장, 실패시 에러 출력하는 훅
const useLogIn = () => {
  const router = useRouter();

  return useMutation<LogInResponse, unknown, LogInForm, unknown>({
    mutationFn: postLogin,
    onError: (error: unknown) => {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.message);
      } else {
        throw new Error('알 수 없는 오류가 발생했습니다.');
      }
    },
    onSuccess: (data) => {
      setCookie('accessToken', data.accessToken);
      setCookie('refreshToken', data.refreshToken);
      router.push('/'); // 로그인 성공 시 리다이렉트
    },
  });
};

export default useLogIn;
