import React from "react";

const ButtonOutlineHover = ({ color }) => {
  return (
    <button
      className={`border border-${color}-500 text-${color}-500 py-1 px-2 rounded-md shadow-md focus:outline-none hover:bg-${color}-500 hover:text-white transition duration-100 ease-in-out`}
    >
      {color} button
    </button>
  );
};

export default ButtonOutlineHover;
