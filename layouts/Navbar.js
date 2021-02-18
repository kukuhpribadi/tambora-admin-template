import {
  faBell,
  faEllipsisH,
  faEnvelope,
  faSearch,
  faSign,
  faSignInAlt,
  faSignOutAlt,
  faSmile,
  faSmileBeam,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Image from "next/image";
import Notifications from "../components/Notifications";
import MessageNotif from "../components/MessageNotif";

const Navbar = () => {
  const [notification, setNotification] = useState(false);
  const [messageNotif, setmessageNotif] = useState(false);
  const [profile, setProfile] = useState(false);

  const clickNotification = () => {
    setNotification(!notification);
    setmessageNotif(false);
    setProfile(false);
  };

  const clickMessageNotif = () => {
    setmessageNotif(!messageNotif);
    setNotification(false);
    setProfile(false);
  };

  const clickProfile = () => {
    setProfile(!profile);
    setmessageNotif(false);
    setNotification(false);
  };
  return (
    <>
      <div className="h-16 w-full shadow-md flex items-center justify-between px-5 bg-white">
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
            <div className="select-none relative" onClick={clickNotification}>
              <FontAwesomeIcon
                icon={faBell}
                className="cursor-pointer icon-menu"
              />
              {/* menu dropdown */}
              <Notifications openNotif={notification} />
            </div>
            <div className="relative" onClick={clickMessageNotif}>
              <div className="absolute top-0.5 -right-1 w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <FontAwesomeIcon
                icon={faEnvelope}
                className="cursor-pointer icon-menu"
              />
              {/* message dropdown */}
              <MessageNotif openMessageNotif={messageNotif} />
            </div>
          </div>
          {/* profile */}
          <div
            className="flex items-center gap-2 cursor-pointer relative"
            onClick={clickProfile}
          >
            {/* profile menu */}
            <div
              className={
                profile
                  ? "w-32 absolute bg-white shadow-md  top-12 right-0 rounded-md overflow-hidden flex flex-col py-3 px-3 gap-3"
                  : "hidden"
              }
            >
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
