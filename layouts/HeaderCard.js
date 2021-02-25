import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const HeaderCard = ({ title }) => {
  return (
    <div className="flex justify-between items-center px-5 h-16">
      <div className="font-bold ">{title}</div>
      <div className="text-gray-400">
        <FontAwesomeIcon icon={faEllipsisH} />
      </div>
    </div>
  );
};

export default HeaderCard;
