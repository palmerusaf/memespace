import { ComponentMeta, ComponentStory } from '@storybook/react';
import { getRandMemeIndex, MEME_LIST } from '@ui/shared/meme-list';
import Layout from 'app/find-degens/layout';
import { Timestamp } from 'firebase/firestore';

import { SignedOutDir } from './signed-out-dir';

export default {
  title: 'Find Degens/Signed Out Dir',
  component: SignedOutDir,
  args: {
    isLoading: false,
  },
} as ComponentMeta<typeof SignedOutDir>;

const Template: ComponentStory<typeof SignedOutDir> = (args) => (
  <Layout>
    <SignedOutDir {...args} />
  </Layout>
);

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  usersQueryResults: null,
};

export const OneUser = Template.bind({});
OneUser.args = {
  isLoading: true,
  usersQueryResults: [
    {
      id: '123',
      data: () => {
        return {
          userName: 'username',
          createdDate: Timestamp.now(),
          profileMeme: MEME_LIST[getRandMemeIndex()],
        };
      },
    },
  ],
};
