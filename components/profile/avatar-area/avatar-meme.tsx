/* eslint-disable @next/next/no-img-element */
import { getThumbnail } from '@ui/shared/api-meme-utils';
import { SmallLogo } from '@ui/shared/imgs';
import ImageWithLoadState from '@ui/shared/next-image';

export function AvatarMeme({ data }: { data: { profileMeme: string } | null }) {
  if (!data || data.profileMeme === '') {
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
        src={getThumbnail(data.profileMeme)}
        alt='Placeholder Meme'
        width={150}
        height={150}
        className='aspect-square w-full rounded-full object-cover shadow-xl'
      />
    );
  }
}
