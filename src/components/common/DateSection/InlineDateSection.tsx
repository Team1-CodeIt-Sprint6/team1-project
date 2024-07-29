import 'react-datepicker/dist/react-datepicker.css';

import { format } from 'date-fns';
import { ko } from 'date-fns/locale/ko';
import { useEffect, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';

import DayMarker from './DayMarker';

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

  return (
    <>
      {!isOpen && (
        <button
          className="font-kv-semibold text-kv-primary-blue pc:font-kv-semibold tablet:text-kv-lg tablet:font-kv-semibold"
          onClick={toggleCalendar}
        >
          {returnValue === '날짜 선택하기'
            ? returnValue
            : format(new Date(returnValue), 'yy/MM/dd')}
        </button>
      )}
      {isOpen && (
        <DatePicker
          selected={selectedDate}
          minDate={today}
          onSelect={(date) => {
            handleDateClick(date || today);
          }}
          onClickOutside={toggleCalendar}
          locale="ko"
          dateFormat="yy/MM/dd"
          inline
          renderDayContents={(dayOfMonth, date) => (
            <DayMarker
              dayOfMonth={dayOfMonth}
              date={date}
              today={today}
              selectedDate={selectedDate}
            />
          )}
        />
      )}
    </>
  );
}
