import { ReceivingProfileData } from '@ui/shared/firebase-utils';
import { UserCard } from '@ui/shared/user-card';
import { SnapshotOptions } from 'firebase/firestore';
import { LoadingCard } from './loading-card';

export interface UserDocument {
  id: string;
  data: (options?: SnapshotOptions | undefined) => ReceivingProfileData;
}
interface Props {
  isLoading: boolean;
  usersQueryResults: UserDocument[] | null;
}
export const SignedOutDir = ({ usersQueryResults, isLoading }: Props) => {
  if (isLoading)
    return (
      <>
        <LoadingCard />
        <LoadingCard className='opacity-75' />
        <LoadingCard className='opacity-30' />
      </>
    );
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
