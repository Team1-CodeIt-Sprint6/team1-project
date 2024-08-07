import { useEffect, useState } from 'react';

import { getReservationDashboard } from '@/lib/apis/getApis';
import { ReservationDashboardItem } from '@/types/page/ReservationDashboardPageTypes';

import useFetchData from './useFetchData';

const useReservationDashboardData = () => {
  const [dashboardItems, setDashboardItems] = useState<
    ReservationDashboardItem[]
  >([]);
  const [availableValues, setAvailableValues] = useState<string[]>([]);
  const { data } = useFetchData(['dashboardItems'], getReservationDashboard, {
    staleTime: 30000, // 30초
    cacheTime: 300000, // 5분
  });

  useEffect(() => {
    if (data?.reservations) {
      setDashboardItems(data.reservations);
    }
  }, [data]);

  useEffect(() => {
    if (dashboardItems) {
      const values = dashboardItems.map(
        (reservation: ReservationDashboardItem) => reservation.activity.title,
      );
      setAvailableValues(values);
    }
  }, [dashboardItems]);

  return { availableValues, dashboardItems };
};

export default useReservationDashboardData;
