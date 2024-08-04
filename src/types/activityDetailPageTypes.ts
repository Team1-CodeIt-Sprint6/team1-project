export interface CardEventHandlerType {
  handleModalToggle: () => void;
  handleCalendarClick: (date: string) => void;
  handlePeopleChange: (value: number) => void;
  handleCloseClick: () => void;
  handleNextStepClick: () => void;
  stepInit: () => void;
}
