import React from "react";
import Grid from "@mui/material/Grid";

const MainPoster = () => {
  return (
    <Grid
      display="flex"
      alignItems="center"
      justifyContent="center"
      item
      sx={{
        width: "100%",
        height: "auto",
      }}
    >
      <img
        src="https://www.boat-lifestyle.com/cdn/shop/files/lunar-connect-ace_desktop_2499_1440x.jpg?v=1688538728"
        alt="error"
        width="100%"
        height="100%"
      />
    </Grid>
  );
};

export default MainPoster;