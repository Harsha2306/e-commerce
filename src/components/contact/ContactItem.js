import React from "react";
import { Grid, Typography } from "@mui/material";

const ContactItem = ({ title, children }) => {
  return (
    <Grid container item xs={12} sm={6}>
      <Grid
        sx={{ height: 300, backgroundColor: "#F5F5F5" }}
        item
        direction="column"
        container
        xs
      >
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          xs
          item
        >
          {title}
        </Grid>
        <Grid display="flex" justifyContent="center" xs item>
          <Typography align="center" variant="h5">
            {children}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactItem;
