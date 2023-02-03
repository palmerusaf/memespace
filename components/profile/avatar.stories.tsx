import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Avatar } from './avatar';

export default {
  title: 'profile/Avatar',
  component: Avatar,
  args: {},
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <div className='flex h-screen w-screen items-center justify-center'>
    <Avatar {...args} />
  </div>
);

export const NoData = Template.bind({});
NoData.args = { data: null };

export const BlankMeme = Template.bind({});
BlankMeme.args = {
  data: { meme: '', userName: 'fooName' },
};

export const Normal = Template.bind({});
Normal.args = {
  data: { meme: '10-Guy', userName: 'fooName' },
};

export const OverFlowMeme = Template.bind({});
OverFlowMeme.args = {
  data: { meme: 'American-Chopper-Argument', userName: 'fooName' },
};

export const OverFlowMeme20Char = Template.bind({});
OverFlowMeme20Char.args = {
  data: { meme: 'American-Chopper-Argument', userName: 'aaaaaaaaaaaaaaaaaaaa' },
};

export const NameWithSpaces = Template.bind({});
NameWithSpaces.args = {
  data: {
    meme: '10-Guy',
    userName: 'foo Name bar',
  },
};

export const NameWith20Chars = Template.bind({});
NameWith20Chars.args = {
  data: {
    meme: '10-Guy',
    userName: 'aaaaaaaaaaaaaaaaaaaa',
  },
};

export const ImageNotFound = Template.bind({});
ImageNotFound.args = {
  data: {
    meme: 'Always-Has-Been',
    userName: 'aaaaaaaaaaaaaaaaaaaa',
  },
};

export const BlankMeme20Chars = Template.bind({});
BlankMeme20Chars.args = {
  data: {
    meme: '',
    userName: 'aaaaaaaaaaaaaaaaaaaa',
  },
};
