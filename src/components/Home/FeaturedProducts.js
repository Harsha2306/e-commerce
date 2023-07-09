import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { fetchFeaturedProducts } from "../../store/featuredProducts-slice";
import { useDispatch, useSelector } from "react-redux";
import Product from "../products/Product";
import LoadingSpinner from "../UI/LoadingSpinner";

const FeaturedProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFeaturedProducts());
  }, [dispatch]);

  const isLoading = useSelector(
    (state) => state.featuredProductsSlice.isLoading
  );

  const loadedFeaturedProducts = useSelector(
    (state) => state.featuredProductsSlice.featuredProducts
  );

  const displayFeaturedProducts = isLoading ? (
    <LoadingSpinner />
  ) : (
    loadedFeaturedProducts.map((pro) => (
      <Product
        id={pro.id}
        key={pro.name}
        name={pro.name}
        price={pro.cost}
        img={pro.img}
        rating={pro.rating}
      />
    ))
  );

  return (
    <>
      <Container fixed>
        <Grid mt={3} container>
          <Grid padding={3} item>
            <Typography variant="h5">Featured Products</Typography>
          </Grid>
          <Grid
            alignItems="center"
            justifyContent="space-evenly"
            display="flex"
            direction="row"
            container
            item
            padding={2}
            rowSpacing={4}
          >
            {displayFeaturedProducts}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default FeaturedProducts;
