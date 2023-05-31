import { AvatarPic } from '@ui/shared/avatar-pic';
import Input from '@ui/shared/edit-meme-modal/input';
import {
  ReceivingProfileData,
  useDelProfileMutation,
  useUserCollectionQuery,
} from '@ui/shared/firebase-utils';
import { MEME_MAP } from '@ui/shared/meme-list';
import { MutantButton } from '@ui/shared/mutant-button';
import { useProfileModal } from '@ui/shared/profile-modal';
import { Select } from '@ui/shared/select';
import { UserCard } from '@ui/shared/user-card';
import { LoadingCard } from '@ui/shared/user-load-cards/loading-card';
import { serverTimestamp } from 'firebase/firestore';
import { MutableRefObject, useRef, useState } from 'react';
import { FoldWrapper } from './fold-wrapper';
import { useCreateUserMutation } from './queries';

export const UserArea = () => {
  const userColQuery = useUserCollectionQuery();
  if (userColQuery.isLoading)
    return (
      <div className='w-full px-2'>
        <LoadingCard />
      </div>
    );
  else
    return (
      <>
        <FoldWrapper label='Edit Users'>
          {userColQuery.data?.map((user) => {
            return (
              <UserCard
                uid={user.id}
                key={user.id}
                button={<ButtonArea uid={user.id} data={user.data()} />}
              />
            );
          })}
        </FoldWrapper>
        <CreateUser />
      </>
    );
};

function CreateUser() {
  const uidRef: MutableRefObject<null | HTMLInputElement> = useRef(null);
  const userNameRef: MutableRefObject<null | HTMLInputElement> = useRef(null);
  const [selected, setSelected] = useState('');
  const mutation = useCreateUserMutation();
  return (
    <FoldWrapper label='Create New User'>
      <form
        action='return false'
        onSubmit={(e) => {
          e.preventDefault();
          if (!uidRef.current?.value) return;
          const uid = uidRef.current?.value;
          mutation.mutate({
            uid,
            data: {
              profileMeme: selected,
              userName: userNameRef.current?.value ?? '',
              createdDate: serverTimestamp(),
            },
          });
        }}
        className='flex gap-2 rounded p-4 shadow-lg'
      >
        <div className='flex w-20 flex-col gap-2 md:w-36'>
          <AvatarPic profileMeme={selected} />
          <Select
            optionValues={MEME_MAP}
            placeholder={'Meme Pic'}
            selectedValue={selected}
            setSelectedValue={setSelected}
          />
        </div>
        <div className='items-evenly flex flex-1 flex-col justify-around'>
          <Input ref={uidRef} label={'UID'} />
          <Input ref={userNameRef} label={'User Name'} />
          <MutantButton
            mutation={mutation}
            onClick={() => {}}
            loadMsg={'Adding...'}
            errorMsg={'Error'}
            successMsg={'Added'}
            staticMsg={'Add User'}
            className='col-span-full rounded-full bg-blue-500 px-2 font-semibold text-white shadow-2xl duration-500 hover:-translate-y-1 hover:scale-110 md:px-3 md:text-xl'
          />
        </div>
      </form>
    </FoldWrapper>
  );
}

interface ButtonAreaProps {
  uid: string;
  data: ReceivingProfileData | null;
}

function ButtonArea({ uid, data }: ButtonAreaProps) {
  const { openModal, ProfileModal } = useProfileModal(uid);
  return (
    <>
      <ProfileModal data={data} />
      <div className='grid grid-cols-2 gap-2'>
        <DeleteUser uid={uid} />
        <button
          className='rounded-full bg-blue-500 px-2 font-semibold text-white shadow-2xl duration-500 hover:-translate-y-1 hover:scale-110 md:px-3 md:text-xl'
          onClick={openModal}
        >
          Edit
        </button>
      </div>
    </>
  );

  function DeleteUser({ uid }: { uid: string }) {
    const mutation = useDelProfileMutation(uid);
    return (
      <MutantButton
        className='rounded-full bg-red-500 px-4 text-lg font-semibold text-white shadow-2xl duration-500 hover:-translate-y-1 hover:scale-105 md:text-xl'
        mutation={mutation}
        onClick={() => mutation.mutate()}
        loadMsg={'Removing User'}
        errorMsg={'Error'}
        successMsg={'Removed'}
        staticMsg={'Remove'}
      />
    );
  }
}
