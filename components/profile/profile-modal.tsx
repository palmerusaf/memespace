import {
  RecievingProfileData,
  useMyProfileMutation,
} from '@ui/shared/firebase-utils';
import { useState } from 'react';
import { AvatarMeme } from './avatar-meme';

interface ProfileModalProps {
  data: RecievingProfileData;
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

export const Modal = ({
  data,
  pUseMyProfileMutation = useMyProfileMutation,
  closeModal,
}: ModalProps) => {
  const mutation = pUseMyProfileMutation();
  return (
    <div
      className={
        'absolute top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-blend-overlay backdrop-blur-sm'
      }
      onClick={closeModal}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='mx-2 flex h-auto w-full max-w-2xl flex-col items-center rounded-lg bg-white p-2 shadow-lg md:p-4'
      >
        <AvatarArea data={data} />
      </div>
    </div>
  );
};

function AvatarArea({ data }: { data: RecievingProfileData | null }) {
  return (
    <div className='flex w-full items-center gap-3 rounded-md bg-white p-2 shadow md:justify-start md:p-5'>
      <div className='w-20 md:w-36'>
        <AvatarMeme data={data} />
      </div>
      <div className='w-full text-center text-xl md:text-2xl md:font-semibold'>
        {data && data.userName !== '' ? data.userName : 'No Username'}
      </div>
    </div>
  );
}
