import ButtonSimple from "../Button/ButtonSimple";
import React from "react";
import HeaderCard from "../../layouts/HeaderCard";

const CardButtonSimple = () => {
  return (
    <div className="card bg-white shadow-md rounded-md overflow-hidden text-gray-600">
      {/* header */}
      <HeaderCard title="Simple button" />
      {/* body */}
      <div className="px-5 pb-5 flex flex-wrap gap-3">
        <ButtonSimple color="red" />
        <ButtonSimple color="blue" />
        <ButtonSimple color="green" />
        <ButtonSimple color="yellow" />
        <ButtonSimple color="purple" />
        <ButtonSimple color="gray" />
      </div>
    </div>
  );
};

export default CardButtonSimple;
