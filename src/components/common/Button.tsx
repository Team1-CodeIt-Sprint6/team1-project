import React from 'react';

function Button({
  type,
  children,
  onClick,
  disabled,
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const buttonStyle =
    'rounded-md bg-kv-gray-600 py-[11px] font-kv-bold text-white kv-text-lg';
  const valid = disabled ? 'bg-kv-gray-600' : 'bg-kv-primary-blue';

  return (
    <button
      type={type}
      className={`${buttonStyle} ${valid}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
