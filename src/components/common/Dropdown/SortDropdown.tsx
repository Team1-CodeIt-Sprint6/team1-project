import ArrowIcon from 'public/assets/icons/icon_arrow.svg';
import React, { useState } from 'react';

type SortDropDownProps = {
  label: string;
  options: string[];
  onSelect: (option: string) => void;
  className?: string;
};

function SortDropDown({ label, options, onSelect }: SortDropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(label);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="btn-outline inline-flex items-center justify-between"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption}
          <ArrowIcon className="h-[7.33px] w-[12.87px]" />
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-[90px] origin-top-right rounded-[6px] border border-kv-primary-blue-light bg-white shadow-lg pc:w-[127px] tablet:w-[120px]">
          <div className="">
            {options.map((option, index) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className={`block h-[41px] w-full text-left font-kv-medium text-kv-gray-4b kv-text-md align-center hover:bg-kv-gray-100 active:bg-kv-gray-200 pc:h-[53px] pc:kv-text-2lg tablet:h-[53px] tablet:kv-text-2lg ${index === 0 ? 'rounded-t-[6px]' : ''} ${index === options.length - 1 ? 'rounded-b-[6px]' : ''} ${index > 0 ? 'border-t' : ''} border-kv-primary-blue-light`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SortDropDown;
