import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchInput from './SearchInput';

export default {
  title: 'Components/search/SearchInput',
  component: SearchInput,
  argTypes: {
    defaultSearchText: { control: 'readonly' },
    onChangeHighlightingText: { control: 'readonly' },
  },
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => <SearchInput {...args} />;

export const DefaultSearchInput = Template.bind({});
DefaultSearchInput.args = {
  onChangeHighlightingText: (searchtext: string) => null,
};
