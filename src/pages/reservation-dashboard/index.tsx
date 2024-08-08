import { Calendar } from 'react-calendar';

import ReservationDashboardDropdown from '@/components/ReservationDashboardPage/ReservationDashboardDropdown';
import useDropdown from '@/hooks/useDropdown';
import useReservationCalendar from '@/hooks/useReservationCalendar';
import useReservationDashboardData from '@/hooks/useReservationDashboardData';

export default function ReservationDashboard() {
  const dropdown = useDropdown('');
  const { availableValues } = useReservationDashboardData();
  const { value, tileContent, tileClassName, onDateChange, onMonthChange } =
    useReservationCalendar();

  return (
    <div className="flex min-w-[342px] flex-col">
      <div className="mb-[32px]">
        <h1 className="text-kv-3xl font-kv-bold">예약 현황</h1>
      </div>
      <div className="mb-[24px] h-[56px]">
        <ReservationDashboardDropdown
          label="체험명"
          value={dropdown.value}
          availableValues={availableValues}
          placeholder="체험명을 선택해주세요"
          isOpen={dropdown.isOpen}
          onClickButton={dropdown.onClickButton}
          onBlurButton={dropdown.onBlurButton}
          onClickMenu={dropdown.onClickMenu}
        />
      </div>
      <div className="h-[872px]">
        <Calendar
          calendarType="gregory"
          tileContent={tileContent}
          tileClassName={tileClassName}
          formatDay={(_, date) => date.getDate().toString()}
          onChange={onDateChange}
          onActiveStartDateChange={onMonthChange}
          value={value}
          minDetail={'month'}
          className="custom-calendar"
        />
      </div>
    </div>
  );
}
