export interface ActivityResponse {
  id: number;
  userId: number;
  title: string;
  description: string;
  category: string;
  price: number;
  address: string;
  bannerImageUrl: string;
  subImageUrls: SubImageUrls[];
  schedules: Schedules[];
  reviewCount: number;
  rating: number;
  createdAt: string;
  updatedAt: string;
}

export interface SubImageUrls {
  id: number;
  imageUrl: string;
}

export interface Schedules {
  id: number;
  date: string;
  startTime: string;
  endTime: string;
}
