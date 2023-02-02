'use client';
import { auth } from '@ui/shared/firebase-utils';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface Props {}

const Page = ({}: Props) => {
  const router = useRouter();
  useEffect(() => {
    if (auth.currentUser) {
      router.replace('/profile');
    } else {
      router.replace('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
};

export default Page;
