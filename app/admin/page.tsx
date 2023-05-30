'use client';
import { UserArea } from '@ui/admin/user-area';
import { Divider } from '@ui/login';
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
  else
    return (
      <div className='mt-2 flex w-full max-w-2xl flex-col items-center md:mx-auto'>
        <UserArea />
        <Divider label={'Create Meme Below'} />
      </div>
    );
};

export default Page;
