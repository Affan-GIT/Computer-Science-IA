import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';
import { HYDRATE } from 'next-redux-wrapper';

export interface CartState {
  cartState: Array<object>;
}

const initialState: CartState = {
  cartState: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
        return state.cartState.map(product=>product.ProductName).indexOf(action.payload.ProductName) !== -1 ? state :  {...state, cartState: [...state.cartState, action.payload], totalQuantity: state.totalQuantity+1, totalPrice: state.totalPrice+action.payload.price}
    },
    removeFromCart(state, action) {
        const cartState = [...state.cartState.filter((product) => product.ProductName != action.payload.ProductName)]
        const totalQuantity = cartState.reduce((partialCount, a) => partialCount +1, 0)
        const totalPrice = cartState.reduce((partialSum, a) => partialSum + a.price, 0)

        return {...state, cartState: cartState, totalQuantity, totalPrice}
    }
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
export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCartState = (state: AppState) => state.cart.cartState;
export const selectTotalQuantity = (state: AppState) => state.cart.totalQuantity;
export const selectTotalPrice = (state: AppState) => state.cart.totalPrice;


export default cartSlice.reducer;