'use client';

import { RootState } from '@/lib/redux/store';
import { Category } from './Category';
import { useAppSelector } from '@/lib/redux/hooks';
import { CategoryList } from './CategoryList';
import ScrollContainer from 'react-indiana-drag-scroll';
import { useCallback, useState } from 'react';

export const Products = () => {
  const { menu } = useAppSelector((store: RootState) => store?.menu);
  const [active, setActive] = useState(() => menu?.sections[0]?.name || '');

  const handleCategoryClick = useCallback((name: string) => {
    setActive(name);
  }, []);

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

      <CategoryList categories={menu?.sections} />
    </div>
  );
};
