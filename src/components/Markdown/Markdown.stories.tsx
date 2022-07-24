import { ComponentStory, ComponentMeta } from '@storybook/react';

import Markdown from './Markdown';

export default {
  title: 'Components/Markdown',
  argTypes: {
    markdown: { control: 'text', defaultValue: '' },
  },
  args: {},
} as ComponentMeta<typeof Markdown>;

const Template: ComponentStory<typeof Markdown> = ({ ...args }) => <Markdown {...args} />;

export const Default = Template.bind({});
Default.args = {};
