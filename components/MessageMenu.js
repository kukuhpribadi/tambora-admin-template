import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MessageMenu = ({ icon, nama, notif, notifWarna, active }) => {
  return (
    <div
      className={`cursor-pointer h-12 flex items-center gap-4 px-6 ${
        active && "border-l-4 pl-5 border-red-400 bg-red-50 font-semibold"
      }`}
    >
      <div>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="w-full flex justify-between items-center">
        <div>{nama}</div>
        <div
          className={`text-xs text-white px-1 rounded-md bg-${notifWarna}-500`}
        >
          {notif && notif}
        </div>
      </div>
    </div>
  );
};

export default MessageMenu;
