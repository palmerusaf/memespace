/* eslint-disable @next/next/no-img-element */
import { getThumbnail } from '@ui/shared/api-meme-utils';
import ImageWithLoadState from '@ui/shared/image';
import SmallLogo from '@ui/shared/small-logo.png';

export function ProfileMeme({ data }: { data: { meme: string } | null }) {
  if (!data || data.meme === '') {
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
        src={getThumbnail(data.meme)}
        alt='Placeholder Meme'
        width={150}
        height={150}
        className='aspect-square w-full rounded-full object-cover shadow-xl'
      />
    );
  }
}
