'use client';
import { Divider } from '@ui/login';
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithRedirect,
} from 'firebase/auth';
import { useLoggedIn, auth, db } from '@ui/shared/firebase-utils';
import { doc, getDoc } from 'firebase/firestore';
import { use } from 'react';

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
    <div className='flex flex-col items-center w-full h-full'>
      <div className='flex flex-col justify-center h-full w-full px-2 max-w-xl'>
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
      </div>
    </div>
  );
}
function SetUserNameForm() {
  return <div>set username</div>;
}
function PostSignInOptions({ userName }: { userName: string }) {
  return <div>signed In as {userName}</div>;
}
