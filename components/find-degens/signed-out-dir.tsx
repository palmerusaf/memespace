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
      <div className='flex h-full w-full justify-center'>
        <div className='flex max-w-md grow flex-col gap-2'>
          <LoadingCard />
          <LoadingCard className='opacity-75' />
          <LoadingCard className='opacity-30' />
        </div>
      </div>
    );
  else return <div>yo</div>;
};
