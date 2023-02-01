'use client';
import { auth } from '@ui/shared/firebase-utils';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  if (!auth.currentUser) {
    router.replace('/login');
  } else {
    const { uid } = auth.currentUser;
    router.replace(`/profile/${uid}`);
  }
  return <></>;
};

export default Page;
