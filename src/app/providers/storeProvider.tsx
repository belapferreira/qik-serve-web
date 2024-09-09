'use client';

import { ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '../../lib/redux/store';
import { start } from '../../lib/redux/slices/restaurant';

type Props = {
  children: ReactNode;
  restaurant: unknown;
};

export const StoreProvider = (props: Props) => {
  const { children, restaurant } = props;

  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    storeRef.current.dispatch(start(restaurant));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};
