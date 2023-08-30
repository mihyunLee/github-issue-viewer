import React from 'react';
import Header from '../components/common/Header';
import { ORGANIZATION_NAME, REPOSITORY_NAME } from '../constants';
import { useIssueContext } from '../context/issueContext';
import { useParams } from 'react-router-dom';
import IssueItem from '../components/IssueItem';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import * as S from '../styles/Layout';
import styled from 'styled-components';

export default function IssueDetailPage() {
  const { state } = useIssueContext();
  const { id: issueId } = useParams();

  const issueData = state.find((issue) => issue.number === Number(issueId));

  return (
    <S.Layout>
      <Header organizationName={ORGANIZATION_NAME} repositoryName={REPOSITORY_NAME} />
      {issueData && (
        <IssueCard>
          <IssueItem issueData={issueData} isAuthorImage={true} />
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              img: ({ ...props }) => <img style={{ maxWidth: '100%' }} {...props} alt='' />,
            }}
          >
            {issueData.body}
          </ReactMarkdown>
        </IssueCard>
      )}
    </S.Layout>
  );
}

const IssueCard = styled.article``;
