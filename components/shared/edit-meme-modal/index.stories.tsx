import { ComponentMeta, ComponentStory } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  useFailingMutation,
  usePassingMutation,
} from '@ui/shared/firebase-utils';

import Modal from './index';

export default {
  title: 'shared/Edit Meme Modal',
  component: Modal,
  args: {
    modalId: 'string',
    pUseMemeMutation: usePassingMutation,
    currentUser: { uid: '123' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
  <QueryClientProvider client={new QueryClient()}>
    <Modal {...args} />
  </QueryClientProvider>
);

export const TenGuy = Template.bind({});
TenGuy.args = { modalId: '10-Guy' };

export const OverflowScreen = Template.bind({});
OverflowScreen.args = { modalId: 'American-Chopper-Argument' };

export const Narrow = Template.bind({});
Narrow.args = { modalId: 'Criana' };

export const SaveFails = Template.bind({});
SaveFails.args = { pUseMemeMutation: useFailingMutation, modalId: 'Criana' };

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  currentUser: null,
  pUseMemeMutation: useFailingMutation,
  modalId: 'Criana',
};

export const TextOptionsFilled = Template.bind({});
TextOptionsFilled.args = {
  modalId: 'Criana',
  topText: 'foo',
  bottomText: 'bar',
};
