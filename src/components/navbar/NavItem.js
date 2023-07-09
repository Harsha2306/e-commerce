import React from "react";
import { Grid} from "@mui/material";
import { Link } from "react-router-dom";
import classes from "./NavItem.module.css";

const NavItem = ({ children, to }) => {
  return (
    <>
      <Grid sx={{ padding: 1 }} item>
        <Link to={to}>
          <p className={classes.link}>{children}</p>
        </Link>
      </Grid>
    </>
  );
};

export default NavItem;
