'use client';
import { Button, Divider, Input, PageWrapper } from '@ui/login';
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithRedirect,
} from 'firebase/auth';
import { useLoggedIn, auth, db } from '@ui/shared/firebase-utils';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import React, { use, useRef } from 'react';

async function getUserName() {
  if (!auth.currentUser) return null;
  const res = await getDoc(doc(db, 'users', auth.currentUser.uid));
  if (!res.exists()) return null;
  return res.data().userName;
}
const Page = () => {
  const { loggedIn } = useLoggedIn();
  if (!loggedIn) return <SignInForm />;

  const userName = use(getUserName());
  if (!userName) return <SetUserNameForm />;

  return <PostSignInOptions userName={userName} />;
};

export default Page;

function SignInForm() {
  return (
    <PageWrapper>
      <div className='flex flex-col w-full justify-center items-center gap-2'>
        <Divider label='Sign In Below' />
        <Button
          onClick={() => signInWithRedirect(auth, new GoogleAuthProvider())}
          className='bg-red-700 mt-4'
        >
          Continue with Google
        </Button>
        <Button
          onClick={() => signInWithRedirect(auth, new FacebookAuthProvider())}
          className='bg-blue-600'
        >
          Continue with Facebook
        </Button>
      </div>
    </PageWrapper>
  );
}

export function SetUserNameForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const setUserNameInDB = (userName: string) => {
    if (!auth.currentUser) return;
    setDoc(doc(db, 'users', auth.currentUser?.uid), {
      userName,
      createdDate: serverTimestamp(),
    });
  };
  return (
    <PageWrapper>
      <Divider label='Set Your User Name' />
      <form
        onSubmit={(e) => e.preventDefault()}
        className='flex flex-col gap-6 mt-4'
      >
        <Input ref={inputRef} label='User Name' />
        <Button
          onClick={() => {
            if (!inputRef || !inputRef.current) return;
            setUserNameInDB(inputRef.current.value);
          }}
          className='bg-blue-600'
        >
          Continue
        </Button>
      </form>
    </PageWrapper>
  );
}

function PostSignInOptions({ userName }: { userName: string }) {
  return (
    <PageWrapper>
      <div>signed In as {userName}</div>
    </PageWrapper>
  );
}
