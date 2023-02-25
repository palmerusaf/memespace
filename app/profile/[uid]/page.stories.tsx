import { ComponentMeta, ComponentStory } from '@storybook/react';

import Page from './page';

export default {
  title: 'profile/Meme Collection',
  component: Page,
  args: {},
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Story = Template.bind({});
Story.args = {};
