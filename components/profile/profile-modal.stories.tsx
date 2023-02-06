import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useMutation } from '@tanstack/react-query';
import { SendingProfileData } from '@ui/shared/firebase-utils';
import { Timestamp } from 'firebase/firestore';

import { ProfileModal } from './profile-modal';

const useTestMutation = (uid: string) => {
  return useMutation({
    mutationFn: (data: SendingProfileData) =>
      new Promise(data).then(console.log),
  });
};

export default {
  title: 'profile/Profile Modal',
  component: ProfileModal,
  args: { closeModal: console.log, pUseMyProfileMutation: useTestMutation },
} as ComponentMeta<typeof ProfileModal>;

const Template: ComponentStory<typeof ProfileModal> = (args) => (
  <ProfileModal {...args} />
);

export const NoData = Template.bind({});
NoData.args = {};

export const BlankMeme = Template.bind({});
BlankMeme.args = {
  data: {
    meme: '',
    createdDate: Timestamp.now(),
    userName: 'foobar',
  },
};

export const Name20Chars = Template.bind({});
Name20Chars.args = {
  data: {
    meme: '10-Guy',
    createdDate: Timestamp.now(),
    userName: 'BBBBBBBBBBBBBBBBBBBB',
  },
};

export const Normal = Template.bind({});
Normal.args = {
  data: {
    meme: '10-Guy',
    createdDate: Timestamp.now(),
    userName: 'foobar',
  },
};

export const OverFlowMeme = Template.bind({});
OverFlowMeme.args = {
  data: {
    meme: 'American-Chopper-Argument',
    createdDate: Timestamp.now(),
    userName: 'foobar',
  },
};

export const ImageNotFound = Template.bind({});
ImageNotFound.args = {
  data: {
    meme: 'Always-Has-Been',
    createdDate: Timestamp.now(),
    userName: 'foobar',
  },
};
