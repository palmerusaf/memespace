import { ComponentMeta, ComponentStory } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  useFailingMutation,
  usePassingMutation,
} from '@ui/shared/firebase-utils';
import { Timestamp } from 'firebase/firestore';

import { Modal } from './profile-modal';
export default {
  title: 'profile/Profile Modal',
  component: Modal,
  args: { closeModal: console.log, pUseProfileMutation: usePassingMutation },
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
    profileMeme: '10-Guy',
    createdDate: Timestamp.now(),
    userName: 'foobar',
  },
};

export const NoData = Template.bind({});
NoData.args = {};

export const BlankMeme = Template.bind({});
BlankMeme.args = {
  data: {
    profileMeme: '',
    createdDate: Timestamp.now(),
    userName: 'foobar',
  },
};

export const ImageNotFound = Template.bind({});
ImageNotFound.args = {
  data: {
    profileMeme: 'Always-Has-Been',
    createdDate: Timestamp.now(),
    userName: 'foobar',
  },
};

export const Name20Chars = Template.bind({});
Name20Chars.args = {
  data: {
    profileMeme: '10-Guy',
    createdDate: Timestamp.now(),
    userName: 'BBBBBBBBBBBBBBBBBBBB',
  },
};

export const OverFlowMeme = Template.bind({});
OverFlowMeme.args = {
  data: {
    profileMeme: 'American-Chopper-Argument',
    createdDate: Timestamp.now(),
    userName: 'foobar',
  },
};

export const SaveWillFail = Template.bind({});
SaveWillFail.args = {
  pUseProfileMutation: useFailingMutation,
  data: {
    profileMeme: 'American-Chopper-Argument',
    createdDate: Timestamp.now(),
    userName: 'foobar',
  },
};
