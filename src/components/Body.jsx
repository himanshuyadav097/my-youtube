import React from "react";
import Sidebar from "./Sidebar";
import MainContanor from "./MainContanor";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MainContanor />
    </div>
  );
};

export default Body;
