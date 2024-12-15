import React from "react";
import { Outlet } from "react-router-dom";
import { NavUppBar } from "../../component/NavBars/NavUpBar/NavUppBar/NavUppBar";
import { Products } from "./Products/Products";
import { AuthMiddleware } from "../AuthMiddleware";

export const Client = () => {
  return (
    <>
      <NavUppBar />
      <Outlet />
      <Products />
    </>
  );
};
