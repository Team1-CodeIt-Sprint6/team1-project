import React from 'react';

function Label({
  htmlFor,
  children,
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label htmlFor={htmlFor} className="font-kv-medium kv-text-lg">
      {children}
    </label>
  );
}

export default Label;
