import Link from 'next/link';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';
import { useMediaQuery } from 'usehooks-ts';

import KVentureLogo from '@/assets/icons/logo_big.svg';
import KVentureMobileLogo from '@/assets/icons/logo_big_mobile.svg';

export default function AuthLayout({ children }: PropsWithChildren) {
  const router = useRouter();
  const isMobile = useMediaQuery('only screen and (max-width : 768px)');

  return (
    <div className="mx-3 mb-3 mt-16 flex max-w-[640px] flex-col items-center gap-6 pc:mx-auto pc:mt-[118px] tablet:mx-auto tablet:mt-[86px]">
      {isMobile ? <KVentureMobileLogo /> : <KVentureLogo />}
      {children}
      {router.pathname.startsWith('/login') ? (
        <span className="flex gap-3">
          <h3>회원이 아니신가요?</h3>
          <Link href="/signup" className="text-kv-primary-blue underline">
            회원가입하기
          </Link>
        </span>
      ) : (
        <span className="flex gap-5">
          <h3>회원이신가요?</h3>
          <Link href="/login" className="text-kv-primary-blue underline">
            로그인하기
          </Link>
        </span>
      )}
    </div>
  );
}
