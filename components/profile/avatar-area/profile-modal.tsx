import DropDown from '@ui/shared/drop-down';
import {
  ReceivingProfileData,
  useMyProfileMutation,
} from '@ui/shared/firebase-utils';
import { MEME_LIST } from '@ui/shared/meme-list';
import { MutantButton } from '@ui/shared/mutant-button';
import { Input, useInputValidator } from '@ui/shared/username-input';
import assert from 'assert';
import { serverTimestamp } from 'firebase/firestore';
import { useRef, useState } from 'react';
import { AvatarMeme } from './avatar-meme';

interface ProfileModalProps {
  data: ReceivingProfileData | null;
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
  const [profileMeme, setProfileMeme] = useState(data?.profileMeme ?? '');
  const [userName, setUserName] = useState(data?.userName ?? '');
  const inputRef = useRef<HTMLInputElement>(null);
  const { InvalidMsgBox, validInput, updateMsgBox } = useInputValidator();

  const handleSaveClick = () => {
    assert(inputRef && inputRef.current);
    const inputVal = inputRef.current.value;

    if (!validInput(inputVal)) return;
    mutation.mutate({
      profileMeme,
      userName: inputVal,
      createdDate: data?.createdDate ?? serverTimestamp(),
    });
  };

  const SaveButton = () => (
    <MutantButton
      onClick={handleSaveClick}
      className='rounded-full bg-blue-500 px-4 text-lg font-semibold text-white shadow-2xl duration-500 hover:-translate-y-1 hover:scale-105 md:text-xl'
      mutation={mutation}
      loadMsg={'Saving...'}
      errorMsg={'Failed Try Again'}
      successMsg={'Save Successful'}
      staticMsg={'Save'}
    />
  );

  const handleInputChange = () => {
    assert(inputRef && inputRef.current);
    const inputVal = inputRef.current.value;
    updateMsgBox(inputVal);
    if (validInput(inputVal)) setUserName(inputVal);
  };

  return (
    <div
      className={
        'absolute top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-gray-400 bg-opacity-20 bg-blend-overlay backdrop-blur-sm'
      }
      onClick={closeModal}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='mx-2 flex h-auto w-full max-w-2xl flex-col items-center rounded-lg bg-white p-2 shadow-lg animate-in fade-in md:p-4'
      >
        <h1 className='my-2 text-xl font-bold md:text-2xl'>Preview</h1>
        <AvatarArea
          profileMeme={profileMeme || undefined}
          userName={userName || undefined}
        />
        <div className='mt-3 flex w-full max-w-md flex-col items-center gap-2'>
          <DropDown
            optionValues={MEME_LIST}
            placeholder='Select Profile Meme'
            selectedOption={profileMeme}
            setSelectedOption={setProfileMeme}
          />
          <Input
            ref={inputRef}
            defaultValue={data?.userName}
            onChange={handleInputChange}
            label='User Name'
          />
          <div className='w-full pt-6  pb-2 text-center'>
            <InvalidMsgBox />
          </div>
          <div className='-mt-4 flex w-full flex-col gap-2'>
            <SaveButton />
            <button
              onClick={closeModal}
              className='rounded-full bg-red-500 px-4 text-lg font-semibold text-white shadow-2xl duration-500 hover:-translate-y-1 hover:scale-105 md:text-xl'
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function AvatarArea({ profileMeme = '', userName = 'No UserName' }) {
  return (
    <div className='flex w-full items-center gap-3 rounded-md bg-white p-2 shadow md:justify-start md:p-5'>
      <div className='w-20 md:w-36'>
        <AvatarMeme data={{ profileMeme }} />
      </div>
      <div className='w-full text-center text-xl md:text-2xl md:font-semibold'>
        {userName !== '' ? userName : 'No Username'}
      </div>
    </div>
  );
}
