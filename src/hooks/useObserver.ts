import { useCallback, useEffect, useRef } from 'react';

interface IHooksProps {
  hasNextPage: boolean;
  isLoading: boolean;
  fetchNextPage: () => Promise<void>;
}

export default function useObserver({ hasNextPage, isLoading, fetchNextPage }: IHooksProps) {
  const observerRef = useRef<HTMLDivElement | null>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage],
  );

  useEffect(() => {
    const element = observerRef.current;
    const option = { threshold: 0 };
    const observer = new IntersectionObserver(handleObserver, option);

    if (element) {
      observer.observe(element);
      return () => observer.unobserve(element);
    }
  }, [fetchNextPage, handleObserver, isLoading]);

  return observerRef;
}
