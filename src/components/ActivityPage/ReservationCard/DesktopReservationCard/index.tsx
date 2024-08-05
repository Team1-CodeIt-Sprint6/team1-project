import React from 'react';

import ContentTitle from '@/components/ActivityPage/ReservationCard/ReservationCommon/ContentTitle';
import ParticipantCounter from '@/components/ActivityPage/ReservationCard/ReservationCommon/ParticipantCounter';
import PriceDisplay from '@/components/ActivityPage/ReservationCard/ReservationCommon/PriceDisplay';
import ReservationButton from '@/components/ActivityPage/ReservationCard/ReservationCommon/ReservationButton';
import TimeSelector from '@/components/ActivityPage/ReservationCard/ReservationCommon/TimeSelector';
import TotalSummary from '@/components/ActivityPage/ReservationCard/ReservationCommon/TotalSummary';
import DatePicker from '@/components/common/DatePicker/DatePicker';
import {
  CardEventHandlerType,
  ReservationStateType,
} from '@/types/activityDetailPageTypes';

interface DesktopReservationCardProps {
  onClick: CardEventHandlerType;
  reservationState: ReservationStateType;
}

export default function DesktopReservationCard({
  onClick,
  reservationState,
}: DesktopReservationCardProps) {
  return (
    <div className="w-[384px] rounded-lg border bg-white p-4 shadow-lg">
      <PriceDisplay
        price={reservationState.price}
        headCount={reservationState.headCount}
      />
      <div className="my-[16px] divider" />
      <div className="mx-auto w-[336px]">
        <ContentTitle />
        <div className="mb-[16px] align-center">
          <DatePicker
            onClick={onClick.handleCalendarClick}
            variant="inline"
            className="mb-4 w-full"
          />
        </div>
        <TimeSelector onClick={onClick} reservationState={reservationState} />
        <div className="mb-[12px] mt-[16px] divider" />
        <ParticipantCounter
          headCount={reservationState.headCount}
          onClick={onClick}
        />
        <ReservationButton className="mx-auto my-[24px] block w-full rounded-[4px] bg-kv-primary-blue" />
        <div className="divider" />
        <TotalSummary
          totalAmount={reservationState.price * reservationState.headCount}
        />
      </div>
    </div>
  );
}
