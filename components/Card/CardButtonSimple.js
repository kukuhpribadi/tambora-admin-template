import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonSimple from "../Button/ButtonSimple";
import React from "react";

const CardButtonSimple = () => {
  return (
    <div className="card bg-white shadow-md rounded-md overflow-hidden text-gray-600">
      {/* header */}
      <div className=" flex justify-between items-center px-5 h-16 ">
        <div className="font-bold ">Simple Button</div>
        <div className="text-gray-400">
          <FontAwesomeIcon icon={faEllipsisH} />
        </div>
      </div>
      {/* body */}
      <div className="px-5 pt-2 pb-5 flex flex-wrap gap-3">
        <ButtonSimple color="red" />
        <ButtonSimple color="blue" />
        <ButtonSimple color="green" />
        <ButtonSimple color="yellow" />
        <ButtonSimple color="purple" />
        <ButtonSimple color="gray" />
      </div>
    </div>
  );
};

export default CardButtonSimple;
