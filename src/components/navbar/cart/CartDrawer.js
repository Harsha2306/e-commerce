import React from "react";
import { Grid, IconButton, Tooltip, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CartContent from "./CartContent";

const CartDrawer = ({ onClose }) => {
  return (
    <>
      <Grid direction="column" container sx={{ width: 350 }}>
        <Grid container item>
          <Grid
            sx={{ backgroundColor: "#2D2727" }}
            display="flex"
            alignItems="center"
            container
            item
          >
            <Grid xs={6} item>
              <Typography sx={{ color: "#F5F5F5" }} ml={1} variant="h6">
                Your Cart
              </Typography>
            </Grid>
            <Grid display="flex" justifyContent="flex-end" xs={6} item>
              <IconButton>
                <Tooltip title="close">
                  <CloseIcon
                    sx={{ color: "#F5F5F5" }}
                    onClick={onClose}
                    fontSize="large"
                  />
                </Tooltip>
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid display="flex" justifyContent="center" container item>
          <CartContent />
        </Grid>
      </Grid>
    </>
  );
};

export default CartDrawer;
