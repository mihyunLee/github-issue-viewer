import { instance } from './axiosInstance';

export const getIssueList = async () => {
  const res = await instance.get('/issues', {
    params: {
      sort: 'comments',
    },
  });
  return res.data;
};
