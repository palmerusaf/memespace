import { ReactNode } from 'react';
import { getThumbnail, getTitle } from '../api-meme-utils';
import ImageWithLoadState from '../next-image';

interface Props {
  buttonArea?: ReactNode;
  uid: string;
  userName: string;
  profileMeme: string;
}
export const UserCard = ({ uid, userName, profileMeme, buttonArea }: Props) => {
  return (
    <div className='flex shadow-xl'>
      <ImageWithLoadState
        src={getThumbnail(profileMeme)}
        alt={getTitle({ meme: profileMeme })}
      />
      <span className='font-bold underline'>{userName}</span>
      <span>{buttonArea}</span>
    </div>
  );
};
