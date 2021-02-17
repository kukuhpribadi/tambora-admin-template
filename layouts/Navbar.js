import {
  faBell,
  faEllipsisH,
  faEnvelope,
  faSearch,
  faSmileBeam,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Image from "next/image";
import Notifications from "../components/Notifications";
import MessageNotif from "../components/MessageNotif";

const Navbar = () => {
  const [notification, setNotification] = useState(false);
  const [messageNotif, setmessageNotif] = useState(false);

  const clearOpenNotif = () => {
    setmessageNotif(false);
    setNotification(false);
  };

  const clickNotification = () => {
    setNotification(!notification);
    setmessageNotif(false);
  };

  const clickMessageNotif = () => {
    setmessageNotif(!messageNotif);
    setNotification(false);
  };
  return (
    <>
      <div className="h-16 w-full shadow-lg flex items-center justify-between px-5">
        {/* left menu */}
        <div className="w-52 h-8 flex items-center bg-gray-100 rounded-full overflow-hidden text-gray-500 text-sm">
          <div className="w-8 h-full flex items-center justify-center pl-2">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div className="w-full">
            <input
              className="outline-none w-full bg-transparent px-1"
              type="text"
              placeholder="Cari sesuatu . . ."
            />
          </div>
        </div>
        {/* right  menu */}
        <div className="flex flex-row gap-10 text-gray-500 items-center">
          {/* noitification */}
          <div className="flex gap-5">
            <div className="select-none relative">
              <FontAwesomeIcon
                icon={faBell}
                className="cursor-pointer"
                onClick={clickNotification}
              />
              {/* menu dropdown */}
              <Notifications openNotif={notification} />
            </div>
            <div className="relative">
              <div className="absolute top-0.5 -right-1 w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <FontAwesomeIcon
                icon={faEnvelope}
                className="cursor-pointer "
                onClick={clickMessageNotif}
              />
              {/* message dropdown */}
              <MessageNotif openMessageNotif={messageNotif} />
            </div>
          </div>
          {/* profile */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 overflow-hidden rounded-full">
              <Image
                src="/img/img-profile.jpg"
                alt="John Doe"
                width={500}
                height={500}
              />
            </div>
            <div className="text-sm">John Doe</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
