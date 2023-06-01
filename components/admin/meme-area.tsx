'use client';
import { AreaEmpty } from '@ui/shared/area-empty';
import {
  ReceivingProfileData,
  useMemeCollectionQuery,
  useUserCollectionQuery,
} from '@ui/shared/firebase-utils';
import { MadBro } from '@ui/shared/imgs';
import { Select } from '@ui/shared/select';
import { LoadingCard } from '@ui/shared/user-load-cards/loading-card';
import { QueryDocumentSnapshot } from 'firebase/firestore';
import { Dispatch, SetStateAction, useState } from 'react';
import { FoldWrapper } from './fold-wrapper';

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
    </div>
  );
}

interface TopControlsProps {
  data: QueryDocumentSnapshot<ReceivingProfileData>[];
  setSelectedUser: Dispatch<SetStateAction<string>>;
  selectedUser: string;
  setUserFetchInput: Dispatch<SetStateAction<string>>;
}

function TopControls({
  setUserFetchInput,
  setSelectedUser,
  selectedUser,
  data,
}: TopControlsProps) {
  const selectorValues = new Map();
  data.forEach((item) => selectorValues.set(item.id, item.data().userName));
  return (
    <span className='grid grid-cols-2 justify-center gap-2'>
      <div className='flex w-full justify-center'>
        <Select
          optionValues={selectorValues}
          placeholder={'Select User'}
          selectedValue={selectedUser}
          setSelectedValue={setSelectedUser}
        />
      </div>
      <button
        onClick={() => setUserFetchInput(selectedUser)}
        className='rounded-full bg-blue-500 px-2 font-semibold text-white shadow-2xl duration-500 hover:-translate-y-1 hover:scale-105 md:px-3 md:text-xl'
      >
        Fetch Memes
      </button>
    </span>
  );
}

function MemeCollection({ uid }: { uid: string }) {
  const query = useMemeCollectionQuery(uid);
  if (query.isLoading) return <Loading />;
  if (query.data) return <Collection isOwner={isOwner} data={query.data} />;
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
