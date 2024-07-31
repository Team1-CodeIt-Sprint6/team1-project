import CheckIcon from 'public/assets/icons/icon_check.svg';

import { ModalProps } from '@/components/common/Modal/types';
import { BUTTON_TEXTS, DEFAULT_MESSAGES } from '@/constants/modalConstants';

export default function ConfirmModal({ message, onClose }: ModalProps) {
  const buttonBaseClass =
    'absolute bottom-[28px] h-[38px] w-[80px] rounded-[8px] text-kv-md font-kv-medium';

  return (
    <div className="pointer-events-auto relative flex h-[184px] w-[298px] flex-col rounded-lg bg-white shadow-lg">
      <CheckIcon className="absolute mx-auto mt-[24px] h-6 w-full" />
      <div className="flex flex-grow items-center justify-center px-6">
        <p className="mb-[28px] max-h-[48px] overflow-hidden text-center font-kv-medium">
          {message || DEFAULT_MESSAGES.CONFIRM}
        </p>
      </div>
      <button
        onClick={onClose}
        className={`${buttonBaseClass} left-[65px] border-2 border-kv-primary-blue bg-white text-kv-lg text-kv-primary-blue hover:border-kv-blue hover:bg-kv-gray-200`}
      >
        {BUTTON_TEXTS.NO}
      </button>
      <button
        onClick={onClose}
        className={`${buttonBaseClass} right-[65px] bg-kv-primary-blue font-kv-bold text-white hover:bg-kv-blue`}
      >
        {BUTTON_TEXTS.YES}
      </button>
    </div>
  );
}
