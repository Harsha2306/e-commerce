import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/navbar/MainNavigation";


const RootLayoout = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};

export default RootLayoout;