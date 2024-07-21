import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cardSlice";
import HeartReducer from "./heartSlice";

const store = configureStore({
  reducer: {
    cart: CartReducer,
    heart: HeartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
export default store;
