import { useState } from 'react';

import { User } from '@/types/type';

const HeaderUserProfile: React.FC<{ user: User }> = ({ user }) => {
  const DEFAULT_IMAGE = '/assets/icons/icon-profile.svg';
  const [imgSrc, setImgSrc] = useState(user.profileImageUrl || DEFAULT_IMAGE);

  const handleImgError = () => {
    setImgSrc(DEFAULT_IMAGE);
  };

  return (
    <div className="flex items-center">
      <img
        src={imgSrc}
        alt="User Profile"
        className="mr-[10px] h-[32px] w-[32px] rounded-full"
        onError={handleImgError}
      />
      <span className="font-medium kv-text-md">{user.nickname}</span>
    </div>
  );
};

export default HeaderUserProfile;
