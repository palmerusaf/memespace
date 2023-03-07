/* eslint-disable @next/next/no-img-element */
'use client';

import { Button } from '@ui/login';
import { getMeme } from '@ui/shared/api-meme-utils';
import {
  ReceivingMemeData,
  useIsOwner,
  useMemeCollectionQuery,
} from '@ui/shared/firebase-utils';
import { SadBoi } from '@ui/shared/imgs';
import ImageWithLoadState from '@ui/shared/next-image';
import { QueryDocumentSnapshot } from 'firebase/firestore';
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
  if (query.data)
    return (
      <PageWrapper>
        <MemeCollection data={query.data} />
      </PageWrapper>
    );
  else
    return (
      <PageWrapper>
        <EmptyCollection isOwner={isOwner}></EmptyCollection>
      </PageWrapper>
    );
};

export default Page;

function EmptyCollection({ isOwner }: { isOwner: boolean }) {
  return (
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
  );
}

function MemeCollection({
  data,
}: {
  data: QueryDocumentSnapshot<ReceivingMemeData>[];
}) {
  return (
    <ul className='grid grid-cols-[repeat(auto-fill,_minmax(10rem,_1fr))]'>
      {data.map(({ id, data }) => {
        const { bottomText, topText, meme } = data();
        return (
          <li key={id} className='flex items-center justify-center bg-black'>
            <ImageWithLoadState
              width={500}
              height={500}
              className='max-h-full w-auto'
              src={getMeme({ meme, topText, bottomText })}
              alt={meme.replace(/-/g, ' ')}
            />
          </li>
        );
      })}
    </ul>
  );
}
