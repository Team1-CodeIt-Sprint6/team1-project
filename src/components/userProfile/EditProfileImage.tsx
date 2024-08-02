import Image from 'next/image';
import { ChangeEvent, useEffect, useState } from 'react';

import PenIcon from '@/assets/icons/icon_pen.svg';
import DefaultProfile from '@/assets/images/profile_default_img.png';
import { createPresignedUrl, uploadUrlToS3 } from '@/lib/apis/getPresignedUrl';
import { getUserData } from '@/lib/apis/getUserData';
import { updateUserData } from '@/lib/apis/updateUserData';

/**
 * NOTE: 프로필 이미지 입력받는 컴포넌트
 * onImageUpload: 실제 폼에 입력 변화를 반영하기 위한 함수
 */

export interface ProfileProps {
  initialImage: string;
  onImageUpload?: (url: string) => void;
}

export default function EditProfileImage({
  onImageUpload,
  initialImage,
}: ProfileProps) {
  const [profileImage, setProfileImage] = useState<string>(
    initialImage || DefaultProfile.src,
  );

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const presignedUrl = await createPresignedUrl(file);

        const profileUrl = presignedUrl.split('?')[0];

        setProfileImage(profileUrl);

        if (onImageUpload) {
          onImageUpload(profileUrl);
        }

        await updateUserData({ profileImageUrl: profileUrl });
      } catch (error) {
        console.error('이미지 업로드 실패:', error);
      }
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getUserData();
      setProfileImage(data.profileImageUrl || DefaultProfile.src);
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    return () => {
      if (profileImage) {
        URL.revokeObjectURL(profileImage);
      }
    };
  }, [profileImage]);

  return (
    <form className="relative m-auto mb-6 h-40 w-40">
      <div className="relative h-40 w-40 overflow-hidden rounded-full shadow-lg">
        <Image src={profileImage} alt="User profile" fill objectFit="cover" />
      </div>

      <label htmlFor="uploadProfileImage">
        <span className="absolute bottom-0 right-0 z-10 cursor-pointer rounded-full bg-kv-primary-blue p-2.5 transition-all hover:scale-110">
          <PenIcon />
        </span>
      </label>

      <input
        id="uploadProfileImage"
        type="file"
        accept="image/png, image/jpeg"
        className="hidden"
        onChange={handleImageChange}
      />
    </form>
  );
}
