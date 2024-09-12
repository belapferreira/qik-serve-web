import { MouseEvent } from 'react';
import { Product, ProductModifier } from '@/@types/menu';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { RootState } from '@/lib/redux/store';
import { cn } from '@/utils/cn';
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { ComponentProps, useCallback, useMemo, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { ActionButtons } from '@/app/components/ActionButtons';
import { Button } from '@/app/components/Button';
import { add, update } from '@/lib/redux/slices/cart';
import { SelectedProduct } from '@/@types/cart';

type ProductModalProps = ComponentProps<typeof Dialog.Root> & {
  product: Product;
};

export const ProductModal = (props: ProductModalProps) => {
  const [modifierSelected, setModifierSelected] =
    useState<ProductModifier | null>(null);
  const [amount, setAmount] = useState(1);

  const { open, onOpenChange, product } = props;

  const { id, name, description, images, modifiers, price } = product;

  const dispatch = useAppDispatch();

  const { restaurant } = useAppSelector(
    (store: RootState) => store?.restaurant
  );

  const { cart } = useAppSelector((store: RootState) => store?.cart);

  const primaryColour = restaurant?.webSettings?.primaryColour;

  const currencySymbol = restaurant?.ccySymbol;

  const firstModifier = modifiers?.[0];

  const priceFormatted = useMemo(() => {
    let priceUpdated: number;

    if (firstModifier && modifierSelected) {
      priceUpdated = amount * modifierSelected.price;
    } else {
      priceUpdated = price * amount;
    }

    return priceUpdated.toFixed(2);
  }, [amount, firstModifier, modifierSelected, price]);

  const canSelectOneOption =
    firstModifier?.minChoices === 1 && firstModifier?.maxChoices === 1;

  const selectText = canSelectOneOption
    ? 'Select 1 option'
    : `Select between ${firstModifier?.minChoices} and ${firstModifier?.maxChoices === 1} options`;

  const isMainButtonDisabled = !!firstModifier && !modifierSelected;

  const handleSelectModifier = (modifier: ProductModifier) => {
    setModifierSelected(modifier);
  };

  const handleAddToCart = useCallback((event: MouseEvent) => {
    event.preventDefault();

    setAmount((prevState) => prevState + 1);
  }, []);

  const handleRemoveFromCart = useCallback((event: MouseEvent) => {
    event.preventDefault();

    setAmount((prevState) => prevState - 1);
  }, []);

  const handleSubmit = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();

      const existingProduct = cart?.products?.find(
        (product) =>
          product.id === id && product.modifierName === modifierSelected?.name
      );

      if (existingProduct) {
        dispatch(
          update({
            ...existingProduct,
            amount: existingProduct.amount + amount,
          })
        );
      } else {
        const currentPrice = firstModifier ? modifierSelected?.price : price;

        const product: SelectedProduct = {
          id,
          name,
          amount,
          price: currentPrice || 0,
          ccySymbol: currencySymbol || '',
          modifierName: modifierSelected?.name,
        };

        dispatch(add(product));
      }

      setAmount(1);
      setModifierSelected(null);

      onOpenChange && onOpenChange(false);
    },
    [
      id,
      name,
      price,
      amount,
      dispatch,
      onOpenChange,
      firstModifier,
      currencySymbol,
      cart?.products,
      modifierSelected?.name,
      modifierSelected?.price,
    ]
  );

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-gray-900/85" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed bottom-0 left-0 max-h-[100vh] w-[100vw] translate-x-0 translate-y-0 overflow-hidden bg-white focus:outline-none max-md:overflow-y-auto md:bottom-[unset] md:left-[50%] md:top-[50%] md:max-h-[85vh] md:w-[90vw] md:max-w-[30rem] md:translate-x-[-50%] md:translate-y-[-50%]">
          {images && (
            <div className="relative h-80 w-full">
              <Image
                src={images[0].image}
                alt={name}
                fill
                className="object-cover"
              />
            </div>
          )}

          <form className="overflow-y-auto bg-foreground">
            <div
              className={cn(
                'p- flex flex-col bg-white p-4',
                !firstModifier && 'md:pb-32'
              )}
            >
              <h3 className="text-2xl text-gray-900">{name}</h3>
              <p className="mt-2 text-gray-600">{description}</p>
            </div>

            {firstModifier && (
              <>
                <div className="flex flex-col bg-foreground px-6 py-4 max-md:border-t max-md:border-background">
                  <strong className="font-bold text-gray-600">
                    {firstModifier.name}
                  </strong>
                  <p className="text-gray-500">{selectText}</p>
                </div>

                <div className="relativeflex h-full flex-col bg-white max-md:border-b max-md:border-background">
                  <div className="flex h-full max-h-[17.75rem] w-full flex-col md:overflow-y-auto md:pb-28">
                    {firstModifier?.items.map((modifier) => {
                      return (
                        <div
                          key={modifier.id}
                          className="flex w-full justify-between px-6 py-4"
                        >
                          <div className="flex flex-col">
                            <strong className="font-medium text-gray-900">
                              {modifier.name}
                            </strong>
                            <span className="text-gray-600">{`${currencySymbol} ${modifier.price.toFixed(2)}`}</span>
                          </div>

                          <div className="relative my-auto flex size-5">
                            <input
                              type="radio"
                              name="modifier"
                              value={modifier.name}
                              className="peer absolute h-full w-full opacity-0"
                              onChange={() => handleSelectModifier(modifier)}
                            />

                            <span
                              className="h-full w-full rounded-full border-[3px] border-gray-500 peer-checked:border-[7px]"
                              {...(modifierSelected?.name === modifier.name && {
                                style: { borderColor: primaryColour },
                              })}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            )}

            <div className="flex w-full flex-col items-center gap-2.5 bg-white/30 p-6 pt-2 max-md:mt-5 md:absolute md:bottom-0">
              <ActionButtons
                amount={amount}
                handleAddToCart={handleAddToCart}
                handleRemoveFromCart={handleRemoveFromCart}
              />

              <Button
                onClick={handleSubmit}
                disabled={!!firstModifier && !modifierSelected}
                {...(!isMainButtonDisabled && {
                  style: { background: primaryColour },
                })}
              >{`Add to Order • ${currencySymbol} ${priceFormatted}`}</Button>
            </div>
          </form>

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
