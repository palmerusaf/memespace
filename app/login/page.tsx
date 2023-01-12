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
  const Divider = ({ label }: { label: string }) => {
    return (
      <h2 className='grid grid-cols-[auto,auto,_1fr] w-full items-center'>
        <span className='h-0 border-b border-black mx-2 w-4'></span>
        <span className='font-bold'>{label}</span>
        <span className='h-0 border-b border-black mx-2'></span>
      </h2>
    );
  };
  return (
    <div className='flex justify-center items-center w-full h-full'>
      <div className='flex flex-col justify-center h-full w-full px-2 max-w-xl'>
        <h1 className='w-full text-center font-extrabold text-xl my-4 underline'>
          Login Below
        </h1>
        <form className='flex flex-col w-full justify-center items-center gap-2'>
          <Divider label='New User' />
          <Input label='User Name' />
          <button className='bg-red-700 py-1 rounded-2xl border-2 w-full border-black text-white hover:text-white hover:-translate-y-1 duration-300 hover:shadow-gray-900 shadow-md font-bold text-xl mt-4'>
            Sign up with Google
          </button>
          <button className='bg-blue-600 py-1 rounded-2xl border-2 w-full border-black text-white hover:text-white hover:-translate-y-1 duration-300 hover:shadow-gray-900 shadow-md font-bold text-xl'>
            Sign up with Facebook
          </button>
        </form>
        <div className='flex flex-col w-full justify-center items-center gap-2'>
          <Divider label='Returning Users' />
          <button className='bg-red-700 py-1 rounded-2xl border-2 w-full border-black text-white hover:text-white hover:-translate-y-1 duration-300 hover:shadow-gray-900 shadow-md font-bold text-xl mt-4'>
            Continue with Google
          </button>
          <button className='bg-blue-600 py-1 rounded-2xl border-2 w-full border-black text-white hover:text-white hover:-translate-y-1 duration-300 hover:shadow-gray-900 shadow-md font-bold text-xl'>
            Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
}

function LoggedIn() {
  return <div>you logged in</div>;
}
