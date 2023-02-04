/* eslint-disable @next/next/no-img-element */
'use client';
import { AvatarMeme } from '@ui/profile/avatar-meme';
import {
  RecievingProfileData,
  useProfileQuery,
} from '@ui/shared/firebase-utils';
import { LoadingPage } from '@ui/shared/loading-page';

interface Props {
  params: { uid: string };
  pUseProfileQuery?: typeof useProfileQuery;
}

const Page = ({
  params: { uid },
  pUseProfileQuery = useProfileQuery,
}: Props) => {
  const query = pUseProfileQuery(uid);

  if (query.isLoading) return <LoadingPage loadingMsg='Gathering User Data.' />;
  if (query.isError) throw new Error('Trouble connecting to database.');
  else
    return (
      <div className='flex h-full w-full flex-col items-center'>
        <div className='flex h-full w-full max-w-3xl flex-col px-2 md:pt-2'>
          {<AvatarArea data={query.data} />}
        </div>
      </div>
    );
};

export default Page;

function AvatarArea({ data }: { data: RecievingProfileData | null }) {
  return (
    <div className='flex items-center justify-between gap-3 rounded-md bg-white py-4 px-3 shadow-xl md:justify-start md:px-16 md:pt-6 md:pb-11'>
      <div className='w-20 md:w-36'>
        <AvatarMeme data={data} />
      </div>
      <div className='flex flex-col gap-1 text-center md:flex-1 md:gap-9'>
        <div className='text-xl font-semibold md:text-2xl'>
          {data && data.userName !== '' ? data.userName : 'No Username'}
        </div>
        <div>
          Degen Since:{' '}
          {data ? data.createdDate.toDate().toLocaleDateString() : 'Unknown'}
        </div>
      </div>
    </div>
  );
}
