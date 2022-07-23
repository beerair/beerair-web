import styled from '@emotion/styled';

import ModalLayout from '@/components/layouts/ModalLayout';
import Icon from '@/components/commons/Icon';
import { ILevel } from '@/types';

const LEVEL_MODAL_TITLE = 'Level 안내';

interface Props {
  isLevelModalOpen: boolean;
  openLevelModal: () => void;
  closeLevelModal: () => void;
  levelData: ILevel[];
}

const LevelModal = ({ isLevelModalOpen, closeLevelModal, levelData }: Props) => {
  if (!levelData) {
    return null;
  }

  return (
    <ModalLayout open={isLevelModalOpen} onDimClick={closeLevelModal}>
      <StyleLevelModal open={isLevelModalOpen}>
        <Header>
          <CloseIcon name="Close" size={24} onClick={closeLevelModal} />
          <Title>{LEVEL_MODAL_TITLE}</Title>
        </Header>
        <LevelList>
          {levelData.map(({ id, imageUrl, req, tier }) => (
            <LevelListItem key={id}>
              <img src={imageUrl} alt={tier.toString()} width="64px" height="auto" />
              <p>
                Level {tier} : 기록한 티켓 {req}개 이상
              </p>
            </LevelListItem>
          ))}
        </LevelList>
      </StyleLevelModal>
    </ModalLayout>
  );
};

export default LevelModal;

const StyleLevelModal = styled.div<{ open: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 16px;
  border-radius: 12px;
  background-color: ${(p) => p.theme.color.white};

  ${(p) => !p.open && `display:none;`}
`;

const Header = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 25px;
`;

const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #323232;
`;

const CloseIcon = styled(Icon)`
  cursor: pointer;
`;

const LevelList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 40px;
  margin-bottom: 8px;
`;

const LevelListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  ${({ theme }) => theme.fonts.Body4};
  color: ${({ theme }) => theme.color.grey4};
`;
