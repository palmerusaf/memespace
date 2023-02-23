import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MockedAvatarArea } from './avatar-area/index.stories';
import { LayoutWrapper } from './layout-wrapper';
import { MockedNavBar } from './nav-bar.stories';

export default {
  title: 'profile/Layout Wrapper',
  component: LayoutWrapper,
  args: {},
} as ComponentMeta<typeof LayoutWrapper>;

const Template: ComponentStory<typeof LayoutWrapper> = (args) => (
  <LayoutWrapper>
    <MockedAvatarArea />
    <MockedNavBar selected={null} />
    yo
  </LayoutWrapper>
);

export const Story = Template.bind({});
Story.args = {};
