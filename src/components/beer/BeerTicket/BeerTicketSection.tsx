import React from 'react';
import cx from 'classnames';
import styled from '@emotion/styled';

interface BeerTicketSectionProps {
  bottomBorder?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const BeerTicketSection: React.FC<BeerTicketSectionProps> = ({
  bottomBorder = false,
  className,
  children,
}) => (
  <StyledBeerTicketSection className={cx([bottomBorder && 'ticket-has-dashed-border ', className])}>
    {children}
  </StyledBeerTicketSection>
);

const StyledBeerTicketSection = styled.section`
  position: relative;
  padding: 16px 30px;
  width: 100%;
  display: flex;

  &.ticket-has-dashed-border {
    border-bottom: 1px dashed ${({ theme }) => theme.color.grey1};
  }
`;

export default BeerTicketSection;
