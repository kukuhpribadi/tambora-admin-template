import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ButtonOutlineHover from "../Button/ButtonOutlineHover";

const CardWithButton = () => {
  return (
    <div className="bg-white shadow-md rounded-md flex flex-col items-center justify-center gap-3 relative px-10 py-5">
      <button className="absolute top-1 right-2 text-sm text-gray-400 focus:outline-none">
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <div className="text-xl font-semibold text-center">
        Lorem ipsum dolor sit amet consectetur.
      </div>
      <ButtonOutlineHover color="red" />
    </div>
  );
};

export default CardWithButton;
