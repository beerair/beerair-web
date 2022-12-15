import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import cx from 'classnames';
import { InViewHookResponse } from 'react-intersection-observer';

import { IRecord } from '@/types-old';
import RecordListItem from '../RecordListItem';

interface RecordListProps {
  records: IRecord[];
  lastItemRef?: InViewHookResponse['ref'];
}

const RecordList: React.FC<RecordListProps> = ({ records, lastItemRef }) => {
  return (
    <StyledRecordList>
      {records.map((record, i) => (
        <Link href={`/record/ticket/${record.id}`} passHref key={record.id}>
          <a
            className={cx(['records-list-item', i === 0 && records.length === 1 && 'single-item'])}
          >
            <RecordListItem
              record={record}
              ref={i === records.length - 1 ? lastItemRef : undefined}
            />
          </a>
        </Link>
      ))}
    </StyledRecordList>
  );
};

const StyledRecordList = styled.section`
  & .records-list-item {
    display: block;
    margin-bottom: 36px;
    position: relative;

    &:not(:last-child)::before {
      position: absolute;
      content: ' ';
      width: 0px;
      height: 63px;
      border: 1px dashed ${({ theme }) => theme.color.whiteOpacity80};
      bottom: 15px;
      left: 17px;
      transform: translateY(100%);
    }

    &:not(.single-item):first-of-type::after {
      position: absolute;
      content: ' ';
      width: 20px;
      height: 20px;
      background: url('/images/airplane_top.svg') no-repeat center;
      background-size: contain;
      bottom: -5px;
      left: 8px;
      transform: translateY(100%);
    }
  }
`;

export default RecordList;
