import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import HeaderCard from "../../layouts/HeaderCard";

const Note = () => {
  return (
    <div className="card h-40 bg-white shadow-md rounded-md overflow-hidden text-gray-600">
      {/* header */}
      <HeaderCard title="Note" />
      {/* body */}
      <div className="px-5 flex gap-5">
        <div className="bg-red-100 w-16 h-16 rounded-md flex flex-none justify-center items-center shadow-md">
          <FontAwesomeIcon icon={faYoutube} className="text-4xl text-red-500" />
        </div>
        <div className="flex flex-col justify-between">
          <div className="font-semibold leading-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="text-sm font-light">19-02-2021 | 19.30 </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
