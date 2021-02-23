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
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Notifications from "../components/Notifications";
import MessageNotif from "../components/MessageNotif";
import ProfileNotification from "../components/ProfileNotification";

const Navbar = () => {
  const [notification, setNotification] = useState(false);
  const [messageNotif, setmessageNotif] = useState(false);
  const [profileNotif, setProfileNotif] = useState(false);

  // ref
  const refNotification = useRef();
  const refMessage = useRef();
  const refProfile = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!refNotification.current.contains(event.target)) {
        setNotification(false);
      }
    };
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, [notification]);

  useEffect(() => {
    const handler = (event) => {
      if (!refMessage.current.contains(event.target)) {
        setmessageNotif(false);
      }
    };
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, [messageNotif]);

  useEffect(() => {
    const handler = (event) => {
      if (!refProfile.current.contains(event.target)) {
        setProfileNotif(false);
      }
    };
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, [profileNotif]);

  return (
    <>
      <div className="h-16 w-full shadow-md flex items-center justify-between px-2 lg:px-5 bg-white">
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
        <div className="flex flex-row gap-5 lg:gap-10 text-gray-500 items-center">
          {/* noitification */}
          <div className="flex gap-5">
            <div className="select-none relative" ref={refNotification}>
              <div onClick={() => setNotification(!notification)}>
                <FontAwesomeIcon
                  icon={faBell}
                  className="cursor-pointer icon-menu"
                />
              </div>
              {/* menu dropdown */}
              {notification && <Notifications />}
            </div>
            {/* message */}
            <div className="relative" ref={refMessage}>
              <div className="absolute top-0.5 -right-1 w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <div onClick={() => setmessageNotif(!messageNotif)}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="cursor-pointer icon-menu"
                />
              </div>
              {/* message dropdown */}
              {messageNotif && <MessageNotif />}
            </div>
          </div>
          {/* profile */}
          <div
            className="flex items-center gap-2 cursor-pointer relative"
            onClick={() => setProfileNotif(!profileNotif)}
            ref={refProfile}
          >
            {profileNotif && <ProfileNotification />}
            <div className="w-8 h-8 overflow-hidden rounded-full">
              <Image
                src="/img/img-profile.jpg"
                alt="John Doe"
                width={500}
                height={500}
              />
            </div>
            <div className="text-sm select-none">John Doe</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
