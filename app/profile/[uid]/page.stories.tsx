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
import { uniqueId } from 'lodash';

import Page from './page';

const setQueryWith =
  (testData: { data: () => ReceivingMemeData; id: string }[] | null) =>
  (uid: string) =>
    useQuery({
      queryKey: ['test-value'],
      queryFn: () => testData as any,
    });

export default {
  title: 'profile/Meme Collection',
  component: Page,
  args: { uid: '123' },
} as ComponentMeta<typeof Page>;

const queryClient = new QueryClient();
const Template: ComponentStory<typeof Page> = (args) => (
  <QueryClientProvider client={queryClient}>
    <div className='h-screen w-screen'>
      <LayoutWrapper>
        <MockedAvatarArea />
        <MockedNavBar selected={null} />
        <Page {...args} />
      </LayoutWrapper>
    </div>
  </QueryClientProvider>
);

export const NullCollection = Template.bind({});
NullCollection.args = {
  pUseMemeCollectionQuery: setQueryWith(null),
  pUseIsOwner: (uid) => ({ isOwner: false }),
};

export const NullOwned = Template.bind({});
NullOwned.args = {
  pUseMemeCollectionQuery: setQueryWith(null),
  pUseIsOwner: (uid) => ({ isOwner: true }),
};

export const OneMemeOwned = Template.bind({});
OneMemeOwned.args = {
  pUseIsOwner: (uid) => ({ isOwner: true }),
  pUseMemeCollectionQuery: setQueryWith([
    {
      id: uniqueId('meme-doc-id-'),
      data: () => ({
        topText: 'foo',
        bottomText: 'bar',
        meme: '10-Guy',
        createdBy: '123',
        createdDate: Timestamp.now(),
      }),
    },
  ]),
};

export const OneMeme = Template.bind({});
OneMeme.args = {
  pUseMemeCollectionQuery: setQueryWith([
    {
      id: uniqueId('meme-doc-id-'),
      data: () => ({
        topText: 'foo',
        bottomText: 'bar',
        meme: '10-Guy',
        createdBy: '123',
        createdDate: Timestamp.now(),
      }),
    },
  ]),
};

export const TenMemes = Template.bind({});
TenMemes.args = {
  pUseMemeCollectionQuery: setQueryWith([
    {
      id: uniqueId('meme-doc-id-'),
      data: () => ({
        topText: 'foo1',
        bottomText: 'bar1',
        meme: '10-Guy',
        createdBy: '123',
        createdDate: Timestamp.now(),
      }),
    },
    {
      id: uniqueId('meme-doc-id-'),
      data: () => ({
        topText: 'top text',
        bottomText: 'bottom text',
        meme: 'American-Chopper-Argument',
        createdBy: '123',
        createdDate: Timestamp.now(),
      }),
    },
    {
      id: uniqueId('meme-doc-id-'),
      data: () => ({
        topText: 'foo3',
        bottomText: 'bar3',
        meme: 'Criana',
        createdBy: '123',
        createdDate: Timestamp.now(),
      }),
    },
    {
      id: uniqueId('meme-doc-id-'),
      data: () => ({
        topText: 'foo4',
        bottomText: 'bar4',
        meme: '10-Guy',
        createdBy: '123',
        createdDate: Timestamp.now(),
      }),
    },
    {
      id: uniqueId('meme-doc-id-'),
      data: () => ({
        topText: 'foo5',
        bottomText: 'bar5',
        meme: '10-Guy',
        createdBy: '123',
        createdDate: Timestamp.now(),
      }),
    },
    {
      id: uniqueId('meme-doc-id-'),
      data: () => ({
        topText: 'foo6',
        bottomText: 'bar6',
        meme: '10-Guy',
        createdBy: '123',
        createdDate: Timestamp.now(),
      }),
    },
    {
      id: uniqueId('meme-doc-id-'),
      data: () => ({
        topText: 'foo7',
        bottomText: 'bar7',
        meme: '10-Guy',
        createdBy: '123',
        createdDate: Timestamp.now(),
      }),
    },
    {
      id: uniqueId('meme-doc-id-'),
      data: () => ({
        topText: 'foo8',
        bottomText: 'bar8',
        meme: '10-Guy',
        createdBy: '123',
        createdDate: Timestamp.now(),
      }),
    },
    {
      id: uniqueId('meme-doc-id-'),
      data: () => ({
        topText: 'foo9',
        bottomText: 'bar9',
        meme: '10-Guy',
        createdBy: '123',
        createdDate: Timestamp.now(),
      }),
    },
    {
      id: uniqueId('meme-doc-id-'),
      data: () => ({
        topText: 'foo10',
        bottomText: 'bar10',
        meme: '10-Guy',
        createdBy: '123',
        createdDate: Timestamp.now(),
      }),
    },
  ]),
};

export const TenMemesOwned = Template.bind({});
TenMemesOwned.args = {
  pUseIsOwner: (uid) => ({ isOwner: true }),
  pUseMemeCollectionQuery: setQueryWith([
    {
      id: uniqueId('meme-doc-id-'),
      data: () => ({
        topText: 'foo1',
        bottomText: 'bar1',
        meme: '10-Guy',
        createdBy: '123',
        createdDate: Timestamp.now(),
      }),
    },
    {
      id: uniqueId('meme-doc-id-'),
      data: () => ({
        topText: 'foo2',
        bottomText: 'bar2',
        meme: 'American-Chopper-Argument',
        createdBy: '123',
        createdDate: Timestamp.now(),
      }),
    },
    {
      id: uniqueId('meme-doc-id-'),
      data: () => ({
        topText: 'foo3',
        bottomText: 'bar3',
        meme: 'Criana',
        createdBy: '123',
        createdDate: Timestamp.now(),
      }),
    },
    {
      id: uniqueId('meme-doc-id-'),
      data: () => ({
        topText: 'foo4',
        bottomText: 'bar4',
        meme: '10-Guy',
        createdBy: '123',
        createdDate: Timestamp.now(),
      }),
    },
    {
      id: uniqueId('meme-doc-id-'),
      data: () => ({
        topText: 'foo5',
        bottomText: 'bar5',
        meme: '10-Guy',
        createdBy: '123',
        createdDate: Timestamp.now(),
      }),
    },
    {
      id: uniqueId('meme-doc-id-'),
      data: () => ({
        topText: 'foo6',
        bottomText: 'bar6',
        meme: '10-Guy',
        createdBy: '123',
        createdDate: Timestamp.now(),
      }),
    },
    {
      id: uniqueId('meme-doc-id-'),
      data: () => ({
        topText: 'foo7',
        bottomText: 'bar7',
        meme: '10-Guy',
        createdBy: '123',
        createdDate: Timestamp.now(),
      }),
    },
    {
      id: uniqueId('meme-doc-id-'),
      data: () => ({
        topText: 'foo8',
        bottomText: 'bar8',
        meme: '10-Guy',
        createdBy: '123',
        createdDate: Timestamp.now(),
      }),
    },
    {
      id: uniqueId('meme-doc-id-'),
      data: () => ({
        topText: 'foo9',
        bottomText: 'bar9',
        meme: '10-Guy',
        createdBy: '123',
        createdDate: Timestamp.now(),
      }),
    },
    {
      id: uniqueId('meme-doc-id-'),
      data: () => ({
        topText: 'foo10',
        bottomText: 'bar10',
        meme: '10-Guy',
        createdBy: '123',
        createdDate: Timestamp.now(),
      }),
    },
  ]),
};

const useLoading = (uid: string) =>
  useQuery({
    queryKey: ['loading'],
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
