/* eslint-disable @next/next/no-img-element */
import { useIsOwner, useProfileQuery } from '@ui/shared/firebase-utils';
import { MadBro } from '@ui/shared/imgs';
import assert from 'assert';
import { AvatarMeme } from './avatar-meme';
import { useModalHook } from './profile-modal';

interface Props {
  uid: string;
  pUseProfileQuery?: typeof useProfileQuery;
  pUseIsOwner?: typeof useIsOwner;
}

export function AvatarArea({
  uid,
  pUseProfileQuery = useProfileQuery,
  pUseIsOwner = useIsOwner,
}: Props) {
  const query = pUseProfileQuery(uid);
  const { isOwner } = pUseIsOwner(uid);
  const { openModal, ProfileModal } = useModalHook();

  if (query.isLoading) {
    return (
      <div className='relative flex items-center justify-between gap-3 rounded-md bg-white py-4 px-3 shadow-xl md:justify-start md:px-16 md:pt-6 md:pb-11'>
        <div className='w-16 md:w-36'>
          <img src={MadBro.src} alt='loading spiner' className='animate-spin' />
        </div>
        <div className='flex flex-col gap-1 text-center md:flex-1 md:gap-9'>
          <div className='animate-pulse text-xl font-semibold md:text-2xl'>
            Loading...
          </div>
        </div>
      </div>
    );
  } else if (query.isError) {
    throw new Error('Trouble connecting to database.');
  }

  assert(query.data !== undefined);
  return (
    <>
      <ProfileModal data={query.data} />
      <div className='relative flex items-center justify-between gap-3 rounded-md bg-white py-4 px-3 shadow-xl md:justify-start md:px-16 md:pt-6 md:pb-11'>
        <div className='w-20 md:w-36'>
          <AvatarMeme data={query.data} />
        </div>
        <div className='flex flex-col gap-1 text-center md:flex-1 md:gap-9'>
          <div className='text-xl font-semibold md:text-2xl'>
            {query.data && query.data.userName !== ''
              ? query.data.userName
              : 'No Username'}
          </div>
          <div>
            Degen Since:{' '}
            {query.data?.createdDate?.toDate().toLocaleDateString() ??
              'Unknown'}
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
