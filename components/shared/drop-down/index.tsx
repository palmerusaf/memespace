'use client';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  optionValues: Readonly<string[]>;
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
      <div className='group relative flex w-fit select-none justify-center gap-1 rounded-full border-2 border-white bg-gray-300 px-3 py-1 text-center font-semibold shadow-xl'>
        <LeftArrow />
        {selectedOption?.replace(/-/g, ' ') || placeholder}
        <RightArrow />
        <select
          className='absolute left-0 top-0 h-full w-full cursor-pointer rounded-full opacity-0'
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
  return <div className='rotate-90 duration-500 group-hover:rotate-0'>▼</div>;
}

function RightArrow({}) {
  return <div className='-rotate-90 duration-500 group-hover:rotate-0'>▼</div>;
}

function Option({ value }: { value: string }) {
  return (
    <option key={value} value={value}>
      {value.replace(/-/g, ' ')}
    </option>
  );
}
