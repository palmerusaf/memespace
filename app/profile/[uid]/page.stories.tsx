import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import Page from './page';

const queryClient = new QueryClient();

export default {
  title: 'profile/Page',
  component: Page,
  args: { params: { uid: '' } },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => (
  <QueryClientProvider client={queryClient}>
    <Page {...args} />
  </QueryClientProvider>
);

const useError = (uid: string) =>
  useQuery({
    queryFn: async () => Promise.reject(),
  });

export const Error = Template.bind({});
Error.args = { pUseProfileQuery: useError };
