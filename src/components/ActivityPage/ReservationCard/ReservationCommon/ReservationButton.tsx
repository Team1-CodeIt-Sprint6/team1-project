import classNames from 'classnames';

import Button from '@/components/common/Button';

interface ReservationButtonProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function ReservationButton({
  className = '',
  onClick,
}: ReservationButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={classNames('button-reservation-default', className)}
    >
      예약하기
    </Button>
  );
}
