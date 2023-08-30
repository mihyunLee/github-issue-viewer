import { ISSUE_PER_PAGE } from '../constants';
import { instance } from './axiosInstance';

export const getIssueList = async (page?: number) => {
  const res = await instance.get('/issues', {
    params: {
      sort: 'comments',
      page: page,
      per_page: ISSUE_PER_PAGE,
    },
  });
  return res.data;
};
