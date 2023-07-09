import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const newArrivalsSlice = createSlice({
  name: "productsSlice",
  initialState: {
    isLoading: true,
    newArrivals: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchnewArrivals.fulfilled, (state, action) => {
      state.newArrivals = action.payload;
      state.isLoading = false;
    });
  },
});

export const fetchnewArrivals = createAsyncThunk(
  "fetchnewArrivals",
  async () => {
    const response = await fetch(
      "https://e-commerce-e8752-default-rtdb.firebaseio.com/products/newArrivals.json"
    );
    return await response.json();
  }
);

export default newArrivalsSlice;
