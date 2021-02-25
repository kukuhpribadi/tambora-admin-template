import React from "react";
import HeaderCard from "../../layouts/HeaderCard";
import ButtonOutline from "../Button/ButtonOutline";

const CardButtonOutline = () => {
  return (
    <div className="card bg-white shadow-md rounded-md overflow-hidden text-gray-600">
      {/* header */}
      <HeaderCard title="Outline button" />
      {/* body */}
      <div className="px-5 pb-5 flex flex-wrap gap-3">
        <ButtonOutline color="red" />
        <ButtonOutline color="blue" />
        <ButtonOutline color="green" />
        <ButtonOutline color="yellow" />
        <ButtonOutline color="purple" />
        <ButtonOutline color="gray" />
      </div>
    </div>
  );
};

export default CardButtonOutline;
