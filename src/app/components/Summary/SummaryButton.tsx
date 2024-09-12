'use client';

import { useAppSelector } from '@/lib/redux/hooks';
import { RootState } from '@/lib/redux/store';
import * as Dialog from '@radix-ui/react-dialog';
import { IoClose } from 'react-icons/io5';
import { Button } from '@/app/components/Button';
import { Summary } from '@/app/components/Summary';
import { ComponentProps } from 'react';
import { cn } from '@/utils/cn';

type SummaryButtonProps = ComponentProps<typeof Dialog.Root> & {
  className: string;
};

export const SummaryButton = (props: SummaryButtonProps) => {
  const { restaurant } = useAppSelector(
    (store: RootState) => store?.restaurant
  );

  const { className, ...rest } = props;

  const { cart } = useAppSelector((store: RootState) => store?.cart);

  const primaryColour = restaurant?.webSettings?.primaryColour;

  const cartProductsAmount = cart?.products.length ?? 0;

  if (!cartProductsAmount) {
    return null;
  }

  return (
    <Dialog.Root {...rest}>
      <Dialog.Trigger asChild>
        <div
          className={cn(
            'fixed bottom-0 left-0 flex w-full bg-white/30 p-6 pt-2 md:hidden',
            className
          )}
        >
          <Button
            style={{ background: primaryColour }}
          >{`Your basket • ${cartProductsAmount} item`}</Button>
        </div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-gray-900/85" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed bottom-0 left-0 h-full max-h-[100vh] w-[100vw] translate-x-0 translate-y-0 overflow-hidden bg-white focus:outline-none max-md:overflow-y-auto md:bottom-[unset] md:left-[50%] md:top-[50%] md:max-h-[85vh] md:w-[90vw] md:max-w-[30rem] md:translate-x-[-50%] md:translate-y-[-50%]">
          <Summary />

          <Dialog.Close asChild>
            <button className="absolute right-4 top-4 flex size-7 items-center justify-center rounded-full bg-white transition-all duration-300 hover:brightness-75">
              <IoClose size={20} style={{ color: primaryColour }} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
