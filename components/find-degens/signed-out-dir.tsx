import { ReceivingProfileData } from '@ui/shared/firebase-utils';
import { SnapshotOptions } from 'firebase/firestore';

interface Props {
  isLoading: boolean;
  usersQueryResult:
    | {
        id: string;
        data(options?: SnapshotOptions | undefined): ReceivingProfileData;
      }[];
  null;
}
export const SignedOutDir = ({ usersQueryResult, isLoading }: Props) => {
  return <div>yo</div>;
};
