/* eslint-disable react-hooks/rules-of-hooks */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UserCard } from './index';

export default {
  title: 'Shared/User Card',
  component: UserCard,
  args: {
    uid: '123',
  },
} as ComponentMeta<typeof UserCard>;

const Template: ComponentStory<typeof UserCard> = (args) => (
  <UserCard {...args}></UserCard>
);

export const MemeNotSet = Template.bind({});
MemeNotSet.args = {
  profileMeme: '',
};

export const Normal = Template.bind({});
Normal.args = {
  profileMeme: '10-Guy',
  userName: 'username',
};

export const UserName20Chars = Template.bind({});
UserName20Chars.args = {
  profileMeme: '10-Guy',
  userName: 'aaaaaaaaaaaaaaaaaaaa',
};

export const UserNameWithSpaces = Template.bind({});
UserNameWithSpaces.args = {
  profileMeme: '10-Guy',
  userName: 'username with space',
};

export const OverFlowMeme = Template.bind({});
OverFlowMeme.args = {
  profileMeme: 'American-Chopper-Argument',
  userName: 'foo',
};

export const NotFoundMeme = Template.bind({});
NotFoundMeme.args = {
  profileMeme: 'Always-Has-Been',
  userName: 'foo',
};
