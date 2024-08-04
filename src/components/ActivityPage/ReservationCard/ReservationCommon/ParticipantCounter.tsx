import MinusIcon from '@/assets/icons/icon_decrease.svg';
import PlusIcon from '@/assets/icons/icon_increase.svg';
import useResponsive from '@/hooks/useResponsive';
import { CardEventHandlerType } from '@/types/activityDetailPageTypes';

interface ParticipantCounterProps {
  onClick?: CardEventHandlerType;
  people: number;
}

function ParticipantCounter({ onClick, people }: ParticipantCounterProps) {
  const { isMobile } = useResponsive();
  return (
    <div className="mt-[12px] flex w-[327px] flex-col gap-[24px] pc:gap-[5px] tablet:gap-[5px]">
      <p className="text-kv-xl font-kv-medium pc:text-kv-2lg pc:font-kv-bold tablet:text-kv-2lg tablet:font-kv-bold">
        {isMobile ? '예약할 인원을 선택해주세요.' : '참여 인원 수'}
      </p>
      <div className="flex h-[40px] w-[120px] items-center justify-between gap-2 rounded-[6px] border-2">
        <div
          className="flex size-[40px] align-center"
          onClick={() => onClick?.handlePeopleChange(people - 1)}
        >
          <MinusIcon className="size-[20px]" />
        </div>
        <span className="text-kv-primary-blue">{people}</span>
        <div
          className="size-[40px] align-center"
          onClick={() => onClick?.handlePeopleChange(people + 1)}
        >
          <PlusIcon className="size-[20px]" />
        </div>
      </div>
    </div>
  );
}

export default ParticipantCounter;
