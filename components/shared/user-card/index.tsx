/* eslint-disable @next/next/no-img-element */
import { getThumbnail } from '@ui/shared/api-meme-utils';
import { SmallLogo } from '@ui/shared/imgs';
import ImageWithLoadState from '@ui/shared/next-image';

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
}

export function UserCard({ uid, userName, profileMeme }: Props) {
  return (
    <div className='relative flex items-center justify-between gap-3 rounded-md bg-white py-4 px-3 shadow-md md:justify-start md:py-6 md:px-16'>
      <div className='w-20 md:w-36'>
        <AvatarPic profileMeme={profileMeme} />
      </div>
      <div className='flex flex-col gap-1 text-center md:flex-1 md:gap-9'>
        <div className='text-xl font-semibold md:text-2xl'>
          {userName !== '' ? userName : 'No Username'}
        </div>
      </div>
    </div>
  );
}
