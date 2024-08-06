import classNames from 'classnames';
import React from 'react';

import Button from '@/components/common/Button';
import { CardEventHandlerType } from '@/types/activityDetailPageTypes';

interface SelectDateTextButtonProps {
  className?: string;
  onClick: CardEventHandlerType;
}

export default function SelectDateTextButton({
  className = '',
  onClick,
}: SelectDateTextButtonProps) {
  return (
    <Button
      className={classNames('base-button-date-select-default', className)}
      type="button"
      onClick={onClick.handleModalToggle}
    >
      날짜 선택하기
    </Button>
  );
}
