import { useState } from 'react';

interface Props {
  controlDrawer: JSX.Element;
}

export function HamButton({ controlDrawer }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <>
      {isOpen && controlDrawer}
      <button
        className='z-50 flex w-4 flex-col items-center justify-center gap-1 rounded-full p-2 md:hover:bg-white md:hover:bg-opacity-50'
        onClick={toggleOpen}
      >
        <span className='border border-b-white md:border-2'></span>
        <span className='border border-b-white md:border-2'></span>
        <span className='border border-b-white md:border-2'></span>
      </button>
    </>
  );
}
