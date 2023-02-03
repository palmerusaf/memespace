'use client';
import { useProfileQuery } from '@ui/shared/firebase-utils';
import { LoadingPage } from '@ui/shared/loading-page';

interface Props {
  params: { uid: string };
}

const Page = ({ params: { uid } }: Props) => {
  const query = useProfileQuery(uid);

  if (query.isLoading) return <LoadingPage loadingMsg='Gathering User Data.' />;
  if (query.isError) throw new Error('Trouble connecting to database.');
  if (query.data) {
    const { userName, profileMeme, createdDate } = query.data;
    console.log({ userName, profileMeme, createdDate });
    return <span>data loaded</span>;
  }
  if (!query.data) return <span>no data to load</span>;
};

export default Page;
