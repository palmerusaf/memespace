import { ComponentMeta, ComponentStory } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  useFailingMutation,
  usePassingMutation,
} from '@ui/shared/firebase-utils';
import { MEME_LIST } from '@ui/shared/meme-list';
import { Timestamp } from 'firebase/firestore';

import { MenuContent } from './menu-content';

export default {
  title: 'Meme Collection/Menu Content',
  component: MenuContent,
  args: {
    pUseDeleteMemeMutation: usePassingMutation,
    createdDate: Timestamp.now(),
    userName: 'FooBar',
    memeId: '123',
    memeData: {
      createdBy: '123',
      topText: 'top',
      bottomText: 'bottom',
      createdDate: Timestamp.now(),
      meme: MEME_LIST[0],
    },
  },
} as ComponentMeta<typeof MenuContent>;

const queryClient = new QueryClient();
const Template: ComponentStory<typeof MenuContent> = (args) => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='fixed top-0 left-0 z-50 flex h-screen w-screen flex-col md:flex-row'>
        <div className='flex h-[calc(100vh-22.5rem)] w-full flex-col items-center justify-center bg-black text-white md:h-full md:w-[calc(100vw-22.5rem)]'>
          <div>TEST</div>MODAL CONTENT GOES HERE<div>TEST</div>
        </div>
        <div className='h-[22.5rem] md:h-full md:w-[22.5rem]'>
          <MenuContent {...args} />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export const IsOwner = Template.bind({});
IsOwner.args = {
  isOwner: true,
};

export const IsOwnerDelFails = Template.bind({});
IsOwnerDelFails.args = {
  isOwner: true,
  pUseDeleteMemeMutation: useFailingMutation,
};

export const NotOwner = Template.bind({});
NotOwner.args = {
  isOwner: false,
};
