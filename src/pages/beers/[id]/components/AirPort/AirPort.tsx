import styled from '@emotion/styled';
import { isNil } from 'lodash';

import Icon from '@/components/Icon';
import { ICountry } from '@/types';
import { sliceAndUpperCase } from '@/utils/string';

interface AirPortItemProps {
  title: string;
  kor: string;
  eng: string;
}

const AirPortItem = (props: AirPortItemProps) => {
  const { title, kor, eng } = props;
  return (
    <StyledAirPortItem>
      <Title>{title}</Title>
      <Eng>{!isNil(eng) && sliceAndUpperCase(eng, 3)}</Eng>
      <Kor>{!isNil(kor) && kor}</Kor>
    </StyledAirPortItem>
  );
};

const StyledAirPortItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  gap: 3px;
`;

const Title = styled.div`
  ${({ theme }) => theme.fonts.Body2};
  color: ${({ theme }) => theme.color.whiteOpacity65};
`;

const Eng = styled.div`
  ${({ theme }) => theme.fonts.BarlowBig};
  color: ${({ theme }) => theme.color.white};
`;

const Kor = styled.div`
  ${({ theme }) => theme.fonts.Body4};
  color: ${({ theme }) => theme.color.grey1};
`;

export interface AirPortProps {
  startCountry: Pick<ICountry, 'korName' | 'engName'>;
  endCountry: Pick<ICountry, 'korName' | 'engName'>;
  className?: string;
}

const AirPort = (props: AirPortProps) => {
  const { startCountry, endCountry, className, ...rest } = props;

  return (
    <StyledAirPort {...rest} className={className}>
      <AirPortItem title="출발지" kor={startCountry?.korName} eng={startCountry?.engName} />
      <Icon name="FlyingAirplane" width="33%" />
      <AirPortItem title="도착지" kor={endCountry?.korName} eng={endCountry?.engName} />
    </StyledAirPort>
  );
};

export default AirPort;

const StyledAirPort = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 136px;
`;
