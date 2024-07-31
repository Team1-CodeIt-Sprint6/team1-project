import React from 'react';

import Input from '@/components/common/Input';

export default function Login() {
  return (
    <form className="mx-auto mt-[118px] flex max-w-[640px] flex-col gap-[32px]">
      <div className="flex flex-col gap-[28px]">
        <Input type="text" placeholder="이메일을 입력해 주세요." />
        <Input type="password" placeholder="비밀번호를 입력해주세요." />
      </div>
    </form>
  );
}
