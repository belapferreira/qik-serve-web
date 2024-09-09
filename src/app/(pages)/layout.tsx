import { StoreProvider } from '@/app/providers/storeProvider';
import { ReactNode } from 'react';
import { fetcher } from '@/utils/fetcher';

type Props = {
  children: ReactNode;
};

export default async function PagesLayout({ children }: Props) {
  const restaurant = await fetcher('/venue/9');

  return <StoreProvider restaurant={restaurant}>{children}</StoreProvider>;
}
