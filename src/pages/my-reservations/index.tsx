import { useState } from 'react';

import ValueDropdown from '@/components/MyReservationsPage/ValueDropdown';
import useDropdown from '@/hooks/useDropdown';

export default function MyReservations() {
  const dropdown = useDropdown('');

  const [availableValues, setAvailavleValues] = useState([
    '등록한 체험 1',
    '등록한 체험 2',
    '등록한 체험 3',
  ]);
  return (
    <div className="flex min-w-[342px] flex-col bg-kv-blue-lighter">
      <div className="mb-[32px]">
        <h1 className="text-kv-3xl font-kv-bold">예약 현황</h1>
      </div>
      <div className="mb-[24px] h-[56px]">
        <ValueDropdown
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
      <div className="h-[872px] bg-kv-gray-200">달력</div>
    </div>
  );
}
