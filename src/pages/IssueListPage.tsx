import React from 'react';
import Header from '../components/common/Header';
import { getIssueList } from '../apis/requests';
import { ORGANIZATION_NAME, REPOSITORY_NAME } from '../constants';
import IssueList from '../components/IssueList';
import useInfiniteQuery from '../hooks/useInfiniteQuery';
import useObserver from '../hooks/useObserver';
import { styled } from 'styled-components';
import * as S from '../styles/Layout';

export default function IssueListPage() {
  const { hasNextPage, fetchNextPage, isLoading, isError } = useInfiniteQuery({
    queryKey: 'issueList',
    queryFn: getIssueList,
  });

  const observerRef = useObserver({ hasNextPage, fetchNextPage, isLoading });

  if (isLoading) {
    return <p>로딩중..</p>;
  }

  if (isError) {
    return <p>에러발생</p>;
  }

  return (
    <S.Layout>
      <Header organizationName={ORGANIZATION_NAME} repositoryName={REPOSITORY_NAME} />
      <IssueList />
      <ObserverTarget ref={observerRef} />
    </S.Layout>
  );
}

const ObserverTarget = styled.div`
  height: 1px;
`;
