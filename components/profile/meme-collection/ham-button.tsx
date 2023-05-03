interface Props {
  toggleMenu: () => void;
}

export function HamButton({ toggleMenu }: Props) {
  return (
    <button
      className='z-50 flex w-4 flex-col items-center justify-center gap-1 rounded-full p-2 md:hover:bg-white md:hover:bg-opacity-50'
      onClick={toggleMenu}
    >
      <span className='border border-b-white shadow-sm shadow-black md:border-2'></span>
      <span className='border border-b-white shadow-sm shadow-black md:border-2'></span>
      <span className='border border-b-white shadow-sm shadow-black md:border-2'></span>
    </button>
  );
}
