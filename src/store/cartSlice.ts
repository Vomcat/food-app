import { createSlice, current } from "@reduxjs/toolkit";

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
  items: JSON.parse(localStorage.getItem("cart") as string) || [],
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
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice =
          existingItem.totalPrice + newItem.price * newItem.quantity;
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.totalAmount = state.totalAmount - existingItem!.price;

      if (existingItem?.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem!.quantity--;
        existingItem!.totalPrice =
          existingItem!.totalPrice - existingItem!.price;
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    removeAllItems(state) {
      state.items = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
      localStorage.clear();
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
