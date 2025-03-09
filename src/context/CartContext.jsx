import React, { createContext, useContext, useEffect, useReducer } from "react";
import { sumHandler } from "../helpers/helper";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CartContext = createContext();

const initialState = {
  selectedItems: [],
  checkout: false,
  itemCounter: 0,
  totalPrice: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        checkout: false,
        ...sumHandler(state.selectedItems),
      };
    case "REMOVE_ITEM":
      const newSelectedItem = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.selectedItems = [...newSelectedItem];
      return {
        ...state,
        selectedItems: [...newSelectedItem],
        ...sumHandler(newSelectedItem),
      };
    case "INCREASE_ITEM":
      const increaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[increaseIndex].quantity++;
      return {
        ...state,
        ...sumHandler(state.selectedItems),
      };
    case "DECREASE_ITEM":
      const decreaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[decreaseIndex].quantity--;
      return {
        ...state,
        ...sumHandler(state.selectedItems),
      };
    case "CHECKOUT":
      return {
        selectedItems: [],
        checkout: true,
        itemCounter: 0,
        totalPrice: 0,
      };
    default:
      throw new Error("invalid action");
  }
};

function CartProvider({ children }) {
  const [shopList, setShopList] = useLocalStorage("shopList", initialState);
  const [state, dispatch] = useReducer(reducer, shopList);
  useEffect(() => {
    setShopList(state);
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
};

export default CartProvider;

export { useCart };
