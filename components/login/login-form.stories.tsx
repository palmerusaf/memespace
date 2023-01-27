import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { LoginForm } from './login-form';

export default {
  title: 'login/login-form',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => (
  <div className='h-screen w-screen'>
    <LoginForm />
  </div>
);

export const Story = Template.bind({});
Story.args = {};
