import { ChangeEventHandler, forwardRef } from 'react';

interface Props {
  label: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
const input = (
  { label, defaultValue, onChange }: Props,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const notEmpty =
    'absolute shadow-lg translate-y-2/3 bg-gray-300 rounded-2xl scale-75 border border-1 border-white left-1/2 -translate-x-1/2';
  const empty =
    'peer-placeholder-shown:translate-y-0 peer-placeholder-shown:translate-x-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:border-none peer-placeholder-shown:left-11 duration-300 peer-placeholder-shown:shadow-none';
  const focused =
    'peer-focus-visible:translate-y-full peer-focus-visible:scale-75 peer-focus-visible:left-1/2 peer-focus-visible:-translate-x-1/2 peer-focus-visible:shadow-lg';
  return (
    <div className='relative h-10 w-full shrink-0 rounded-2xl border-2 border-white bg-gray-300 shadow-xl'>
      <input
        autoComplete='off'
        id={label}
        onChange={onChange}
        required
        className='peer absolute h-full w-full bg-transparent px-2 text-center focus-visible:outline-none'
        defaultValue={defaultValue}
        ref={ref}
        type='text'
        placeholder=' '
      />
      <span className='absolute z-10 ml-3 flex h-full items-center opacity-0 duration-300 peer-placeholder-shown:opacity-100 peer-focus-within:opacity-0'>
        <span>Enter</span>
      </span>
      <label
        htmlFor={label}
        className={`flex h-full items-center px-3 ${notEmpty} ${empty} ${focused}`}
      >
        <span>{label}</span>
      </label>
    </div>
  );
};

export const Input = forwardRef(input);

export * from './hooks';
