import { ComponentMeta, ComponentStory } from '@storybook/react';

import Page from './page';

export default {
  title: 'find memes/Page',
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
