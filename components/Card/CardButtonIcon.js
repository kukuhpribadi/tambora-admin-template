import {
  faAddressCard,
  faTimesCircle,
} from "@fortawesome/free-regular-svg-icons";
import {
  faArchive,
  faPaperPlane,
  faTrash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import HeaderCard from "../../layouts/HeaderCard";
import ButtonIcon from "../Button/ButtonIcon";

const CardButtonIcon = () => {
  return (
    <div className="card bg-white shadow-md rounded-md overflow-hidden text-gray-600">
      {/* header */}
      <HeaderCard title="Simple button icon" />
      {/* body */}
      <div className="px-5 pb-5 flex flex-wrap gap-3">
        <ButtonIcon text="Delete" color="red" icon={faTrash} />
        <ButtonIcon text="Add User" color="blue" icon={faUserPlus} />
        <ButtonIcon text="Send" color="green" icon={faPaperPlane} />
        <ButtonIcon text="Cancel" color="yellow" icon={faTimesCircle} />
        <ButtonIcon text="Address" color="purple" icon={faAddressCard} />
        <ButtonIcon text="Archive" color="gray" icon={faArchive} />
      </div>
    </div>
  );
};

export default CardButtonIcon;
