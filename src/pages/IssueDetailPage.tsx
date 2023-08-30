import React from 'react';
import Header from '../components/common/Header';
import { ORGANIZATION_NAME, REPOSITORY_NAME } from '../constants';
import { useIssueContext } from '../context/issueContext';
import { useParams } from 'react-router-dom';
import IssueItem from '../components/IssueItem';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function IssueDetailPage() {
  const { state } = useIssueContext();
  const { id: issueId } = useParams();

  const issueData = state.find((issue) => issue.number === Number(issueId));

  return (
    <>
      <Header organizationName={ORGANIZATION_NAME} repositoryName={REPOSITORY_NAME} />
      {issueData && (
        <article>
          <img src={issueData.user.avatar_url} alt='' />
          <IssueItem issueData={issueData} />
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              img: ({ ...props }) => <img style={{ maxWidth: '100%' }} {...props} alt='' />,
            }}
          >
            {issueData.body}
          </ReactMarkdown>
        </article>
      )}
    </>
  );
}
