import { ComponentMeta, ComponentStory } from '@storybook/react';

import Page from './page';

export default {
  title: 'profile/Page',
  component: Page,
  args: { params: { uid: '' } },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Story = Template.bind({});
Story.args = {};
