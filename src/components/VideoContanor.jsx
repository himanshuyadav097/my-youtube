import React, { useEffect, useState } from "react";
import { YOU_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContanor = () => {
  const [videos, setvideos] = useState([]);
  const fetchData = async () => {
    const response = await fetch(YOU_URL);
    const json = await response.json();
    setvideos(json?.items);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap">
      {videos?.map((video) => (
        <Link to={"/watch?v=" + video?.id}>
          <VideoCard key={video?.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContanor;
