import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SignedOutDir } from './signed-out-dir';

export default {
  title: 'Find Degens/Signed Out Dir',
  component: SignedOutDir,
  args: {
    isLoading: false,
  },
} as ComponentMeta<typeof SignedOutDir>;

const Template: ComponentStory<typeof SignedOutDir> = (args) => (
  <SignedOutDir {...args} />
);

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  usersQueryResult: null,
};
