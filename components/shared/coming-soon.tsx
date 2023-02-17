import Image from 'next/image';
import { Logo } from './imgs';

interface Props {
  page: string;
}

function ComingSoon({ page }: Props) {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center bg-blue-600'>
      <Image
        height={300}
        width={350}
        src={Logo}
        alt='Logo'
        className='h-auto w-auto'
      />
      <div className='text-xl font-extrabold text-white'>
        {page} Page Coming soon...
      </div>
    </div>
  );
}

export default ComingSoon;
