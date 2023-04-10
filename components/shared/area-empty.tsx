import { ReactNode } from 'react';
import { SadBoi } from './imgs';

/* eslint-disable @next/next/no-img-element */
export function AreaEmpty({ button }: { button?: ReactNode }) {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center gap-2'>
      <img src={SadBoi.src} alt='sad meme' className='w-14 md:w-20' />
      <p className='text-xl font-semibold'>It&apos;s Empty</p>
      {button ?? button}
    </div>
  );
}
