import { ComponentMeta, ComponentStory } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  useFailingMutation,
  usePassingMutation,
} from '@ui/shared/firebase-utils';
import Layout from 'app/find-degens/layout';
import { SignedInDir } from './signed-in-dir';
import { genUsers } from './testing-utils';

export default {
  title: 'find degens/Signed in Dir',
  component: SignedInDir,
  args: {
    pUseAddFollowingMutation: usePassingMutation,
  },
} as ComponentMeta<typeof SignedInDir>;

const Template: ComponentStory<typeof SignedInDir> = (args) => (
  <div className='h-screen w-screen'>
    <QueryClientProvider client={new QueryClient()}>
      <Layout>
        <SignedInDir {...args} />
      </Layout>
    </QueryClientProvider>
  </div>
);

export const NoneFollowed = Template.bind({});
NoneFollowed.args = {
  following: [],
  userDocs: genUsers(20),
};

export const HalfFollowed = Template.bind({});
HalfFollowed.args = {
  following: genUsers(10),
  userDocs: genUsers(20),
};

export const FailFollowing = Template.bind({});
FailFollowing.args = {
  following: [],
  userDocs: genUsers(1),
  pUseAddFollowingMutation: useFailingMutation,
};
