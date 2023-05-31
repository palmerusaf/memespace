'use client';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  optionValues: Map<string, string>;
  placeholder: string;
  selectedValue: string;
  setSelectedValue: Dispatch<SetStateAction<string>>;
}

const Select = ({
  optionValues,
  placeholder,
  selectedValue = '',
  setSelectedValue,
}: Props) => {
  return (
    <>
      <div className='group relative flex w-fit max-w-full select-none justify-center gap-1 rounded-full border-2 border-white bg-gray-300 py-1 px-3 text-center font-semibold shadow-xl'>
        <LeftArrow />
        <span className='overflow-hidden text-ellipsis whitespace-nowrap'>
          {optionValues.get(selectedValue) || placeholder}
        </span>
        <RightArrow />
        <select
          className='absolute top-0 left-0 h-full w-full cursor-pointer rounded-full opacity-0'
          name={placeholder}
          id={placeholder}
          onChange={({ target }) => {
            setSelectedValue(target.value);
          }}
          value={selectedValue}
        >
          <option value=''>{placeholder}</option>
          {Array.from(optionValues.entries()).map((entry) => {
            const [value, label] = entry;
            return <Option key={value} value={value} label={label} />;
          })}
        </select>
      </div>
    </>
  );
};

export default Select;

function LeftArrow({}) {
  return <div className='rotate-90 duration-500 group-hover:rotate-0'>▼</div>;
}

function RightArrow({}) {
  return <div className='-rotate-90 duration-500 group-hover:rotate-0'>▼</div>;
}

function Option({ value, label }: { value: string; label: string }) {
  return (
    <option key={value} value={value}>
      {label}
    </option>
  );
}
