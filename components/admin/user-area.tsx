import {
  ReceivingProfileData,
  useDelProfileMutation,
  useUserCollectionQuery,
} from '@ui/shared/firebase-utils';
import { MutantButton } from '@ui/shared/mutant-button';
import { useProfileModal } from '@ui/shared/profile-modal';
import { UserCard } from '@ui/shared/user-card';
import { LoadingCard } from '@ui/shared/user-load-cards/loading-card';

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
      <div className='w-full px-2'>
        {userColQuery.data?.map((user) => {
          return (
            <UserCard
              uid={user.id}
              key={user.id}
              button={<ButtonArea uid={user.id} data={user.data()} />}
            />
          );
        })}
      </div>
    );
};

function ButtonArea({
  uid,
  data,
}: {
  uid: string;
  data: ReceivingProfileData | null;
}) {
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
