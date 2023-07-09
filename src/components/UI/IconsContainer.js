import React from 'react'
import { Grid,Typography } from '@mui/material';
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CachedIcon from "@mui/icons-material/Cached";

const IconsContainer = () => {
    return (
    <Grid display="flex" justifyContent="space-evenly" container item>
      <Grid
        display="flex"
        direction="column"
        justifyContent="center"
        container
        item
        xs={4}
      >
        <Grid display="flex" justifyContent="center" item>
          <LocalShippingIcon fontSize="large" />
        </Grid>
        <Grid display="flex" justifyContent="center" item>
          <Typography variant="body1">Free Shipping</Typography>
        </Grid>
      </Grid>
      <Grid
        display="flex"
        direction="column"
        justifyContent="center"
        container
        xs={4}
        item
      >
        <Grid display="flex" justifyContent="center" item>
          <ThumbUpIcon fontSize="large" />
        </Grid>
        <Grid display="flex" justifyContent="center" item>
          <Typography variant="body1">100% Genuine</Typography>
        </Grid>
      </Grid>
      <Grid
        display="flex"
        direction="column"
        justifyContent="center"
        container
        item
        xs={4}
      >
        <Grid display="flex" justifyContent="center" item>
          <CachedIcon fontSize="large" />
        </Grid>
        <Grid display="flex" justifyContent="center" item>
          <Typography align="center" variant="body1">
            Return within 10 days
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default IconsContainer