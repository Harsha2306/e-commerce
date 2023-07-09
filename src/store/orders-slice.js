import { createAsyncThunk } from "@reduxjs/toolkit";

export const uploadOrders = createAsyncThunk("uploadOrders", async (orders) => {
  const response = await fetch(
    "https://e-commerce-e8752-default-rtdb.firebaseio.com/allorders.json",
    {
      method: "POST",
      body: JSON.stringify(orders),
    }
  );
  await response.json();
});
