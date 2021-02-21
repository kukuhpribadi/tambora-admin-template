import { faSave, faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "next/image";

const MailList = ({ nama }) => {
  return (
    <tr className="h-16 border-b border-t">
      <td>
        <div className="flex">
          <input type="checkbox" />
        </div>
      </td>
      <td>
        <div className="flex">
          <FontAwesomeIcon icon={faStar} className=" text-yellow-400" />
        </div>
      </td>
      <td>
        <div className="flex gap-3 ">
          <div className="w-10 h-10 overflow-hidden rounded-full">
            <Image
              src="/img/img-profile2.jpg"
              alt="John Doe"
              width={500}
              height={500}
            />
          </div>
          <div className="">
            <div className="font-bold whitespace-nowrap">{nama}</div>
            <div className="text-xs italic">bambang@gmail.com</div>
          </div>
        </div>
      </td>
      <td>
        <div className="flex flex-col">
          <div className="font-bold">Lorem ipsum dolor sit amet.</div>
          <div className="">
            Lorem ipsum dolor sit amet consectetur adipisicing...
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faSave} />
          <FontAwesomeIcon icon={faTrash} />
          <div className="italic text-xs font-semibold">20 Feb</div>
        </div>
      </td>
    </tr>
  );
};

export default MailList;
