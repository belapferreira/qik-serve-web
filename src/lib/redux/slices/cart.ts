import { Cart } from '@/@types/cart';
import { createSlice } from '@reduxjs/toolkit';

type CartState = {
  cart: Cart | null;
};

const initialState: CartState = {
  cart: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      return {
        ...state,
        cart: {
          ...state.cart,
          products: [...(state.cart?.products || []), action.payload],
        },
      };
    },
    update: (state, action) => {
      const otherProducts = state.cart?.products?.filter(
        (product) => product.id !== action.payload.id
      );

      return {
        ...state,
        cart: {
          ...state.cart,
          products: [...(otherProducts ?? []), action.payload],
        },
      };
    },
  },
});

export const cart = cartSlice.reducer;
export const { add, update } = cartSlice.actions;
