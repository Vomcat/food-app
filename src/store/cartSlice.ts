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
  items: JSON.parse(localStorage.getItem("cart") as string) || [],
  totalAmount: JSON.parse(localStorage.getItem("totalAmount") as string) || 0,
  totalQuantity:
    JSON.parse(localStorage.getItem("totalQuantity") as string) || 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const { id, name, price, quantity, totalPrice } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity++;
      state.totalAmount = state.totalAmount + price;
      if (!existingItem) {
        state.items.push({
          id,
          name,
          price,
          quantity,
          totalPrice: price * quantity,
        });
      } else {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.totalPrice + price * quantity;
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
      localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
    },

    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
      }
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
      localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
    },

    removeOneItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalAmount -= existingItem!.totalPrice;
      state.totalQuantity -= existingItem!.quantity;

      state.items = state.items.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(state.items));
      localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
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
