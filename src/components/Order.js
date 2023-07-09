import { TableCell, TableRow, Grid } from "@mui/material";
import React from "react";

const Order = ({ orderId, orderedItems, orderTotal, date }) => {
  return (
    <TableRow key={orderId}>
      <TableCell align="center" sx={{ border: 1 }} component="th" scope="row">
        {orderId}
      </TableCell>
      <TableCell sx={{ border: 1 }}>
        <Grid display="flex" justifyContent="center">
          <ol>
            {orderedItems.map((pro) => (
              <li key={pro.name}>{`${pro.name} ×${pro.quantity}`}</li>
            ))}
          </ol>
        </Grid>
      </TableCell>
      <TableCell align="center" sx={{ border: 1 }}>
        ₹{orderTotal.toLocaleString()}
      </TableCell>
      <TableCell align="center" sx={{ border: 1 }}>
        {date}
      </TableCell>
    </TableRow>
  );
};

export default Order;
