import React from "react";
import { Grid } from "@mui/material";
import { productDetailsSliceActions } from "../../store/productDetails-slice";
import { useDispatch } from "react-redux";

const ImageContainer = ({ img }) => {
  const dispatch = useDispatch();

  const onImgClick = () => {
    dispatch(productDetailsSliceActions.changeMainImage(img));
  };

  return (
    <Grid
      display="flex"
      justifyContent="center"
      alignItems="center"
      xs={3}
      sx={{ height: 150 }}
      item
    >
      <img
        onClick={onImgClick}
        alt="error"
        width="85%"
        height="150"
        src={img}
        style={{ borderRadius: "1rem" }}
      />
    </Grid>
  );
};

export default ImageContainer;
