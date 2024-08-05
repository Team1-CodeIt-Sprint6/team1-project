export const RESERVATION_TITLE = {
  date: '날짜',
  people: '인원',
} as const;

export type ReservationTitleKey = keyof typeof RESERVATION_TITLE;
