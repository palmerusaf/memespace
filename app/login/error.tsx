/* eslint-disable @next/next/no-img-element */
'use client';
import { Button, PageWrapper } from '@ui/login';
import { getThumbnail } from '@ui/shared/api-meme';
import SadError from '@ui/login/sad-error.png';
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <PageWrapper>
      <div className='flex h-full w-full flex-col items-center justify-center gap-2 bg-blue-600'>
        <img src={SadError.src} alt='Forever Alone' className='w-24' />
        <h2 className='text-lg font-semibold'>
          Sorry, but you have lost connection with the database.
        </h2>
        <Button className='bg-white text-black' onClick={() => reset()}>
          Try again
        </Button>
      </div>
    </PageWrapper>
  );
}
