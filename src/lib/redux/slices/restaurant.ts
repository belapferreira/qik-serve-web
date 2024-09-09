import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  restaurant: {},
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
