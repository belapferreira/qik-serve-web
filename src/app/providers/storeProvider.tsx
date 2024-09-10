'use client';

import { ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '@/lib/redux/store';
import { start as restaurantStart } from '@/lib/redux/slices/restaurant';
import { start as menuStart } from '@/lib/redux/slices/menu';
import { Restaurant } from '@/@types/restaurant';
import { Menu } from '@/@types/menu';

type Props = {
  children: ReactNode;
  restaurant: Restaurant;
  menu: Menu;
};

export const StoreProvider = (props: Props) => {
  const { children, restaurant, menu } = props;

  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    storeRef.current.dispatch(restaurantStart(restaurant));
    storeRef.current.dispatch(menuStart(menu));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};
