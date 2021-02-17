import {
  faCheck,
  faCheckDouble,
  faEllipsisH,
  faSmileBeam,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "next/image";

const MessageNotif = ({ openMessageNotif }) => {
  return (
    <div
      className={
        openMessageNotif
          ? "w-80 absolute bg-white shadow top-11 right-0 rounded-md overflow-hidden"
          : "hidden"
      }
    >
      {/* HEAD */}
      <div className="flex justify-between bg-red-500 text-white px-3 py-1.5 text-xs">
        <div className="font-semibold">Pesan</div>
        <div>
          <FontAwesomeIcon icon={faEllipsisH} />
        </div>
      </div>
      {/* BODY */}
      <div className="max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-track-gray-100 scrollbar-thumb-gray-200 px-1">
        {/* row */}
        <div className="flex min-h-16 border-b border-gray-100 py-2">
          {/* profile */}
          <div className="w-1/4  flex items-center justify-center text-4xl relative">
            <div className="absolute w-3 h-3 bottom-0 right-2 rounded-full bg-green-500 z-10"></div>
            <div className="w-12 h-12 overflow-hidden rounded-full">
              <Image
                src="/img/img-profile3.jpg"
                alt="John Doe"
                width={500}
                height={500}
              />
            </div>
          </div>
          {/* pesan */}
          <div className="w-full px-2 flex flex-col justify-center text-xs gap-1">
            <div className="flex justify-between">
              <div className="font-bold">Rahayu Putri</div>
              <div className="text-gray-400 italic">23m lalu</div>
            </div>
            <div className="flex">
              <div className="w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing . . .
              </div>
              <div className="w-3 text-green-500 flex-none">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex min-h-16 border-b border-gray-100 py-2">
          {/* profile */}
          <div className="w-1/4  flex items-center justify-center text-4xl relative">
            <div className="absolute w-3 h-3 bottom-0 right-2 rounded-full bg-red-500 z-10"></div>
            <div className="w-12 h-12 overflow-hidden rounded-full">
              <Image
                src="/img/img-profile2.jpg"
                alt="John Doe"
                width={500}
                height={500}
              />
            </div>
          </div>
          {/* pesan */}
          <div className="w-full px-2 flex flex-col justify-center text-xs gap-1">
            <div className="flex justify-between">
              <div className="font-bold">Bambang Pamungkas</div>
              <div className="text-gray-400 italic">4jam lalu</div>
            </div>
            <div className="flex">
              <div className="w-full">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio,
                perferendis . . .
              </div>
              <div className="w-3 text-green-500 flex-none">
                <FontAwesomeIcon icon={faCheckDouble} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FOOTER */}
      <div className="flex justify-center py-3 text-xs ">
        <div className="">Baca semua</div>
      </div>
    </div>
  );
};

export default MessageNotif;
