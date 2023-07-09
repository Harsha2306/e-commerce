import React from "react";
import { Container, Grid, Typography, Alert } from "@mui/material";
import ImageContainer from "./ImageContainer";
import { useState, useEffect } from "react";
import IconsContainer from "../UI/IconsContainer";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartSliceActions } from "../../store/cart-slice";
import { fetchProductDetails } from "../../store/productDetails-slice";
import LoadingSpinner from "../UI/LoadingSpinner";
import EstimatedDelivary from "./EstimatedDelivary";
import Error from "../../pages/Error";

const ProductDetails = () => {
  const params = useParams();

  const dispatch = useDispatch();

  const currProduct = useSelector(
    (state) => state.productDetailsSlice.productDetails
  );

  const isLoading = useSelector((state) => state.productDetailsSlice.isLoading);

  const pageNotFound = useSelector(
    (state) => state.productDetailsSlice.pageNotFound
  );

  const mainImg = currProduct.mainImg;

  useEffect(() => {
    dispatch(fetchProductDetails(params.productId));
  }, [dispatch, params]);

  const navigate = useNavigate();

  const [alertVisible, setAlertVisible] = useState(false);

  const [showButton, setShowButton] = useState(true);

  const onAddToCart = () => {
    dispatch(
      cartSliceActions.addNewProduct({
        name: currProduct.name,
        price: currProduct.cost,
        img: currProduct.img[0],
        quantity: 1,
      })
    );
    setShowButton(false);
    setAlertVisible(true);
    setTimeout(() => {
      navigate("/products");
      setAlertVisible(false);
    }, 1000);
  };

  if (pageNotFound) return <Error />;

  return (
    <>
      {alertVisible && (
        <Alert variant="filled" severity="success">
          {currProduct.name} Added to Cart
        </Alert>
      )}
      <Container>
        {isLoading && (
          <Grid display="flex" justifyContent="center">
            <LoadingSpinner />
          </Grid>
        )}
        {!isLoading && (
          <Grid
            mt={3}
            mb={13}
            sx={{ borderRadius: 5, width: "100%", backgroundColor: "#F5F5F5" }}
            display="flex"
            direction="row"
            container
            padding={3}
          >
            <Grid display="flex" justifyContent="center" sm={6} container item>
              <Grid sx={{ height: 400 }} item>
                <img
                  style={{ borderRadius: "1rem" }}
                  width="100%"
                  height="400"
                  alt="error"
                  src={mainImg}
                />
              </Grid>
              <Grid
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ height: 200 }}
                container
                item
              >
                <ImageContainer img={currProduct.img[0]} />
                <ImageContainer img={currProduct.img[1]} />
                <ImageContainer img={currProduct.img[2]} />
                <ImageContainer img={currProduct.img[3]} />
              </Grid>
            </Grid>
            <Grid
              padding={3}
              display="flex"
              direction="column"
              sm={6}
              container
              item
            >
              <Grid item>
                <Typography variant="body1">⭐ {currProduct.rating}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h3">{currProduct.name}</Typography>
              </Grid>
              <Grid padding={2} item>
                <Typography variant="body1">
                  {currProduct.description}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h2">
                  ₹{currProduct.cost.toLocaleString()}
                </Typography>
              </Grid>
              <Grid padding={3} display="flex" justifyContent="center" item>
                <button
                  disabled={!showButton}
                  onClick={onAddToCart}
                  style={{
                    width: "100%",
                    height: "3rem",
                    color: "#F5F5F5",
                    backgroundColor: "#2D2727",
                    borderRadius: "2rem",
                  }}
                >
                  {showButton ? "Add to Cart" : "Adding to Cart"}
                </button>
              </Grid>
              <Grid item>
                <EstimatedDelivary />
              </Grid>
              <Grid display="flex" alignContent="flex-end" item>
                <IconsContainer />
              </Grid>
            </Grid>
          </Grid>
        )}
      </Container>
    </>
  );
};

export default ProductDetails;
