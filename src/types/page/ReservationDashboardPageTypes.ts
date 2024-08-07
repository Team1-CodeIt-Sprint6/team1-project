export interface ReservationDashboardActivity {
  id: number;
  title: string;
  bannerImageUrl: string;
}

export interface ReservationDashboardItem {
  activity: ReservationDashboardActivity;
  scheduleId: number;
  id: number;
  teamId: string;
  userId: number;
  status: string;
  reviewSubmitted: boolean;
  totalPrice: number;
  headCount: number;
  date: string;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
}

export interface ReservationDashboardResponse {
  totalCount: number;
  reservations: ReservationDashboardItem[];
  cursorId: number | null;
}
