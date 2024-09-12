'use client';

import { useAppSelector } from '@/lib/redux/hooks';
import { RootState } from '@/lib/redux/store';
import { MouseEvent } from 'react';
import { IoAdd, IoRemove } from 'react-icons/io5';

type ActionButtonsProps = {
  size?: 'sm' | 'md' | 'lg';
  amount: number;
  handleAddToCart: (event: MouseEvent) => void;
  handleRemoveFromCart: (event: MouseEvent) => void;
};

export const ActionButtons = (props: ActionButtonsProps) => {
  const { size, amount, handleAddToCart, handleRemoveFromCart } = props;

  const { restaurant } = useAppSelector(
    (store: RootState) => store?.restaurant
  );

  const primaryColour = restaurant?.webSettings?.primaryColour;

  return (
    <div data-size={size} className="group flex items-center gap-4">
      <button
        onClick={handleRemoveFromCart}
        disabled={amount === 0}
        className="flex size-8 items-center justify-center rounded-full bg-gray-200 text-white disabled:text-gray-500 group-data-[size='sm']:size-5"
        {...(amount >= 1 && { style: { background: primaryColour } })}
      >
        <IoRemove size={24} />
      </button>
      <strong className="text-2xl text-gray-900 group-data-[size='sm']:text-base">
        {amount}
      </strong>
      <button
        onClick={handleAddToCart}
        className="flex size-8 items-center justify-center rounded-full text-white group-data-[size='sm']:size-5"
        style={{ background: primaryColour }}
      >
        <IoAdd size={size === 'sm' ? 18 : 24} />
      </button>
    </div>
  );
};
