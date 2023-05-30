import { ReceivingProfileData } from '@ui/shared/firebase-utils';
import { UserCard } from '@ui/shared/user-card';
import { SnapshotOptions } from 'firebase/firestore';

export interface UserDocument {
  id: string;
  data: (options?: SnapshotOptions | undefined) => ReceivingProfileData;
}
export interface UserDir {
  userDocs: UserDocument[];
}
export const SignedOutDir = ({ userDocs }: UserDir) => {
  return (
    <>
      {userDocs?.map((res) => (
        <UserCard uid={res.id} key={res.id} />
      ))}
    </>
  );
};
