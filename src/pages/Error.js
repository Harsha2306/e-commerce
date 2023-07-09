import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import NavItem from "../components/navbar/NavItem";

const Error = () => {
  return (
    <>
      <Container>
        <Grid mt={5} display="flex" justifyContent="center">
          <Typography align="center" variant="h1">
            404 Page Not Found
          </Typography>
        </Grid>
        <Grid display="flex" justifyContent="center">
          <NavItem to={"/"}>
            <u style={{color:'black'}}>Click here to HighSonic</u>
          </NavItem>
        </Grid>
      </Container>
    </>
  );
};

export default Error;
