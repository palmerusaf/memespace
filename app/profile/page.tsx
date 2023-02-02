'use client';
import { auth } from '@ui/shared/firebase-utils';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Page = () => {
  const router = useRouter();
  useEffect(() => {
    if (!auth.currentUser) {
      router.replace('/login');
    } else {
      const { uid } = auth.currentUser;
      router.replace(`/profile/${uid}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
};

export default Page;
