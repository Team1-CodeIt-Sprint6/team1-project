import { useEffect, useState } from 'react';

import MinusIcon from '@/assets/icons/icon_decrease.svg';
import PlusIcon from '@/assets/icons/icon_increase.svg';
import IconClose from '@/assets/icons/iocn_x_lg.svg';
import Button from '@/components/common/Button';
import DatePicker from '@/components/common/DatePicker/DatePicker';

interface ReservationFooterMenuProps {
  onClick: CardEventHandlerType;
}

function ReservationFooterMenu({ onClick }: ReservationFooterMenuProps) {
  return (
    <div className="border-kv fixed left-0 h-[83px] w-full border-t-[1px] border-kv-gray-300 bg-white">
      <div className="mx-4 flex h-full items-center justify-between">
        <div className="mt-[16px] flex flex-col gap-2">
          <p>
            <span className={`font-kv-bold`}>₩ 1,000</span>
            <span className="text-kv-primary-blue">/</span>
            <span>1명</span>
          </p>
          <Button
            className="w-[76px]"
            type="button"
            onClick={onClick.handleModalToggle}
          >
            날짜 선택하기
          </Button>
          <Button
            type="submit"
            className={`h-[48px] w-[106px] bg-kv-gray-600 text-kv-lg font-kv-bold text-white`}
            onClick={onClick.handleModalToggle}
          >
            예약하기
          </Button>
        </div>
      </div>
    </div>
  );
}

interface ReservationModalProps {
  onClick: CardEventHandlerType;
  people: number;
  date: string;
  step: number;
}

const RESERVATION_MODAL_TITLE = {
  date: '날짜',
  people: '인원',
};

function ReservationModal({ onClick, people, step }: ReservationModalProps) {
  const nextStep = () => {
    if (step < 3) onClick.handleNextStepClick();
  };

  useEffect(() => {
    if (step === 3) {
      onClick.stepInit();
      onClick.handleModalToggle();
    }
  }, [step]);

  return (
    <div className="fixed inset-0 z-10 flex h-full w-full flex-col items-center bg-white pt-6">
      <div className="mx-6 mb-[28px] flex h-[48px] w-[327px] items-center justify-between">
        <span className="text-kv-2xl font-kv-bold">
          {RESERVATION_MODAL_TITLE.people}
        </span>
        <IconClose className="h-10 w-10" onClick={onClick.handleCloseClick} />
      </div>
      {step === 1 && (
        <>
          <div className="mb-[24px]">
            <DatePicker
              onClick={onClick.handleCalendarClick}
              variant="inline"
              className="text-kv-md font-kv-semibold"
            />
          </div>
          <div className="w-full px-[24px]">
            <p className="text-kv-2lg font-kv-bold text-kv-primary-blue">
              예약 가능한 시간
            </p>
            <p className="mt-[24px] text-center text-kv-lg font-kv-medium">
              {'날짜를 선택해주세요.'}
            </p>
            <div className="mt-[14px] flex gap-3" onClick={() => {}}>
              <Button className="h-[46px] w-[117px] bg-kv-primary-blue text-white">
                14:00~15:00
              </Button>
              <Button className="h-[46px] w-[117px] border-[2px] border-kv-primary-blue text-kv-primary-blue">
                15:00~16:00
              </Button>
            </div>
          </div>
        </>
      )}
      {step === 2 && (
        <div className="flex w-full flex-col gap-6 px-[24px]">
          <p className="text-kv-xl font-kv-medium">
            예약할 인원을 선택해주세요.
          </p>
          <div className="flex h-[40px] w-[120px] items-center justify-between gap-2 rounded-[6px] border-2">
            <div
              className="flex size-[40px] align-center"
              onClick={() => onClick.handlePeopleChange(people - 1)}
            >
              <MinusIcon className="size-[20px]" />
            </div>
            <span className="text-kv-primary-blue">{people}</span>
            <div
              className="size-[40px] align-center"
              onClick={() => onClick.handlePeopleChange(people + 1)}
            >
              <PlusIcon className="size-[20px]" />
            </div>
          </div>
        </div>
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

interface CardEventHandlerType {
  handleModalToggle: () => void;
  handleCalendarClick: (date: string) => void;
  handlePeopleChange: (value: number) => void;
  handleCloseClick: () => void;
  handleNextStepClick: () => void;
  stepInit: () => void;
}

export default function ReservationCard() {
  const [date, setDate] = useState('');
  const [people, setPeople] = useState(0);
  const [step, setStep] = useState(1);
  const [isToggleModal, setIsToggleModal] = useState(false);

  const initAllData = () => {
    setDate('');
    setPeople(0);
    setStep(1);
  };

  const CardEventHandler: CardEventHandlerType = {
    stepInit: () => {
      setStep(1);
    },

    handlePeopleChange: (value: number) => {
      if (value < 0) return;
      setPeople(value);
    },

    handleModalToggle: () => {
      setIsToggleModal(!isToggleModal);
    },

    handleCalendarClick: (date: string) => {
      setDate(date);
    },

    handleCloseClick: () => {
      setIsToggleModal(!isToggleModal);
      initAllData();
    },

    handleNextStepClick: () => {
      setStep(step + 1);
    },
  };

  useEffect(() => {}, [step]);

  return (
    <div>
      <h1 className="mb-9 text-kv-2xl">예약 모달의 레이아웃 구성하기</h1>
      {!isToggleModal && <ReservationFooterMenu onClick={CardEventHandler} />}
      {isToggleModal && (
        <ReservationModal
          onClick={CardEventHandler}
          people={people}
          step={step}
          date={date}
        />
      )}
    </div>
  );
}
