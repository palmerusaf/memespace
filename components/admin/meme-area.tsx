'use client';
import { AreaEmpty } from '@ui/shared/area-empty';
import {
  ReceivingProfileData,
  useUserCollectionQuery,
} from '@ui/shared/firebase-utils';
import { Select } from '@ui/shared/select';
import { LoadingCard } from '@ui/shared/user-load-cards/loading-card';
import { QueryDocumentSnapshot } from 'firebase/firestore';
import { useState } from 'react';
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
  if (!data)
    return (
      <div className='item-center flex flex-col justify-center gap-2'>
        <h2 className='text-center font-mono text-lg font-semibold underline'>
          No Users
        </h2>
        <AreaEmpty />
      </div>
    );
  const selectorValues = new Map();
  data.forEach((item) => selectorValues.set(item.id, item.data().userName));
  return (
    <div className='pb-3'>
      <span className='grid grid-cols-2 justify-center gap-2'>
        <Select
          optionValues={selectorValues}
          placeholder={'Select User'}
          selectedValue={selUser}
          setSelectedValue={setSelUser}
        />
        <button className='rounded-full bg-blue-500 px-2 font-semibold text-white shadow-2xl duration-500 hover:-translate-y-1 hover:scale-105 md:px-3 md:text-xl'>
          Fetch Memes
        </button>
      </span>
    </div>
  );
}
