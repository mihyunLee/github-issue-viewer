export const ORGANIZATION_NAME = 'facebook';
export const REPOSITORY_NAME = 'react';

export const BASE_URL =
  `https://api.github.com/repos/${ORGANIZATION_NAME}/${REPOSITORY_NAME}` as const;

export const ISSUE_PER_PAGE = 10;
