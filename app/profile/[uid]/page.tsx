/* eslint-disable @next/next/no-img-element */
'use client';

import { MenuContent } from '@ui/profile/meme-collection/menu-content';
import { ViewMemeModal } from '@ui/profile/meme-collection/view-meme-modal';
import { getMeme } from '@ui/shared/api-meme-utils';
import {
  ReceivingMemeData,
  useIsOwner,
  useMemeCollectionQuery,
} from '@ui/shared/firebase-utils';
import { MadBro, SadBoi } from '@ui/shared/imgs';
import ImageWithLoadState from '@ui/shared/next-image';
import { QueryDocumentSnapshot } from 'firebase/firestore';
import Link from 'next/link';
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

const Page = ({
  params: { uid },
  pUseMemeCollectionQuery = useMemeCollectionQuery,
  pUseIsOwner = useIsOwner,
}: Props) => {
  const query = pUseMemeCollectionQuery(uid);
  const { isOwner } = pUseIsOwner(uid);

  const MemeCollection = () => {
    if (query.isLoading) return <Loading />;
    if (query.data) return <Collection isOwner={isOwner} data={query.data} />;
    else return <EmptyCollection isOwner={isOwner}></EmptyCollection>;
  };

  return (
    <PageWrapper>
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
        <Link
          className='rounded-full border-2 border-black bg-blue-600 py-0.5 px-3 text-center font-medium text-white shadow-md shadow-stone-400 duration-300 hover:-translate-y-0.5 hover:text-white'
          href='find-memes/1'
        >
          Find Memes
        </Link>
      )}
    </div>
  );
}

function Collection({
  data,
  isOwner,
}: {
  data: QueryDocumentSnapshot<ReceivingMemeData>[];
  isOwner: boolean;
}) {
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null);
  const menuContent =
    selectedIndex !== null ? (
      <MenuContent
        createdDate={data[selectedIndex].data().createdDate}
        isOwner={isOwner}
        memeUid={data[selectedIndex].id}
      />
    ) : null;

  return (
    <>
      <ViewMemeModal
        memeData={data.map((item) => item.data())}
        setIndex={setSelectedIndex}
        index={selectedIndex}
        menuContent={menuContent}
      />
      <ul className='grid grid-cols-[repeat(auto-fill,_minmax(10rem,_1fr))]'>
        {data.map((doc, index) => {
          const { bottomText, topText, meme } = doc.data();
          return (
            <li
              key={doc.id}
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
    </>
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
