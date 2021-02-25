import React from "react";
import HeaderCard from "../../layouts/HeaderCard";
import AvatarStatus from "../Avatar/AvatarStatus";

const CardAvatarStatus = () => {
  return (
    <div className="card bg-white shadow-md rounded-md overflow-hidden text-gray-600">
      {/* header */}
      <HeaderCard title="Avatar with status" />
      {/* body */}
      <div className="px-5 pb-5 flex flex-wrap gap-3">
        <AvatarStatus img="/img/img-profile.jpg" color="green" />
        <AvatarStatus img="/img/img-profile2.jpg" color="yellow" />
        <AvatarStatus img="/img/img-profile3.jpg" color="red" />
        <AvatarStatus img="/img/img-profile4.jpg" color="blue" />
        <AvatarStatus img="/img/img-profile5.jpg" color="purple" />
      </div>
    </div>
  );
};

export default CardAvatarStatus;
