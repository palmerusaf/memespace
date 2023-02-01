import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Avatar } from './avatar';

export default {
  title: 'profile/avatar',
  component: Avatar,
  args: {},
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Story = Template.bind({});
Story.args = {};
