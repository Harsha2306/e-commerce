import React, { useEffect } from "react";
import Product from "../components/products/Product";
import { Container, Grid, Typography } from "@mui/material";
import FilterByCategory from "../components/UI/FilterByCategory";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../store/products-slice";
import FilterByPrice from "../components/UI/FilterByPrice";
import SearchProducts from "../components/UI/SearchProducts";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import Footer from "../components/Footer";

const Products = () => {
  const dispatch = useDispatch();

  const initialLoad = useSelector((state) => state.productsSlice.isLoading);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const productsCopy = useSelector((state) => state.productsSlice.productsCopy);

  let content = null;

  if (productsCopy.length === 0 && initialLoad) content = <LoadingSpinner />;
  else if (productsCopy.length === 0 && !initialLoad)
    content = (
      <Typography align="center" variant="h1">
        No Products Found
      </Typography>
    );

  const displayallProducts =
    productsCopy.length === 0
      ? content
      : productsCopy.map((pro) => (
          <Product
            id={pro.id}
            des={pro.description}
            key={pro.id}
            name={pro.name}
            price={pro.cost}
            img={pro.img}
            rating={pro.rating}
          />
        ));

  return (
    <>
      <Grid sx={{ backgroundColor: "#F5F5F5" }} container>
        <Grid
          padding={4}
          display="flex"
          alignItems="center"
          xs={12}
          sm={6}
          item
        >
          <SearchProducts />
        </Grid>
        <Grid display="flex" justifyContent="space-around" xs={6} sm={3} item>
          <FilterByCategory />
        </Grid>
        <Grid display="flex" justifyContent="space-around" xs={6} sm={3} item>
          <FilterByPrice />
        </Grid>
      </Grid>
      <Container sx={{ padding: 5 }}>
        <Grid container>
          <Grid padding={3} item>
            {productsCopy.length !== 0 && (
              <Typography variant="h5">All Products</Typography>
            )}
          </Grid>

          <Grid
            alignItems="center"
            justifyContent="space-evenly"
            display="flex"
            direction="row"
            container
            item
            rowSpacing={5}
          >
            {displayallProducts}
          </Grid>
        </Grid>
      </Container>
      <Footer/>
    </>
  );
};

export default Products;
