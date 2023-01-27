import Image from 'next/image';
import LogoPic from '@ui/shared/logo.png';

interface Props {
  page: string;
}

function ComingSoon({ page }: Props) {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center bg-blue-800'>
      <Image
        height={300}
        width={350}
        src={LogoPic}
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
