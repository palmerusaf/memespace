import ComingSoon from '@ui/shared/coming-soon';
import { useMemeMutation } from '@ui/shared/firebase-utils';
import { serverTimestamp } from 'firebase/firestore';

interface Props {
  params: { uid: string };
}

const Page = ({ params: { uid } }: Props) => {
  const mutation = useMemeMutation(uid, 123);

  return (
    <div className='mb-2 h-full w-full overflow-scroll rounded-lg'>
      <ComingSoon page='Meme Collection' />
      <button
        className=''
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
  );
};

export default Page;
