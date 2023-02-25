'use client';
import { useMemeMutation } from '@ui/shared/firebase-utils';
import { serverTimestamp } from 'firebase/firestore';

interface Props {
  params: { uid: string };
}

const Page = ({ params: { uid } }: Props) => {
  const mutation = useMemeMutation(uid);

  return (
    <div className='mb-2 h-full w-full overflow-scroll rounded-lg'>
      <div className='flex items-center justify-center'>
        <button
          className='rounded-full bg-blue-500 p-2 font-bold text-white'
          onClick={() => {
            mutation.mutate({
              createdDate: serverTimestamp(),
              topText: 'bar',
              bottomText: 'foo',
              meme: '10-Guy',
              createdBy: 'me',
            });
          }}
        >
          send
        </button>
      </div>
    </div>
  );
};

export default Page;
