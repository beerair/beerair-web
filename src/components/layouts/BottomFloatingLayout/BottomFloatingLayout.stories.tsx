import { ComponentMeta, ComponentStory } from '@storybook/react';

import BottomFloatingLayout from './BottomFloatingLayout';

export default {
  component: BottomFloatingLayout,
  args: { bottomOffset: 0 },
  decorators: [
    (Story) => (
      <main>
        <Story />
        {Array(100)
          .fill(0)
          .map((_, index) => (
            <p key={index}>스크롤</p>
          ))}
      </main>
    ),
  ],
} as ComponentMeta<typeof BottomFloatingLayout>;

const Template: ComponentStory<typeof BottomFloatingLayout> = ({ ...args }) => (
  <BottomFloatingLayout {...args} />
);

export const Default = Template.bind({});
