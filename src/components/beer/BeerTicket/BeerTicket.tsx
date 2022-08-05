import React from 'react';
import styled from '@emotion/styled';
import { format, parseISO } from 'date-fns';

import StyledBeerTicketField from './BeerTicketField';
import BeerTicketFlight from './BeerTicketFlight';
import BeerTicketStamp from './BeerTicketStamp';
import BeerTicketSection from './BeerTicketSection';

import { IRecord } from '@/types';
import Icon from '@/components/commons/Icon';
import { FEEL_MESSAGES } from '@/constants/messages';
import BeerPhotoLabel from '@/components/beer/BeerPhotoLabel';
import Emoji from '@/components/commons/Emoji';

export const BEER_TICKET_WIDTH = 300;

interface BeerTicketProps {
  record: IRecord;
  type?: 'default' | 'stamp';
  id?: string;
  className?: string;
}

const BeerTicket: React.FC<BeerTicketProps> = ({
  record,
  type = 'default',
  id = '',
  className,
}) => {
  return (
    <StyledBeerTicket className={className} id={id}>
      <header className="beer-ticket-header">
        <Icon name="Logo" semanticColor="primary" size={60} />
        <span className="barlow-small">{`BR118${record.id.toString().padStart(3, '0')}`}</span>
      </header>
      <BeerPhotoLabel scale={0.8} beer={record.beerResponseDto} background={record.imageUrl} />
      <BeerTicketSection>
        <BeerTicketFlight
          prevCountryNameEng={record.startCountryEng}
          prevCountryNameKor={record.startCountryKor}
          nextCountryNameEng={record.endCountryEng}
          nextCountryNameKor={record.endCountryKor}
        />
      </BeerTicketSection>
      <BeerTicketSection bottomBorder>
        <StyledBeerTicketField title="date" className="beer-ticket-date">
          {format(parseISO(record.createdAt), 'dd/LLL/yyyy')}
        </StyledBeerTicketField>
        <StyledBeerTicketField title="boarding time" className="beer-ticket-date">
          {format(parseISO(record.createdAt), 'p')}
        </StyledBeerTicketField>
        {type === 'stamp' && (
          <>
            <div className="beer-ticket-dot left" />
            <div className="beer-ticket-dot right" />
          </>
        )}
      </BeerTicketSection>
      {type === 'default' ? (
        <>
          <BeerTicketSection bottomBorder>
            <StyledBeerTicketField title="feel" className="beer-ticket-feel">
              <Emoji feel={record.feel} size={24} className="ticket-feel-emoji" />
              <p>{FEEL_MESSAGES[record.feel]}</p>
            </StyledBeerTicketField>
            <StyledBeerTicketField title="taste">
              {record.flavorDtos.map((flavor) => (
                <span key={flavor.id} className="beer-ticket-flavor">
                  {flavor.content}
                </span>
              ))}
            </StyledBeerTicketField>
            <div className="beer-ticket-dot left" />
            <div className="beer-ticket-dot right" />
          </BeerTicketSection>
          <BeerTicketSection>
            <StyledBeerTicketField title="impression" size="max" className="beer-ticket-content">
              {record.content}
            </StyledBeerTicketField>
          </BeerTicketSection>
        </>
      ) : (
        <BeerTicketSection>
          <BeerTicketStamp feel={record.feel} recordedAt={record.createdAt} />
        </BeerTicketSection>
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
  overflow-x: hidden;
  overflow-y: auto;

  & .beer-ticket-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 11px 24px 10px 24px;

    & .barlow-small {
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
