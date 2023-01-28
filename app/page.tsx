'use client';
import { auth } from '@ui/shared/firebase-utils';
import { redirect } from 'next/navigation';

interface Props {}

const Page = ({}: Props) => {
  if (auth.currentUser) {
    redirect('/profile');
  } else {
    redirect('/login');
  }
};

export default Page;
