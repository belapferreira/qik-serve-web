'use client';

import { useAppSelector } from '@/lib/redux/hooks';
import { RootState } from '@/lib/redux/store';
import { IoAdd, IoRemove } from 'react-icons/io5';

type ActionButtonsProps = {
  size?: 'sm' | 'md' | 'lg';
};

export const ActionButtons = (props: ActionButtonsProps) => {
  const { size } = props;

  const { restaurant } = useAppSelector(
    (store: RootState) => store?.restaurant
  );

  const primaryColour = restaurant?.webSettings?.primaryColour;

  return (
    <div data-size={size} className="group flex items-center gap-4">
      <button className="flex size-8 items-center justify-center rounded-full bg-gray-200 group-data-[size='sm']:size-5">
        <IoRemove size={24} className="text-gray-500" />
      </button>
      <strong className="text-2xl text-gray-900 group-data-[size='sm']:text-base">
        1
      </strong>
      <button
        className="flex size-8 items-center justify-center rounded-full group-data-[size='sm']:size-5"
        style={{ background: primaryColour }}
      >
        <IoAdd size={size === 'sm' ? 18 : 24} className="text-white" />
      </button>
    </div>
  );
};
