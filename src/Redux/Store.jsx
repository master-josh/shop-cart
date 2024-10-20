import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSplice";


export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});