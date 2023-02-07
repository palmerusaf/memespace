import {
  RecievingProfileData,
  useMyProfileMutation,
} from '@ui/shared/firebase-utils';
import assert from 'assert';
import { useRef, useState } from 'react';
import { AvatarMeme } from './avatar-meme';

interface ProfileModalProps {
  data: RecievingProfileData | null;
}

export const useModalHook = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);
  const ProfileModal = (props: ProfileModalProps) => {
    const modalProps = { closeModal, ...props };
    return isModalOpen ? <Modal {...modalProps} /> : <></>;
  };
  return { openModal, ProfileModal };
};

interface ModalProps extends ProfileModalProps {
  pUseMyProfileMutation?: typeof useMyProfileMutation;
  closeModal: () => void;
}

/**
 *
 * @param pUseMyProfileMutation for dep injection
 */
export const Modal = ({
  data,
  pUseMyProfileMutation = useMyProfileMutation,
  closeModal,
}: ModalProps) => {
  const mutation = pUseMyProfileMutation();
  const [profilePic, setProfilePic] = useState(data?.meme || undefined);
  const [userName, setUserName] = useState(data?.userName || undefined);
  const userNameRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={
        'absolute top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-blend-overlay backdrop-blur-sm'
      }
      onClick={closeModal}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='mx-2 flex h-auto w-full max-w-2xl flex-col items-center rounded-lg bg-white p-2 shadow-lg animate-in slide-in-from-top md:p-4'
      >
        <AvatarArea meme={profilePic} userName={userName} />
        <form
          action=''
          className=''
          onSubmit={(e) => {
            e.preventDefault();
            assert(userNameRef && userNameRef.current);
            setUserName(userNameRef.current.value);
          }}
        >
          <input name='user-name' ref={userNameRef} type='text' className='' />
          <input
            type='submit'
            className='rounded-full bg-blue-500 px-2 font-semibold text-white shadow-2xl duration-500 hover:-translate-y-1 hover:scale-110 md:px-3 md:text-xl'
            value='Preview'
          />
        </form>
      </div>
    </div>
  );
};

function AvatarArea({ meme = '', userName = 'No UserName' }) {
  return (
    <div className='flex w-full items-center gap-3 rounded-md bg-white p-2 shadow md:justify-start md:p-5'>
      <div className='w-20 md:w-36'>
        <AvatarMeme data={{ meme }} />
      </div>
      <div className='w-full text-center text-xl md:text-2xl md:font-semibold'>
        {userName}
      </div>
    </div>
  );
}
