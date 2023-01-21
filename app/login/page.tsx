'use client';
import { Divider, Input, PageWrapper } from '@ui/login';
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
  return <SetUserNameForm />;
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
        <button
          onClick={() => signInWithRedirect(auth, new GoogleAuthProvider())}
          className='bg-red-700 py-1 rounded-2xl border-2 w-full border-black text-white hover:text-white hover:-translate-y-1 duration-300 hover:shadow-gray-900 shadow-md font-bold text-xl mt-4'
        >
          Continue with Google
        </button>
        <button
          onClick={() => signInWithRedirect(auth, new FacebookAuthProvider())}
          className='bg-blue-600 py-1 rounded-2xl border-2 w-full border-black text-white hover:text-white hover:-translate-y-1 duration-300 hover:shadow-gray-900 shadow-md font-bold text-xl'
        >
          Continue with Facebook
        </button>
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
        className='flex flex-col gap-3'
      >
        <Input ref={inputRef} label='User Name' />
        <button
          onClick={() => {
            if (!inputRef || !inputRef.current) return;
            setUserNameInDB(inputRef.current.value);
          }}
          className='bg-blue-600 py-1 rounded-2xl border-2 w-full border-black text-white hover:text-white hover:-translate-y-1 duration-300 hover:shadow-gray-900 shadow-md font-bold text-xl'
        >
          Continue
        </button>
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
