import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import RootLayoout from "./pages/RootLayoout";
import ProductDetails from "./components/products/ProductDetails";
import Error from "./pages/Error";
import Orders from "./pages/Orders";
import { fetchOrders } from "./store/orders-slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayoout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:productId", element: <ProductDetails /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/orders", element: <Orders /> },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
//  useEffect(() => {
//    dispatch(fetchOrders());
//  }, [dispatch]);
  return <RouterProvider router={router} />;
}

export default App;
