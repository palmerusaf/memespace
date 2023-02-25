import ComingSoon from '@ui/shared/coming-soon';

interface Props {
  params: { uid: string };
}

const Page = ({ params: { uid } }: Props) => {
  console.log({ uid });

  return (
    <div className='mb-2 h-full w-full overflow-scroll rounded-lg'>
      <ComingSoon page='Meme Collection' />
    </div>
  );
};

export default Page;
