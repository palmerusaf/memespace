'use client';
import { auth, useMyProfileQuery } from '@ui/shared/firebase-utils';
import { LoadingPage } from '@ui/shared/loading-page';
import { signOut } from 'firebase/auth';
import { Button, Divider, PageWrapper, SetUserNameForm } from '.';

export const AfterLogin = () => {
  const query = useMyProfileQuery();

  if (query.isLoading)
    return <LoadingPage loadingMsg='Gathering Profile Data' />;
  if (query.isError)
    throw new Error('Failed to connect to DB while fetching profile data!');
  if (!query.data) return <SetUserNameForm />;
  else return <OptionsAfterUserNameSet userName={query.data.userName} />;
};

export function OptionsAfterUserNameSet({ userName }: { userName: string }) {
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
        <Button
          className='bg-blue-600 text-white'
          href={`/profile/${auth.currentUser?.uid}`}
        >
          Go To Profile
        </Button>
      </div>
    </PageWrapper>
  );
}
