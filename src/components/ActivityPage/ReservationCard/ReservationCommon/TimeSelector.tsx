// TimeSelector.tsx
import Button from '@/components/common/Button';
import { CardEventHandlerType } from '@/types/activityDetailPageTypes';

interface TimeSelectorProps {
  onClick?: CardEventHandlerType;
}

function TimeSelector({ onClick }: TimeSelectorProps) {
  const tmpTimeSlots = [
    { startTime: '14:00', endTime: '15:00', isAvailable: true },
    { startTime: '15:00', endTime: '16:00', isAvailable: false },
  ];

  return (
    <div className="w-[327px]">
      <p className="text-kv-2lg font-kv-bold">예약 가능한 시간</p>
      {/* <p className="mt-[24px] text-center text-kv-lg font-kv-medium">
        {selectedDate
          ? `${selectedDate} 예약 가능 시간`
          : '날짜를 선택해주세요.'}
      </p> */}
      <div className="mt-[14px] flex flex-wrap gap-3">
        {tmpTimeSlots.map(({ startTime, endTime, isAvailable }) => (
          <Button
            key={`${startTime}-${endTime}`}
            className={`h-[46px] w-[117px] ${
              isAvailable
                ? 'bg-kv-primary-blue text-white'
                : 'border-[2px] border-kv-primary-blue text-kv-primary-blue'
            }`}
            // onClick={() => onTimeSlotSelect(startTime, endTime)}
            disabled={!isAvailable}
          >
            {`${startTime}~${endTime}`}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default TimeSelector;
