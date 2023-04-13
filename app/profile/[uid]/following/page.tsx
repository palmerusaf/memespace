/* eslint-disable @next/next/no-img-element */
'use client';

import { AreaEmpty } from '@ui/shared/area-empty';
import {
  useDeleteFollowingMutation,
  useFollowingCollectionQuery,
  useIsOwner,
  useProfileQuery,
} from '@ui/shared/firebase-utils';
import { MadBro } from '@ui/shared/imgs';
import { MutantButton } from '@ui/shared/mutant-button';
import { UserCard } from '@ui/shared/user-card';
import { LoadingCard } from '@ui/shared/user-load-cards/loading-card';
import Link from 'next/link';

interface Props {
  params: { uid: string };
}

const Page = ({ params: { uid } }: Props) => {
  const followingQuery = useFollowingCollectionQuery(uid);
  const { isOwner } = useIsOwner(uid);
  if (followingQuery.isLoading) return <LoadingList />;
  else if (followingQuery.data) return <List />;
  return <EmptyList isOwner={isOwner} />;

  function List() {
    return (
      <div className='mb-2 h-full w-full overflow-scroll rounded-lg'>
        {followingQuery.data?.map((doc) => (
          <Item key={doc.id} followingUid={doc.data().followingUid} />
        ))}
      </div>
    );

    function Item({ followingUid }: { followingUid: string }) {
      const profileQuery = useProfileQuery(followingUid);
      if (profileQuery.isLoading) return <LoadingCard />;
      else
        return (
          <UserCard
            uid={followingUid}
            userName={profileQuery.data?.userName ?? 'No Username'}
            profileMeme={profileQuery.data?.profileMeme ?? ''}
            button={isOwner && <UnfollowButton followingUid={followingUid} />}
          />
        );
    }
  }
};

export default Page;

function UnfollowButton({ followingUid }: { followingUid: string }) {
  const mutation = useDeleteFollowingMutation();
  return (
    <MutantButton
      className='rounded-full bg-red-500 px-2 font-semibold text-white shadow-2xl duration-500 hover:-translate-y-1 hover:scale-105 md:px-3 md:text-xl'
      mutation={mutation}
      onClick={() => mutation.mutate(followingUid)}
      loadMsg={'Unfollowing...'}
      errorMsg={'Try Again'}
      successMsg={'Unfollowed'}
      staticMsg={'Unfollow'}
    />
  );
}

function LoadingList() {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center gap-4'>
      <img
        src={MadBro.src}
        alt='mad bro spinner'
        className='w-20 animate-spin'
      />
      <div className='animate-pulse text-lg font-bold'>
        Loading Followers...
      </div>
    </div>
  );
}

function EmptyList({ isOwner }: { isOwner: boolean }) {
  const findMemesLink = (
    <Link
      className='rounded-full border-2 border-black bg-blue-600 py-0.5 px-3 text-center font-medium text-white shadow-md shadow-stone-400 duration-300 hover:-translate-y-0.5 hover:text-white'
      href='find-degens'
    >
      Find Degens
    </Link>
  );

  return <AreaEmpty button={isOwner && findMemesLink} />;
}
