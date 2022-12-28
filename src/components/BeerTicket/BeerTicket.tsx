import styled from '@emotion/styled';
import { format, parseISO } from 'date-fns';
import React from 'react';

import Emoji from '@/components/Emoji';
import Icon from '@/components/Icon';
import { FEEL_MESSAGES } from '@/constants/messages';
import { IReview } from '@/types';

import BeerPhotoLabel from '../BeerPhotoLabel';

import BeerTicketField from './BeerTicketField';
import BeerTicketFlight from './BeerTicketFlight';
import BeerTicketSection from './BeerTicketSection';
import BeerTicketStamp from './BeerTicketStamp';

export const BEER_TICKET_WIDTH = 300;

interface BeerTicketProps {
  review: IReview;
  type?: 'default' | 'stamp';
  id?: string;
  className?: string;
}

// TODO: 반응형 너비 대응
const BeerTicket: React.FC<BeerTicketProps> = ({
  review,
  type = 'default',
  id = '',
  className,
}) => {
  const getBeerTicketCode = () => {
    const length = 3;
    return `BR118${
      review.id.length > length ? review.id.slice(0, length) : review.id.padStart(length, '0')
    }`;
  };

  return (
    <StyledBeerTicket className={className} id={id}>
      <header className="beer-ticket-header">
        <Icon name="Logo" semanticColor="primary" size={60} />
        <span className="beer-ticket-code">{getBeerTicketCode()}</span>
      </header>
      <BeerPhotoLabel scale={0.8} beer={review.beer} background={review.imageUrl} />
      <BeerTicketSection>
        <BeerTicketFlight
          departuresCountry={review.departuresCountry}
          arrivalCountry={review.arrivalCountry}
        />
      </BeerTicketSection>
      <BeerTicketSection bottomBorder>
        <BeerTicketField title="date" className="beer-ticket-date">
          {format(parseISO(review.createdAt), 'dd/LLL/yyyy')}
        </BeerTicketField>
        <BeerTicketField title="boarding time" className="beer-ticket-date">
          {format(parseISO(review.createdAt), 'p')}
        </BeerTicketField>
        {type === 'stamp' && (
          <>
            <div className="beer-ticket-dot left" />
            <div className="beer-ticket-dot right" />
          </>
        )}
      </BeerTicketSection>
      {type === 'stamp' ? (
        <BeerTicketSection>
          <BeerTicketStamp feel={review.feelStatus} recordedAt={review.createdAt} />
        </BeerTicketSection>
      ) : (
        <>
          <BeerTicketSection bottomBorder>
            <BeerTicketField title="feel" className="beer-ticket-feel">
              <Emoji feel={review.feelStatus} size={24} className="ticket-feel-emoji" />
              <p>{FEEL_MESSAGES[review.feelStatus]}</p>
            </BeerTicketField>
            <BeerTicketField title="taste">
              {review.flavors.map((flavor) => (
                <span key={flavor.id} className="beer-ticket-flavor">
                  {flavor.content}
                </span>
              ))}
            </BeerTicketField>
            <div className="beer-ticket-dot left" />
            <div className="beer-ticket-dot right" />
          </BeerTicketSection>
          <BeerTicketSection>
            <BeerTicketField title="impression" size="max" className="beer-ticket-content">
              {review.content}
            </BeerTicketField>
          </BeerTicketSection>
        </>
      )}
      <footer className="beer-ticket-footer">
        <Icon name="Logo" semanticColor="primary" size={60} />
      </footer>
    </StyledBeerTicket>
  );
};

const StyledBeerTicket = styled.article`
  width: ${BEER_TICKET_WIDTH}px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 16px;
  overflow: hidden;

  & .beer-ticket-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 11px 24px 10px 24px;

    & .beer-ticket-code {
      ${({ theme }) => theme.fonts.BarlowSmall}
      color: ${({ theme }) => theme.semanticColor.primary};
    }
  }

  & .ticket-feel-emoji {
    margin-bottom: 8px;
  }

  & footer.beer-ticket-footer {
    height: 30px;
    display: flex;
    justify-content: center;
    padding-bottom: 16px;
  }

  & .beer-ticket-flavor {
    ${({ theme }) => theme.fonts.SmallBold2}
    color: ${({ theme }) => theme.color.black100};
    display: block;
    margin-top: 4px;
  }

  & .beer-ticket-feel {
    ${({ theme }) => theme.fonts.SmallBold2}
    color: ${({ theme }) => theme.color.black100};
  }

  & .beer-ticket-date {
    ${({ theme }) => theme.fonts.SmallBold1}
    color: ${({ theme }) => theme.color.black100};
  }

  & .beer-ticket-content {
    ${({ theme }) => theme.fonts.Body5};
    color: ${({ theme }) => theme.color.grey4};
  }

  & .beer-ticket-dot {
    position: absolute;
    bottom: 0;
    background-color: ${({ theme }) => theme.color.black100};
    border-radius: 10px;
    width: 20px;
    height: 20px;

    &.left {
      left: 0;
      transform: translate(-50%, 50%);
    }

    &.right {
      right: 0;
      transform: translate(50%, 50%);
    }
  }
`;

export default BeerTicket;
