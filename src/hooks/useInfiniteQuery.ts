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
    try {
      const res = await queryFn(page);
      dispatch({ type: 'GET_ISSUE', payload: res });
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

/** FIXME: 이슈 아이템 클릭 후 뒤로 가기 실행 시 스크롤링하여 추가된 목록 데이터에 다시 1페이지부터의 데이터를 합치게 되어
 * 같은 데이터 리스트가 더해지는 오류가 발생한다.
 *
 * cf. Warning: Encountered two children with the same key
 */
