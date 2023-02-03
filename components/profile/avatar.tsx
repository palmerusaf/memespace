/* eslint-disable @next/next/no-img-element */
import { getThumbnail } from '@ui/shared/api-meme-utils';
import ImageWithLoadState from '@ui/shared/image';
import SmallLogo from '@ui/shared/small-logo.png';
import assert from 'assert';

export function Avatar({
  data,
}: {
  data: { userName: string; meme: string } | null;
}) {
  const PlaceHolderMeme = () => {
    return (
      <div className='h-20 w-20 rounded-full bg-blue-600 shadow-xl'>
        <img src={SmallLogo.src} alt='Placeholder Meme' className='h-20 w-20' />
      </div>
    );
  };
  const Meme = () => {
    assert(data);
    return (
      <ImageWithLoadState
        src={getThumbnail(data.meme)}
        alt='Placeholder Meme'
        width={80}
        height={80}
        className='h-20 w-20 rounded-full object-cover shadow-xl'
      />
    );
  };
  if (!data)
    return (
      <span className='flex flex-col items-center justify-center gap-2'>
        <PlaceHolderMeme />
        <span className='font-semibold'>No Username</span>
      </span>
    );
  else
    return (
      <span className='flex flex-col items-center justify-center gap-2'>
        {data.meme === '' ? <PlaceHolderMeme /> : <Meme />}
        <span className='font-semibold'>{data.userName}</span>
      </span>
    );
}
