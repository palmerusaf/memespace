import { useAddFollowingMutation } from '@ui/shared/firebase-utils';
import { MutantButton } from '@ui/shared/mutant-button';
import { UserCard } from '@ui/shared/user-card';
import { SnapshotOptions } from 'firebase/firestore';
import { UserDir, UserDocument } from './signed-out-dir';

export interface FollowingDocument {
  id: string;
  data: (options?: SnapshotOptions | undefined) => { followingUid: string };
}

interface Props extends UserDir {
  following: FollowingDocument[];
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
          <FollowButton id={doc.id} />
        );
        return <UserCard uid={doc.id} key={doc.id} button={button} />;
      })}
    </>
  );

  function FollowButton({ id }: { id: string }) {
    const mutation = pUseAddFollowingMutation();
    return (
      <MutantButton
        className='rounded-full bg-blue-500 px-2 font-semibold text-white shadow-2xl duration-500 hover:-translate-y-1 hover:scale-105 md:px-3 md:text-xl'
        mutation={mutation}
        onClick={() => mutation.mutate({ followingUid: id })}
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
