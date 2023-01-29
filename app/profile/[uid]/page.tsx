import ComingSoon from '@ui/shared/coming-soon';

interface Props {
  params: { uid: string };
}

const Page = ({ params: { uid } }: Props) => {
  return <ComingSoon page={`Profile ${uid}`} />;
};

export default Page;
