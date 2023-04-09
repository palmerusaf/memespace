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
  <div className='h-screen w-screen'>
    <Layout>
      <SignedOutDir {...args} />
    </Layout>
  </div>
);

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  usersQueryResults: null,
};

export const OneUser = Template.bind({});
OneUser.args = {
  isLoading: false,
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

const genMemes = (num: number) => {
  const result = [];
  for (let i = 0; i < num; i++) {
    result.push({
      id: `${i}`,
      data: () => {
        return {
          userName: `username${i}`,
          createdDate: Timestamp.now(),
          profileMeme: MEME_LIST[getRandMemeIndex()],
        };
      },
    });
  }
  return result;
};

export const TwentyUsers = Template.bind({});
TwentyUsers.args = {
  isLoading: false,
  usersQueryResults: genMemes(20),
};
