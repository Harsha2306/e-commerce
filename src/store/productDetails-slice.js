import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const productDetailsSlice = createSlice({
  name: "productDetailsSlice",
  initialState: {
    pageNotFound: false,
    isLoading: true,
    productDetails: {},
  },
  reducers: {
    changeMainImage: (state, action) => {
      state.productDetails.mainImg = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductDetails.fulfilled, (state, action) => {
      if (action.payload === "page not found") state.pageNotFound = true;
      else {
        state.productDetails = action.payload;
        state.pageNotFound = false;
      }
      state.isLoading = false;
    });
  },
});

export const fetchProductDetails = createAsyncThunk(
  "fetchProductDetails",
  async (id) => {
    const response = await fetch(
      "https://e-commerce-e8752-default-rtdb.firebaseio.com/products/allproducts.json"
    );
    const data = await response.json();
    const product = data.find((pro) => pro.id === id);
    if (product) return product;
    else return "page not found";
  }
);

export const productDetailsSliceActions = productDetailsSlice.actions;

export default productDetailsSlice;
