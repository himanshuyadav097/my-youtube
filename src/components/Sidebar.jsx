import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store?.app?.isMenuOpen);
  return (
    <>
      {isMenuOpen && (
        <>
          <div className="flex-col shadow-lg">
            <div className="p-5 w-48  ">
              <ul>
                {" "}
                <li>
                  {" "}
                  <Link to={"/"}>Home </Link>
                </li>
                <li>short</li>
                <li>video</li>
                <li>Live</li>
              </ul>
            </div>
            <div className="p-5 w-48  ">
              <h1 className="text-xl">Subsction</h1>
              <ul>
                <li>movie</li>
                <li>music</li>
                <li>Shorts</li>
                <li>music</li>
              </ul>
            </div>
            <div className="p-5 w-48  ">
              <h1 className="text-xl">Watch Later</h1>
              <ul>
                <li>movie</li>
                <li>ddd</li>
                <li>Shorts</li>
                <li>music</li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Sidebar;
