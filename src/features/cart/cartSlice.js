import { createSlice } from "@reduxjs/toolkit";
import { itemCounterHandler, totalPriceHandler } from "../../helpers/helper";

const initialState = {
  selectedItems: [],
  checkout: false,
  itemCounter: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
        state.itemCounter = itemCounterHandler(state.selectedItems);
        state.totalPrice = totalPriceHandler(state.selectedItems);
        state.checkout = false;
      }
    },
    removeItem: (state, action) => {
      const newSelectedItem = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.selectedItems = [...newSelectedItem];
      state.itemCounter = itemCounterHandler(state.selectedItems);
      state.totalPrice = totalPriceHandler(state.selectedItems);
    },
    increaseItem: (state, action) => {
      const increaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[increaseIndex].quantity++;
      state.itemCounter = itemCounterHandler(state.selectedItems);
      state.totalPrice = totalPriceHandler(state.selectedItems);
    },
    decreaseItem: (state, action) => {
      const decreaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[decreaseIndex].quantity--;
      state.itemCounter = itemCounterHandler(state.selectedItems);
      state.totalPrice = totalPriceHandler(state.selectedItems);
    },
    checkOut: (state) => {
      state.selectedItems = [];
      state.checkout = true;
      state.itemCounter = 0;
      state.totalPrice = 0;
    },
  },
});

export default cartSlice.reducer;
export const { checkOut, decreaseItem, increaseItem, removeItem, addItem } =
  cartSlice.actions;
