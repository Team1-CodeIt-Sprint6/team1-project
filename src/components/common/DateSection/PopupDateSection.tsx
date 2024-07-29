import 'react-datepicker/dist/react-datepicker.css';

import { format } from 'date-fns';
import { ko } from 'date-fns/locale/ko';
import { useEffect, useRef, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';

import CalendarInput from './CalendarInput';
import DayMarker from './DayMarker';

registerLocale('ko', ko);

export default function PopupDateSection({
  onClick,
}: {
  onClick: (value: string) => void;
}) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const today = new Date();
  const [returnValue, setReturnValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (returnValue) {
      onClick(returnValue);
    }
  }, [returnValue, onClick]);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setReturnValue(format(date, 'yyyy-MM-dd'));
  };

  return (
    <DatePicker
      selected={selectedDate}
      minDate={today}
      onSelect={(date) => {
        handleDateClick(date || today);
      }}
      locale="ko"
      dateFormat="yy/MM/dd"
      placeholderText="YY/MM/DD"
      customInput={<CalendarInput ref={inputRef} className="cursor-pointer" />}
      renderDayContents={(dayOfMonth, date) => (
        <DayMarker
          dayOfMonth={dayOfMonth}
          date={date}
          today={today}
          selectedDate={selectedDate}
        />
      )}
      className="react-datepicker"
    />
  );
}
