import ComingSoon from '@ui/shared/coming-soon';
import { db } from '@ui/shared/firebase-utils';
import { doc, getDoc } from 'firebase/firestore';

async function getUserData(userId: string) {
  return getDoc(doc(db, 'users', userId));
}

interface Props {
  params: { uid: string };
}

const Page = ({ params: { uid } }: Props) => {
  return <ComingSoon page={`Profile ${uid}`} />;
};

export default Page;
