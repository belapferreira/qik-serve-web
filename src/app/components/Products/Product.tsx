import Image from 'next/image';
import { Product as ProductType } from '@/@types/menu';
import { ProductModal } from './ProductModal';
import { useCallback, useState } from 'react';
import { useRestaurantSettings } from '@/hooks/useRestaurantSettings';

export const Product = (props: ProductType) => {
  const { name, images, description, price } = props || {};

  const [openProductModal, setOpenProductModal] = useState(false);

  const { currencySymbol } = useRestaurantSettings();

  const priceFormatted = price.toFixed(2);

  const handleOpenProductModal = useCallback(() => {
    setOpenProductModal((prevState) => !prevState);
  }, []);

  return (
    <>
      <button
        className="flex w-full items-center gap-4 border-y border-transparent py-2 transition-colors duration-300 hover:border-gray-200/50"
        onClick={handleOpenProductModal}
      >
        <div className="flex w-full flex-col items-start gap-1">
          <h4 className="text-gray-900">{name}</h4>

          {description && (
            <p className="line-clamp-2 text-start font-light text-gray-600 md:line-clamp-1">
              {description}
            </p>
          )}

          <strong className="text-gray-600">{`${currencySymbol} ${priceFormatted}`}</strong>
        </div>

        {images && (
          <div className="relative h-[5.313rem] w-32 shrink-0">
            <Image
              src={images[0].image}
              alt={name}
              fill
              className="rounded-md object-cover"
            />
          </div>
        )}
      </button>

      <ProductModal
        product={props}
        open={openProductModal}
        onOpenChange={setOpenProductModal}
      />
    </>
  );
};
