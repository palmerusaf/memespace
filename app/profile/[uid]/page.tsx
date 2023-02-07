/* eslint-disable @next/next/no-img-element */
'use client';
import { AvatarMeme } from '@ui/profile/avatar-meme';
import { useModalHook } from '@ui/profile/profile-modal';
import {
  RecievingProfileData,
  useIsOwner,
  useProfileQuery,
} from '@ui/shared/firebase-utils';
import { LoadingPage } from '@ui/shared/loading-page';

interface Props {
  params: { uid: string };
  pUseProfileQuery?: typeof useProfileQuery;
  pUseIsOwner?: typeof useIsOwner;
}

const Page = ({
  params: { uid },
  pUseProfileQuery = useProfileQuery,
  pUseIsOwner = useIsOwner,
}: Props) => {
  const query = pUseProfileQuery(uid);
  const { isOwner } = pUseIsOwner(uid);

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

  function AvatarArea({ data }: { data: RecievingProfileData | null }) {
    const { openModal, ProfileModal } = useModalHook();
    return (
      <>
        <ProfileModal data={data} />
        <div className='relative flex items-center justify-between gap-3 rounded-md bg-white py-4 px-3 shadow-xl md:justify-start md:px-16 md:pt-6 md:pb-11'>
          <div className='w-20 md:w-36'>
            <AvatarMeme data={data} />
          </div>
          <div className='flex flex-col gap-1 text-center md:flex-1 md:gap-9'>
            <div className='text-xl font-semibold md:text-2xl'>
              {data && data.userName !== '' ? data.userName : 'No Username'}
            </div>
            <div>
              Degen Since:{' '}
              {data
                ? data.createdDate.toDate().toLocaleDateString()
                : 'Unknown'}
            </div>
          </div>
          {isOwner && (
            <button
              className='absolute -bottom-2 -right-1 rounded-full bg-blue-500 px-2 font-semibold text-white shadow-2xl duration-500 hover:-translate-y-1 hover:scale-110 md:bottom-2 md:right-2 md:px-3 md:text-xl'
              onClick={openModal}
            >
              Edit
            </button>
          )}
        </div>
      </>
    );
  }
};

export default Page;
