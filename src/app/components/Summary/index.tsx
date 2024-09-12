'use client';

import { useAppSelector } from '@/lib/redux/hooks';
import { CartProduct } from './CartProduct';
import { RootState } from '@/lib/redux/store';
import { Button } from '@/app/components/Button';

export const Summary = () => {
  const { cart } = useAppSelector((store: RootState) => store?.cart);
  const { restaurant } = useAppSelector(
    (store: RootState) => store?.restaurant
  );

  const isEmpty = !cart?.products.length;

  const currencySymbol = restaurant?.ccySymbol;
  const primaryColour = restaurant?.webSettings?.primaryColour;

  const totalPrice = cart?.products
    .reduce((acc, curr) => {
      const currentTotalPrice = curr.price * curr.amount;
      return acc + currentTotalPrice;
    }, 0)
    .toFixed(2);

  return (
    <div className="flex h-max flex-col bg-white shadow-[0px_2px_14px_0px_#00000026]">
      <div className="bg-foreground p-[1.375rem] pl-6 text-2xl text-gray-600">
        <h2>Cart</h2>
      </div>

      {isEmpty ? (
        <div className="p-6">
          <p className="text-gray-600">Your cart is empty</p>
        </div>
      ) : (
        <div>
          <div className="flex flex-col gap-4 px-4 py-2">
            {cart.products.map((product) => (
              <CartProduct key={product.id} product={product} />
            ))}
          </div>

          <div className="flex w-full flex-col border-t border-background bg-foreground text-gray-900">
            <div className="flex w-full justify-between p-4 pb-2.5">
              <span>Sub total</span>

              <span className="text-gray-900">{`${currencySymbol} ${totalPrice}`}</span>
            </div>

            <div className="flex justify-between border-t border-gray-200 p-4">
              <span>Total:</span>

              <span className="text-gray-900">{`${currencySymbol} ${totalPrice}`}</span>
            </div>

            <div className="p-4">
              <Button style={{ background: primaryColour }}>
                Checkout now
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
