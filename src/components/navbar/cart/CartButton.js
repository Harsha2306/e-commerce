import React, { useEffect } from "react";
import LocalMallSharpIcon from "@mui/icons-material/LocalMallSharp";
import { IconButton, Badge, Tooltip } from "@mui/material";
import { addToCart, fetchCart } from "../../../store/cart-slice";
import { useDispatch, useSelector } from "react-redux";

const CartButton = ({ onCartButtonClick }) => {
  const cart = useSelector((state) => state.cartSlice.cart);
  const totalProducts = cart.length;
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);
 
  useEffect(() => {
    dispatch(addToCart(cart));
  }, [dispatch, cart]);

  const onCartClick = () => {
    onCartButtonClick();
  };

  return (
    <IconButton>
      <Badge badgeContent={totalProducts} color="primary">
        <Tooltip title="Cart">
          <LocalMallSharpIcon
            sx={{ color: "#F5F5F5", ":hover":{color:'yellow'}}}
            onClick={onCartClick}
            fontSize="large"
          />
        </Tooltip>
      </Badge>
    </IconButton>
  );
};

export default CartButton;