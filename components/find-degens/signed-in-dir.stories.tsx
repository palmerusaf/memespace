import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MEME_LIST } from '@ui/shared/meme-list';
import Layout from 'app/find-degens/layout';
import { Timestamp } from 'firebase/firestore';

import { SignedInDir } from './signed-in-dir';

export default {
  title: 'find degens/Signed in Dir',
  component: SignedInDir,
  args: { isLoading: false },
} as ComponentMeta<typeof SignedInDir>;

const Template: ComponentStory<typeof SignedInDir> = (args) => (
  <Layout>
    <SignedInDir {...args} />
  </Layout>
);

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
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
          profileMeme: MEME_LIST[i],
        };
      },
    });
  }
  return result;
};

export const NoneFollowed = Template.bind({});
NoneFollowed.args = {
  following: [],
  userDocs: genMemes(20),
};

export const HalfFollowed = Template.bind({});
HalfFollowed.args = {
  following: genMemes(10),
  userDocs: genMemes(20),
};
