import { createSlice } from "@reduxjs/toolkit";

interface CartSliceState {
  items: {
    id: number;
    name: string;
    price: number;
    totalPrice: number;
    quantity: number;
  }[];
  totalAmount: number;
  totalQuantity: number;
}

const initialState: CartSliceState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.totalAmount = state.totalAmount + newItem.price;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.price * newItem.quantity,
        });
      } else {
        existingItem.quantity += action.payload.quantity;
        existingItem.price = existingItem.price + newItem.price;
      }
    },
    removeItem() {},
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
