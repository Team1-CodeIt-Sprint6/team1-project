import ParticipantCounter from '@/components/ActivityPage/ReservationCard/ReservationCommon/ParticipantCounter';
import ReservationHeader from '@/components/ActivityPage/ReservationCard/ReservationCommon/ReservationHeader';
import { CardEventHandlerType } from '@/types/activityDetailPageTypes';

interface Step2MobileCardProps {
  onClick: CardEventHandlerType;
  people: number;
}

export default function Step2MobileCard({
  onClick,
  people,
}: Step2MobileCardProps) {
  return (
    <>
      <ReservationHeader
        title="people"
        onCloseClick={onClick.handleCloseClick}
      />
      <ParticipantCounter onClick={onClick} people={people} />
    </>
  );
}
