import React from 'react';

import Input from '@/components/common/Input';

export default function Login() {
  return (
    <form className="mx-auto mt-[118px] flex max-w-[640px] flex-col gap-[32px]">
      <div className="flex flex-col gap-[28px]">
        <Input type="text" />
        <Input type="password" />
      </div>
    </form>
  );
}
