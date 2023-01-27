import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Error from './error';

export default {
  title: 'components/Login/Error Page',
  component: Error,
  args: {},
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = (args) => <Error {...args} />;

export const Story = Template.bind({});
Story.args = {};
