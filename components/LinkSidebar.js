import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const LinkSidebar = ({ icon, nama, arrow, childMenu }) => {
  const [openMenu, setOpenMenu] = useState(false);

  function clickMenu() {
    if (arrow) setOpenMenu(!openMenu);
  }

  console.log(childMenu);

  return (
    <>
      <div
        className="flex w-full text-white pl-3 pr-5 cursor-pointer"
        onClick={clickMenu}
      >
        <div className="w-1/4 flex justify-center items-center">
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className="w-full flex justify-between select-none">
          <div>{nama}</div>
          <div>
            {arrow && (
              <FontAwesomeIcon icon={!openMenu ? faAngleRight : arrow} />
            )}
          </div>
        </div>
      </div>
      {childMenu && (
        <div
          className={
            openMenu
              ? "bg-gray-100 w-3/4 self-center rounded-lg shadow-lg pl-5 pr-3 py-2 flex flex-col gap-3"
              : "hidden"
          }
        >
          {childMenu.map((mn, index) => {
            return (
              <div key={index} className="cursor-pointer ">
                {mn}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default LinkSidebar;
