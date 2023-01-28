/* eslint-disable @next/next/no-img-element */
'use client';
import { Button, PageWrapper } from '@ui/login';
import SadError from '@ui/login/sad-error.png';
export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className='h-full bg-gray-300'>
      <PageWrapper>
        <div className='flex h-full w-full flex-col items-center justify-center gap-2'>
          <img
            src={SadError.src}
            alt='Forever Alone'
            className='w-24 animate-bounce'
          />
          <h2 className='text-center font-semibold md:text-xl'>
            Sorry, but...
          </h2>
          <h2 className='text-center font-semibold md:text-xl'>
            You have lost connection with the database.
          </h2>
          <Button className='bg-blue-600 text-white' onClick={() => reset()}>
            Try again
          </Button>
        </div>
      </PageWrapper>
    </div>
  );
}
