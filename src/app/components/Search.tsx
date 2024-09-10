import { IoSearch } from 'react-icons/io5';

export const Search = () => {
  return (
    <div className="flex h-11 w-full items-center gap-2 overflow-hidden rounded-lg border border-gray-400 bg-white p-2">
      <IoSearch className="text-gray-400" size={20} />

      <input
        placeholder="Search menu items"
        className="w-full text-gray-700 outline-none placeholder:text-gray-700/50"
      />
    </div>
  );
};
