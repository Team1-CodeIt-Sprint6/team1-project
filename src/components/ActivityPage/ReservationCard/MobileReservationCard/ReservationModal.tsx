import { useEffect } from 'react';

import Button from '@/components/common/Button';
import { CardEventHandlerType } from '@/types/activityDetailPageTypes';

import Step1MobileCard from './Step1MobileCard';
import Step2MobileCard from './Step2MobileCard';

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
  useEffect(() => {
    if (step === 3) {
      onClick.stepInit();
      onClick.handleModalToggle();
    }
  }, [step]);

  return (
    <div className="fixed inset-0 z-10 flex h-full w-full flex-col items-center bg-white pt-6">
      {step === 1 && <Step1MobileCard onClick={onClick} />}
      {step === 2 && <Step2MobileCard onClick={onClick} people={people} />}
      <Button
        className="fixed bottom-[40px] h-[56px] w-[327px] rounded-[4px] bg-kv-primary-blue text-white"
        onClick={onClick.handleNextStepClick}
      >
        확인
      </Button>
    </div>
  );
}

export default ReservationModal;
