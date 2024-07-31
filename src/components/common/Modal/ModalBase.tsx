import React, { ReactNode, useEffect, useState } from 'react';

interface ModalBaseProps {
  children: (props: {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
  }) => ReactNode;
}

export default function ModalBase({ children }: ModalBaseProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    closeModal();
  };

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

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-kv-black opacity-70"
          onClick={handleBackdropClick}
        />
      )}
      {children({ isOpen, openModal, closeModal })}
    </>
  );
}
