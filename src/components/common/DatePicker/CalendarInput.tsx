import React, { forwardRef } from 'react';

import { IconCalendar } from '@/lib/utils/Icons';

const CalendarInput = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <div className="relative flex items-center justify-between">
      <input ref={ref} type="text" readOnly {...props} />
      <IconCalendar className="absolute right-[12px] h-[27px] w-[27px] pc:right-[26px] tablet:right-[18px]" />
    </div>
  );
});

export default CalendarInput;
