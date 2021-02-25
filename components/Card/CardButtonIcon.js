import {
  faAddressCard,
  faTimesCircle,
} from "@fortawesome/free-regular-svg-icons";
import {
  faArchive,
  faEllipsisH,
  faPaperPlane,
  faTrash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ButtonIcon from "../Button/ButtonIcon";
import ButtonSimple from "../Button/ButtonSimple";

const CardButtonIcon = () => {
  return (
    <div className="card bg-white shadow-md rounded-md overflow-hidden text-gray-600">
      {/* header */}
      <div className=" flex justify-between items-center px-5 h-16 ">
        <div className="font-bold ">Simple Button With Icon</div>
        <div className="text-gray-400">
          <FontAwesomeIcon icon={faEllipsisH} />
        </div>
      </div>
      {/* body */}
      <div className="px-5 pt-2 pb-5 flex flex-wrap gap-3">
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
