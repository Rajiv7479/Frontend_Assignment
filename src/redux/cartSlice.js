import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // add item
    addItem: (state, action) => {
      const item = action.payload;
      console.log("item: ", item);

      const existingItem = state.items.find(
        (i) => i.product_id === item.product_id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items = [...state.items, { ...item, quantity: 1 }];
      }

      console.log(state.items);
    },
    //  remove item
    removeItem: (state, action) => {
      const item = action.payload;
      console.log("item: ", item);

      const updatedProducts = state.items.filter(
        (product) => product.product_id !== action.payload.product_id
      );

      state.items = updatedProducts;

      console.log(state.items);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
