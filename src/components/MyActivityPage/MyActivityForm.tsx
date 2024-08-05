import { useState } from 'react';

import { MAX_IMG_LENGTH } from '@/constants/myActivityPage';
import { IMAGE_TYPES } from '@/types/page/myActivityPageTypes';

import ImageList from './ImageList';

export default function MyActivityForm() {
  const [bannerImageFiles, setBannerImageFiles] = useState<File[]>([]);
  const [moreImageFiles, setMoreImageFiles] = useState<File[]>([]);

  const handleAddBannerImage = (file: File) => {
    setBannerImageFiles((prev) => [...prev, file]);
  };
  const handleDeleteBannerImage = (file: File) => {
    setBannerImageFiles((prev) => prev.filter((f) => f !== file));
  };

  const handleAddMoreImage = (file: File) => {
    setMoreImageFiles((prev) => [...prev, file]);
  };
  const handleDeleteMoreImage = (file: File) => {
    setMoreImageFiles((prev) => prev.filter((f) => f !== file));
  };

  return (
    <form className="flex flex-col gap-6">
      <div>
        <h2 className="h2-my-act">배너 이미지</h2>
        <ImageList
          imageFiles={bannerImageFiles}
          maxLength={MAX_IMG_LENGTH[IMAGE_TYPES.BANNER]}
          onAddImage={handleAddBannerImage}
          onDeleteImage={handleDeleteBannerImage}
        />
      </div>
      <div>
        <h2 className="h2-my-act">소개 이미지</h2>
        <ImageList
          imageFiles={moreImageFiles}
          maxLength={MAX_IMG_LENGTH[IMAGE_TYPES.MORE]}
          onAddImage={handleAddMoreImage}
          onDeleteImage={handleDeleteMoreImage}
        />
      </div>
      <p className="text-kv-2lg text-kv-gray-4b">
        *이미지는 최대 4개까지 등록 가능합니다.
      </p>
    </form>
  );
}
