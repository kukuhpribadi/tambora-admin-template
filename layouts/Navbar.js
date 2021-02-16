import { faBell, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="h-14 w-full shadow-lg flex items-center justify-between px-5">
        <div>kiri</div>
        <div className="flex flex-row gap-10 text-gray-600 items-center">
          {/* noitification */}
          <div className="flex gap-5">
            <div>
              <FontAwesomeIcon icon={faBell} />
            </div>
            <div className=" relative">
              <div className="absolute top-0.5 -right-1 w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
          </div>
          {/* profile */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 overflow-hidden rounded-full">
              <Image
                src="/img/img-profile.jpg"
                alt="John Doe"
                width={500}
                height={500}
              />
            </div>
            <div>John Doe</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
