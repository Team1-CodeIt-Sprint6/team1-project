import React, { useState } from 'react';

import TabletStep2Card from '@/components/ActivityPage/ReservationCard/TabletReservationCard/Step2TabletCard';
import { CardEventHandlerType } from '@/types/activityDetailPageTypes';

import TabletStep1Card from './Step1TabletCard';
import TabletStep3Card from './Step3TabletCard';

export default function TabletReservationCard() {
  const [date, setDate] = useState('24/11/13');
  const [time, setTime] = useState('14:00 ~ 15:00');
  const [people, setPeople] = useState(1);
  const [price, setPrice] = useState(1);
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
    <>
      {step === 1 && (
        <TabletStep1Card people={people} onClick={CardEventHandler} />
      )}
      {step === 2 && <TabletStep2Card onClick={CardEventHandler} />}
      {step === 3 && (
        <TabletStep3Card
          price={price}
          date={date}
          time={time}
          people={people}
          onClick={CardEventHandler}
        />
      )}
    </>
  );
}
