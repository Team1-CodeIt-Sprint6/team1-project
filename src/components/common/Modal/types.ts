import { ReactNode } from 'react';

export interface ModalProps {
  message?: string;
  onClose: () => void;
}

export interface ModalContainerProps {
  isOpen: boolean;
  onClose: () => void;
  children: () => ReactNode;
}

export interface CustomModalProps extends ModalProps {
  isOpen: boolean;
  type: 'alert' | 'confirm';
}

export type ModalType = 'alert' | 'confirm';
