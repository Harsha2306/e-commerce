import React from "react";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { cartSliceActions } from "../../../store/cart-slice";
import Button from "./Button";

const CartItem = ({ name, price, img, quantity }) => {
  const dispatch = useDispatch();

  const onAdd = () => {
    dispatch(
      cartSliceActions.addNewProduct({ name, price, img: img[0], quantity: 1 })
    );
  };

  const onDelete = () => {
    dispatch(cartSliceActions.deleteProduct(name));
  };

  return (
    <Grid
      container
      item
      mb={3}
      display="flex"
      direction="row"
      sx={{ height: 200, backgroundColor: "#F5F5F5" }}
      xs={12}
    >
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        xs={6}
        item
      >
        <img width="80%" height="80%" alt="error" src={img} />
      </Grid>
      <Grid display="flex" direction="column" xs={6} item container>
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="flex-end"
          xs={4}
          item
        >
          {name}
        </Grid>
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          xs={4}
          item
        >
          ₹{(price * quantity).toLocaleString()}
        </Grid>
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="flex-start"
          container
          item
          xs={4}
        >
          <Grid display="flex" justifyContent="flex-end" xs={4} item>
            <Button onClick={onAdd} >+</Button>
          </Grid>

          <Grid display="flex" justifyContent="center" xs={4} item>
            ×{quantity}
          </Grid>
          <Grid display="flex" justifyContent="flex-start" xs={4} item>
            <Button onClick={onDelete} >-</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CartItem;