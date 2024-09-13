import { parseAsString, useQueryStates } from 'next-usequerystate';

export const useSearch = () => {
  const [search, setSearch] = useQueryStates({
    text: parseAsString,
  });

  const hasSearchActive = !!search;

  return {
    search,
    setSearch,
    hasSearchActive,
  };
};
