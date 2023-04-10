import { SignedInDir } from '@ui/find-degens/signed-in-dir';
import { SignedOutDir } from '@ui/find-degens/signed-out-dir';
import { AreaEmpty } from '@ui/shared/area-empty';
import {
  auth,
  useFollowingCollectionQuery,
  useUserCollectionQuery,
} from '@ui/shared/firebase-utils';
import { LoggedInContext } from '@ui/shared/loggedin-context';
import { UserLoadCards } from '@ui/shared/user-load-cards';
import assert from 'assert';
import { useContext } from 'react';

const Page = ({
  pUseUserCollectionQuery = useUserCollectionQuery,
  pUseFollowingCollectionQuery = useFollowingCollectionQuery,
}) => {
  const loggedIn = useContext(LoggedInContext);
  return (
    <>
      {loggedIn && <SignedInPage />}
      {!loggedIn && <SignedOutPage />}
    </>
  );
};

export default Page;

function SignedInPage({
  pUseUserCollectionQuery = useUserCollectionQuery,
  pUseFollowingCollectionQuery = useFollowingCollectionQuery,
}) {
  assert(auth.currentUser);
  const usersQuery = pUseUserCollectionQuery();
  const followingQuery = pUseFollowingCollectionQuery(auth.currentUser?.uid);

  if (followingQuery.isLoading || usersQuery.isLoading)
    return <UserLoadCards />;

  if (!usersQuery.data) return <AreaEmpty />;

  return (
    <SignedInDir
      following={followingQuery.data ?? []}
      userDocs={usersQuery.data}
    />
  );
}

function SignedOutPage() {
  return <SignedOutDir />;
}
