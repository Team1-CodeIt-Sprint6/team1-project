import React from 'react';

import AlertModal from '@/components/common/Modal/CustomModals/AlertModal';
import ConfirmModal from '@/components/common/Modal/CustomModals/ConfirmModal';
import { ModalSelectorProps } from '@/components/common/Modal/types';

import ModalContainer from './ModalContainer';

export default function ModalSelector({
  isOpen,
  onClose,
  message,
  type,
}: ModalSelectorProps) {
  // 조건부 랜더링을 위해 삼항연산자를 사용하지 않은 이유
  // 모달이 계속 추가될 경우 import하고 객체에 추가하면 확장이 편리함
  const modalComponents = {
    alert: AlertModal,
    confirm: ConfirmModal,
  } as const;

  const ModalContent = modalComponents[type];

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose}>
      {() => (
        <div className="pointer-events-none fixed inset-0 flex items-center justify-center">
          <ModalContent onClose={onClose} message={message} />
        </div>
      )}
    </ModalContainer>
  );
}
