import Image from 'next/image';
import LogoPic from '@ui/shared/logo.png';

interface Props {
  page: string;
}

function ComingSoon({ page }: Props) {
  return (
    <div className='flex flex-col bg-blue-800 justify-center items-center w-full h-full'>
      <Image
        height={300}
        width={350}
        src={LogoPic}
        alt='Logo'
        className='w-auto h-auto'
      />
      <div className='text-white font-extrabold text-xl'>
        {page} Page Coming soon...
      </div>
    </div>
  );
}

export default ComingSoon;
