import { Cart, CartItem } from '@/lib/types';
import { createSlice } from '@reduxjs/toolkit';

type CartState = {
  cart: Cart;
  cartItem: CartItem | null;
};

const cartInitialState: CartItem = {
  id: 0,
  name: '',
  price: 0,
  quantity: 0,
  size: '',
};
const CartInitialState: Cart = [];

const initialCartState: CartState = {
  cart: CartInitialState,
  cartItem: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addCartItem: (state, action) => {
      const addedItem = { ...state.cartItem, ...action.payload };
      state.cartItem = addedItem;
      state.cart = [...state.cart, addedItem];
    },
    removeCartItem: (state, action) => {
      const { id } = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
      state.cart = [...state.cart];
    },
    getAllCartItems: (state) => {
      state.cart;
    },
  },
});

export const { addCartItem, removeCartItem, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
