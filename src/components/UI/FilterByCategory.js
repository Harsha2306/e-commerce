import { Select, MenuItem, Grid, Typography, Tooltip } from "@mui/material";
import React, { useEffect } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useDispatch, useSelector } from "react-redux";
import { productsSliceActions } from "../../store/products-slice";

const FilterByCategory = () => {
  const dispatch = useDispatch();

  const category = useSelector((state) => state.productsSlice.category);

  useEffect(() => {
    dispatch(productsSliceActions.filter());
  }, [dispatch, category]);

  const onCategoryChange = (e) => {
    dispatch(productsSliceActions.changeCategory(e.target.value));
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
          Filter By Category
        </Typography>
      </Grid>
      <Grid padding={2} display="flex" justifyContent="center" container item>
        <Grid display="flex" alignItems="center" item>
          <Tooltip title="filter">
            <FilterListIcon fontSize="large" />
          </Tooltip>
        </Grid>
        <Grid item>
          <Select
            placeholder="filter by category"
            value={category}
            onChange={onCategoryChange}
          >
            <MenuItem value="none">None</MenuItem>
            <MenuItem value="smartwatch">Smart Watches</MenuItem>
            <MenuItem value="soundbar">Sound Bars</MenuItem>
            <MenuItem value="headphones">Headphones</MenuItem>
          </Select>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FilterByCategory;
