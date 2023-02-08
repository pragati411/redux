import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFetching: false,
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state) => {
      state.isFetching = true;
    },
    getProductsSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload.result;
    },
    getProductsFailed: (state) => {
      state.isFetching = false;
      state.products = [];
    },
  },
});

export const { getProducts, getProductsSuccess, getProductsFailed } =
  productSlice.actions;

export default productSlice.reducer;