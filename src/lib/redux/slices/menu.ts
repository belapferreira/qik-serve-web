import { Menu } from '@/@types/menu';
import { createSlice } from '@reduxjs/toolkit';

type MenuState = {
  menu: Menu | null;
};

const initialState: MenuState = {
  menu: null,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    start: (state, action) => {
      state.menu = action.payload;
    },
  },
});

export const menu = menuSlice.reducer;
export const { start } = menuSlice.actions;
