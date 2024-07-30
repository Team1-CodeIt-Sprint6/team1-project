import Link from 'next/link';
import { useRouter } from 'next/router';

import CalendarIcon from '@/assets/icons/icon_calendar.svg';
import GearIcon from '@/assets/icons/icon_gear.svg';
import ListIcon from '@/assets/icons/icon_list.svg';
import ProfileIcon from '@/assets/icons/icon_user.svg';

export default function LeftNaviBar() {
  const router = useRouter();
  const menuItems = [
    {
      name: '내 정보',
      href: '/profile',
      icon: <ProfileIcon className="icon-size" />,
    },
    {
      name: '예약 내역',
      href: '/my-reservations',
      icon: <ListIcon className="icon-size" />,
    },
    {
      name: '내 체험 관리',
      href: '/my-activities',
      icon: <GearIcon className="icon-size" />,
    },
    {
      name: '예약 현황',
      href: '/reservation-dashboard',
      icon: <CalendarIcon className="icon-size" />,
    },
  ];

  return (
    <div className="lnb-wrapper">
      {/* TODO 프로필 이미지 편집 컴포넌트 */}
      <div className="flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className={`lnb-link ${router.pathname === item.href ? 'lnb-link-active' : ''}`}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
