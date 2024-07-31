import React from 'react';

import ModalBase from './ModalBase';

interface AlertModalProps {
  content?: string;
  onOpen: () => void;
}

export default function AlertModal({
  content = '내용을 입력해주세요.',
}: AlertModalProps) {
  return (
    <ModalBase>
      {({ isOpen, openModal, closeModal }) => {
        // 외부에서 전달받은 onOpen 함수를 실행할 때 openModal을 실행하면 외부에서 오픈기능을 쓰는게 된다.
        return (
          <>
            <button
              className="fixed inset-0 m-auto h-[40px] w-[200px] border-2"
              onClick={openModal}
            >
              Open Modal
            </button>
            {isOpen && (
              <div className="pointer-events-none fixed inset-0 flex items-center justify-center">
                <div className="pointer-events-auto relative flex h-[220px] w-[327px] flex-col rounded-lg bg-white shadow-lg pc:h-[250px] pc:w-[540px] tablet:h-[250px] tablet:w-[540px]">
                  <div className="flex flex-grow items-center justify-center px-6">
                    <p className="mb-[28px] max-h-[96px] overflow-hidden text-center font-kv-medium pc:text-kv-2lg tablet:text-kv-2lg">
                      {content}
                    </p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="absolute inset-x-0 bottom-[28px] m-auto h-[42px] w-[138px] rounded-[8px] bg-kv-primary-blue text-kv-md font-kv-medium text-white hover:bg-kv-blue pc:right-[28px] pc:mr-0 pc:text-kv-lg tablet:right-[28px] tablet:mr-0 tablet:text-kv-lg"
                  >
                    확인
                  </button>
                </div>
              </div>
            )}
          </>
        );
      }}
    </ModalBase>
  );
}
