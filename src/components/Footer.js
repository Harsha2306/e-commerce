import React from "react";
import { Grid, Typography } from "@mui/material";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Grid
        sx={{
          backgroundColor: "#2D2727",
        }}
        padding={2}
      >
        <Typography sx={{ color: "#F5F5F5" }} align="center" variant="h4">
          © 2023 HighSonic
        </Typography>
      </Grid>
    </footer>
  );
};

export default Footer;
