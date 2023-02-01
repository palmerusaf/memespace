'use client';
import { Avatar } from '@ui/profile/avatar';
import { useProfileQuery } from '@ui/shared/firebase-utils';
import { LoadingPage } from '@ui/shared/loading-page';

interface Props {
  params: { uid: string };
}

const Page = ({ params: { uid } }: Props) => {
  const query = useProfileQuery(uid);
  if (query.isLoading)
    return <LoadingPage loadingMsg='Gathering Profile Data' />;
  if (query.isError) throw new Error('Failed to gather profile data!');
  else
    return (
      <div className=''>
        <Avatar data={query.data} />
      </div>
    );
};

export default Page;
