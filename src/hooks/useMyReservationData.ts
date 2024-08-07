import { useEffect, useState } from 'react';

import { getMyReservations } from '@/lib/apis/getApis';
import { Reservation } from '@/types/page/myReservationsPageTypes';

import useFetchData from './useFetchData';

const useMyReservationData = () => {
  const [myReservations, setMyReservations] = useState<Reservation[]>([]);
  const [availableValues, setAvailavleValues] = useState<string[]>([]);
  const { data } = useFetchData(['myreservations'], getMyReservations, {
    staleTime: 30000, // 30초
    cacheTime: 300000, // 5분
  });

  useEffect(() => {
    if (data?.reservations) {
      setMyReservations(data.reservations);
    }
  }, [data]);

  useEffect(() => {
    if (myReservations) {
      const values = myReservations.map(
        (reservation: Reservation) => reservation.activity.title,
      );
      setAvailavleValues(values);
    }
  }, [myReservations]);

  return { availableValues, myReservations };
};

export default useMyReservationData;
