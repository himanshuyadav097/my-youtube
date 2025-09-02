import React, { useEffect } from "react";
import { URL } from "../utils/constants";

const VideoContanor = () => {
  const FetchData = async () => {
    const response = await fetch(URL);
    const json = await response.json();
    console.log("response", json);
  };
  useEffect(() => {
    FetchData();
  }, []);
  return <div>VideoContanor</div>;
};

export default VideoContanor;
