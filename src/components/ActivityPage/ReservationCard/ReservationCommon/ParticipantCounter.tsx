import classNames from 'classnames';

import MinusIcon from '@/assets/icons/icon_decrease.svg';
import PlusIcon from '@/assets/icons/icon_increase.svg';
import useResponsive from '@/hooks/useResponsive';
import { CardEventHandlerType } from '@/types/activityDetailPageTypes';

interface ParticipantCounterProps {
  onClick?: CardEventHandlerType;
  people: number;
  containerClassName?: string;
  titleClassName?: string;
  counterClassName?: string;
  buttonClassName?: string;
  buttonTextClassName?: string;
}

function ParticipantCounter({
  onClick,
  people,
  containerClassName = '',
  titleClassName = '',
  counterClassName = '',
  buttonClassName = '',
  buttonTextClassName = '',
}: ParticipantCounterProps) {
  const { isMobile } = useResponsive();

  return (
    <div
      className={classNames(
        'container-counter-participant-default',
        containerClassName,
      )}
    >
      <p
        className={classNames(
          'title-counter-participant-default',
          titleClassName,
        )}
      >
        {isMobile ? '예약할 인원을 선택해주세요.' : '참여 인원 수'}
      </p>
      <div
        className={classNames('counter-participant-default', counterClassName)}
      >
        <div
          className={classNames(
            'button-counter-participant-default',
            buttonClassName,
          )}
          onClick={() => onClick?.handlePeopleChange(people - 1)}
        >
          <MinusIcon
            className={classNames(
              'icon-button-counter-participant-default',
              buttonTextClassName,
            )}
          />
        </div>
        <span
          className={classNames(
            'text-button-counter-participant-default',
            buttonTextClassName,
          )}
        >
          {people}
        </span>
        <div
          className={classNames(
            'button-counter-participant-default',
            buttonClassName,
          )}
          onClick={() => onClick?.handlePeopleChange(people + 1)}
        >
          <PlusIcon
            className={classNames(
              'icon-button-counter-participant-default',
              buttonTextClassName,
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default ParticipantCounter;
