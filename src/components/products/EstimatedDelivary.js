import React from "react";
import { Grid, Typography } from "@mui/material";

const EstimatedDelivary = () => {
  const currentDate = new Date();

  const delivaryDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate() + 3
  );

  return (
    <Grid padding={4}>
      <Typography variant="h6">
        Estimated Delivary : {delivaryDate.toDateString()}
      </Typography>
    </Grid>
  );
};

export default EstimatedDelivary;