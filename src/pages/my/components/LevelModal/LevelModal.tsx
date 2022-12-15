import styled from '@emotion/styled';

import Modal from '@/components/Modal';

import { ILevel } from '@/types';

interface Props {
  open: boolean;
  closeModal: () => void;
  levels: ILevel[];
}

const LevelModal = ({ open, closeModal, levels }: Props) => {
  return (
    <Modal
      open={open}
      closeModal={closeModal}
      header="Level 안내"
      withCloseButton
      description={
        <LevelList>
          {levels?.map(({ id, imageUrl, req, tier }) => (
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
