import {
  ReceivingProfileData,
  useAddFollowingMutation,
} from '@ui/shared/firebase-utils';
import { MutantButton } from '@ui/shared/mutant-button';
import { UserCard } from '@ui/shared/user-card';
import { UserDir, UserDocument } from './signed-out-dir';

interface Props extends UserDir {
  following: UserDocument[];
  pUseAddFollowingMutation: typeof useAddFollowingMutation;
}

export const SignedInDir = ({
  pUseAddFollowingMutation,
  following,
  userDocs,
}: Props) => {
  return (
    <>
      {userDocs?.map((doc: UserDocument) => {
        const button = following.some((item) => item.id === doc.id) ? (
          <Following />
        ) : (
          <FollowButton data={doc.data()} id={doc.id} />
        );
        return (
          <UserCard
            uid={doc.id}
            key={doc.id}
            userName={doc.data().userName}
            button={button}
            profileMeme={doc.data().profileMeme}
          />
        );
      })}
    </>
  );

  function FollowButton({
    data,
    id,
  }: {
    data: ReceivingProfileData;
    id: string;
  }) {
    const mutation = pUseAddFollowingMutation();
    return (
      <MutantButton
        className='rounded-full bg-blue-500 px-2 font-semibold text-white shadow-2xl duration-500 hover:-translate-y-1 hover:scale-105 md:px-3 md:text-xl'
        mutation={mutation}
        onClick={() => mutation.mutate({ data, followUid: id })}
        loadMsg={'Adding...'}
        errorMsg={'Try Again'}
        successMsg={'Added'}
        staticMsg={'Follow'}
      />
    );
  }
};

function Following() {
  return <span className='px-2 md:px-3 md:text-lg'>Following</span>;
}
