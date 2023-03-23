/* eslint-disable @next/next/no-img-element */
'use client';

import { Button } from '@ui/login';
import { getMeme } from '@ui/shared/api-meme-utils';
import {
  ReceivingMemeData,
  useIsOwner,
  useMemeCollectionQuery,
} from '@ui/shared/firebase-utils';
import { MadBro, SadBoi } from '@ui/shared/imgs';
import ImageWithLoadState from '@ui/shared/next-image';
import assert from 'assert';
import { QueryDocumentSnapshot } from 'firebase/firestore';
import React, { useState } from 'react';

interface Props {
  params: { uid: string };
  pUseMemeCollectionQuery?: typeof useMemeCollectionQuery;
  pUseIsOwner?: typeof useIsOwner;
}

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className='mb-2 h-full w-full overflow-scroll rounded-lg'>
    {children}
  </div>
);

interface ModalProps {
  data: QueryDocumentSnapshot<ReceivingMemeData>[] | null | undefined;
}
const useMemeViewModal = ({ data }: ModalProps) => {
  const [memeIndex, setMemeIndex] = useState<null | number>(null);
  const closeModal = () => setMemeIndex(null);
  const openModal = (index: number) => setMemeIndex(index);

  const MemeViewModal = () => {
    if (selectedIndex === null) return <></>;
    assert(data);
    const { topText, meme, bottomText } = data[selectedIndex].data();
    return (
      <div
        onClick={() => openModal(null)}
        className='absolute flex h-screen w-screen justify-center bg-black animate-in fade-in'
      >
        <img
          src={getMeme({ topText, bottomText, meme })}
          alt={meme.replace(/-/g, ' ')}
          className='h-full'
        />
      </div>
    );
  };

  return { openModal };
};

const Page = ({
  params: { uid },
  pUseMemeCollectionQuery = useMemeCollectionQuery,
  pUseIsOwner = useIsOwner,
}: Props) => {
  const query = pUseMemeCollectionQuery(uid);
  const { isOwner } = pUseIsOwner(uid);
  const [selectedIndex, openModal] = useState<null | number>(null);

  const MemeCollection = () => {
    if (query.isLoading) return <Loading />;
    if (query.data)
      return <Collection data={query.data} openModal={openModal} />;
    else return <EmptyCollection isOwner={isOwner}></EmptyCollection>;
  };

  const MemeViewModal = () => {
    if (selectedIndex === null) return <></>;
    assert(query.data);
    const { topText, meme, bottomText } = query.data[selectedIndex].data();
    return (
      <div
        onClick={() => openModal(null)}
        className='absolute flex h-screen w-screen justify-center bg-black animate-in fade-in'
      >
        <img
          src={getMeme({ topText, bottomText, meme })}
          alt={meme.replace(/-/g, ' ')}
          className='h-full'
        />
      </div>
    );
  };

  return (
    <PageWrapper>
      <MemeViewModal />
      <MemeCollection />
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

function Collection({
  data,
  openModal: setSelectedIndex,
}: {
  data: QueryDocumentSnapshot<ReceivingMemeData>[];
  openModal: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  return (
    <ul className='grid grid-cols-[repeat(auto-fill,_minmax(10rem,_1fr))]'>
      {data.map(({ id, data }, index) => {
        const { bottomText, topText, meme } = data();
        return (
          <li
            key={id}
            onClick={() => {
              setSelectedIndex(index);
            }}
            className='m-1 h-40 overflow-hidden rounded'
          >
            <ImageWithLoadState
              width={500}
              height={500}
              className='object-cover'
              src={getMeme({ meme, topText, bottomText })}
              alt={meme.replace(/-/g, ' ')}
            />
          </li>
        );
      })}
    </ul>
  );
}

function Loading() {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center gap-4'>
      <img
        src={MadBro.src}
        alt='mad bro spinner'
        className='w-20 animate-spin'
      />
      <div className='animate-pulse text-lg font-bold'>
        Loading Collection...
      </div>
    </div>
  );
}
