import React from "react";
import NavItem from "./NavItem";
import { Grid } from "@mui/material";

const HeaderMiddle = () => {
  return (
    <Grid
      xs={12}
      sm={8}
      md={8}
      lg={7}
      xl={7}
      item
      alignContent="center"
      display="flex"
      container
      justifyContent="space-evenly"
    >
      <NavItem to="/">Home</NavItem>
      <NavItem to="/products">Products</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/contact">Contact</NavItem>
    </Grid>
  );
};

export default HeaderMiddle;
