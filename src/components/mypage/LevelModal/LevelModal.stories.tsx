import { ILevel } from '@/types';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

import LevelModal from './LevelModal';

export const LEVEL_DATA: ILevel[] = [
  {
    id: 1,
    tier: 1,
    imageUrl: 'https://cdn.pixabay.com/photo/2016/04/24/14/19/paper-1349664_1280.png',
    req: 0,
  },
  {
    id: 2,
    tier: 2,
    imageUrl: 'https://cdn.pixabay.com/photo/2016/04/24/14/19/paper-1349664_1280.png',
    req: 1,
  },
  {
    id: 3,
    tier: 3,
    imageUrl: 'https://cdn.pixabay.com/photo/2016/04/24/14/19/paper-1349664_1280.png',
    req: 5,
  },
  {
    id: 4,
    tier: 4,
    imageUrl: 'https://cdn.pixabay.com/photo/2016/04/24/14/19/paper-1349664_1280.png',
    req: 12,
  },
  {
    id: 5,
    tier: 5,
    imageUrl: 'https://cdn.pixabay.com/photo/2016/04/24/14/19/paper-1349664_1280.png',
    req: 20,
  },
];

export default {
  title: 'Components/mypage/LevelModal',
  component: LevelModal,
} as ComponentMeta<typeof LevelModal>;

const Template: ComponentStory<typeof LevelModal> = () => {
  const [isOpen, setIsOpen] = useState(true);

  return <LevelModal open={isOpen} closeModal={() => setIsOpen(false)} />;
};

export const Default = Template.bind({});
