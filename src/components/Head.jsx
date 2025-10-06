import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { catchSearch } from "../utils/searchSlice";

const Head = () => {
  const [text, setText] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [showSuggestionData, setShowSuggestionData] = useState([]);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  const toogleMenuHandle = () => {
    dispatch(toogleMenu());
  };
  const getSearchApi = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + text);

    const json = await response.json();
    setShowSuggestionData(json[1]);
    dispatch(
      catchSearch({
        [text]: json[1],
      })
    );
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[text]) {
        setShowSuggestionData(searchCache);
      } else {
        getSearchApi();
      }
    }, [200]);
    return () => {
      clearTimeout(timer);
    };
  }, [text]);

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
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(true)}
        />
        <button className="bg-gray-100 border border-gray-300 rounded-r-full h-10 px-4 hover:bg-gray-200">
          🔍
        </button>
        {showSuggestion && (
          <div className="fixed bg-white py-2 px-5 w-200 mt-30">
            {showSuggestion && showSuggestionData.length > 0 && (
              <div className="absolute bg-white py-2 px-5 w-full mt-1 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                <ul>
                  {showSuggestionData.map((val, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {val}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
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
