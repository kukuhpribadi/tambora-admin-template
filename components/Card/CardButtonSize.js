import React from "react";
import HeaderCard from "../../layouts/HeaderCard";
import ButtonSize from "../Button/ButtonSize";

const CardButtonSize = () => {
  return (
    <div className="card bg-white shadow-md rounded-md overflow-hidden text-gray-600">
      {/* header */}
      <HeaderCard title="Size button" />
      {/* body */}
      <div className="px-5 pb-5">
        <ButtonSize size="xs" />
        <ButtonSize size="sm" />
        <ButtonSize size="base" />
        <ButtonSize size="lg" />
        <ButtonSize size="xl" />
        <ButtonSize size="2xl" />
      </div>
    </div>
  );
};

export default CardButtonSize;
