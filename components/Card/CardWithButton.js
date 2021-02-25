import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CardWithButton = () => {
  return (
    <div className="bg-white shadow-md rounded-md flex flex-col items-center justify-center gap-2 relative px-10 py-5">
      <button className="absolute top-1 right-2 text-sm text-gray-400 focus:outline-none">
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <div className="text-xl font-semibold text-center">
        Lorem ipsum dolor sit amet consectetur.
      </div>
      <button className="bg-red-500 px-2 rounded-md shadow-md text-white font-semibold focus:outline-none">
        pelajari
      </button>
    </div>
  );
};

export default CardWithButton;
