import Image from 'next/image';

import { ActivityResponse } from '@/types/activityTypes';

interface ImageGalleryProps {
  activityData: ActivityResponse;
}

export default function ImageGallery({ activityData }: ImageGalleryProps) {
  return (
    <>
      <div>
        <div className="relative -ml-6 -mr-6 h-80">
          {activityData.bannerImageUrl && (
            <Image
              src={activityData.bannerImageUrl}
              alt={`${activityData.title} 배너 이미지`}
              fill
              objectFit="cover"
            />
          )}
        </div>

        {activityData.subImages.map(
          (subImage, idx) =>
            subImage.imageUrl && (
              <div className="relative -ml-6 -mr-6 flex h-80">
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
    </>
  );
}
