import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import LevelModal from './LevelModal';
import { levels } from '@/constants/dummy';

export default {
  title: 'Components/mypage/LevelModal',
  component: LevelModal,
} as ComponentMeta<typeof LevelModal>;

const Template: ComponentStory<typeof LevelModal> = () => {
  const [isOpen, setIsOpen] = useState(true);

  return <LevelModal open={isOpen} closeModal={() => setIsOpen(false)} levels={levels} />;
};

export const Default = Template.bind({});
