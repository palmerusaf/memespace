'use client';
import { SignedInDir } from '@ui/find-degens/signed-in-dir';
import { SignedOutDir } from '@ui/find-degens/signed-out-dir';
import { AreaEmpty } from '@ui/shared/area-empty';
import {
  useLoggedIn,
  useMyFollowingCollectionQuery,
  useUserCollectionQuery,
} from '@ui/shared/firebase-utils';
import { UserLoadCards } from '@ui/shared/user-load-cards';

interface Props {
  params: any;
  pUseUserCollectionQuery?: typeof useUserCollectionQuery;
  pUseMyFollowingCollectionQuery?: typeof useMyFollowingCollectionQuery;
  pUseLoggedIn?: typeof useLoggedIn;
}

const Page = ({
  pUseUserCollectionQuery = useUserCollectionQuery,
  pUseMyFollowingCollectionQuery = useMyFollowingCollectionQuery,
  pUseLoggedIn = useLoggedIn,
}: Props) => {
  const { loggedIn } = pUseLoggedIn();

  return (
    <>
      {loggedIn && <SignedInPage />}
      {!loggedIn && <SignedOutPage />}
    </>
  );

  function SignedInPage() {
    const usersQuery = pUseUserCollectionQuery();
    const followingQuery = pUseMyFollowingCollectionQuery();

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
    const usersQuery = pUseUserCollectionQuery();

    if (usersQuery.isLoading) return <UserLoadCards />;

    if (!usersQuery.data) return <AreaEmpty />;

    return <SignedOutDir userDocs={usersQuery.data} />;
  }
};

export default Page;
