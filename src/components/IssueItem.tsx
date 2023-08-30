import React from 'react';
import { IIssue } from '../types';

interface IIssueItemProps {
  issueData: IIssue;
}

export default function IssueItem({ issueData }: IIssueItemProps) {
  return (
    <li>
      <p>
        #{issueData.number} {issueData.title}
      </p>
      <span>
        작성자: {issueData.user.login}, 작성일:
        {new Date(issueData.created_at).toLocaleDateString()}
      </span>
      <span>코멘트: {issueData.comments}</span>
    </li>
  );
}
