import React from 'react';
import { IIssue } from '../types';
import IssueItem from './IssueItem';
import { useIssueContext } from '../context/issueContext';

export default function IssueList() {
  const { state: issueList } = useIssueContext();

  return (
    <ul>
      {issueList.map((issueData: IIssue) => (
        <li key={issueData.id}>
          <IssueItem issueData={issueData} />
        </li>
      ))}
    </ul>
  );
}
