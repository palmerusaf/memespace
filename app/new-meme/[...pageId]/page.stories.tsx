import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Page from './page';

export default {
  title: 'New-Meme/Page',
  component: Page,
  args: {
    params: { pageId: '1' },
  },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const PageOne = Template.bind({});
PageOne.args = { params: { pageId: '1' } };

export const LastPage = Template.bind({});
LastPage.args = { params: { pageId: '37' } };

export const Overflow = Template.bind({});
Overflow.args = { params: { pageId: '11' } };

export const NotFound = Template.bind({});
NotFound.args = { params: { pageId: 's' } };
