import CenteredWithLogo from '@ui/shared/centered-with-logo';

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
    <div className='flex flex-col h-full w-full justify-center items-center px-2 gap-2'>
      <button className='bg-red-700 py-1 rounded-2xl border-2 w-full border-gray-700 text-white hover:text-white hover:-translate-y-1 duration-300 hover:shadow-gray-900 shadow-md font-bold text-xl'>
        Continue with Google
      </button>
      <button className='bg-blue-600 py-1 rounded-2xl border-2 w-full border-gray-700 text-white hover:text-white hover:-translate-y-1 duration-300 hover:shadow-gray-900 shadow-md font-bold text-xl'>
        Continue with Facebook
      </button>
    </div>
  );
}

function LoggedIn() {
  return <div>you logged in</div>;
}
