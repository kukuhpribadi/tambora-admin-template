import React from "react";

const ButtonOutline = ({ color }) => {
  return (
    <button
      className={`border border-${color}-500 text-${color}-500 py-1 px-2 rounded-md shadow-md focus:outline-none`}
    >
      {color} button
    </button>
  );
};

export default ButtonOutline;
