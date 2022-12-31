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
      <div className='group flex justify-center gap-1 relative w-fit px-3 py-1 select-none font-semibold text-center bg-gray-300 border-white border-2 rounded-full shadow-xl'>
        <LeftArrow />
        {selectedOption?.replace(/-/g, ' ') || placeholder}
        <RightArrow />
        <select
          className='absolute w-full h-full left-0 top-0 cursor-pointer opacity-0 rounded-full'
          name={placeholder}
          id={placeholder}
          onChange={({ target }) => {
            setSelectedOption(target.value);
          }}
          value={selectedOption || ''}
        >
          <option value=''>{placeholder}</option>
          {optionValues.map((value) => (
            <Option key={value} value={value} />
          ))}
        </select>
      </div>
    </>
  );
};

export default DropDown;

function LeftArrow({}) {
  return <div className='rotate-90 group-hover:rotate-0 duration-500'>▼</div>;
}

function RightArrow({}) {
  return <div className='-rotate-90 group-hover:rotate-0 duration-500'>▼</div>;
}

function Option({ value }: { value: string }) {
  return (
    <option key={value} value={value}>
      {value.replace(/-/g, ' ')}
    </option>
  );
}
