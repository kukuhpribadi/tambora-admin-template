import React from "react";

const ButtonSize = ({ size }) => {
  return (
    <button
      className={`bg-red-500 text-white text-${size} px-1 m-1 rounded-md shadow-md focus:outline-none`}
    >
      {size} button
    </button>
  );
};

export default ButtonSize;
