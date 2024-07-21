import { Product } from "@/typing";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  quatity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Omit<CartItem, "quatity">>) => {
      const existing = state.items.find(
        (item: CartItem) => item.id === action.payload.id
      );
      if (existing) {
        existing.quatity += 1;
      } else {
        state.items.push({ ...action.payload, quatity: 1 });
      }
    },
    removeItem: (state, action: PayloadAction<{ id: number }>) => {
      const existing = state.items.find(
        (item: CartItem) => item.id === action.payload.id
      );

      if (existing) {
        if (existing.quatity > 1) {
          existing.quatity -= 1;
        } else {
          state.items = state.items.filter(
            (item: CartItem) => item.id != action.payload.id
          );
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
