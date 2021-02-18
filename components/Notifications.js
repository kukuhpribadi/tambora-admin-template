import { faBug, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Notifications = ({ openNotif }) => {
  return (
    <div
      className={
        openNotif
          ? "w-72 absolute bg-white shadow top-11 right-0 rounded-md overflow-hidden"
          : "hidden"
      }
    >
      {/* HEAD */}
      <div className="flex justify-between bg-red-500 text-white px-3 py-1.5 text-xs">
        <div className="font-semibold">Notifikasi</div>
        <div>
          <FontAwesomeIcon icon={faEllipsisH} />
        </div>
      </div>
      {/* BODY */}
      <div className="max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-track-gray-100 scrollbar-thumb-gray-200">
        {/* row */}
        <div className="flex h-min-16 border-b border-gray-100">
          <div className="w-1/3  text-red-700 flex items-center justify-center text-4xl">
            <FontAwesomeIcon icon={faBug} />
          </div>
          <div className="w-full px-1 py-2 flex flex-col justify-center gap-1">
            <div className="text-xs ">Fix bugs pada komponen card.</div>
            <div className="text-xs italic text-gray-400">3jam lalu</div>
          </div>
        </div>
        <div className="flex h-min-16 border-b border-gray-100">
          <div className="w-1/3  text-green-700 flex items-center justify-center text-4xl">
            🖖
          </div>
          <div className="w-full px-1 py-2 flex flex-col justify-center gap-1">
            <div className="text-xs ">
              Selamat datang di tambora project admin-template.
            </div>
            <div className="text-xs italic text-gray-400">13jam lalu</div>
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

export default Notifications;
