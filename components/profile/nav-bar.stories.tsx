import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MockedAvatarArea } from './avatar-area/index.stories';
import { LayoutWrapper } from './layout-wrapper';

import { NavBar } from './nav-bar';

export default {
  title: 'profile/Nav Bar',
  component: NavBar,
  args: { pUseSelectedLayoutSegment: () => 'yo' },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => (
  <LayoutWrapper>
    <MockedAvatarArea />
    <NavBar {...args} />
  </LayoutWrapper>
);

export const MemeSelected = Template.bind({});
MemeSelected.args = { uid: '123', pUseSelectedLayoutSegment: () => null };

export const TrackedSelected = Template.bind({});
TrackedSelected.args = {
  uid: '123',
  pUseSelectedLayoutSegment: () => 'tracked',
};
