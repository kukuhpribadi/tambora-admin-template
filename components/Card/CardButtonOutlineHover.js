import React from "react";
import HeaderCard from "../../layouts/HeaderCard";
import ButtonOutlineHover from "../Button/ButtonOutlineHover";

const CardButtonOutlineHover = () => {
  return (
    <div className="card bg-white shadow-md rounded-md overflow-hidden text-gray-600">
      {/* header */}
      <HeaderCard title="Outline button hover" />
      {/* body */}
      <div className="px-5 pb-5 flex flex-wrap gap-3">
        <ButtonOutlineHover color="red" />
        <ButtonOutlineHover color="blue" />
        <ButtonOutlineHover color="green" />
        <ButtonOutlineHover color="yellow" />
        <ButtonOutlineHover color="purple" />
        <ButtonOutlineHover color="gray" />
      </div>
    </div>
  );
};

export default CardButtonOutlineHover;
