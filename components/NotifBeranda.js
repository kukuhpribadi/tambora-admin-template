import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "next/image";

const NotifBeranda = () => {
  return (
    <div className="card bg-white shadow-md rounded-md overflow-hidden text-gray-600">
      {/* header */}
      <div className=" flex justify-between items-center px-5 h-16 ">
        <div className="font-bold ">Notifikasi</div>
        <div className="text-gray-400">
          <FontAwesomeIcon icon={faEllipsisH} />
        </div>
      </div>
      {/* body */}
      <div className="px-5 pt-2 pb-5 flex flex-col gap-5 items-center">
        <Image
          src="/img/illustrator.svg"
          alt="John Doe"
          width={200}
          height={200}
        />
        <div className="font-bold">Tidak ada notifikasi</div>
      </div>
    </div>
  );
};

export default NotifBeranda;
