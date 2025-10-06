import React from "react";

const VideoCard = ({ info }) => {
  if (!info || !info.snippet) return null;

  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;

  return (
    <div className="p-2 m-2 shadow-md w-80 rounded-md">
      <img
        src={thumbnails?.medium?.url}
        alt="video thumbnail"
        className="w-full rounded-md"
      />
      <ul className="mt-2 text-sm">
        <li className="font-bold">{title}</li>
        <li className="text-gray-600">{channelTitle}</li>
        <li className="text-gray-500">
          {statistics?.viewCount
            ? Number(statistics.viewCount).toLocaleString() + " views"
            : "No views info"}
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
