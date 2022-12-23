import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

import { levels } from '@/constants/dummy';

import LevelModal from './LevelModal';

export default {
  component: LevelModal,
} as ComponentMeta<typeof LevelModal>;

const Template: ComponentStory<typeof LevelModal> = () => {
  const [isOpen, setIsOpen] = useState(true);

  return <LevelModal open={isOpen} closeModal={() => setIsOpen(false)} levels={levels} />;
};

export const Default = Template.bind({});
