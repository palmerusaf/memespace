'use client';
import { Dispatch, SetStateAction, useRef } from 'react';

interface Props {
  optionValues: string[];
  placeholder: string;
  selectedOption: string | null;
  setSelectedOption: Dispatch<SetStateAction<string | null>>;
}

const DropDown = ({
  optionValues,
  placeholder,
  selectedOption,
  setSelectedOption,
}: Props) => {
  return (
    <>
      <div className='relative py-1 select-none font-semibold max-w-sm text-center w-full shrink-0 bg-gray-300 border-white border-2 rounded-full shadow-xl'>
        {selectedOption?.replace(/-/g, ' ') || placeholder}
        <select
          className='absolute w-full h-full left-0 top-0 cursor-pointer opacity-0 rounded-full'
          name={placeholder}
          id={placeholder}
          onChange={(e) => {
            setSelectedOption(e.target.value);
          }}
          value={selectedOption || ''}
        >
          <option value=''>{placeholder}</option>
          {optionValues.map((value) => (
            <option key={value} value={value}>
              {value.replace(/-/g, ' ')}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default DropDown;
