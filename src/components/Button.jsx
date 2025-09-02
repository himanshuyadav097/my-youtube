import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="p-2 m-2 w-17 bg-gray-50 rounded-x text-black">
        {props?.name}
      </button>
    </div>
  );
};

export default Button;
