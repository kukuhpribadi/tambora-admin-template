import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ButtonOutlineHover from "../Button/ButtonOutlineHover";

const CardButtonOutlineHover = () => {
  return (
    <div className="card bg-white shadow-md rounded-md overflow-hidden text-gray-600">
      {/* header */}
      <div className=" flex justify-between items-center px-5 h-16 ">
        <div className="font-bold ">Outline Button Hover</div>
        <div className="text-gray-400">
          <FontAwesomeIcon icon={faEllipsisH} />
        </div>
      </div>
      {/* body */}
      <div className="px-5 pt-2 pb-5 flex flex-wrap gap-3">
        <ButtonOutlineHover color="red" />
        <ButtonOutlineHover color="blue" />
        <ButtonOutlineHover color="green" />
        <ButtonOutlineHover color="yellow" />
        <ButtonOutlineHover color="purple" />
        <ButtonOutlineHover color="gray" />
      </div>
    </div>
  );
};

export default CardButtonOutlineHover;
