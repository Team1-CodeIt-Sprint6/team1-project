import React, { forwardRef } from 'react';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  validationCheck?: boolean;
}

export default forwardRef(function Input(
  { validationCheck, ...rest }: IInputProps,
  ref: React.LegacyRef<HTMLInputElement>,
) {
  return (
    <input
      autoComplete="off"
      className="border-2 border-kv-gray-600"
      ref={ref}
      {...rest}
    />
  );
});
