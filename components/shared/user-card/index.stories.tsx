import { ComponentMeta, ComponentStory } from '@storybook/react';

import { UserCard } from './index';

export default {
  title: 'Shared/User Card',
  component: UserCard,
  args: {},
} as ComponentMeta<typeof UserCard>;

const Template: ComponentStory<typeof UserCard> = (args) => (
  <div className='flex h-screen w-screen items-center justify-center'>
    <UserCard {...args} />
  </div>
);

export const Story = Template.bind({});
Story.args = {};
