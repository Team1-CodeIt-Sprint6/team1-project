import 'react-datepicker/dist/react-datepicker.css';

import { format, isSameDay } from 'date-fns';
import { ko } from 'date-fns/locale/ko';
import { useEffect, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';

registerLocale('ko', ko);

export default function DateSection({
  onClick,
}: {
  onClick: (value: string) => void;
}) {
  const [startDate, setStartDate] = useState(new Date());
  const today = new Date();
  const [returnValue, setReturnValue] = useState('');

  useEffect(() => {
    if (returnValue) {
      onClick(returnValue);
    }
  }, [returnValue, onClick]);

  const handleDateClick = (date: Date) => {
    setStartDate(date);
    setReturnValue(format(date, 'yyyy-MM-dd'));
  };

  //현재 일자에 해당하는 스타일 적용
  const highlightToday = (date: Date) => {
    if (isSameDay(date, today)) {
      return 'bg-[#CED8D5] rounded-[8px]';
    }
    return '';
  };

  return (
    <div className="pb-18px gap-16px flex flex-col">
      <p>시작일</p>
      <DatePicker
        dayClassName={highlightToday}
        selected={startDate}
        minDate={today}
        onSelect={(date) => {
          handleDateClick(date || startDate);
        }}
        locale="ko"
        dateFormat="yy/MM/dd"
        customInput={
          <input
            type="text"
            className="border-gray30 w-full cursor-pointer rounded-lg border px-4 py-[16px]"
            readOnly
          />
        }
      />
    </div>
  );
}
