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
  usersQueryResults: UserDocument[] | null;
}
export const SignedOutDir = ({ usersQueryResults, isLoading }: UserDir) => {
  if (isLoading) return <UserLoadCards />;
  else
    return (
      <>
        {usersQueryResults?.map((res) => (
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
