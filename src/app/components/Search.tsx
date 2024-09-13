'use client';

import { useSearch } from '@/hooks/useSearch';
import { IoSearch } from 'react-icons/io5';

export const Search = () => {
  const { setSearch } = useSearch();

  return (
    <div className="group flex h-11 w-full items-center gap-2 overflow-hidden rounded-lg border border-gray-400 bg-white p-2 transition-colors duration-200 focus-within:border-gray-700">
      <IoSearch
        className="text-gray-400 group-focus-within:text-gray-700"
        size={20}
      />

      <input
        placeholder="Search menu items"
        onChange={(event) => {
          const value = event.target.value;

          setSearch({
            text: value,
          });
        }}
        className="w-full text-gray-700 outline-none placeholder:text-gray-700/50"
      />
    </div>
  );
};
