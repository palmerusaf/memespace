import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ControlDrawer } from './control-drawer';

export default {
  title: 'meme collection/Control Drawer',
  component: ControlDrawer,
  args: {},
} as ComponentMeta<typeof ControlDrawer>;

const Template: ComponentStory<typeof ControlDrawer> = (args) => (
  <div className='h-screen w-screen'>
    <ControlDrawer {...args} />
  </div>
);

export const Text = Template.bind({});
Text.args = {
  content: (
    <div className=''>
      Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
      labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.
      Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum
      Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident.
      Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
      occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat
      officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in
      Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non
      excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco
      ut ea consectetur et est culpa et culpa duis.
    </div>
  ),
};

export const Button = Template.bind({});
Button.args = {
  content: (
    <div className='flex items-center justify-around gap-2'>
      <button className='rounded-full bg-blue-400 px-4 py-2 text-lg font-bold text-white shadow'>
        BAR
      </button>
      <button className='rounded-full bg-blue-400 px-4 py-2 text-lg font-bold text-white shadow'>
        FOO
      </button>
    </div>
  ),
};
