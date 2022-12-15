import { ComponentStory, ComponentMeta } from '@storybook/react';

import Markdown from './Markdown';

export default {
  argTypes: {
    markdown: { control: 'text' },
  },
  args: {
    markdown: '',
  },
} as ComponentMeta<typeof Markdown>;

const Template: ComponentStory<typeof Markdown> = ({ ...args }) => <Markdown {...args} />;

export const Default = Template.bind({});
Default.args = {};
