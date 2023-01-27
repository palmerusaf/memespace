import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { LoadingPage } from './index';

export default {
  title: 'Shared/Loading-Page',
  component: LoadingPage,
  args: {},
} as ComponentMeta<typeof LoadingPage>;

const Template: ComponentStory<typeof LoadingPage> = (args) => (
  <div className='h-screen w-screen'>
    <LoadingPage {...args} />
  </div>
);

export const EmptyMsg = Template.bind({});
EmptyMsg.args = {};

export const TestMsg = Template.bind({});
TestMsg.args = { loadingMsg: 'Loading Data' };
