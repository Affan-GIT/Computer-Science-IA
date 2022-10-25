import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';
import { HYDRATE } from 'next-redux-wrapper';

export interface CartState {
  cartState: Array<object>;
}

const initialState: CartState = {
  cartState: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartState(state, action) {
      state.cartState.push(action.payload);
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});
export const { setCartState } = cartSlice.actions;

export const selectCartState = (state: AppState) => state.cart.cartState;

export default cartSlice.reducer;
