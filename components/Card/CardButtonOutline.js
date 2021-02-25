import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ButtonOutline from "../Button/ButtonOutline";

const CardButtonOutline = () => {
  return (
    <div className="card bg-white shadow-md rounded-md overflow-hidden text-gray-600">
      {/* header */}
      <div className=" flex justify-between items-center px-5 h-16 ">
        <div className="font-bold ">Outline Button</div>
        <div className="text-gray-400">
          <FontAwesomeIcon icon={faEllipsisH} />
        </div>
      </div>
      {/* body */}
      <div className="px-5 pt-2 pb-5 flex flex-wrap gap-3">
        <ButtonOutline color="red" />
        <ButtonOutline color="blue" />
        <ButtonOutline color="green" />
        <ButtonOutline color="yellow" />
        <ButtonOutline color="purple" />
        <ButtonOutline color="gray" />
      </div>
    </div>
  );
};

export default CardButtonOutline;
