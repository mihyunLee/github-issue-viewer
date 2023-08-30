import React, { useEffect } from 'react';
import { getIssueList } from '../apis/requests';
import { IIssue, IIssueList } from '../types';
import { useIssueContext } from '../context/issueContext';
import IssueList from '../components/IssueList';

export default function IssueListPage() {
  const { dispatch } = useIssueContext();

  useEffect(() => {
    const fetchIssueList = async () => {
      try {
        const res = await getIssueList();
        const issueList: IIssueList = res.map((issue: IIssue) => ({
          id: issue.id,
          number: issue.number,
          title: issue.title,
          created_at: issue.created_at,
          user: { login: issue.user.login, avatar_url: issue.user.avatar_url },
          comments: issue.comments,
          body: issue.body,
        }));

        dispatch({ type: 'SET_ISSUE', payload: issueList });
      } catch (err) {
        console.error('Error fetching issue data:', err);
      }
    };
    fetchIssueList();
  }, []);

  return (
    <>
      <IssueList />
    </>
  );
}
