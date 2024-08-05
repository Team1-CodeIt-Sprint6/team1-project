import classNames from 'classnames';
import React from 'react';

import { getFormattedAmount } from '@/lib/utils/getFormattedAmount';

interface PriceDisplayProps {
  price: number;
  containerClassName?: string;
  priceClassName?: string;
  unitClassName?: string;
}

export default function PriceDisplay({
  price,
  containerClassName = '',
  priceClassName = '',
  unitClassName = '',
}: PriceDisplayProps) {
  const formattedPrice = getFormattedAmount(price);

  return (
    <div
      className={classNames(
        'container-display-price-default',
        containerClassName,
      )}
    >
      <span
        className={classNames('price-display-price-default', priceClassName)}
      >
        {formattedPrice}
      </span>
      <span className={classNames('unit-display-price-default', unitClassName)}>
        / 인
      </span>
    </div>
  );
}
