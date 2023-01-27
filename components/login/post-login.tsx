import { auth } from '@ui/shared/firebase-utils';
import { signOut } from 'firebase/auth';
import { Button, Divider, PageWrapper } from '.';

export function PostLoginOptions({ userName }: { userName: string }) {
  return (
    <PageWrapper>
      <div className={'flex flex-col gap-2'}>
        <Divider label={`Logged In as ${userName}`} />
        <Button
          className='bg-blue-600 text-white'
          onClick={() => {
            signOut(auth);
          }}
        >
          Logout
        </Button>
        <Button className='bg-blue-600 text-white' href='/profile'>
          Go To Profile
        </Button>
      </div>
    </PageWrapper>
  );
}
