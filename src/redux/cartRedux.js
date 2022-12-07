import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    cartQuantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.cartQuantity += 1;
      state.products.push(action.payload);
      state.total = state.products.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0);
      toast.success(`${action.payload.title} Item added to the Cart!`, {
        position: "bottom-right",
        autoClose: 2000,
      });
    },
    updateProduct: (state, action) => {
      state.products = state.products.map((p) =>
        p.id === action.payload.id && p.cartItemId === action.payload.cartItemId
          ? action.payload
          : p
      );
      state.total = state.products.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0);
      toast.success(`${action.payload.title} Item updated successfully!`, {
        position: "bottom-right",
        autoClose: 2000,
      });
    },
    removeProduct: (state, action) => {
      state.cartQuantity -= 1;
      state.products = state.products.filter(
        (p) => p.cartItemId !== action.payload.cartItemId
      );
      state.total = state.products.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0);
      toast.success(`${action.payload.title} Item removed from the Cart!`, {
        position: "bottom-right",
        autoClose: 2000,
      });
    },
    clearCart: (state, action) => {
      state.products = [];
      state.cartQuantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, updateProduct, removeProduct, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
