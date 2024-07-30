import Link from 'next/link';
import { useRouter } from 'next/router';

import { MENU_ITEMS } from '@/constants/lnbMenuItems';

export default function LeftNaviBar() {
  const router = useRouter();

  return (
    <div className="lnb-wrapper">
      {/* TODO 프로필 이미지 편집 컴포넌트 */}
      <div className="flex flex-col gap-2">
        {MENU_ITEMS.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className={`lnb-link ${router.pathname === item.href ? 'lnb-link-active' : ''}`}
          >
            <span className="icon-size">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
