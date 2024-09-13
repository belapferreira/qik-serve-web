'use client';

import { RootState } from '@/lib/redux/store';
import { Category } from './Category';
import { useAppSelector } from '@/lib/redux/hooks';
import { CategoryList } from './CategoryList';
import ScrollContainer from 'react-indiana-drag-scroll';
import { useCallback, useMemo, useState } from 'react';
import { useSearch } from '@/hooks/useSearch';

export const Products = () => {
  const { menu } = useAppSelector((store: RootState) => store?.menu);
  const [active, setActive] = useState(() => menu?.sections[0]?.name || '');

  const { search } = useSearch();

  const handleCategoryClick = useCallback((name: string) => {
    setActive(name);
  }, []);

  const text = search.text;

  const sectionsFiltered = useMemo(() => {
    if (text) {
      return menu?.sections?.filter((section) => {
        return section.items.some(
          (item) => item.name.includes(text) || item.description?.includes(text)
        );
      });
    }

    return menu?.sections;
  }, [menu?.sections, text]);

  return (
    <div className="h-full w-full bg-white py-5 md:px-4 md:shadow-[0px_2px_14px_0px_#00000024]">
      <ScrollContainer className="flex w-full items-center gap-3">
        {menu?.sections?.map((section) => (
          <Category
            key={section.id}
            name={section.name}
            activeCategory={active}
            imageSrc={section.images[0]?.image}
            handleClick={handleCategoryClick}
          />
        ))}
      </ScrollContainer>

      {sectionsFiltered?.length ? (
        <CategoryList categories={sectionsFiltered} />
      ) : (
        <div className="flex h-full w-full justify-center py-16">
          <p className="text-center text-gray-500">No results found</p>
        </div>
      )}
    </div>
  );
};
