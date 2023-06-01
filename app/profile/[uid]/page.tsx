/* eslint-disable @next/next/no-img-element */
'use client';

import { MenuContent } from '@ui/profile/meme-collection/menu-content';
import { OpenSvg } from '@ui/profile/meme-collection/open-svg';
import { ViewMemeModal } from '@ui/profile/meme-collection/view-meme-modal';
import { getMeme } from '@ui/shared/api-meme-utils';
import { AreaEmpty } from '@ui/shared/area-empty';
import {
  ReceivingMemeData,
  useIsOwner,
  useMemeCollectionQuery,
} from '@ui/shared/firebase-utils';
import { MadBro } from '@ui/shared/imgs';
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
    if (query.data)
      return <Collection uid={uid} isOwner={isOwner} data={query.data} />;
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
  const findMemesLink = (
    <Link
      className='rounded-full border-2 border-black bg-blue-600 py-0.5 px-3 text-center font-medium text-white shadow-md shadow-stone-400 duration-300 hover:-translate-y-0.5 hover:text-white'
      href='find-memes/1'
    >
      Find Memes
    </Link>
  );

  return <AreaEmpty button={isOwner && findMemesLink} />;
}

function Collection({
  data,
  isOwner,
  uid,
}: {
  data: QueryDocumentSnapshot<ReceivingMemeData>[];
  isOwner: boolean;
  uid: string;
}) {
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null);
  const menuContent =
    selectedIndex !== null ? (
      <MenuContent
        uid={uid}
        memeData={data[selectedIndex].data()}
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
              className='relative m-1 h-40 cursor-pointer overflow-hidden rounded'
            >
              <div className='absolute right-1 bottom-1 z-0 flex'>
                <OpenSvg className='h-4 w-4 fill-white drop-shadow-[0_1px_1px_rgb(0_0_0_/_1)] md:h-6 md:w-6' />
              </div>
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
