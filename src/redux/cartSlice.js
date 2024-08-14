import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // increment the quantity of item
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

      console.log("updated Quantity after adding to cart:", item.quantity);
    },
    //  decrement the quantity of item
    removeItem: (state, action) => {
      const item = action.payload;
      console.log("item: ", item);

      const existingItem = state.items.find(
        (i) => i.product_id === item.product_id
      );

      if (existingItem) {
        if (existingItem.quantity > 1) existingItem.quantity -= 1;
        else {
          const updatedProducts = state.items.filter(
            (product) => product.product_id !== action.payload.product_id
          );
          state.items = updatedProducts;
        }
      }

      console.log("updated Quantity after removing from cart:", item.quantity);
    },

    // remove item from cart
    removeFromCart: (state, action) => {
      const item = action.payload;
      const updatedProducts = state.items.filter(
        (product) => product.product_id !== action.payload.product_id
      );
      state.items = updatedProducts;
      console.log("removed item: ", item);
    },
  },
});

export const { addItem, removeItem, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
