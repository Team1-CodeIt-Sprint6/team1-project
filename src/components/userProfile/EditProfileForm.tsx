import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import ErrorText from '@/components/common/ErrorText';

interface ProfileProps {
  email: string;
  nickname: string;
  password: string;
  newPassword: string;
}

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzIwLCJ0ZWFtSWQiOiI2LTEiLCJpYXQiOjE3MjI1OTg1NjAsImV4cCI6MTcyMjYwMDM2MCwiaXNzIjoic3AtZ2xvYmFsbm9tYWQifQ.1XkhLRPq9mUkuE2VK0Zq1bBhyBE4dBukyYHNUqohk3g';

// 유저 정보 요청 함수
const getUserData = async () => {
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

// 닉네임 수정 요청 함수
const updateUserData = async (data: Partial<ProfileProps>) => {
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

export default function EditProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
    reset,
  } = useForm<ProfileProps>({
    mode: 'onChange',
  });
  const [userData, setUserData] = useState<ProfileProps | null>(null);

  const password = watch('password');
  const newPassword = watch('newPassword');

  // 유저 정보 화면에 렌더링하는 함수
  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getUserData();
      setUserData(data);
      reset(data);
    };

    fetchUserData();
  }, [reset]);

  // 유저 정보 수정 요청
  const onSubmit = async (data: ProfileProps) => {
    const updateData: Partial<ProfileProps> = {};

    if (data.nickname && data.nickname !== userData?.nickname) {
      updateData.nickname = data.nickname;
    }

    if (
      data.password &&
      data.newPassword &&
      data.password === data.newPassword
    ) {
      updateData.newPassword = data.newPassword;
    }

    if (Object.keys(updateData).length > 0) {
      await updateUserData(updateData);
    }

    const newUserData = await getUserData();
    setUserData(newUserData);
    reset(newUserData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="profile-input-group">
        <label htmlFor="nickname" className="profile-label">
          닉네임
        </label>
        <input
          id="nickname"
          {...register('nickname', {
            maxLength: {
              value: 10,
              message: '닉네임은 10자 이하로 작성해주세요.',
            },
            value: userData?.nickname || '',
          })}
          className={`profile-input ${errors.nickname && 'profile-input-error'}`}
        />
        {errors?.nickname ? (
          <ErrorText>{errors.nickname?.message}</ErrorText>
        ) : null}
      </div>
      <div className="profile-input-group">
        <label htmlFor="email" className="profile-label">
          이메일
        </label>
        <input
          id="email"
          type="email"
          value={userData?.email}
          className="profile-input profile-input-readonly"
          readOnly
        />
      </div>
      <div className="profile-input-group">
        <label htmlFor="password" className="profile-label">
          비밀번호
        </label>
        <input
          id="password"
          type="password"
          {...register('password', {
            minLength: {
              value: 8,
              message: '8자 이상 입력해 주세요',
            },
          })}
          placeholder="8자 이상 입력해 주세요"
          onBlur={() => trigger('password')}
          className={`profile-input ${errors.password && 'profile-input-error'}`}
        />
        {errors?.password ? (
          <ErrorText>{errors.password?.message}</ErrorText>
        ) : null}
      </div>
      <div className="profile-input-group">
        <label htmlFor="password" className="profile-label">
          비밀번호 재입력
        </label>
        <input
          id="password"
          type="password"
          {...register('newPassword', {
            validate: (value) =>
              value === watch('password') || '비밀번호가 일치하지 않습니다.',
          })}
          placeholder="비밀번호를 한 번 더 입력해 주세요"
          onBlur={() => trigger('newPassword')}
          className={`profile-input ${errors.newPassword && 'profile-input-error'}`}
        />
        {errors?.newPassword ? (
          <ErrorText>{errors.newPassword?.message}</ErrorText>
        ) : null}
      </div>
      <input type="submit" value="저장하기" className="save-btn" />
    </form>
  );
}
