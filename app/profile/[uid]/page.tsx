/* eslint-disable @next/next/no-img-element */
'use client';
import { Avatar } from '@ui/profile/avatar';
import { useProfileQuery } from '@ui/shared/firebase-utils';
import { LoadingPage } from '@ui/shared/loading-page';

interface Props {
  params: { uid: string };
}

const Page = ({ params: { uid } }: Props) => {
  const query = useProfileQuery(uid);

  if (query.isLoading) return <LoadingPage loadingMsg='Gathering User Data.' />;
  if (query.isError) throw new Error('Trouble connecting to database.');
  else return <Avatar data={query.data} />;
};

export default Page;
