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
  if (query.isLoading) return <div>loading</div>;
  if (query.data) return <div>{`${query.data}`}</div>;
  if (!query.data) return <div>no data</div>;
};

export default MemeCollection;
