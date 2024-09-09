import { configureStore } from '@reduxjs/toolkit';

import { restaurant } from './slices/restaurant';

export const makeStore = () => {
  return configureStore({
    reducer: {
      restaurant,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
