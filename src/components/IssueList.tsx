import React from 'react';
import { IIssue } from '../types';
import IssueItem from './IssueItem';
import { useIssueContext } from '../context/issueContext';
import Ad from './Ad';

export default function IssueList() {
  const { state: issueList } = useIssueContext();

  return (
    <ul>
      {issueList.map((issueData: IIssue, idx) => (
        <li key={issueData.id}>
          <IssueItem issueData={issueData} />
          {(idx + 1) % 4 === 0 && <Ad />}
        </li>
      ))}
    </ul>
  );
}
