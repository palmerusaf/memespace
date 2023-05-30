import { useUserCollectionQuery } from '@ui/shared/firebase-utils';
import { UserCard } from '@ui/shared/user-card';
import { LoadingCard } from '@ui/shared/user-load-cards/loading-card';

export const UserArea = () => {
  const userColQuery = useUserCollectionQuery();
  if (userColQuery.isLoading)
    return (
      <div className='w-full px-2'>
        <LoadingCard />
      </div>
    );
  else
    return (
      <div className='w-full px-2'>
        {userColQuery.data?.map((user) => {
          return (
            <UserCard
              uid={user.id}
              key={user.id}
              button={<ButtonArea uid={user.id} data={user.data()} />}
            />
          );
        })}
      </div>
    );
};
