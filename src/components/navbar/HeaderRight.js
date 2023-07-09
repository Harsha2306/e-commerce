import React from "react";
import InventoryIcon from "@mui/icons-material/Inventory";
import { Drawer, Grid, Tooltip } from "@mui/material";
import CartButton from "./cart/CartButton";
import CartDrawer from "./cart/CartDrawer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartSliceActions } from "../../store/cart-slice";

const HeaderRight = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isDrawerOpen = useSelector((state) => state.cartSlice.cartIsOpen);

  return (
    <Grid
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
      container
      item
      xs={12}
      sm={4}
      lg={3}
      xl={3}
    >
      <Grid item>
        <CartButton onCartButtonClick={() => {
          dispatch(cartSliceActions.openCart())
        }} />
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={() => {
            dispatch(cartSliceActions.closeCart())
          }}
        >
          <CartDrawer onClose={() => {
            dispatch(cartSliceActions.closeCart())
          }} />
        </Drawer>
      </Grid>
      <Grid item>
        <Tooltip title="Orders">
          <InventoryIcon
            onClick={() => navigate("/orders")}
            sx={{ color: "#F5F5F5", cursor:'pointer' , ":hover":{color:'yellow'}}}
            fontSize="large"
          />
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default HeaderRight;