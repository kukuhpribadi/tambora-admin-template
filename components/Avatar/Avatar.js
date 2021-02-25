import Image from "next/image";
import React from "react";

const Avatar = ({ img }) => {
  return (
    <div className="w-12 h-12 overflow-hidden rounded-full">
      <Image src={img} alt="John Doe" width={100} height={100} />
    </div>
  );
};

export default Avatar;
