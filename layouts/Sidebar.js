import React, { useEffect, useState } from "react";
import LinkSidebar from "../components/LinkSidebar";
import {
  faAngleDown,
  faHome,
  faIdBadge,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="w-1/6 bg-red-500 flex flex-col items-center gap-10">
      {/* brand */}
      <div className=" h-16 w-full flex items-center justify-center">
        <h1 className="font-bold text-white text-3xl">tamboora.</h1>
      </div>
      {/* menu wrapper */}
      <div className=" w-full flex flex-col gap-5">
        {/* menu */}
        <LinkSidebar icon={faHome} nama="Beranda" />
        <LinkSidebar
          icon={faPuzzlePiece}
          nama="Komponen"
          arrow={faAngleDown}
          childMenu={["Badge", "Button", "Card", "Badge"]}
        />
        <LinkSidebar icon={faHome} nama="Beranda" />
      </div>
    </div>
  );
};

export default Sidebar;
