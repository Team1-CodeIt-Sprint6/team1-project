import { useState } from 'react';

import DesktopReservationCard from '@/components/ActivityPage/ReservationCard/DesktopReservationCard';
import MobileReservationCard from '@/components/ActivityPage/ReservationCard/MobileReservationCard';
import TabletReservationCard from '@/components/ActivityPage/ReservationCard/TabletReservationCard';
import useResponsive from '@/hooks/useResponsive';

export default function ReservationCard() {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const [reservationState, setReservationState] = useState({
    date: '24/11/13',
    time: '14:00 ~ 15:00',
    people: 1,
    step: 1,
    isToggleModal: false,
  });

  const initAllData = () => {
    setReservationState({
      ...reservationState,
      date: '',
      time: '',
      people: 1,
      step: 1,
      isToggleModal: false,
    });
  };

  // const CardEventHandler: CardEventHandlerType = {
  //   stepInit: () => {
  //     setReservationState({ ...reservationState, step: 1 });
  //   },
  //   handlePeopleChange: (value: number) => {
  //     if (value < 0) return;
  //     setReservationState({ ...reservationState, people: value });
  //   },
  //   handleModalToggle: () => {
  //     setReservationState({ ...reservationState, isToggleModal: !isToggleModal });
  //   },
  //   handleCalendarClick: (date: string) => {
  //     setDate(date);
  //   },
  //   handleCloseClick: () => {
  //     setIsToggleModal(!isToggleModal);
  //     initAllData();
  //   },
  //   handleNextStepClick: () => {
  //     setStep(step + 1);
  //   },
  // };

  return (
    <div>
      <h1 className="mb-9 text-kv-2xl">예약 모달의 레이아웃 구성하기</h1>
      {isMobile && <MobileReservationCard />}
      {isTablet && <TabletReservationCard />}
      {isDesktop && <DesktopReservationCard />}
    </div>
  );
}
