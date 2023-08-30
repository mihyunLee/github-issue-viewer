import React from 'react';
import { useIssueContext } from '../context/issueContext';
import { IIssue } from '../types';
import IssueItem from './IssueItem';

export default function IssueList() {
  const { state: issueList } = useIssueContext();

  return (
    <ul>
      {issueList.map((issueData: IIssue) => (
        <IssueItem key={issueData.id} issueData={issueData} />
      ))}
    </ul>
  );
}
