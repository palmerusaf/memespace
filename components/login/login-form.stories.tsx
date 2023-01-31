import { ComponentMeta, ComponentStory } from '@storybook/react';

import { PreLogin } from './pre-login';

export default {
  title: 'login/login-form',
  component: PreLogin,
} as ComponentMeta<typeof PreLogin>;

const Template: ComponentStory<typeof PreLogin> = () => (
  <div className='h-screen w-screen'>
    <PreLogin />
  </div>
);

export const Story = Template.bind({});
Story.args = {};
