import React from "react";
import Sidebar from "./Sidebar";
import Body from "./Body";
import ButtonList from "./ButtonList";
import VideoContanor from "./VideoContanor";

const MainContanor = () => {
  return (
    <div className="w-auto">
      <ButtonList />
      <VideoContanor />
    </div>
  );
};

export default MainContanor;
