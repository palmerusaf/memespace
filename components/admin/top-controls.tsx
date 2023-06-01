'use client';
import { ReceivingProfileData } from '@ui/shared/firebase-utils';
import { Select } from '@ui/shared/select';
import { QueryDocumentSnapshot } from 'firebase/firestore';
import { Dispatch, SetStateAction } from 'react';

interface TopControlsProps {
  data: QueryDocumentSnapshot<ReceivingProfileData>[];
  setSelectedUser: Dispatch<SetStateAction<string>>;
  selectedUser: string;
  setUserFetchInput: Dispatch<SetStateAction<string>>;
}
export function TopControls({
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
