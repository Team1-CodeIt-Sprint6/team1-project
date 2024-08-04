import { useEffect, useState } from 'react';

import IconClose from '@/assets/icons/iocn_x_lg.svg';
import AvailableTimeSlots from '@/components/ActivityPage/ReservationCard/ReservationCommon/AvailableTimeSlots';
import ParticipantCounter from '@/components/ActivityPage/ReservationCard/ReservationCommon/ParticipantCounter';
import Button from '@/components/common/Button';
import DatePicker from '@/components/common/DatePicker/DatePicker';
import { RESERVATION_TITLE } from '@/constants/activityDetailPageConstants';
import { CardEventHandlerType } from '@/types/activityDetailPageTypes';

export interface ReservationModalProps {
  onClick: CardEventHandlerType;
  people: number;
  date: string;
  step: number;
}

function ReservationModal({
  onClick,
  people,
  date,
  step,
}: ReservationModalProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(date);
  const [timeSlots, setTimeSlots] = useState([
    { startTime: '14:00', endTime: '15:00', isAvailable: true },
    { startTime: '15:00', endTime: '16:00', isAvailable: false },
  ]);

  const nextStep = () => {
    if (step < 3) onClick.handleNextStepClick();
  };

  useEffect(() => {
    if (step === 3) {
      onClick.stepInit();
      onClick.handleModalToggle();
    }
  }, [step]);

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    // TODO: 선택된 날짜에 따라 timeSlots를 업데이트하는 로직 추가
  };

  const handleTimeSlotSelect = (startTime: string, endTime: string) => {
    // TODO: 선택된 시간대 처리 로직 추가

    setTimeSlots([
      { startTime: startTime, endTime: endTime, isAvailable: true },
    ]);
  };

  return (
    <div className="fixed inset-0 z-10 flex h-full w-full flex-col items-center bg-white pt-6">
      {step === 1 && (
        <>
          <div className="mx-6 mb-[28px] flex h-[48px] w-[327px] items-center justify-between">
            <span className="text-kv-2xl font-kv-bold">
              {RESERVATION_TITLE.date}
            </span>
            <IconClose
              className="size-[40px] hover:cursor-pointer"
              onClick={onClick.handleCloseClick}
            />
          </div>
          <div className="mb-[24px]">
            <DatePicker
              onClick={(date) => {
                onClick.handleCalendarClick(date);
                handleDateSelect(date);
              }}
              variant="inline"
              className="text-kv-md font-kv-semibold"
            />
          </div>
          <AvailableTimeSlots
            selectedDate={selectedDate}
            timeSlots={timeSlots}
            onTimeSlotSelect={handleTimeSlotSelect}
          />
        </>
      )}
      {step === 2 && (
        <>
          <div className="mx-6 mb-[28px] flex h-[48px] w-[327px] items-center justify-between">
            <span className="text-kv-2xl font-kv-bold">
              {RESERVATION_TITLE.people}
            </span>
            <IconClose
              className="size-[40px] hover:cursor-pointer"
              onClick={onClick.handleCloseClick}
            />
          </div>
          <ParticipantCounter onClick={onClick} people={people} />
        </>
      )}
      <Button
        className="fixed bottom-[40px] h-[56px] w-[327px] rounded-[4px] bg-kv-primary-blue text-white"
        onClick={nextStep}
      >
        확인
      </Button>
    </div>
  );
}

export default ReservationModal;
