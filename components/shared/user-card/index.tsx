/* eslint-disable @next/next/no-img-element */
import { getThumbnail } from '@ui/shared/api-meme-utils';
import { SmallLogo } from '@ui/shared/imgs';
import ImageWithLoadState from '@ui/shared/next-image';
import Link from 'next/link';
import { ReactNode } from 'react';

export function AvatarPic({ profileMeme }: { profileMeme: string }) {
  if (profileMeme === '') {
    return (
      <div className='aspect-square w-full rounded-full bg-blue-600 shadow-xl'>
        <img
          src={SmallLogo.src}
          alt='Placeholder Meme'
          className='aspect-square w-full'
        />
      </div>
    );
  } else {
    return (
      <ImageWithLoadState
        src={getThumbnail(profileMeme)}
        alt='Placeholder Meme'
        width={150}
        height={150}
        className='aspect-square w-full rounded-full object-cover shadow-xl'
      />
    );
  }
}

interface Props {
  uid: string;
  userName: string;
  profileMeme: string;
  button?: ReactNode;
}

export function UserCard({ uid, userName, profileMeme, button }: Props) {
  return (
    <div className='relative flex items-center justify-between gap-3 rounded-md bg-white p-3 shadow-md md:justify-start md:p-6'>
      <Link href={`/profile/${uid}`} className='w-14 md:w-20'>
        <AvatarPic profileMeme={profileMeme} />
      </Link>
      <div className='flex w-full flex-col gap-1 text-center md:flex-1 md:gap-3'>
        <Link
          className='text-lg font-semibold underline md:text-2xl'
          href={`/profile/${uid}`}
        >
          {userName || 'No Username'}
        </Link>
        {button ?? button}
      </div>
    </div>
  );
}
