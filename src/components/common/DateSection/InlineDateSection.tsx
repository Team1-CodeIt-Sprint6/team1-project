import 'react-datepicker/dist/react-datepicker.css';

import { format, isSameDay } from 'date-fns';
import { ko } from 'date-fns/locale/ko';
import { useEffect, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';

import CalendarInput from './CalendarInput';

registerLocale('ko', ko);

export default function InlineDateSection({
  onClick,
}: {
  onClick: (value: string) => void;
}) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const today = new Date();
  const [returnValue, setReturnValue] = useState('날짜 선택하기');

  useEffect(() => {
    if (returnValue) {
      onClick(returnValue);
    }
  }, [returnValue, onClick]);

  const toggleCalendar = () => {
    setIsOpen(!isOpen);
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setReturnValue(format(date, 'yyyy-MM-dd'));
  };

  const highlightToday = (date: Date) => {
    if (isSameDay(date, today)) {
      return 'bg-[#CED8D5] rounded-[8px]';
    }
    return '';
  };

  return (
    <>
      {!isOpen && (
        <button onClick={toggleCalendar}>
          {returnValue === '날짜 선택하기'
            ? returnValue
            : format(new Date(returnValue), 'yy/MM/dd')}
        </button>
      )}
      {isOpen && (
        <DatePicker
          dayClassName={highlightToday}
          selected={selectedDate}
          minDate={today}
          onSelect={(date) => {
            handleDateClick(date || today);
          }}
          onClickOutside={toggleCalendar}
          locale="ko"
          dateFormat="yy/MM/dd"
          inline
        />
      )}
    </>
  );
}
