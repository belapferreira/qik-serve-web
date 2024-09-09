import { Restaurant } from '@/@types/restaurant';
import { createSlice } from '@reduxjs/toolkit';

type RestaurantState = {
  restaurant: Restaurant | null;
};

const initialState: RestaurantState = {
  restaurant: null,
};

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    start: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

export const restaurant = restaurantSlice.reducer;
export const { start } = restaurantSlice.actions;
