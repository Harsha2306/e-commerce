import React from "react";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import Subscription from "../components/Home/Subscription";
import Wbf from "../components/Home/Wbf";
import NewArrivals from "../components/Home/NewArrivals";
import MainPoster from "../components/Home/MainPoster";
import Caption from "../components/Home/Caption";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <MainPoster />
      <FeaturedProducts />
      <Subscription />
      <Caption />
      <NewArrivals />
      <Wbf />
      <Footer />
    </>
  );
};

export default Home;
