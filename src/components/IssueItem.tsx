import React from 'react';
import { IIssue } from '../types';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

interface IIssueItemProps {
  issueData: IIssue;
  isAuthorImage?: boolean;
}

export default function IssueItem({ issueData, isAuthorImage }: IIssueItemProps) {
  const navigate = useNavigate();

  const handleClickIssue = (issueId: number) => {
    navigate(`/issues/${issueId}`);
  };

  return (
    <IssueCard onClick={() => handleClickIssue(issueData.number)}>
      <IssueTitle>
        <span>#{issueData.number}</span> {issueData.title}
      </IssueTitle>
      <IssueInfo>
        Opened{' '}
        {new Date(issueData.created_at).toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}{' '}
        by {issueData.user.login}
        {isAuthorImage && <IssueAuthorImage src={issueData.user.avatar_url} alt='' />}
      </IssueInfo>
      <IssueComment>{issueData.comments}</IssueComment>
    </IssueCard>
  );
}

const IssueCard = styled.article`
  position: relative;
  padding: 2px 14px 14px 14px;
  border-bottom: 1px solid var(--gray500);
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s all ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const IssueTitle = styled.p`
  width: calc(100% - 65px);
  font-size: 20px;
  font-weight: bold;
  line-height: 1.8em;

  span {
    background-color: var(--purple);
    color: var(--black);
    font-size: 16px;
    padding: 5px 10px;
    border-radius: 30px;
    margin-right: 10px;
  }
`;

const IssueInfo = styled.span`
  color: var(--gray300);
`;

const IssueComment = styled.span`
  position: absolute;
  top: 34px;
  right: 14px;

  &::before {
    content: '💬';
    display: inline-block;
    width: 16px;
    height: 16px;
    margin: 0 8px;
  }
`;

const IssueAuthorImage = styled.img`
  width: 28px;
  height: 28px;
  margin-left: 10px;
  border-radius: 50%;
`;
