import { configureStore } from '@reduxjs/toolkit';

import { restaurant } from './slices/restaurant';
import { menu } from './slices/menu';
import { cart } from './slices/cart';

export const makeStore = () => {
  return configureStore({
    reducer: {
      restaurant,
      menu,
      cart,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
