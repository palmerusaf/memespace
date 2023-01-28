import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SetUserNameForm } from './index';

export default {
  title: 'Login/UserName Form',
  component: SetUserNameForm,
  args: {
    setUserName: (un) => console.info('username set to ', un),
  },
} as ComponentMeta<typeof SetUserNameForm>;

const Template: ComponentStory<typeof SetUserNameForm> = (args) => (
  <div className='h-screen w-screen'>
    <SetUserNameForm {...args} />
  </div>
);

export const Empty = Template.bind({});
Empty.args = {};

export const ValidVal = Template.bind({});
ValidVal.args = { defaultTestValue: 'thisIsValid' };

export const WithSpace = Template.bind({});
WithSpace.args = { defaultTestValue: 'this Is not Valid' };

export const BadWord = Template.bind({});
BadWord.args = { defaultTestValue: 'bitch' };

export const Over20 = Template.bind({});
Over20.args = { defaultTestValue: 'aaaaaaaaaaaaaaaaaaaaa' };
