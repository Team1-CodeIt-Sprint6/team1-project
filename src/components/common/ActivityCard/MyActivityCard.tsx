import React, { useState } from 'react';

import MyCardContainer from './MyCardLayout';

type MyActivityCardProps = {
  activity: {
    id: number;
    userId: number;
    title: string;
    description: string;
    category: string;
    price: number;
    address: string;
    bannerImageUrl: string;
    rating: number;
    reviewCount: number;
    createdAt: string;
    updatedAt: string;
  };
  onEdit: () => void;
  onDelete: () => void;
};

const MyActivityCard: React.FC<MyActivityCardProps> = ({
  activity,
  onEdit,
  onDelete,
}) => {
  return (
    <MyCardContainer
      imageSrc={activity.bannerImageUrl}
      imageAlt={activity.title}
    >
      <div className="h-[78px] pc:h-[104px] tablet:h-[82px]">
        <div className="flex items-center">
          <img
            src="/assets/icons/icon_star.svg"
            alt="Twitter"
            className="mr-[6px] h-5 w-5 pb-[2px]"
          />
          <span className="text-kv-lg">
            {activity.rating} ({activity.reviewCount})
          </span>
        </div>
        <h3 className="activity-card-title">{activity.title}</h3>
      </div>
      <div className="flex items-center justify-between">
        <p className="activity-card-price">
          ₩{activity.price.toLocaleString()}{' '}
          <span className="text-kv-gray-4b kv-text-md pc:kv-text-lg tablet:pc:kv-text-lg">
            /인
          </span>
        </p>
        <div>케밥</div>
      </div>
    </MyCardContainer>
  );
};

export default MyActivityCard;
