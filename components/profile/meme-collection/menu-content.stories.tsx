import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MenuContent } from './menu-content';

export default {
  title: 'Meme Collection/Menu Conent',
  component: MenuContent,
  args: {},
} as ComponentMeta<typeof MenuContent>;

const Template: ComponentStory<typeof MenuContent> = (args) => (
  <div className='fixed top-0 left-0 z-50 flex h-screen w-screen flex-col md:flex-row'>
    <div className='flex h-[calc(100vh-22.5rem)] w-full flex-col items-center justify-center bg-black text-white md:h-full md:w-[calc(100vw-22.5rem)]'>
      <div>TEST</div>MODAL CONTENT GOES HERE<div>TEST</div>
    </div>
    <div className='h-[22.5rem] md:h-full md:w-[22.5rem]'>
      <MenuContent {...args} />
    </div>
  </div>
);

export const Story = Template.bind({});
Story.args = {};
