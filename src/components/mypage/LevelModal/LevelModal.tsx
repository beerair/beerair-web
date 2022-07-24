import styled from '@emotion/styled';

import { ILevel } from '@/types';
import Modal from '@/components/Modal';
import { useState } from 'react';

interface Props {
  isLevelModalOpen: boolean;
  openLevelModal: () => void;
  closeLevelModal: () => void;
  levels: ILevel[];
}

const LevelModal = ({ isLevelModalOpen, closeLevelModal, levels }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Modal
      open={isModalOpen}
      openModal={openModal}
      closeModal={closeModal}
      header="Level 안내"
      withCloseButton
      description={
        <LevelList>
          {levels.map(({ id, imageUrl, req, tier }) => (
            <LevelListItem key={id}>
              <img src={imageUrl} alt={tier.toString()} width="64px" height="auto" />
              <p>
                Level {tier} : 기록한 티켓 {req}개 이상
              </p>
            </LevelListItem>
          ))}
        </LevelList>
      }
    />
  );
};

export default LevelModal;

const LevelList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 40px;
  margin-top: 40px;
  margin-bottom: 8px;
`;

const LevelListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  ${({ theme }) => theme.fonts.Body4};
  color: ${({ theme }) => theme.color.grey4};
`;
