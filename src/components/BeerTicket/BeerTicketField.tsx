import styled from '@emotion/styled';
import cx from 'classnames';
import React from 'react';

interface BeerTicketFieldProps {
  title?: string;
  size?: 'max' | 'half';
  className?: string;
  children?: React.ReactNode;
}

const BeerTicketField: React.FC<BeerTicketFieldProps> = ({
  title,
  size = 'half',
  className,
  children,
}) => {
  return (
    <StyledBeerTicketField className={cx([size == 'max' && 'beer-ticket-field-max'])}>
      <div className="beer-ticket-field-title">{title?.toUpperCase()}</div>
      <div className={cx(['beer-ticket-field-content', className])}>{children}</div>
    </StyledBeerTicketField>
  );
};

const StyledBeerTicketField = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & .beer-ticket-field-title {
    ${({ theme }) => theme.fonts.SmallBold3}
    color: ${({ theme }) => theme.color.grey2};
    margin-bottom: 4px;
  }

  &.beer-ticket-field-max {
    width: 100%;
  }
`;

export default BeerTicketField;
