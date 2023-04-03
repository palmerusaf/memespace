'use client';
import { auth } from '@ui/shared/firebase-utils';
import { LoadingPage } from '@ui/shared/loading-page';
import assert from 'assert';
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { LoggedInContext } from './loggedin-context';

const Page = () => {
  const router = useRouter();
  const loggedIn = useContext(LoggedInContext);
  useEffect(() => {
    if (loggedIn) {
      assert(auth.currentUser);
      router.push(`/profile/${auth.currentUser.uid}`);
    } else {
      router.push('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);
  if (loggedIn)
    return <LoadingPage loadingMsg='Redirecting to your profile.' />;
  else return <LoadingPage loadingMsg='Checking login status.' />;
};

export default Page;
