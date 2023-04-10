import { ComponentMeta, ComponentStory } from '@storybook/react';
import Layout from 'app/find-degens/layout';
import { SignedInDir } from './signed-in-dir';
import { genUsers } from './testing-utils';

export default {
  title: 'find degens/Signed in Dir',
  component: SignedInDir,
  args: {},
} as ComponentMeta<typeof SignedInDir>;

const Template: ComponentStory<typeof SignedInDir> = (args) => (
  <Layout>
    <SignedInDir {...args} />
  </Layout>
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
