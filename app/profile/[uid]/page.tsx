/* eslint-disable @next/next/no-img-element */
'use client';
import { ProfileMeme } from '@ui/profile/profile-meme';
import { useProfileQuery } from '@ui/shared/firebase-utils';
import { LoadingPage } from '@ui/shared/loading-page';

interface Props {
  params: { uid: string };
  pUseProfileQuery?: typeof useProfileQuery;
}

const Page = ({
  params: { uid },
  pUseProfileQuery = useProfileQuery,
}: Props) => {
  const query = pUseProfileQuery(uid);

  if (query.isLoading) return <LoadingPage loadingMsg='Gathering User Data.' />;
  if (query.isError) throw new Error('Trouble connecting to database.');
  else return <ProfileMeme data={query.data} />;
};

export default Page;
