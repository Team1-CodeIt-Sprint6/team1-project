export interface CardEventHandlerType {
  handleModalToggle: () => void;
  handleCalendarClick: (date: string) => void;
  handleHeadCountChange: (value: number) => void;
  handleCloseClick: () => void;
  handleNextStepClick: () => void;
  stepInit: () => void;
  handleTimeChange: (startTime: string, endTime: string) => void;
}

interface Schedule {
  id: number;
  date: string;
  startTime: string;
  endTime: string;
}

type Schedules = Schedule[];

export interface ReservationStateType {
  date: string;
  startTime: string;
  endTime: string;
  price: number;
  headCount: number;
  step: number;
  isToggleModal: boolean;
  schedules: Schedules;
}
