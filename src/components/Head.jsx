import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toogleMenu } from "../utils/appSlice";

const Head = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const toogleMenuHandle = () => {
    console.log("hello");
    dispatch(toogleMenu());
  };
  return (
    <div className="grid grid-cols-12 items-center p-3 m-1 shadow-lg">
      {/* Left - Logo Section */}
      <div className="flex col-span-2 items-center gap-3 cursor-pointer">
        <img
          onClick={() => toogleMenuHandle()}
          className="h-6 w-6"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
          alt="menu"
        />
        <img
          className="h-10 w-20 object-contain"
          src="https://t4.ftcdn.net/jpg/14/99/30/81/240_F_1499308153_c19er2e2haYMyfGxYkTBxxNLeTEJ26B0.jpg"
          alt="logo"
        />
      </div>

      {/* Center - Search Input */}
      <div className="flex col-span-8 items-center">
        <input
          className="border border-gray-300 rounded-l-full h-10 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-gray-100 border border-gray-300 rounded-r-full h-10 px-4 hover:bg-gray-200">
          🔍
        </button>
      </div>

      {/* Right - Profile/Menu Icon */}
      <div className="flex col-span-2 justify-end items-center">
        <img
          className="h-8 w-8"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
          alt="user-menu"
        />
      </div>
    </div>
  );
};

export default Head;
