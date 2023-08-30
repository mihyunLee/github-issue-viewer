import { useState, useEffect } from 'react';
import { useIssueContext } from '../context/issueContext';
import { IIssueList } from '../types';
import { ISSUE_PER_PAGE } from '../constants';

interface IHooksProps {
  queryKey: string;
  queryFn: (page: number) => Promise<IIssueList>;
}

export default function useInfiniteQuery({ queryKey, queryFn }: IHooksProps) {
  const { state: data, dispatch } = useIssueContext();

  const [page, setPage] = useState<number>(1);
  const [hasNextPage, setHasNextpage] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    if (data.length % ISSUE_PER_PAGE === 0) {
      setHasNextpage(true);
    } else {
      setHasNextpage(false);
    }
  }, [data]);

  const fetchNextPage = async () => {
    setIsLoading(true);
    try {
      const res = await queryFn(page);
      if (page === 1) {
        dispatch({ type: 'SET_ISSUE', payload: res });
      } else {
        dispatch({ type: 'GET_ISSUE', payload: res });
      }
      setPage((prev) => prev + 1);
      setIsLoading(false);
    } catch (err) {
      setIsError(true);
      setIsLoading(false);
      console.error(`Error fetching ${queryKey} data:`, err);
    }
  };

  useEffect(() => {
    fetchNextPage();
  }, []);

  return { data, hasNextPage, fetchNextPage, isLoading, isError };
}
