/* eslint-disable @next/next/no-img-element */
'use client';

import { Button } from '@ui/login';
import { useIsOwner, useMemeCollectionQuery } from '@ui/shared/firebase-utils';
import { SadBoi } from '@ui/shared/imgs';
import React from 'react';

interface Props {
  uid: string;
  pUseMemeCollectionQuery?: typeof useMemeCollectionQuery;
  pUseIsOwner?: typeof useIsOwner;
}

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className='mb-2 h-full w-full overflow-scroll rounded-lg'>
    {children}
  </div>
);

const Page = ({
  uid,
  pUseMemeCollectionQuery = useMemeCollectionQuery,
  pUseIsOwner = useIsOwner,
}: Props) => {
  const query = pUseMemeCollectionQuery(uid);
  const { isOwner } = pUseIsOwner(uid);
  if (query.isLoading) return <PageWrapper>loading</PageWrapper>;
  if (query.data) return <PageWrapper>{`${query.data}`}</PageWrapper>;
  else
    return (
      <PageWrapper>
        <div className='flex h-full w-full flex-col items-center justify-center gap-2'>
          <img src={SadBoi.src} alt='sad meme' className='w-14' />
          <p className='text-xl font-semibold'>
            {isOwner ? 'Your collection is empty' : 'Collection is empty'}
          </p>
          {isOwner && (
            <Button className='bg-blue-600 md:w-fit md:px-3' href='find-memes'>
              Find Memes
            </Button>
          )}
        </div>
      </PageWrapper>
    );
};

export default Page;
