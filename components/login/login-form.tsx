import { auth } from '@ui/shared/firebase-utils';
import {
  AuthProvider,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithRedirect,
} from 'firebase/auth';
import { Button, Divider, PageWrapper } from '.';

export function LoginForm() {
  const authWith = (provider: AuthProvider) => {
    signInWithRedirect(auth, provider);
  };

  return (
    <PageWrapper>
      <div className='flex w-full flex-col items-center justify-center gap-2'>
        <Divider label='Login Below' />
        <Button
          onClick={() => authWith(new GoogleAuthProvider())}
          className='mt-4 bg-red-700 text-white'
        >
          Continue with Google
        </Button>
        <Button
          className='bg-blue-600 text-white'
          onClick={() => authWith(new FacebookAuthProvider())}
        >
          Continue with Facebook
        </Button>
      </div>
    </PageWrapper>
  );
}
