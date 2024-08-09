import Image from 'next/image';

import { ActivityResponse } from '@/types/activityTypes';

interface ImageGalleryProps {
  activityData: ActivityResponse;
}

export default function ImageGallery({ activityData }: ImageGalleryProps) {
  return (
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
                <div className="relative h-full w-full">
                  <Image
                    key={subImage.id}
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
  );
}
