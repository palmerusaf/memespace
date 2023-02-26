'use client';

import MemeCollection from '@ui/profile/meme-collection';

interface Props {
  params: { uid: string };
}

const Page = ({ params: { uid } }: Props) => <MemeCollection uid={uid} />;

export default Page;
