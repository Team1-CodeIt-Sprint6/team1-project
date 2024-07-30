import React from 'react';

function Label({
  htmlFor,
  children,
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-base leading-[1.7] text-kv-gray-400"
    >
      {children}
    </label>
  );
}

export default Label;
