import ReservationHeader from '@/components/ActivityPage/ReservationCard/ReservationCommon/ReservationHeader';
import TimeSelector from '@/components/ActivityPage/ReservationCard/ReservationCommon/TimeSelector';
import DatePicker from '@/components/common/DatePicker/DatePicker';
import { CardEventHandlerType } from '@/types/activityDetailPageTypes';

interface Step1MobileCardProps {
  onClick: CardEventHandlerType;
}

export default function Step1MobileCard({ onClick }: Step1MobileCardProps) {
  return (
    <>
      <ReservationHeader title="date" onCloseClick={onClick.handleCloseClick} />
      <div className="mb-[24px]">
        <DatePicker
          onClick={(date) => {
            onClick.handleCalendarClick(date);
            onClick.handleCalendarClick(date);
          }}
          variant="inline"
          className="text-kv-md font-kv-semibold"
        />
      </div>
      <TimeSelector onClick={onClick} />
    </>
  );
}
