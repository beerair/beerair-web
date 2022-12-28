import styled from '@emotion/styled';
import React from 'react';

import Icon from '@/components/Icon';
import { ICountry } from '@/types';
import { sliceAndUpperCase } from '@/utils/string';

interface BeerTicketFlightProps {
  departuresCountry: ICountry;
  arrivalCountry: ICountry;
}

const BeerTicketFlight: React.FC<BeerTicketFlightProps> = ({
  departuresCountry,
  arrivalCountry,
}) => {
  return (
    <StyledBeerTicketFlight>
      <div>
        <div className="ticket-country-eng">
          {sliceAndUpperCase(departuresCountry.engName || 'non', 3)}
        </div>
        <div className="ticket-country-kor">{departuresCountry.korName}</div>
      </div>
      <Icon name="Airplane" size={20} />
      <div>
        <div className="ticket-country-eng">
          {sliceAndUpperCase(arrivalCountry.engName || 'non', 3)}
        </div>
        <div className="ticket-country-kor">{arrivalCountry.korName}</div>
      </div>
    </StyledBeerTicketFlight>
  );
};

export default BeerTicketFlight;

const StyledBeerTicketFlight = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.color.grey0};
  padding: 4px 20px 8px 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .ticket-country-eng {
    ${({ theme }) => theme.fonts.BarlowBig}
    color: ${({ theme }) => theme.semanticColor.primary};
    line-height: 38px;
    width: 90px;
    text-align: center;
  }

  & .ticket-country-kor {
    ${({ theme }) => theme.fonts.SmallBold3}
    color: ${({ theme }) => theme.color.grey3};
    text-align: center;
  }
`;
