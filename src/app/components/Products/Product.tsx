import { useAppSelector } from '@/lib/redux/hooks';
import { RootState } from '@/lib/redux/store';
import Image from 'next/image';

type Product = {
  title: string;
  image?: string;
  description?: string;
  price: number;
};

export const Product = (props: Product) => {
  const { title, image, description, price } = props || {};

  const { restaurant } = useAppSelector(
    (store: RootState) => store?.restaurant
  );

  const currencySymbol = restaurant?.ccySymbol;

  const priceFormatted = price.toFixed(2);

  return (
    <div className="flex w-full items-center gap-4 pt-4">
      <div className="flex w-full flex-col gap-1">
        <h4 className="text-gray-900">{title}</h4>

        {description && (
          <p className="text-light line-clamp-1 text-gray-600">{description}</p>
        )}

        <strong className="text-gray-600">{`${currencySymbol} ${priceFormatted}`}</strong>
      </div>

      {image && (
        <div className="relative h-[5.313rem] w-32">
          <Image
            src={image}
            alt={title}
            fill
            className="rounded-md object-cover"
          />
        </div>
      )}
    </div>
  );
};
