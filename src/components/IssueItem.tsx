import React from 'react';
import { IIssue } from '../types';
import { useNavigate } from 'react-router-dom';

interface IIssueItemProps {
  issueData: IIssue;
}

export default function IssueItem({ issueData }: IIssueItemProps) {
  const navigate = useNavigate();

  const handleClickIssue = (issueId: number) => {
    navigate(`/issues/${issueId}`);
  };

  return (
    <article onClick={() => handleClickIssue(issueData.number)}>
      <p>
        #{issueData.number} {issueData.title}
      </p>
      <span>
        작성자: {issueData.user.login}, 작성일:
        {new Date(issueData.created_at).toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </span>
      <span>코멘트: {issueData.comments}</span>
    </article>
  );
}
