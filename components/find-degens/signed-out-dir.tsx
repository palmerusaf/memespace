import { ReceivingProfileData } from '@ui/shared/firebase-utils';
import { UserCard } from '@ui/shared/user-card';
import { UserLoadCards } from '@ui/shared/user-load-cards';
import { SnapshotOptions } from 'firebase/firestore';

export interface UserDocument {
  id: string;
  data: (options?: SnapshotOptions | undefined) => ReceivingProfileData;
}
export interface UserDir {
  isLoading: boolean;
  userDocs: UserDocument[] | null;
}
export const SignedOutDir = ({ userDocs, isLoading }: UserDir) => {
  if (isLoading) return <UserLoadCards />;
  else
    return (
      <>
        {userDocs?.map((res) => (
          <UserCard
            uid={res.id}
            userName={res.data().userName}
            key={res.id}
            profileMeme={res.data().profileMeme}
          />
        ))}
      </>
    );
};
