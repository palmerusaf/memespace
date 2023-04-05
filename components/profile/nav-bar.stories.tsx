import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MockedAvatarArea } from './avatar-area/index.stories';
import { LayoutWrapper } from './layout-wrapper';

import { NavBar } from './nav-bar';

export default {
  title: 'profile/Nav Bar',
  component: NavBar,
  args: {},
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => (
  <LayoutWrapper>
    <MockedAvatarArea />
    <NavBar {...args} />
  </LayoutWrapper>
);

export const MemeSelected = Template.bind({});
MemeSelected.args = { uid: '123', pUseSelectedLayoutSegment: () => null };

export const FollowingSelected = Template.bind({});
FollowingSelected.args = {
  uid: '123',
  pUseSelectedLayoutSegment: () => 'following',
};

export const MockedNavBar = ({
  selected,
}: {
  selected: 'following' | null;
}) => {
  const args = {
    uid: '123',
    pUseSelectedLayoutSegment: () => selected,
  };

  return <NavBar {...args} />;
};
