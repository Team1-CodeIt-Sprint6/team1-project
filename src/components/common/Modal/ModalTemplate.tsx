import React, { ReactNode, useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ModalTemplateProps extends ModalProps {
  children: () => ReactNode;
}

export default function ModalTemplate({
  children,
  isOpen,
  onClose,
}: ModalTemplateProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-kv-black opacity-70"
        onClick={handleBackdropClick}
      />
      {children()}
    </>
  );
}
