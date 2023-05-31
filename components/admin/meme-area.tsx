import { useUserCollectionQuery } from '@ui/shared/firebase-utils';
import { LoadingCard } from '@ui/shared/user-load-cards/loading-card';
import { FoldWrapper } from './fold-wrapper';

export const MemeArea = () => {
  const userColQuery = useUserCollectionQuery();
  return (
    <FoldWrapper label='Create/Edit Memes'>
      {(userColQuery.isLoading && <LoadingCard />) || <MemeEditor />}
    </FoldWrapper>
  );
};

function MemeEditor() {
  return <div></div>;
}
