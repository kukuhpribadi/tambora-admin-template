import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Link from "next/link";

const LinkSidebar = ({ icon, nama, childMenu, notifIcon }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [url, setUrl] = useState("#");

  useState(() => {
    // if (nama === "beranda") setUrl(`/`);
    setUrl(nama === "beranda" ? "/" : `/${nama}`);
    if (childMenu) {
      setUrl("#");
    }
  }, [url]);

  const clickMenu = () => {
    if (childMenu) {
      setOpenMenu(!openMenu);
      setUrl("#");
    }
  };

  return (
    <>
      <Link href={url}>
        <a
          className="flex w-full text-white cursor-pointer items-center justify-center md:px-2 lg:px-5"
          onClick={clickMenu}
        >
          <div className="w-1/4">
            <FontAwesomeIcon icon={icon} />
          </div>
          <div className="w-full hidden md:flex items-center justify-between select-none">
            <div className="capitalize">{nama}</div>
            <div>
              {childMenu && (
                <FontAwesomeIcon
                  icon={!openMenu ? faAngleRight : faAngleDown}
                />
              )}
              {notifIcon && (
                <div className="text-xs font-bold bg-green-500 rounded-full px-1">
                  new
                </div>
              )}
            </div>
          </div>
        </a>
      </Link>
      {childMenu && (
        <div
          className={
            openMenu
              ? "bg-gray-100 w-3/4 self-center rounded-lg shadow-lg pl-5 pr-3 py-2 hidden md:flex flex-col gap-3 text-gray-600 "
              : "hidden"
          }
        >
          {childMenu.map((mn, index) => {
            return (
              <Link href={`/components/${mn}`} key={index}>
                <a className="cursor-pointer hover:text-red-800 capitalize">
                  {mn}
                </a>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default LinkSidebar;
