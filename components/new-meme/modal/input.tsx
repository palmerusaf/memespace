import { ForwardedRef, forwardRef } from 'react';

interface Props {
  label: string;
  value?: string;
}
const Input = (
  { label, value }: Props,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  return (
    <div className='relative w-full h-8 shrink-0 bg-gray-300 border-white border-2 rounded-full shadow-xl'>
      <input
        id={label}
        required
        className='px-2 absolute text-center h-full peer w-full bg-transparent focus-visible:outline-none'
        value={value}
        ref={ref}
        type='text'
        placeholder=' '
      />
      <span className='opacity-0 peer-placeholder-shown:opacity-100 peer-focus-within:opacity-0 ml-2 absolute z-10 duration-300'>
        Enter
      </span>
      <label
        htmlFor={label}
        className={
          'px-2 ' +
          'absolute shadow-lg translate-y-3/4 bg-gray-300 rounded-full outline outline-1  outline-white ' +
          'peer-placeholder-shown:translate-y-0 peer-placeholder-shown:outline-none peer-placeholder-shown:left-11 duration-300 peer-placeholder-shown:shadow-none' +
          ' peer-focus-visible:translate-y-full peer-focus-visible:left-0 peer-focus-visible:shadow-lg'
        }
      >
        {label}
      </label>
    </div>
  );
};

export default forwardRef(Input);
