import Link from 'next/link';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';

import KVentureLogo from '@/assets/icons/logo_big.svg';

export default function AuthLayout({ children }: PropsWithChildren) {
  const router = useRouter();

  return (
    <div className="mx-auto mt-[118px] flex max-w-[640px] flex-col items-center gap-[32px]">
      <KVentureLogo />
      {children}
      {router.pathname.startsWith('/login') ? (
        <span className="flex gap-3">
          <h3>회원이 아니신가요?</h3>
          <Link href="/signup">회원가입하기</Link>
        </span>
      ) : (
        <span className="flex gap-5">
          <h3>회원이신가요?</h3>
          <Link href="/signup">로그인하기</Link>
        </span>
      )}
    </div>
  );
}
