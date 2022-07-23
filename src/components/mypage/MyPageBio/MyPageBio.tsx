import Icon from '@/components/commons/Icon';
import { ILevel } from '@/types';
import styled from '@emotion/styled';

export interface MyPageBioProps {
  remainRecord: number;
  userLevel: ILevel;
  nickname: string;
  email: string;
  openLevelModal?: () => void;
  openModifyModal?: () => void;
}

const MyPageBio = ({
  remainRecord,
  userLevel,
  nickname,
  email,
  openLevelModal,
  openModifyModal,
}: MyPageBioProps) => {
  return (
    <StyledMyPageBio>
      <ToolTip>
        {remainRecord > 0
          ? `여행 ${remainRecord}번만 더 하면 Level UP!`
          : '만렙이 되신걸 축하합니다!'}
        <InfoIcon name="Info" size={20} onClick={openLevelModal} />
      </ToolTip>
      <LevelImage src={userLevel?.imageUrl} alt={userLevel?.tier.toString()} />
      <NickName>
        {nickname}
        <ModifyIcon name="Modify" size={24} onClick={openModifyModal} />
      </NickName>
      <Email>{email}</Email>
    </StyledMyPageBio>
  );
};

export default MyPageBio;

const StyledMyPageBio = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  position: relative;
  display: flex;
  ${({ theme }) => theme.fonts.H2}
  margin-bottom: 6px;
`;

const ModifyIcon = styled(Icon)`
  cursor: pointer;
  position: absolute;
  left: calc(100% + 12px);
`;

const Email = styled.p`
  ${({ theme }) => theme.fonts.Body4}
  color: ${({ theme }) => theme.color.whiteOpacity80};
`;
