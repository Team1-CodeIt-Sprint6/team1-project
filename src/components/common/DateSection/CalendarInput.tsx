import React, { forwardRef } from 'react';

const CalendarInput = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return <input ref={ref} type="text" readOnly {...props} />;
});

export default CalendarInput;
