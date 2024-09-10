'use client';

import { RootState } from '@/lib/redux/store';
import { Category } from './Category';
import { Product } from './Product';
import { useAppSelector } from '@/lib/redux/hooks';

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

      {menu?.sections?.map((section) => (
        <div key={section.id}>
          <div className="pb-3 pt-8">
            <h3 className="text-2xl text-gray-900">{section.name}</h3>
          </div>

          {section?.items.map((item) => (
            <Product
              key={item.id}
              title={item?.name}
              description={item?.description}
              image={item?.images && item?.images[0]?.image}
              price={item?.price}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
