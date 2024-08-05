import { useEffect, useState } from 'react';

import DesktopReservationCard from '@/components/ActivityPage/ReservationCard/DesktopReservationCard';
import MobileReservationCard from '@/components/ActivityPage/ReservationCard/MobileReservationCard';
import TabletReservationCard from '@/components/ActivityPage/ReservationCard/TabletReservationCard';
import { INITIAL_RESERVATION_STATE } from '@/constants/reservationCardConstants';
import { useCardEventHandler } from '@/hooks/useCardEventHandler';
import useResponsive from '@/hooks/useResponsive';
import { ReservationStateType } from '@/types/activityDetailPageTypes';

//api response
export const data = {
  id: 7,
  userId: 21,
  title: '함께 배우면 즐거운 스트릿댄스',
  description: '둠칫 둠칫 두둠칫',
  category: '투어',
  price: 10000,
  address: '서울특별시 강남구 테헤란로 427',
  bannerImageUrl:
    'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/globalnomad/activity_registration_image/a.png',
  subImageUrls: [
    {
      id: 1,
      imageUrl:
        'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/globalnomad/activity_registration_image/b.png',
    },
  ],
  schedules: [
    {
      id: 1,
      date: '2024-08-07',
      startTime: '11:11',
      endTime: '13:00',
    },
    {
      id: 2,
      date: '2024-08-07',
      startTime: '22:22',
      endTime: '23:22',
    },
    {
      id: 3,
      date: '2024-08-08',
      startTime: '01:00',
      endTime: '02:00',
    },
    {
      id: 4,
      date: '2024-08-08',
      startTime: '02:00',
      endTime: '03:00',
    },
    {
      id: 5,
      date: '2024-08-08',
      startTime: '03:00',
      endTime: '04:00',
    },
  ],
  reviewCount: 5,
  rating: 4.74,
  createdAt: '2023-12-31T21:28:50.589Z',
  updatedAt: '2023-12-31T21:28:50.589Z',
};

export default function ReservationCard() {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const [reservationState, setReservationState] =
    useState<ReservationStateType>(INITIAL_RESERVATION_STATE);
  const cardEventHandler = useCardEventHandler(setReservationState);

  useEffect(() => {
    setReservationState((prevState) => ({
      ...prevState,
      price: data.price,
    }));
  }, []);

  return (
    <>
      {isMobile && (
        <MobileReservationCard
          reservationState={reservationState}
          onClick={cardEventHandler}
        />
      )}
      {isTablet && (
        <TabletReservationCard
          onClick={cardEventHandler}
          reservationState={reservationState}
        />
      )}
      {isDesktop && (
        <DesktopReservationCard
          onClick={cardEventHandler}
          reservationState={reservationState}
        />
      )}
    </>
  );
}
