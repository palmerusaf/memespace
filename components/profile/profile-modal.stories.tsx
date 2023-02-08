import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
} from '@tanstack/react-query';
import { SendingProfileData } from '@ui/shared/firebase-utils';
import { Timestamp } from 'firebase/firestore';

import { Modal } from './profile-modal';

const mock = (success: boolean, timeout = 1000) => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve();
      } else {
        reject({ message: 'Error' });
      }
    }, timeout);
  });
};

const useTestMutation = () => {
  return useMutation({
    mutationFn: (data: SendingProfileData) => mock(true),
  });
};

export default {
  title: 'profile/Profile Modal',
  component: Modal,
  args: { closeModal: console.log, pUseMyProfileMutation: useTestMutation },
} as ComponentMeta<typeof Modal>;

const queryClient = new QueryClient();
const Template: ComponentStory<typeof Modal> = (args) => (
  <QueryClientProvider client={queryClient}>
    <Modal {...args} />
  </QueryClientProvider>
);

export const Normal = Template.bind({});
Normal.args = {
  data: {
    meme: '10-Guy',
    createdDate: Timestamp.now(),
    userName: 'foobar',
  },
};

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

export const ImageNotFound = Template.bind({});
ImageNotFound.args = {
  data: {
    meme: 'Always-Has-Been',
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

export const OverFlowMeme = Template.bind({});
OverFlowMeme.args = {
  data: {
    meme: 'American-Chopper-Argument',
    createdDate: Timestamp.now(),
    userName: 'foobar',
  },
};
