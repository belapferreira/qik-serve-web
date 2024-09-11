import { Section } from '@/@types/menu';
import * as Accordion from '@radix-ui/react-accordion';
import { Product } from './Product';
import { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';

type CategoryListProps = {
  categories?: Section[];
};

export const CategoryList = ({ categories }: CategoryListProps) => {
  const [defaultValue] = useState(() => {
    const categoriesValue = categories?.map((category) => String(category.id));

    return categoriesValue;
  });

  return (
    <Accordion.Root type="multiple" defaultValue={defaultValue}>
      {categories?.map((category) => (
        <Accordion.Item key={category.id} value={String(category.id)}>
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full">
              <div className="flex w-full items-center justify-between pb-3 pt-8 text-gray-900">
                <h3 className="text-2xl" id={category.name}>
                  {category.name}
                </h3>

                <IoChevronDown
                  size={20}
                  className="transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
                />
              </div>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            {category?.items.map((product) => (
              <Product key={product.id} {...product} />
            ))}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};
