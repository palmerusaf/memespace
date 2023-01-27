export const Divider = ({ label }: { label: string }) => {
  return (
    <h2 className='grid w-full grid-cols-[auto,auto,_1fr] items-center'>
      <span className='mx-2 h-0 w-4 border-b border-black'></span>
      <span className='font-bold'>{label}</span>
      <span className='mx-2 h-0 border-b border-black'></span>
    </h2>
  );
};
