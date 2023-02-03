/* eslint-disable @next/next/no-img-element */
import { getThumbnail } from '@ui/shared/api-meme-utils';
import ImageWithLoadState from '@ui/shared/image';
import SmallLogo from '@ui/shared/small-logo.png';

export function ProfileMeme({ data }: { data: { meme: string } | null }) {
  if (!data || data.meme === '') {
    return (
      <div className='h-20 w-20 rounded-full bg-blue-600 shadow-xl'>
        <img src={SmallLogo.src} alt='Placeholder Meme' className='h-20 w-20' />
      </div>
    );
  } else {
    return (
      <ImageWithLoadState
        src={getThumbnail(data.meme)}
        alt='Placeholder Meme'
        width={80}
        height={80}
        className='h-20 w-20 rounded-full object-cover shadow-xl'
      />
    );
  }
}
