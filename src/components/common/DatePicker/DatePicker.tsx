import 'react-datepicker/dist/react-datepicker.css';

import { ko } from 'date-fns/locale/ko';
import React, { useEffect } from 'react';
import { registerLocale } from 'react-datepicker';

import InlineDateSection from './InlineDateSection';
import PopupDateSection from './PopupDateSection';

type DatePickerProps = {
  onClick: (value: string) => void;
  variant: 'inline' | 'popup';
};

export default function DatePicker({ onClick, variant }: DatePickerProps) {
  useEffect(() => {
    registerLocale('ko', ko);
  }, []);

  return (
    <>
      {variant === 'inline' && <InlineDateSection onClick={onClick} />}
      {variant === 'popup' && <PopupDateSection onClick={onClick} />}
    </>
  );
}
