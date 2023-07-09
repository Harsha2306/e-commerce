import React from "react";
import { Grid } from "@mui/material";
import classes from "./Caption.module.css";

const Caption = () => {
  return (
    <Grid mt={3} padding={3} sx={{ border: 1, backgroundColor:'black' }}>
      <p className={classes.caption}>
        Unleash the Power of Pure Audio: Elevate Your Music Journey with Our
        Premium Headphones!
      </p>
    </Grid>
  );
};

export default Caption;
