import React from "react";
import HeaderCard from "../../layouts/HeaderCard";
import Avatar from "../Avatar/Avatar";

const CardAvatar = () => {
  return (
    <div className="card bg-white shadow-md rounded-md overflow-hidden text-gray-600">
      {/* header */}
      <HeaderCard title="Avatar" />
      {/* body */}
      <div className="px-5 pb-5 flex flex-wrap gap-3">
        <Avatar img="/img/img-profile.jpg" />
        <Avatar img="/img/img-profile2.jpg" />
        <Avatar img="/img/img-profile3.jpg" />
        <Avatar img="/img/img-profile4.jpg" />
        <Avatar img="/img/img-profile5.jpg" />
      </div>
    </div>
  );
};

export default CardAvatar;
