import React, { useState } from 'react';

import AvailableTimeSlots from '@/components/ActivityPage/ReservationCard/ReservationCommon/AvailableTimeSlots';
import ParticipantCounter from '@/components/ActivityPage/ReservationCard/ReservationCommon/ParticipantCounter';
import Button from '@/components/common/Button';
import DatePicker from '@/components/common/DatePicker/DatePicker';
import { RESERVATION_TITLE } from '@/constants/activityDetailPageConstants';

export default function DesktopReservationCard() {
  const [date, setDate] = useState('');
  const [people, setPeople] = useState(1);

  const handleDateChange = (newDate: string) => {
    setDate(newDate);
  };

  // const handlePeopleChange = (newPeople: number) => {
  //   if (newPeople > 0) {
  //     setPeople(newPeople);
  //   }
  // };

  // const handleReservation = () => {
  //   // 예약 로직 구현
  //   console.log(`예약: 날짜 ${date}, 인원 ${people}명`);
  // };

  // const handleTimeSlotSelect = (startTime: string, endTime: string) => {
  //   // TODO: 선택된 시간대 처리 로직 추가
  //   console.log(`Selected time slot: ${startTime} - ${endTime}`);
  // };

  return (
    <div className="w-[384px] rounded-lg border bg-white p-4 shadow-lg">
      <div className="mb-[16px] flex items-center gap-[5px] border-b-[1px] border-kv-gray-300 pb-[16px]">
        <span className="text-kv-3xl font-kv-bold">₩ 1,000</span>
        <span className="text-kv-xl">/ 인</span>
      </div>
      <div className="mx-auto w-[336px]">
        <h2 className="mb-4 text-kv-xl font-kv-bold">
          {RESERVATION_TITLE.date}
        </h2>
        <div className="align-center">
          <DatePicker
            onClick={handleDateChange}
            variant="inline"
            className="mb-4 w-full"
          />
        </div>
        {/* 예약 가능한 시간 컴포넌트 */}
        <div className="border-b-[1px] border-b-kv-gray-300">
          <AvailableTimeSlots />
        </div>
        {/* 참여 인원 수 컴포넌트 */}
        <ParticipantCounter people={people} />
        <Button
          // onClick={handleReservation}
          className="my-[24px] w-full bg-kv-primary-blue text-white"
        >
          예약하기
        </Button>
        <div className="flex justify-between border-t-[1px] border-kv-gray-300 pt-[16px]">
          <span className="text-kv-xl font-kv-bold">총 합계</span>
          <span className="text-kv-xl font-kv-bold text-kv-primary-blue">
            ₩ 10,000
          </span>
        </div>
      </div>
    </div>
  );
}
