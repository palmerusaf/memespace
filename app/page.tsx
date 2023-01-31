'use client';
import { auth } from '@ui/shared/firebase-utils';
import { useRouter } from 'next/navigation';

interface Props {}

const Page = ({}: Props) => {
  const router = useRouter();
  if (auth.currentUser) {
    router.replace('/profile');
  } else {
    router.replace('/login');
  }
};

export default Page;
