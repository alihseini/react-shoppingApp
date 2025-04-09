import { configureStore } from "@reduxjs/toolkit";
import productsDataReducer from "../features/products/productsDataSlice";
import cartReducer from "../features/cart/cartSlice";

const store = configureStore({
  reducer: {
    productsData: productsDataReducer,
    cart: cartReducer,
  },
});

export default store;