import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import EntityForm from '@/components/EntityForm';

import EmojiRadioField from './EmojiRadioField';

export default {
  component: EmojiRadioField,
  decorators: [
    (Story) => (
      <EntityForm onSubmit={action('onSubmit')}>
        <div style={{ paddingTop: '80px' }}>
          <Story />
        </div>
      </EntityForm>
    ),
  ],
  argTypes: {
    className: { control: 'text' },
  },
} as ComponentMeta<typeof EmojiRadioField>;

const Template: ComponentStory<typeof EmojiRadioField> = (args) => <EmojiRadioField {...args} />;

export const 이모지_라디오_필드 = Template.bind({});
이모지_라디오_필드.args = {
  name: 'emojiRadioField',
};
