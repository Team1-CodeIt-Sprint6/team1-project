import { format, isValid, parseISO } from 'date-fns';

import { SELECTED_DATE_FORMAT } from '@/constants/datePickerConstants';

export const formatDate = (dateString: string) => {
  const date = parseISO(dateString);
  return isValid(date) ? format(date, SELECTED_DATE_FORMAT) : dateString;
};

// YYYY-MM-DD -> YY/MM/DD
export const formatFromDashToSlash = (date: string) => {
  const parsed = date.split('-');
  parsed[0] = parsed[0].slice(2, 4);
  return parsed.join('/');
};
