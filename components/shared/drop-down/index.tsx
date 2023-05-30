'use client';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  optionValues: Readonly<string[]>;
  placeholder: string;
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
}

const DropDown = ({
  optionValues,
  placeholder,
  selectedOption = '',
  setSelectedOption,
}: Props) => {
  return (
    <>
      <div className='group relative flex w-fit max-w-full select-none justify-center gap-1 rounded-full border-2 border-white bg-gray-300 py-1 px-3 text-center font-semibold shadow-xl'>
        <LeftArrow />
        <span className='overflow-hidden text-ellipsis whitespace-nowrap'>
          {selectedOption?.replace(/-/g, ' ') || placeholder}
        </span>
        <RightArrow />
        <select
          className='absolute top-0 left-0 h-full w-full cursor-pointer rounded-full opacity-0'
          name={placeholder}
          id={placeholder}
          onChange={({ target }) => {
            setSelectedOption(target.value);
          }}
          value={selectedOption}
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
