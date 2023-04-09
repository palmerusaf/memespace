import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className='flex h-full flex-col items-center'>
      <h1 className='p-3 text-center text-xl font-bold underline md:text-2xl'>
        User Directory
      </h1>
      <div className='mb-2 flex h-full w-[38rem] max-w-full flex-col gap-2 overflow-scroll px-4 md:gap-4 md:px-0'>
        {children}
      </div>
    </div>
  );
};

export default Layout;
