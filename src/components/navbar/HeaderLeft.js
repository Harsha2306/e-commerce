import React from "react";
import { Grid, Typography } from "@mui/material";

const HeaderLeft = ({ children }) => {
  return (
    <Grid
      container
      xs={12}
      sm={12}
      md={12}
      lg={2}
      xl={2}
      alignItems="center"
      justifyContent="space-evenly"
      display="flex"
      item
    >
      <Grid item>
        <Typography sx={{ color: "#F5F5F5" }} variant="h4">
          {children}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HeaderLeft;
