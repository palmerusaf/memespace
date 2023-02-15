import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LayoutWrapper } from 'app/profile/[uid]/layout';

import { NavBar } from './layout';

export default {
  title: 'profile/Nav Bar',
  component: NavBar,
  args: { pUseSelectedLayoutSegment: () => 'yo' },
} as ComponentMeta<typeof NavBar>;

const MockAvatarArea = () => (
  <div className='flex h-[112px] w-full items-center justify-center md:h-[212px]'>
    Avatar Area
  </div>
);

const Template: ComponentStory<typeof NavBar> = (args) => (
  <LayoutWrapper>
    <div className='flex h-[112px] w-full items-center justify-center rounded-md shadow-xl md:h-[212px]'>
      Avatar Area
    </div>
    <NavBar {...args} />
  </LayoutWrapper>
);

export const MemeSelected = Template.bind({});
MemeSelected.args = { uid: '123', pUseSelectedLayoutSegment: () => '123' };

export const TrackedSelected = Template.bind({});
TrackedSelected.args = {
  uid: '123',
  pUseSelectedLayoutSegment: () => 'tracked',
};
