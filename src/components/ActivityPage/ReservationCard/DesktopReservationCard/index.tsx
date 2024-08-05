import React from 'react';

import ContentTitle from '@/components/ActivityPage/ReservationCard/ReservationCommon/ContentTitle';
import ParticipantCounter from '@/components/ActivityPage/ReservationCard/ReservationCommon/ParticipantCounter';
import PriceDisplay from '@/components/ActivityPage/ReservationCard/ReservationCommon/PriceDisplay';
import ReservationButton from '@/components/ActivityPage/ReservationCard/ReservationCommon/ReservationButton';
import TimeSelector from '@/components/ActivityPage/ReservationCard/ReservationCommon/TimeSelector';
import TotalSummary from '@/components/ActivityPage/ReservationCard/ReservationCommon/TotalSummary';
import DatePicker from '@/components/common/DatePicker/DatePicker';
import { CardEventHandlerType } from '@/types/activityDetailPageTypes';

interface DesktopReservationCardProps {
  onClick?: CardEventHandlerType;
}

export default function DesktopReservationCard({
  onClick,
}: DesktopReservationCardProps) {
  return (
    <div className="w-[384px] rounded-lg border bg-white p-4 shadow-lg">
      <PriceDisplay price={1000} />
      <div className="my-[16px] divider" />
      <div className="mx-auto w-[336px]">
        <ContentTitle />
        <div className="mb-[16px] align-center">
          <DatePicker
            onClick={() => {}}
            variant="inline"
            className="mb-4 w-full"
          />
        </div>
        <TimeSelector onClick={onClick} />
        <div className="mb-[12px] mt-[16px] divider" />
        <ParticipantCounter people={1} />
        <ReservationButton className="mx-auto my-[24px] block w-full rounded-[4px] bg-kv-primary-blue" />
        <div className="divider" />
        <TotalSummary totalAmount={10000} />
      </div>
    </div>
  );
}
