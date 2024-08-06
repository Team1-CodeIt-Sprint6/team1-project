import { MouseEventHandler, useEffect, useRef, useState } from 'react';

// 값 선택 드롭다운 관리를 위한 훅
const useDropdown = <T>(initValue: T) => {
  const [value, setValue] = useState(initValue);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // 드롭다운 외부 클릭 시 닫기
  const handleClickOutside = (e: MouseEvent) => {
    if (!dropdownRef.current?.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  // 드롭다운 버튼 클릭 시 열기/닫기
  const handleClickButton: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  // 드롭다운 메뉴 클릭 시 닫기
  const handleClickMenu = (value: T) => {
    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
      e.stopPropagation();
      setValue(value);
      setIsOpen(false);
    };
    return handleClick;
  };

  // 문서 전체에 클릭시 드롭다운 닫는 이벤트 핸들러 등록
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return {
    value,
    isOpen,
    dropdownRef,
    onClickButton: handleClickButton,
    onClickMenu: handleClickMenu,
  };
};

export default useDropdown;
