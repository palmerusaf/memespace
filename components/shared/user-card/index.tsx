/* eslint-disable @next/next/no-img-element */
import { AvatarPic } from '@ui/shared/avatar-pic';
import Link from 'next/link';
import { ReactNode } from 'react';
import { useProfileQuery } from '../firebase-utils';
import { LoadingCard } from '../user-load-cards/loading-card';

interface Props {
  uid: string;
  button?: ReactNode;
  pUseProfileQuery?: typeof useProfileQuery;
}

export function UserCard({
  uid,
  button,
  pUseProfileQuery = useProfileQuery,
}: Props) {
  const query = pUseProfileQuery(uid);
  if (query.isLoading) return <LoadingCard />;
  return (
    <div className='relative m-2 flex items-center justify-between gap-3 rounded-md bg-white p-3 shadow-md md:justify-start md:p-6'>
      <Link href={`/profile/${uid}`} className='w-14 md:w-20'>
        <AvatarPic profileMeme={query.data?.profileMeme} />
      </Link>
      <div className='flex w-full flex-col gap-1 text-center md:flex-1 md:gap-3'>
        <Link
          className='text-lg font-semibold underline md:text-2xl'
          href={`/profile/${uid}`}
        >
          {query.data?.userName ?? 'No Username'}
        </Link>
        {button ?? button}
      </div>
    </div>
  );
}
