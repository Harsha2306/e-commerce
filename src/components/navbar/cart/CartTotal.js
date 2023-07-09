import React from "react";
import { Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { cartSliceActions } from "../../../store/cart-slice";
import { useNavigate } from "react-router-dom";
import { uploadOrders, } from "../../../store/orders-slice";
import { nanoid } from "@reduxjs/toolkit";


const CartTotal = ({ totalPrice }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartSlice.cart);

  const onConfirmOrder = () => {
    dispatch(uploadOrders({
      orderId: nanoid(),
      orderedItems: [...cart],
      orderTotal: totalPrice,
      date: new Date().toDateString(),
    }));
    dispatch(cartSliceActions.emptyCart());
    navigate("/orders");
  };

  return (
    <Grid
      sx={{ backgroundColor: "#F5F5F5" }}
      container
      display="flex"
      direction="row"
      item
    >
      <Grid xs={6} container direction="column" item>
        <Grid display="flex" justifyContent="flex-start" padding={1} item>
          Total Amount
        </Grid>
        <Grid display="flex" justifyContent="flex-start" padding={1} item>
          ₹{totalPrice.toLocaleString()}
        </Grid>
      </Grid>
      <Grid
        xs={6}
        display="flex"
        alignItems="center"
        justifyContent="center"
        item
      >
        <button
          onClick={onConfirmOrder}
          style={{
            height: "50%",
            width: "80%",
            color: "#F5F5F5",
            backgroundColor: "#2D2727",
            borderRadius: "1rem",
          }}
        >
          Confirm Order
        </button>
      </Grid>
    </Grid>
  );
};

export default CartTotal;