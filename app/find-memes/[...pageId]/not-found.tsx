import { Logo } from '@ui/shared/imgs';
import Image from 'next/image';
import Link from 'next/link';

interface Props {}

const NotFound = ({}: Props) => {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center bg-blue-800'>
      <Image src={Logo} alt='Logo' className='mx-2' />
      <div className='text-xl font-extrabold text-white'>Page Not Found</div>
      <Link
        className='mt-2 rounded-full border-2 border-white bg-blue-600 px-3 py-1 text-center text-white shadow-md duration-300 hover:-translate-y-1 hover:shadow-slate-500'
        href='/find-memes/1'
      >
        Go To Beginning
      </Link>
    </div>
  );
};

export default NotFound;
