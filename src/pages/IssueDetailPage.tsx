import React from 'react';
import Header from '../components/common/Header';
import { ORGANIZATION_NAME, REPOSITORY_NAME } from '../constants';

export default function IssueDetailPage() {
  return (
    <>
      <Header organizationName={ORGANIZATION_NAME} repositoryName={REPOSITORY_NAME} />
    </>
  );
}
