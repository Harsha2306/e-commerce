import React, { useEffect, useState } from "react";
import {
  Typography,
  Grid,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
} from "@mui/material";
import Order from "../components/Order";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoaing] = useState(true);

  useEffect(() => {
    fetch("https://e-commerce-e8752-default-rtdb.firebaseio.com/allorders.json")
      .then((res) => res.json())
      .then((data) => {
        const ordersCopy = [];
        for (const key in data) {
          ordersCopy.unshift({
            key: data[key].orderID,
            orderId: data[key].orderId,
            orderedItems: data[key].orderedItems,
            orderTotal: data[key].orderTotal,
            date: data[key].date,
          });
        }
        setOrders(ordersCopy);
        setIsLoaing(false);
      });
  }, [orders]);

  if (isLoading)
    return (
      <Grid display="flex" justifyContent="center">
        <LoadingSpinner />
      </Grid>
    );

  return (
    <>
      {orders.length === 0 && (
        <Grid container justifyContent="center" padding={4}>
          <Typography align="center" variant="h3">
            No Orders
          </Typography>
        </Grid>
      )}
      {orders.length !== 0 && (
        <>
          <Grid padding={3} display="flex" justifyContent="flex-start">
            <Typography variant="h3">Your Orders</Typography>
          </Grid>
          <TableContainer sx={{ backgroundColor: "#F5F5F5" }}>
            <Table>
              <TableHead sx={{ backgroundColor: "#2D2727" }}>
                <TableRow>
                  <TableCell align="center" sx={{ color: "#F5F5F5" }}>
                    OrderID
                  </TableCell>
                  <TableCell align="center" sx={{ color: "#F5F5F5" }}>
                    OrderedProducts
                  </TableCell>
                  <TableCell align="center" sx={{ color: "#F5F5F5" }}>
                    Subtotal
                  </TableCell>
                  <TableCell align="center" sx={{ color: "#F5F5F5" }}>
                    OrderedDate
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order) => (
                  <Order
                    key={order.orderId}
                    orderId={order.orderId}
                    orderedItems={order.orderedItems}
                    orderTotal={order.orderTotal}
                    date={order.date}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </>
  );
};

export default Orders;
