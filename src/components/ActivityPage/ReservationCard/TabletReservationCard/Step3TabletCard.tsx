import ContentTitle from '@/components/ActivityPage/ReservationCard/ReservationCommon/ContentTitle';
import ParticipantCounter from '@/components/ActivityPage/ReservationCard/ReservationCommon/ParticipantCounter';
import PriceDisplay from '@/components/ActivityPage/ReservationCard/ReservationCommon/PriceDisplay';
import ReservationButton from '@/components/ActivityPage/ReservationCard/ReservationCommon/ReservationButton';
import TotalSummary from '@/components/ActivityPage/ReservationCard/ReservationCommon/TotalSummary';
import { CardEventHandlerType } from '@/types/activityDetailPageTypes';

interface TabletStep1CardProps {
  onClick: CardEventHandlerType;
  people: number;
  time: string;
  date: string;
  price: number;
}

export default function Step3TabletCard({
  onClick,
  people,
  time,
  date,
  price,
}: TabletStep1CardProps) {
  return (
    <div className="w-[251px] rounded-xl border-[1px] shadow-md">
      <PriceDisplay price={price} />
      <div className="pl-[24px]">
        <ContentTitle className="mb-0" />
        <p className="text-kv-lg font-kv-semibold text-kv-primary-blue">
          {date} {time}
        </p>
      </div>
      <div className="pl-[24px]">
        <ParticipantCounter
          buttonTextClassName="text-kv-black"
          people={people}
        />
      </div>
      <ReservationButton
        onClick={onClick.handleCloseClick}
        className="mx-auto my-[24px] block w-[203px] rounded-[4px] bg-kv-primary-blue"
      />
      <TotalSummary
        totalAmount={10000}
        containerClassName="px-[24px] py-[16px]"
      />
    </div>
  );
}
