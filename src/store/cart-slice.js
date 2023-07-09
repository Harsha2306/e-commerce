import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "CartSlice",
  initialState: {
    cartIsOpen: false,
    cart: [],
  },
  reducers: {
    openCart(state) {
      state.cartIsOpen = true;
    },
    closeCart(state) {
      state.cartIsOpen = false;
    },
    addNewProduct(state, action) {
      let p = state.cart.find((pro) => pro.name === action.payload.name);
      if (p) p.quantity++;
      else state.cart.unshift(action.payload);
    },
    deleteProduct(state, action) {
      let p = state.cart.find((pro) => pro.name === action.payload);
      if (p.quantity > 1) p.quantity--;
      else state.cart = state.cart.filter((pro) => pro.name !== action.payload);
    },
    emptyCart(state) {
      state.cart = [];
      state.cartIsOpen = false;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.cart = action.payload ? action.payload : [];
    });
  },
});

export const fetchCart = createAsyncThunk("FetchCartProducts", async () => {
  const response = await fetch(
    "https://e-commerce-e8752-default-rtdb.firebaseio.com/cart.json"
  );
  return await response.json();
});

export const addToCart = createAsyncThunk("AddProductToCart", async (cart) => {
  const response = await fetch(
    "https://e-commerce-e8752-default-rtdb.firebaseio.com/cart.json",
    {
      method: "PUT",
      body: JSON.stringify(cart),
    }
  );
  await response.json();
});

export const cartSliceActions = cartSlice.actions;

export default cartSlice;
