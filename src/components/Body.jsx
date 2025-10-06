import React from "react";
import Sidebar from "./Sidebar";
import MainContanor from "./MainContanor";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      {/* <MainContanor /> */}
      <Outlet />
    </div>
  );
};

export default Body;
