import { Product } from "@/typing";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HeartState {
  items: Product[];
}

const initialState: HeartState = {
  items: [],
};

const heartSlice = createSlice({
  name: "heart",
  initialState,
  reducers: {
    addHeart: (state, action: PayloadAction<Product>) => {
      const existing = state.items.find(
        (item: Product) => item.id === action.payload.id
      );
      if (existing) {
        state.items = state.items.filter(
          (item: Product) => item.id != action.payload.id
        );
      } else {
        state.items.push({ ...action.payload });
      }
    },

    clearHeart: (state) => {
      state.items = [];
    },
  },
});

export const { addHeart, clearHeart } = heartSlice.actions;
export default heartSlice.reducer;
