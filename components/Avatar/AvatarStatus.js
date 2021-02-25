import Image from "next/image";
import React from "react";

const AvatarStatus = ({ img, color }) => {
  return (
    <div className="relative">
      <div
        className={`absolute bg-${color}-500 w-4 h-4 rounded-full border-2 border-white -bottom-1 -right-0.5 z-10`}
      ></div>
      <div className="w-12 h-12 overflow-hidden rounded-full">
        <Image src={img} alt="John Doe" width={100} height={100} />
      </div>
    </div>
  );
};

export default AvatarStatus;
