import React, { useState } from 'react';

import { CardEventHandlerType } from '@/types/activityDetailPageTypes';

import ReservationFooterMenu from './ReservationFooterMenu';
import ReservationModal from './ReservationModal';

export default function MobileReservationCard() {
  const [date, setDate] = useState('');
  const [people, setPeople] = useState(1);
  const [step, setStep] = useState(1);
  const [isToggleModal, setIsToggleModal] = useState(false);

  const initAllData = () => {
    setDate('');
    setPeople(1);
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

  return (
    <div>
      {!isToggleModal && (
        <ReservationFooterMenu people={people} onClick={CardEventHandler} />
      )}
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
