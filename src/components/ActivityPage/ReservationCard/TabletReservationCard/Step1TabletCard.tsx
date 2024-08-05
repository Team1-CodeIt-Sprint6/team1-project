import ContentTitle from '@/components/ActivityPage/ReservationCard/ReservationCommon/ContentTitle';
import ParticipantCounter from '@/components/ActivityPage/ReservationCard/ReservationCommon/ParticipantCounter';
import PriceDisplay from '@/components/ActivityPage/ReservationCard/ReservationCommon/PriceDisplay';
import ReservationButton from '@/components/ActivityPage/ReservationCard/ReservationCommon/ReservationButton';
import SelectDateTextButton from '@/components/ActivityPage/ReservationCard/ReservationCommon/SelectDateTextButton';
import TotalSummary from '@/components/ActivityPage/ReservationCard/ReservationCommon/TotalSummary';
import { CardEventHandlerType } from '@/types/activityDetailPageTypes';

interface TabletStep1CardProps {
  onClick: CardEventHandlerType;
  people: number;
}

export default function Step1TabletCard({
  onClick,
  people,
}: TabletStep1CardProps) {
  return (
    <div className="w-[251px] rounded-xl border-[1px] shadow-md">
      <PriceDisplay price={10000} />
      <div className="pl-[24px]">
        <ContentTitle className="mb-0" />
        <SelectDateTextButton onClick={onClick.handleNextStepClick} />
      </div>
      <div className="pl-[24px]">
        <ParticipantCounter
          buttonTextClassName="text-kv-black"
          people={people}
        />
      </div>
      <ReservationButton className="mx-auto my-[24px] block w-[203px] rounded-[4px] bg-kv-gray-600" />
      <TotalSummary
        totalAmount={10000}
        containerClassName="px-[24px] py-[16px]"
      />
    </div>
  );
}
