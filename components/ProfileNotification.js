import {
  faSignOutAlt,
  faSmile,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProfileNotification = () => {
  return (
    <div className="w-32 absolute bg-white shadow-md  top-12 right-0 rounded-md overflow-hidden flex flex-col py-3 px-3 gap-3 z-50">
      <div className="flex">
        <div className="w-1/4 flex justify-center items-center text-green-500">
          <FontAwesomeIcon icon={faSmile} />
        </div>
        <div className="px-2 text-sm">Aktif</div>
      </div>
      <div className="flex">
        <div className="w-1/4 flex justify-center items-center">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className="px-2 text-sm">Profile</div>
      </div>
      <div className="flex">
        <div className="w-1/4 flex justify-center items-center">
          <FontAwesomeIcon icon={faSignOutAlt} />
        </div>
        <div className="px-2 text-sm">Sign Out</div>
      </div>
    </div>
  );
};

export default ProfileNotification;
