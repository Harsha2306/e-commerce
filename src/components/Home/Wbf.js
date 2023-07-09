import React from "react";
import { Grid, Typography } from "@mui/material";
import IconsContainer from "../UI/IconsContainer";

const Wbf = () => {
  return (
    <Grid
      mt={3}
      // mb={13}
      container
      sx={{ height: 200, backgroundColor: "#F5F5F5" }}
      justifyContent="space-evenly"
    >
      <Grid
        sx={{ height: 100 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        item
        xs={12}
      >
        <Typography align="center" variant="h4">
          Why buy from HighSonic?
        </Typography>
      </Grid>
      <IconsContainer />
    </Grid>
  );
};

export default Wbf;
