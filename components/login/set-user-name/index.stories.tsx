import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
} from '@tanstack/react-query';
import { SendingProfileData } from '@ui/shared/firebase-utils';

import { SetUserNameForm } from './index';

const queryClient = new QueryClient();

const useTestMutation = (uid: string) => {
  return useMutation({
    mutationFn: (data: SendingProfileData) =>
      new Promise(data).then(console.log),
  });
};

export default {
  title: 'Login/Username Form',
  component: SetUserNameForm,
  args: { pUseMyProfileMutation: useTestMutation },
} as ComponentMeta<typeof SetUserNameForm>;

const Template: ComponentStory<typeof SetUserNameForm> = (args) => (
  <div className='h-screen w-screen'>
    <QueryClientProvider client={queryClient}>
      <SetUserNameForm {...args} />
    </QueryClientProvider>
  </div>
);

export const Empty = Template.bind({});
Empty.args = {};

export const ValidVal = Template.bind({});
ValidVal.args = { defaultTestValue: 'thisIsValid' };

export const WithSpace = Template.bind({});
WithSpace.args = { defaultTestValue: 'this Is not Valid' };

export const BadWord = Template.bind({});
BadWord.args = { defaultTestValue: 'bitch' };

export const Over20 = Template.bind({});
Over20.args = { defaultTestValue: 'aaaaaaaaaaaaaaaaaaaaa' };
