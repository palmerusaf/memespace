'use client';
import { Button, Divider, Input, PageWrapper } from '@ui/login';
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithRedirect,
  AuthProvider,
} from 'firebase/auth';
import { useLoggedIn, auth, db } from '@ui/shared/firebase-utils';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import React, { use, useRef, useState } from 'react';
import { LoadingPage } from '@ui/shared/loading-page';
import { signOut } from 'firebase/auth';

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
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authWith = (provider: AuthProvider) => {
    setIsAuthenticating(true);
    signInWithRedirect(auth, provider).then(() => {
      setIsAuthenticating(false);
    });
  };

  if (isAuthenticating)
    return <LoadingPage loadingMsg='Authenticating with database.' />;

  return (
    <PageWrapper>
      <div className='flex flex-col w-full justify-center items-center gap-2'>
        <Divider label='Login Below' />
        <Button
          onClick={() => authWith(new GoogleAuthProvider())}
          className='bg-red-700 mt-4'
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

function SetUserNameForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [userName, setUserName] = useState<null | string>(null);
  const setUserNameInDB = (pUserName: string) => {
    if (!auth.currentUser) return;
    setIsSending(true);
    setDoc(doc(db, 'users', auth.currentUser?.uid), {
      userName: pUserName,
      createdDate: serverTimestamp(),
    }).then(() => {
      setIsSending(false);
      setUserName(pUserName);
    });
  };

  if (isSending) return <LoadingPage loadingMsg='Sending User Name Data' />;
  if (userName) return <PostSignInOptions userName={userName} />;
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
