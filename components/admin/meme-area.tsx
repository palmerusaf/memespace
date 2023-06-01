/* eslint-disable @next/next/no-img-element */
'use client';
import { MenuContent } from '@ui/profile/meme-collection/menu-content';
import { OpenSvg } from '@ui/profile/meme-collection/open-svg';
import { ViewMemeModal } from '@ui/profile/meme-collection/view-meme-modal';
import { getMeme } from '@ui/shared/api-meme-utils';
import { AreaEmpty } from '@ui/shared/area-empty';
import {
  ReceivingMemeData,
  ReceivingProfileData,
  useMemeCollectionQuery,
  useUserCollectionQuery,
} from '@ui/shared/firebase-utils';
import { MadBro } from '@ui/shared/imgs';
import ImageWithLoadState from '@ui/shared/next-image';
import { LoadingCard } from '@ui/shared/user-load-cards/loading-card';
import { QueryDocumentSnapshot } from 'firebase/firestore';
import { useState } from 'react';
import { FoldWrapper } from './fold-wrapper';
import { TopControls } from './top-controls';

export const MemeArea = () => {
  const userColQuery = useUserCollectionQuery();
  return (
    <FoldWrapper label='Create/Edit Memes'>
      {(userColQuery.isLoading && <LoadingCard />) || (
        <MemeEditor data={userColQuery.data} />
      )}
    </FoldWrapper>
  );
};

function MemeEditor({
  data,
}: {
  data: QueryDocumentSnapshot<ReceivingProfileData>[] | null | undefined;
}) {
  const [selUser, setSelUser] = useState('');
  const [userFetchInput, setUserFetchInput] = useState('');
  if (!data)
    return (
      <div className='item-center flex flex-col justify-center gap-2'>
        <h2 className='text-center font-mono text-lg font-semibold underline'>
          No Users
        </h2>
        <AreaEmpty />
      </div>
    );

  return (
    <div className='pb-3'>
      <TopControls
        data={data}
        setSelectedUser={setSelUser}
        selectedUser={selUser}
        setUserFetchInput={setUserFetchInput}
      />
      <MemeCollection uid={userFetchInput} />
    </div>
  );
}

function MemeCollection({ uid }: { uid: string }) {
  const query = useMemeCollectionQuery(uid);
  if (query.isLoading) return <Loading />;
  if (query.data) return <Collection uid={uid} data={query.data} />;
  else return <AreaEmpty />;

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
}

function Collection({
  data,
  isOwner = true,
  uid,
}: {
  data: QueryDocumentSnapshot<ReceivingMemeData>[];
  isOwner?: boolean;
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
