import { Select, MenuItem, Grid, Typography, Tooltip } from "@mui/material";
import React, { useEffect } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useDispatch, useSelector } from "react-redux";
import { productsSliceActions } from "../../store/products-slice";

const options = [
  { min: 0, max: 12000 },
  { min: 999, max: 4000 },
  { min: 4001, max: 8000 },
  { min: 8001, max: 12000 },
];

const FilterByCategory = () => {
  const dispatch = useDispatch();

  const price = useSelector((state) => state.productsSlice.price);

  useEffect(() => {
    dispatch(productsSliceActions.filter());
  }, [dispatch, price]);

  const onPriceChange = (e) => {
    dispatch(productsSliceActions.changePrice(e.target.value));
  };

  return (
    <Grid
      display="flex"
      justifyContent="center"
      direction="column"
      container
    >
      <Grid padding={2} item>
        <Typography align="center" variant="h6">
          Filter By Price
        </Typography>
      </Grid>
      <Grid padding={2} display="flex" justifyContent="center" container item>
        <Grid display="flex" alignItems="center" item>
          <Tooltip title="filter">
            <FilterListIcon fontSize="large" />
          </Tooltip>
        </Grid>
        <Grid item>
          <Select value={price} onChange={onPriceChange}>
            <MenuItem value={"none"}>None</MenuItem>
            <MenuItem value={options[1]}>999 - 4000</MenuItem>
            <MenuItem value={options[2]}>4001 - 8000</MenuItem>
            <MenuItem value={options[3]}>8001 - 12000</MenuItem>
          </Select>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FilterByCategory;
