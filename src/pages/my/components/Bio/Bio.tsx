import styled from '@emotion/styled';

import Icon from '@/components/Icon';
import { levels } from '@/constants/dummy';
import { useModal } from '@/hooks';
import { ILevel } from '@/types-old';

import LevelModal from '../LevelModal';
import NicknameModifyModal from '../NicknameModifyModal';

export interface BioProps {
  remainRecordCount: number;
  userLevel: ILevel;
  nickname: string;
  email: string;
}

const Bio = ({ remainRecordCount, userLevel, nickname, email }: BioProps) => {
  const [isLevelModalOpen, openLevelModal, closeLevelModal] = useModal();
  const [isModifyModalOpen, openModifyModal, closeModifyModal] = useModal();

  const onSubmit = () => {
    closeModifyModal();
    // TODO: nickname update mutation 연결
  };

  return (
    <StyledBio>
      <ToolTip>
        {remainRecordCount > 0
          ? `여행 ${remainRecordCount}번만 더 하면 Level UP!`
          : '만렙이 되신걸 축하합니다!'}
        <InfoIcon name="Info" size={20} onClick={openLevelModal} />
      </ToolTip>
      <LevelImage src={userLevel?.imageUrl} alt={userLevel?.tier.toString()} />
      <NickName>
        {nickname}
        <button type="button" aria-label="수정">
          <ModifyIcon name="Modify" size={24} onClick={openModifyModal} />
        </button>
      </NickName>
      <Email>{email}</Email>
      {isLevelModalOpen && (
        <LevelModal open={isLevelModalOpen} closeModal={closeLevelModal} levels={levels} />
      )}
      {isModifyModalOpen && (
        <NicknameModifyModal
          open={isModifyModalOpen}
          closeModal={closeModifyModal}
          onSubmit={onSubmit}
        />
      )}
    </StyledBio>
  );
};

export default Bio;

const StyledBio = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ToolTip = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 214px;
  height: 44px;
  background: ${({ theme }) => theme.semanticColor.primary};
  border-radius: 8px;
  ${({ theme }) => theme.fonts.SubTitle5};
  color: ${({ theme }) => theme.color.white};

  ::after {
    border-top: 10px solid ${({ theme }) => theme.semanticColor.primary};
    border-left: 10px solid transparent;
    border-right: 10px solid ${({ theme }) => theme.semanticColor.primary};
    border-bottom: 10px solid transparent;
    content: '';
    position: absolute;
    bottom: -13px;
    left: 62px;
  }
`;

const InfoIcon = styled(Icon)`
  cursor: pointer;
`;

const LevelImage = styled.img`
  width: 100px;
  height: auto;
  margin: 30px 0 40px 0;
`;

const NickName = styled.div`
  ${({ theme }) => theme.fonts.H2}
  position: relative;
  display: flex;
  margin-bottom: 6px;
`;

const ModifyIcon = styled(Icon)`
  position: absolute;
  top: 0;
  left: calc(100% + 12px);
`;

const Email = styled.p`
  ${({ theme }) => theme.fonts.Body4}
  color: ${({ theme }) => theme.color.whiteOpacity80};
`;
