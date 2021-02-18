import {
  faEdit,
  faRunning,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TodoList = ({ aktifitas, jam, warna, icon }) => {
  return (
    <div className="flex justify-between items-center">
      <div
        className={`w-10 h-10 bg-${warna}-100 rounded-md flex flex-none justify-center items-center shadow-md`}
      >
        <FontAwesomeIcon icon={icon} className={`text-2xl text-${warna}-500`} />
      </div>
      <div className="w-full pl-5 flex flex-col gap-1">
        <div className="font-bold text-sm leading-tight">{aktifitas}</div>
        <div className="text-xs italic font-light">{jam}</div>
      </div>
      <div className="w-8 flex-none flex items-center justify-between text-gray-500 text-xs">
        <div>
          <FontAwesomeIcon icon={faEdit} />
        </div>
        <div>
          <FontAwesomeIcon icon={faTrashAlt} />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
