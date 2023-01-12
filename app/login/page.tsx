import CenteredWithLogo from '@ui/shared/centered-with-logo';
import Input from '@ui/login/input';

interface AuthProps {
  isAuth: boolean;
  otherProps: any;
}

const Page = ({ isAuth }: AuthProps) => (isAuth ? <LoggedIn /> : <LoggedOut />);

export default Page;

type AuthComponent = ({ isAuth, otherProps }: AuthProps) => JSX.Element;

function withAuth(WithAuthComponent: AuthComponent) {
  return function Component(otherProps: any) {
    const isAuth = false;
    return <WithAuthComponent isAuth={isAuth} otherProps={otherProps} />;
  };
}

function LoggedOut() {
  return (
    <form className='flex flex-col h-full w-full justify-center items-center px-2 gap-2'>
      <h1 className=''>New Use</h1>
      <Input label='User Name' />
      <button className='bg-red-700 py-1 rounded-2xl border-2 w-full border-gray-700 text-white hover:text-white hover:-translate-y-1 duration-300 hover:shadow-gray-900 shadow-md font-bold text-xl mt-4'>
        Sign in with Google
      </button>
      <button className='bg-blue-600 py-1 rounded-2xl border-2 w-full border-gray-700 text-white hover:text-white hover:-translate-y-1 duration-300 hover:shadow-gray-900 shadow-md font-bold text-xl'>
        Sign in with Facebook
      </button>
    </form>
  );
}

function LoggedIn() {
  return <div>you logged in</div>;
}
