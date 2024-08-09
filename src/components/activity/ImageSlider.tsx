import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ActivityResponse } from '@/types/activityTypes';

interface ImageSwiperProps {
  activityData: ActivityResponse;
  className?: string;
}

const swiperConfig = {
  spaceBetween: 10,
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
  },
  loop: true,
  navigation: true,
  modules: [Autoplay, Navigation],
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
};
export default function ImageSwpier({ activityData }: ImageSwiperProps) {
  const images = [
    {
      id: 'banner',
      imageUrl: activityData.bannerImageUrl,
      alt: `${activityData.title} 배너 이미지`,
    },
    ...activityData.subImages.map((subImage, idx) => ({
      id: subImage.id,
      imageUrl: subImage.imageUrl,
      alt: `${activityData.title} 서브 이미지 ${idx + 1}`,
    })),
  ];

  return (
    <div className="swiper-container">
      <Swiper {...swiperConfig}>
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="relative h-[310px] w-full max-w-[620px] sm:max-w-[760px]">
              <Image
                src={image.imageUrl}
                alt={image.alt}
                fill
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
