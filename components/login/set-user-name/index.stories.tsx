import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { SetUserNameForm } from './index';

export default {
  title: 'components/Login/UserName Form',
  component: SetUserNameForm,
  args: {
    setUserName: (un) => console.info('username set to ', un),
  },
} as ComponentMeta<typeof SetUserNameForm>;

const Template: ComponentStory<typeof SetUserNameForm> = (args) => (
  <div className='w-screen h-screen'>
    <SetUserNameForm {...args} />
  </div>
);

export const Empty = Template.bind({});
Empty.args = {};

export const ValidVal = Template.bind({});
ValidVal.args = { testValue: 'thisIsValid' };

export const WithSpace = Template.bind({});
WithSpace.args = { testValue: 'this Is not Valid' };

export const BadWord = Template.bind({});
BadWord.args = { testValue: 'bitch' };

export const Over20 = Template.bind({});
Over20.args = { testValue: 'aaaaaaaaaaaaaaaaaaaaa' };
