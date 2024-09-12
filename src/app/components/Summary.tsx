'use client';

import { ActionButtons } from './ActionButtons';

export const Summary = () => {
  const isEmpty = false;

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
            <div className="flex items-start justify-between gap-1 py-2">
              <div className="flex flex-col gap-1">
                <p className="text-gray-900">Caipirinha</p>
                <ActionButtons size="sm" />
              </div>

              <p className="text-gray-900">R$ 35.00</p>
            </div>

            <div className="flex items-start justify-between gap-1 py-2">
              <div className="flex flex-col gap-1">
                <p className="text-gray-900">Smash Brooks</p>
                <span className="text-gray-500">Com 2 carnes</span>
                <ActionButtons size="sm" />
              </div>

              <span className="text-gray-900">R$ 35.00</span>
            </div>
          </div>

          <div className="flex w-full flex-col border-t border-background bg-foreground text-gray-900">
            <div className="flex w-full justify-between p-4 pb-2.5">
              <span>Sub total</span>

              <span className="text-gray-900">R$ 35.00</span>
            </div>

            <div className="flex justify-between border-t border-gray-200 p-4">
              <span>Total:</span>

              <span className="text-gray-900">R$ 35.00</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
