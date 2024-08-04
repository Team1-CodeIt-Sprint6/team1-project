import useResponsive from '@/hooks/useResponsive';

import DesktopReservationCard from './DesktopReservationCard';
import MobileReservationCard from './MobileReservationCard';

export default function ReservationCard() {
  const { isMobile } = useResponsive();

  return (
    <div>
      <h1 className="mb-9 text-kv-2xl">예약 모달의 레이아웃 구성하기</h1>
      {isMobile && <MobileReservationCard />}
      {!isMobile && <DesktopReservationCard />}
    </div>
  );
}
