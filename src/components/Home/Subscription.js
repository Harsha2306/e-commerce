import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import EmailInputButton from "../UI/EmailInputButton";

const Subscription = () => {
  return (
    <>
      <Grid
        mt={3}
        rowSpacing={2}
        padding={3}
        direction="row"
        container
        sx={{ backgroundColor: "#F5F5F5" }}
      >
        <Grid display="flex" justifyContent="center" xs={12} item>
          <Typography variant="h5">
            Subscribe to HighSonic for Email alerts
          </Typography>
        </Grid>
        <Grid xs={12} item>
          <EmailInputButton />
        </Grid>
      </Grid>
    </>
  );
};

export default Subscription;