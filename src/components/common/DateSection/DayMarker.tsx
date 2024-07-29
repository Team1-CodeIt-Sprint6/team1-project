import { isSameDay } from 'date-fns';
import React from 'react';

// DayMarker 컴포넌트 정의
interface DayMarkerProps {
  dayOfMonth: number;
  date: Date;
  today: Date;
  selectedDate: Date | null;
}

export default function DayMarker({
  dayOfMonth,
  date,
  today,
  selectedDate,
}: DayMarkerProps): JSX.Element {
  const isToday = isSameDay(date, today);
  const isSelected = selectedDate && isSameDay(date, selectedDate);
  let className =
    'w-[34px] h-[32px] justify-center items-center flex rounded-[8px] font-kv-regular ';

  if (isToday) {
    className += 'bg-[#E0E5FF] text-kv-primary-blue ';
  }
  if (isSelected) {
    className += 'bg-kv-primary-blue text-white ';
  }

  return <div className={className}>{dayOfMonth}</div>;
}
