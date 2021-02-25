import {
  faTwitter,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CardSideImage = () => {
  return (
    <div className="bg-white shadow-md rounded-md flex overflow-hidden relative">
      <button className="absolute top-1 right-2 text-sm text-gray-400 focus:outline-none">
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <div className="w-1/3 flex-none h-full">
        <img
          src="/img/img.jpg"
          alt="Panorama"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="p-5 flex flex-col gap-2">
        <div className="font-bold">Lorem ipsum dolor sit.</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          voluptates rem tempora! Ut, debitis dicta alias{" "}
          <span className="text-blue-500 font-bold cursor-pointer">
            read more
          </span>
        </div>
        <div className="flex justify-center gap-5 text-xl pt-4">
          <div>
            <FontAwesomeIcon icon={faYoutube} className="text-red-500" />
          </div>
          <div>
            <FontAwesomeIcon icon={faTwitter} className="text-blue-500" />
          </div>
          <div>
            <FontAwesomeIcon icon={faWhatsapp} className="text-green-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSideImage;
