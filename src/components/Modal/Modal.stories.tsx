import { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';
import Button from '@/components/commons/Button';

import Modal from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    title: { control: 'text', name: 'title' },
    description: { control: 'text', name: 'description' },
    withCloseButton: { control: 'boolean' },
    noMoreSee: { control: 'boolean' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <Modal
      open={isModalOpen}
      closeModal={closeModal}
      header="헤더입니다"
      title="타이틀입니다"
      description={'설명설명설명설명설명설명설명설명'}
      buttons={
        <Button type="primary" width="large">
          기록할 맥주 검색하러 가기
        </Button>
      }
      withCloseButton
      noMoreSee
    />
  );
};

export const Default = Template.bind({});

export const 로그아웃: ComponentStory<typeof Modal> = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <Modal
      open={isModalOpen}
      closeModal={closeModal}
      buttons={
        <>
          <Button type="grey" onClick={closeModal}>
            취소
          </Button>
          <Button type="primary" onClick={closeModal}>
            확인
          </Button>
        </>
      }
      title="로그아웃 하시겠어요?"
    />
  );
};

export const 회원탈퇴: ComponentStory<typeof Modal> = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <Modal
      open={isModalOpen}
      closeModal={closeModal}
      buttons={
        <>
          <Button type="grey" onClick={closeModal}>
            취소
          </Button>
          <Button type="primary" onClick={closeModal}>
            확인
          </Button>
        </>
      }
      title="정말 회원 탈퇴 하시겠어요?"
      description="회원 탈퇴 시 저장된 모든 정보가 삭제됩니다."
    />
  );
};

export const 닉네임_수정: ComponentStory<typeof Modal> = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <Modal
      open={isModalOpen}
      closeModal={closeModal}
      withCloseButton
      header="닉네임 수정하기"
      buttons={
        <Button type="primary" width="large" onClick={closeModal}>
          완료
        </Button>
      }
    />
  );
};

export const 기록할_맥주_검색_하러가기: ComponentStory<typeof Modal> = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <Modal
      open={isModalOpen}
      closeModal={closeModal}
      title="어떤 맥주를 기록하시겠어요?"
      description="맥주를 선택하면 기록을 시작할 수 있어요."
      withCloseButton
      buttons={
        <Button type="primary" width="large" onClick={closeModal}>
          기록할 맥주 검색하러 가기
        </Button>
      }
      noMoreSee
    />
  );
};
