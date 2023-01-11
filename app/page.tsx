import ComingSoon from '@ui/shared/coming-soon';
import Link from 'next/link';

interface Props {}

const Page = ({}: Props) => {
  return (
    <>
      <Link href={'./login'}>login</Link>
      <ComingSoon page='home' />
    </>
  );
};

export default Page;
