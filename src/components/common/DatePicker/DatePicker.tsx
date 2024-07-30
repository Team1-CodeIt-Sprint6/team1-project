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

  const variantComponents = {
    inline: InlineDateSection,
    popup: PopupDateSection,
  };

  const SelectedComponent = variantComponents[variant];

  return <SelectedComponent onClick={onClick} />;
}
