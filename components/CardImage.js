import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

const CardImage = () => {
  return (
    <div className="shadow-md bg-white rounded-md overflow-hidden pb-5">
      {/* image */}
      <div className="bg-red-200 w-full h-44 shadow-md">
        <img
          src="/img/img.jpg"
          alt="Panorama"
          className="object-cover h-full  w-full"
        />
      </div>
      {/* body */}
      <div className="px-8">
        <div className="flex justify-between items-center pt-5 pb-3">
          <div>
            <div className="font-bold">Indonesia Bagus</div>
            <div className="text-xs">
              17j lalu | by{" "}
              <span className="font-bold text-blue-500">John Doe</span>
            </div>
          </div>
          <div className="flex gap-3">
            <div>
              <FontAwesomeIcon icon={faHeart} className="text-red-500" />
            </div>
            <div>
              <FontAwesomeIcon icon={faBookmark} className="" />
            </div>
          </div>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          voluptatem vel perferendis fuga? Qui eius maiores at blanditiis maxime
          mollitia.
        </div>
      </div>
    </div>
  );
};

export default CardImage;
