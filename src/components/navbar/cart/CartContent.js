import React from "react";
import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

const CartContent = () => {
  const cart = useSelector((state) => state.cartSlice.cart);
  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );

  const cartItems =
    cart.length === 0 ? (
      <Grid item>
        <Typography align="center" variant="h4">
          Cart is empty
        </Typography>
      </Grid>
    ) : (
      cart.map((pro) => (
        <CartItem
          key={pro.name}
          name={pro.name}
          price={pro.price}
          img={pro.img}
          quantity={pro.quantity}
        />
      ))
    );

  return (
    <Grid item>
      <Grid item display="flex" justifyContent="center" container>
        {cartItems}
      </Grid>
      {cart.length !== 0 && <CartTotal totalPrice={totalPrice} />}
    </Grid>

  );
};

export default CartContent;
