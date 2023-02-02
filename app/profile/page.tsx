'use client';
import { auth, useLoggedIn } from '@ui/shared/firebase-utils';
import { LoadingPage } from '@ui/shared/loading-page';
import assert from 'assert';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Page = () => {
  const router = useRouter();
  const { loggedIn } = useLoggedIn();
  useEffect(() => {
    if (loggedIn) {
      assert(auth.currentUser);
      router.replace(`/profile/${auth.currentUser.uid}`);
    } else {
      router.replace('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);
  if (loggedIn)
    return <LoadingPage loadingMsg='Redirecting to your profile.' />;
  else return <LoadingPage loadingMsg='Checking login status.' />;
};

export default Page;
