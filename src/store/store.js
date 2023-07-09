import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import productsSlice from "./products-slice";
import featuredProductsSlice from "./featuredProducts-slice";
import newArrivalsSlice from "./newArrivals-slice";
import productDetailsSlice from "./productDetails-slice";


const store = configureStore({
  reducer: {
    cartSlice: cartSlice.reducer,
    productsSlice: productsSlice.reducer,
    newArrivalsSlice: newArrivalsSlice.reducer,
    featuredProductsSlice: featuredProductsSlice.reducer,
    productDetailsSlice: productDetailsSlice.reducer,
  },
});

export default store;
