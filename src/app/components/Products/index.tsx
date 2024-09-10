'use client';

import { RootState } from '@/lib/redux/store';
import { Category } from './Category';
import { useAppSelector } from '@/lib/redux/hooks';
import { CategoryList } from './CategoryList';

export const Products = () => {
  const { menu } = useAppSelector((store: RootState) => store?.menu);

  return (
    <div className="h-full w-full bg-white px-4 py-5 shadow-[0px_2px_14px_0px_#00000024]">
      <div className="flex w-full items-center gap-3">
        {menu?.sections?.map((section) => (
          <Category
            key={section.id}
            imageSrc={section.images[0]?.image}
            title={section.name}
          />
        ))}
      </div>

      <CategoryList categories={menu?.sections} />
    </div>
  );
};
