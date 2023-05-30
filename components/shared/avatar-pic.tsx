/* eslint-disable @next/next/no-img-element */
import { getThumbnail } from './api-meme-utils';
import { SmallLogo } from './imgs';
import ImageWithLoadState from './next-image';

interface Props {
  profileMeme: string | null | undefined;
}

export function AvatarPic({ profileMeme }: Props) {
  profileMeme = profileMeme ?? '';
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
