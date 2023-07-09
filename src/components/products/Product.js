import React from "react";
import { Grid, Paper, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ViewDetailsButton from "../UI/ViewDetailsButton";
import classes from './Product.module.css'

const Product = ({ id, name, rating, price, img }) => {
  const navigate = useNavigate();

  const onViewDetails = (e) => {
    e.stopPropagation();
    navigate("/products/" + id);
  };

  return (
    <Grid item>
      <div className={classes.product} onClick={onViewDetails}>
        <Grid item>
          <Paper elevation={3}>
            <Grid mb={1} sx={{ width: 300, height: 350 }} container item>
              <Grid item sx={{ width: 300, height: 250 }}>
                <img width={300} height={250} alt="error" src={img[0]} />
              </Grid>
              <Grid
                sx={{ width: 300, height: 100, backgroundColor: "#F5F5F5" }}
                direction="column"
                container
                item
              >
                <Grid
                  sx={{ width: 175, height: 100 }}
                  direction="column"
                  justifyContent="space-evenly"
                  alignItems="flex-start"
                  container
                  item
                >
                  <Grid ml={1} item>
                    <Rating
                      name="read-only"
                      defaultValue={rating}
                      precision={0.5}
                    />
                  </Grid>
                  <Grid ml={1} item>
                    {name}
                  </Grid>
                  <Grid ml={1} item>
                    ₹{price.toLocaleString()}
                  </Grid>
                </Grid>
                <Grid
                  sx={{ width: 125, height: 100 }}
                  justifyContent="center"
                  alignItems="center"
                  container
                  item
                >
                  <ViewDetailsButton onViewDetails={onViewDetails} />
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </div>
    </Grid>
  );
};

export default Product;