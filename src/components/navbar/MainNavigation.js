import React from "react";
import { Grid } from "@mui/material";
import HeaderLeft from "./HeaderLeft";
import HeaderMiddle from "./HeaderMiddle";
import HeaderRight from "./HeaderRight";

const MainNavigation = () => {
  return (
    <>
      <Grid
        sx={{ backgroundColor: "#2D2727", width: "100%" }}
        container
        padding={2}
        item
      >
        <HeaderLeft>HighSonic</HeaderLeft>
        <HeaderMiddle />
        <HeaderRight />
      </Grid>
    </>
  );
};

export default MainNavigation;

