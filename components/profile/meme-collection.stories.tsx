import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { MockedAvatarArea } from '@ui/profile/avatar-area/index.stories';
import { LayoutWrapper } from '@ui/profile/layout-wrapper';
import { MockedNavBar } from '@ui/profile/nav-bar.stories';
import { ReceivingMemeData } from '@ui/shared/firebase-utils';
import { Timestamp } from 'firebase/firestore';

import MemeCollection from './meme-collection';

const setQueryWith = (testData: ReceivingMemeData[] | null) => (uid: string) =>
  useQuery({
    queryKey: ['test-value'],
    queryFn: () => testData,
  });

export default {
  title: 'profile/Meme Collection',
  component: MemeCollection,
  args: { uid: '123' },
} as ComponentMeta<typeof MemeCollection>;

const queryClient = new QueryClient();
const Template: ComponentStory<typeof MemeCollection> = (args) => (
  <QueryClientProvider client={queryClient}>
    <LayoutWrapper>
      <MockedAvatarArea />
      <MockedNavBar selected={null} />
      <MemeCollection {...args} />
    </LayoutWrapper>
  </QueryClientProvider>
);
export const NullCollection = Template.bind({});
NullCollection.args = {
  pUseMemeCollectionQuery: setQueryWith(null),
};

export const OneMeme = Template.bind({});
OneMeme.args = {
  pUseMemeCollectionQuery: setQueryWith([
    {
      topText: 'foo',
      bottomText: 'bar',
      meme: '10-Guy',
      createdBy: '123',
      createdDate: Timestamp.now(),
    },
  ]),
};

export const TenMemes = Template.bind({});
TenMemes.args = {
  pUseMemeCollectionQuery: setQueryWith([
    {
      topText: 'foo1',
      bottomText: 'bar1',
      meme: '10-Guy',
      createdBy: '123',
      createdDate: Timestamp.now(),
    },
    {
      topText: 'foo2',
      bottomText: 'bar2',
      meme: '10-Guy',
      createdBy: '123',
      createdDate: Timestamp.now(),
    },
    {
      topText: 'foo3',
      bottomText: 'bar3',
      meme: '10-Guy',
      createdBy: '123',
      createdDate: Timestamp.now(),
    },
    {
      topText: 'foo4',
      bottomText: 'bar4',
      meme: '10-Guy',
      createdBy: '123',
      createdDate: Timestamp.now(),
    },
    {
      topText: 'foo5',
      bottomText: 'bar5',
      meme: '10-Guy',
      createdBy: '123',
      createdDate: Timestamp.now(),
    },
    {
      topText: 'foo6',
      bottomText: 'bar6',
      meme: '10-Guy',
      createdBy: '123',
      createdDate: Timestamp.now(),
    },
    {
      topText: 'foo7',
      bottomText: 'bar7',
      meme: '10-Guy',
      createdBy: '123',
      createdDate: Timestamp.now(),
    },
    {
      topText: 'foo8',
      bottomText: 'bar8',
      meme: '10-Guy',
      createdBy: '123',
      createdDate: Timestamp.now(),
    },
    {
      topText: 'foo9',
      bottomText: 'bar9',
      meme: '10-Guy',
      createdBy: '123',
      createdDate: Timestamp.now(),
    },
    {
      topText: 'foo10',
      bottomText: 'bar10',
      meme: '10-Guy',
      createdBy: '123',
      createdDate: Timestamp.now(),
    },
  ]),
};

const useLoading = (uid: string) =>
  useQuery({
    queryKey: ['test-value'],
    queryFn: () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve('done');
        }, 10000);
      }),
  });

export const Loading = Template.bind({});
Loading.args = {
  // @ts-ignore
  pUseMemeCollectionQuery: useLoading,
};
