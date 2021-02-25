import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ButtonIcon = ({ color, icon, text }) => {
  return (
    <button
      className={`bg-${color}-500 text-white py-1 px-2 rounded-md font-semibold shadow-md focus:outline-none`}
    >
      <FontAwesomeIcon icon={icon} /> {text}
    </button>
  );
};

export default ButtonIcon;
