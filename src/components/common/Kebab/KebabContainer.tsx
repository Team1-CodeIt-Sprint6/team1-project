import { useEffect, useRef, useState } from 'react';

import KebabIcon from '@/assets/icons/icon_kebab.svg';
import { KebabContainerProps } from '@/types/kebabTypes';

export default function KebabContainer({ children }: KebabContainerProps) {
  const [isKebabOpen, setIsKebabOpen] = useState<boolean>(false);
  const kebabRef = useRef<HTMLDivElement>(null);

  const handleKebabClick = (e: React.MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    setIsKebabOpen(!isKebabOpen);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (kebabRef.current && !kebabRef.current.contains(e.target as Node)) {
      setIsKebabOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={kebabRef}>
      <KebabIcon onClick={handleKebabClick} className="cursor-pointer" />
      {isKebabOpen && (
        <div className="absolute right-0 flex w-40 flex-col overflow-hidden rounded border border-kv-gray-300 bg-white shadow-lg">
          {children}
        </div>
      )}
    </div>
  );
}
