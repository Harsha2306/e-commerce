import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const featuredProductsSlice = createSlice({
  name: "productsSlice",
  initialState: {
    isLoading: true,
    featuredProducts: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFeaturedProducts.fulfilled, (state, action) => {
      state.featuredProducts = action.payload;
      state.isLoading = false;
    });
  },
});

export const fetchFeaturedProducts = createAsyncThunk(
  "fetchProducts",
  async () => {
    const response = await fetch(
      "https://e-commerce-e8752-default-rtdb.firebaseio.com/products/featuredProducts.json"
    );
    return await response.json();
  }
);

export default featuredProductsSlice;
