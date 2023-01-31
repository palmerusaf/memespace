'use client';
import { auth } from '@ui/shared/firebase-utils';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  if (!auth.currentUser) return router.replace('/login');
  const { uid } = auth.currentUser;
  router.replace(`/profile/${uid}`);
};

export default Page;
