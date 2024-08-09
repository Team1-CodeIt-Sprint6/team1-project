import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { postSignup } from '@/lib/apis/postApis';
import { SignUpForm, SignUpResponse } from '@/types/AuthTypes';

// NOTE: 로그인 성공시 쿠키에 토큰 저장, 실패시 에러 출력하는 훅
const useSignup = () => {
  return useMutation<SignUpResponse, unknown, SignUpForm, unknown>({
    mutationFn: postSignup,
    onError: (error) => {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.message);
      } else {
        throw new Error('알 수 없는 오류가 발생했습니다.');
      }
    },
  });
};

export default useSignup;
