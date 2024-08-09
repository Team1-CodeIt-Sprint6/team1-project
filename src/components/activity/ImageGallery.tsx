import Image from 'next/image';

import useResponsive from '@/hooks/useResponsive';
import { ActivityResponse } from '@/types/activityTypes';

import ImageSwpier from './ImageSlider';

interface ImageGalleryProps {
  activityData: ActivityResponse;
}

export default function ImageGallery({ activityData }: ImageGalleryProps) {
  const { isMobile } = useResponsive();

  return (
    <>
      {isMobile ? (
        <ImageSwpier activityData={activityData} />
      ) : (
        <div className="mt-6">
          <div className="flex w-full justify-between gap-2">
            <div className="w-1/2">
              {activityData.bannerImageUrl && (
                <div className="relative h-[543px] w-full tablet:h-[310px]">
                  <Image
                    src={activityData.bannerImageUrl}
                    alt={`${activityData.title} 배너 이미지`}
                    fill
                    objectFit="cover"
                  />
                </div>
              )}
            </div>

            <div className="grid w-1/2 grid-cols-2 gap-2">
              {activityData.subImages.map(
                (subImage, idx) =>
                  subImage.imageUrl && (
                    <div key={subImage.id} className="relative h-full w-full">
                      <Image
                        src={subImage.imageUrl}
                        alt={`${activityData.title} 서브 이미지 ${idx + 1}`}
                        fill
                        objectFit="cover"
                      />
                    </div>
                  ),
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
