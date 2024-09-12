import { SelectedProduct } from '@/@types/cart';
import { ActionButtons } from '@/app/components/ActionButtons';
import { useAppDispatch } from '@/lib/redux/hooks';
import { useCallback, useMemo, useState } from 'react';
import { update } from '@/lib/redux/slices/cart';

type CartProductProps = {
  product: SelectedProduct;
};

export const CartProduct = ({ product }: CartProductProps) => {
  const [amount, setAmount] = useState(product.amount);

  const { name, modifierName, price, ccySymbol } = product;

  const dispatch = useAppDispatch();

  const priceUpdated = useMemo(() => {
    return (amount * price).toFixed(2);
  }, [amount, price]);

  const handleAddToCart = useCallback(() => {
    setAmount((prevState) => prevState + 1);

    dispatch(update({ ...product, amount: amount + 1 }));
  }, [amount, dispatch, product]);

  const handleRemoveFromCart = useCallback(() => {
    setAmount((prevState) => prevState - 1);

    dispatch(update({ ...product, amount: amount - 1 }));
  }, [amount, dispatch, product]);

  return (
    <div className="flex items-start justify-between gap-1 py-2">
      <div className="flex flex-col gap-1">
        <p className="text-gray-900">{name}</p>
        {modifierName && (
          <span className="text-gray-500">{`With ${modifierName}`}</span>
        )}

        <ActionButtons
          size="sm"
          amount={amount}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      </div>

      <span className="text-gray-900">{`${ccySymbol} ${priceUpdated}`}</span>
    </div>
  );
};
