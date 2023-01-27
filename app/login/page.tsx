'use client';
import { Button, Divider, PageWrapper, SetUserNameForm } from '@ui/login';
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithRedirect,
  AuthProvider,
} from 'firebase/auth';
import { useLoggedIn, auth, db } from '@ui/shared/firebase-utils';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';

async function getUserName() {
  if (!auth.currentUser) return null;
  const res = await getDoc(doc(db, 'users', auth.currentUser.uid));
  if (!res.exists()) return null;
  return res.data().userName;
}
const Page = () => {
  const { loggedIn } = useLoggedIn();
  const [userName, setUserName] = useState<null | string>(null);
  const [errorStatus, setErrorStatus] = useState<null | Error>(null);

  if (!loggedIn) return <LoginForm />;

  getUserName().then(setUserName).catch(setErrorStatus);
  if (errorStatus) return errorStatus;
  if (!userName) return <SetUserNameForm setUserName={setUserName} />;
  else return <PostLoginOptions userName={userName} />;
};

export default Page;

function LoginForm() {
  const authWith = (provider: AuthProvider) => {
    signInWithRedirect(auth, provider);
  };

  return (
    <PageWrapper>
      <div className='flex w-full flex-col items-center justify-center gap-2'>
        <Divider label='Login Below' />
        <Button
          onClick={() => authWith(new GoogleAuthProvider())}
          className='mt-4 bg-red-700'
        >
          Continue with Google
        </Button>
        <Button onClick={() => authWith(new FacebookAuthProvider())}>
          Continue with Facebook
        </Button>
      </div>
    </PageWrapper>
  );
}

function PostLoginOptions({ userName }: { userName: string }) {
  return (
    <PageWrapper>
      <div className='flex flex-col gap-2'>
        <Divider label={`Logged In as ${userName}`} />
        <Button
          onClick={() => {
            signOut(auth);
          }}
        >
          Logout
        </Button>
        <Button href='/profile'>Go To Profile</Button>
      </div>
    </PageWrapper>
  );
}
