import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavWrapper from '.';

import { NavBar } from './nav-bar';

export default {
  title: 'App/Nav Bar',
  component: NavBar,
  args: { pUseSelectedLayoutSegment: () => null },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => (
  <div className='h-screen w-screen'>
    <NavWrapper NavBarInj={() => NavBar({ ...args })}>
      <div className='h-full w-full bg-red-400 text-xl'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
        officia quisquam ut sint ipsum eligendi expedita ipsam deleniti dolore
        alias? Ipsum suscipit sunt iusto aspernatur quibusdam ducimus nemo
        perspiciatis ipsam omnis aut, qui eos error corporis eius fuga
        temporibus quia veritatis eaque labore hic officiis velit adipisci
        impedit! Aut illum praesentium temporibus odio animi eveniet laudantium
        nam fugiat deserunt impedit tempore dolores, nobis vero ipsam dolor
        totam amet asperiores placeat, voluptas alias est sapiente cum!
        Quibusdam placeat error veritatis laborum unde? Nihil delectus
        voluptates fuga earum quas. Debitis maxime officiis assumenda soluta
        explicabo impedit doloremque molestias sed iure aperiam? Cupiditate
        repellendus praesentium laboriosam ipsa, laudantium eos beatae est
        tempore at neque architecto deserunt itaque harum non id accusamus optio
        facere sint temporibus minima molestias a nesciunt accusantium!
        Mollitia, perferendis, numquam repellendus sed excepturi non vitae
        voluptate esse temporibus porro dolorem dolorum aspernatur in, eligendi
        vero autem similique aut. Quaerat sequi ad quasi laboriosam provident
        laudantium magni suscipit consequuntur commodi ducimus consectetur saepe
        delectus excepturi cum qui id tenetur, iure dolore nobis soluta.
        Incidunt, autem deserunt amet delectus nam pariatur eligendi. Facere
        sequi repellendus nemo corrupti. Necessitatibus voluptas ipsa, adipisci,
        libero at fugiat omnis quod nisi impedit qui deserunt earum assumenda!
      </div>
    </NavWrapper>
  </div>
);

export const LoggedInProfileSelected = Template.bind({});
LoggedInProfileSelected.args = {
  pUseLoggedIn: () => ({ loggedIn: true }),
  pUseSelectedLayoutSegment: () => 'profile',
};

export const LoggedOutLoginSelected = Template.bind({});
LoggedOutLoginSelected.args = {
  pUseLoggedIn: () => ({ loggedIn: false }),
  pUseSelectedLayoutSegment: () => 'login',
};
