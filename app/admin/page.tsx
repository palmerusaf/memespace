'use client';
import { useLoggedIn } from '@ui/shared/firebase-utils';
import Link from 'next/link';

const Page = () => {
  const { loggedIn } = useLoggedIn();
  if (!loggedIn)
    return (
      <div className='flex h-full w-full items-center justify-center'>
        <Link
          className='rounded-full border-2 border-black bg-blue-600 py-0.5 px-2 text-center font-medium text-white shadow-md shadow-stone-400 duration-300 hover:-translate-y-0.5 hover:text-white'
          href={'login'}
        >
          Login to Continue
        </Link>
      </div>
    );
};

export default Page;
