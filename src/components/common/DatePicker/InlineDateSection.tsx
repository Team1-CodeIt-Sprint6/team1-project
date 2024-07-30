import { format, isValid, parseISO } from 'date-fns';
import DatePicker from 'react-datepicker';

import { SELECTED_DATE_FORMAT } from '@/constants/datePickerConstants';
import useCalendar from '@/hooks/useCalender';

import { getCommonDatePickerProps } from './getCommonDatePickerProps';

export default function InlineDateSection({
  onClick,
}: {
  onClick: (value: string) => void;
}) {
  const {
    selectedDate,
    today,
    handleDateClick,
    returnValue,
    toggleCalendar,
    isOpen,
  } = useCalendar(onClick);

  const commonProps = getCommonDatePickerProps(
    selectedDate,
    today,
    handleDateClick,
  );

  const formatDate = (dateString: string) => {
    const date = parseISO(dateString);
    return isValid(date) ? format(date, SELECTED_DATE_FORMAT) : dateString;
  };

  const dateComponents = {
    closedCalendar: (
      <button
        className="font-kv-semibold text-kv-primary-blue pc:font-kv-semibold tablet:text-kv-lg tablet:font-kv-semibold"
        onClick={toggleCalendar}
      >
        {formatDate(returnValue)}
      </button>
    ),
    openCalendar: (
      <DatePicker inline onClickOutside={toggleCalendar} {...commonProps} />
    ),
  };

  const currentComponent = isOpen ? 'openCalendar' : 'closedCalendar';

  return dateComponents[currentComponent];
}
