import { useMemeCollectionQuery } from '@ui/shared/firebase-utils';

interface Props {
  uid: string;
  pUseMemeCollectionQuery?: typeof useMemeCollectionQuery;
}

const MemeCollection = ({
  uid,
  pUseMemeCollectionQuery = useMemeCollectionQuery,
}: Props) => {
  const query = pUseMemeCollectionQuery(uid);
  return <div>yo</div>;
};

export default MemeCollection;
