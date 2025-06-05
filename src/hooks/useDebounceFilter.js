import { useMemo } from 'react';
import useDebounceSearch from './useDebounceSearch';

function useDebouncedFilter(data=[], query, filterFn, delay = 500) {
  const debouncedQuery = useDebounceSearch(query, delay);

  // Memoize filtered data for performance
  const filteredData = useMemo(() => {
    if (!data.length) return [];

    if (!debouncedQuery) return data;
    
    return data.filter(item => filterFn(item, debouncedQuery));
  }, [data, debouncedQuery, filterFn]);

  return filteredData;
}

export default useDebouncedFilter;
