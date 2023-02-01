import { ComponentMeta, ComponentStory } from '@storybook/react';

import Error from './error';

export default {
  title: 'Login/Error Page',
  component: Error,
  args: {},
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = (args) => (
  <div className='h-screen w-screen'>
    <Error {...args} />
  </div>
);

export const Story = Template.bind({});
Story.args = {};
