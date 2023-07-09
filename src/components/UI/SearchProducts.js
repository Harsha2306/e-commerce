import React, { useEffect, useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { productsSliceActions } from "../../store/products-slice";

const SearchProducts = () => {
  const dispatch = useDispatch();

  const [enteredValue, setEnteredValue] = useState("");

  const onValueChange = (e) => {
    setEnteredValue(e.target.value);
  };

  useEffect(() => {
    dispatch(productsSliceActions.searchProducts(enteredValue));
  }, [dispatch, enteredValue]);

  return (
    <TextField
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: "#2D2727" }} />
          </InputAdornment>
        ),
      }}
      sx={{
        backgroundColor: "#F5F5F5",
        color: "#2D2727",
      }}
      onChange={onValueChange}
      value={enteredValue}
      fullWidth
      size="Normal"
      placeholder="Search Products"
    />
  );
};

export default SearchProducts;