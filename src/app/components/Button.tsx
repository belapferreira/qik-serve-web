import { cn } from '@/utils/cn';
import { ComponentProps } from 'react';

type ButtonProps = ComponentProps<'button'>;

export const Button = (props: ButtonProps) => {
  const { children, className, ...rest } = props;

  return (
    <button
      className={cn(
        'flex h-12 w-full items-center justify-center rounded-[40px] text-white transition-all duration-200 enabled:hover:brightness-125 disabled:bg-gray-200 disabled:text-gray-500',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
