/* eslint-disable @next/next/no-img-element */
import { ReceivingProfileData } from '@ui/shared/firebase-utils';
import { SnapshotOptions } from 'firebase/firestore';
import { LoadingCard } from './loading-card';

interface UserDocument {
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
  else return <div>yo</div>;
};
