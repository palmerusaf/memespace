export const Divider = ({ label }: { label: string }) => {
  return (
    <h2 className='grid grid-cols-[auto,auto,_1fr] w-full items-center'>
      <span className='h-0 border-b border-black mx-2 w-4'></span>
      <span className='font-bold'>{label}</span>
      <span className='h-0 border-b border-black mx-2'></span>
    </h2>
  );
};
