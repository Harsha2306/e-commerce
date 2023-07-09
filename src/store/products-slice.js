import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "productsSlice",
  initialState: {
    isLoading:true,
    allProducts: [],
    productsCopy: [],
    category: "none",
    price: "none",
  },
  reducers: {
    changePrice: (state, action) => {
      state.price = action.payload;
    },
    changeCategory: (state, action) => {
      state.category = action.payload;
    },
    searchProducts: (state, action) => {
      if (action.payload.trim().length === 0)
        state.productsCopy = state.allProducts;
      else
        state.productsCopy = state.allProducts.filter((pro) =>
          pro.name.toLowerCase().includes(action.payload)
        );
    },
    filter: (state) => {
      if (state.price === "none" && state.category === "none")
        state.productsCopy = state.allProducts;
      else if (state.price === "none")
        state.productsCopy = state.allProducts.filter(
          (pro) => pro.category === state.category
        );
      else if (state.category === "none")
        state.productsCopy = state.allProducts.filter(
          (pro) => pro.cost >= state.price.min && pro.cost <= state.price.max
        );
      else
        state.productsCopy = state.allProducts.filter(
          (pro) =>
            pro.category === state.category &&
            pro.cost >= state.price.min &&
            pro.cost <= state.price.max
        );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.allProducts = action.payload;
      state.productsCopy = action.payload;
      state.isLoading = false;
      state.category = "none"
      state.price="none"
    });
  },
});

export const fetchAllProducts = createAsyncThunk(
  "fetchAllProducts",
  async () => {
    const response = await fetch(
      "https://e-commerce-e8752-default-rtdb.firebaseio.com/products/allproducts.json"
    );
    return await response.json();
  }
);

export const productsSliceActions = productsSlice.actions;

export default productsSlice;
