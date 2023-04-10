import { UserCard } from '@ui/shared/user-card';
import { UserDir, UserDocument } from './signed-out-dir';

interface Props extends UserDir {
  following: UserDocument[];
}

export const SignedInDir = ({ following, userDocs }: Props) => {
  const Following = () => <span>following</span>;
  const Follow = () => (
    <button className='rounded-full bg-blue-500 px-2 font-semibold text-white shadow-2xl duration-500 hover:-translate-y-1 hover:scale-105 md:px-3 md:text-xl'>
      follow
    </button>
  );
  return (
    <>
      {userDocs?.map((doc: UserDocument) => {
        const button = following.some((item) => item.id === doc.id) ? (
          <Following />
        ) : (
          <Follow />
        );
        return (
          <UserCard
            uid={doc.id}
            key={doc.id}
            userName={doc.data().userName}
            button={button}
            profileMeme={doc.data().profileMeme}
          />
        );
      })}
    </>
  );
};
