/* eslint-disable @next/next/no-img-element */
'use client';
import { Button, PageWrapper } from '@ui/login';
import { getThumbnail } from '@ui/shared/api-meme';
import { useEffect } from 'react';
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <PageWrapper>
      <div className='flex h-full w-full flex-col items-center justify-center gap-2'>
        <div className='w-24 overflow-hidden rounded-full'>
          <img
            src={getThumbnail('Forever-Alone')}
            alt='Forever Alone'
            className='scale-[2]'
          />
        </div>
        <h2 className=''>
          Sorry, but you have lost connection with the database.
        </h2>
        <Button onClick={() => reset()}>Try again</Button>
      </div>
    </PageWrapper>
  );
}
