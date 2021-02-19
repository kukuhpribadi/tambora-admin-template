import React from "react";
import Image from "next/image";

const MyteamList = ({ data }) => {
  const { img, nama, sosmed, asal, jabatan, gaji, status } = data;
  return (
    <tr className="text-sm hover:bg-gray-100 whitespace-nowrap">
      <td className="flex h-14 gap-5 items-center">
        <div className="w-10 h-10 overflow-hidden rounded-full">
          <Image src={img} alt="John Doe" width={500} height={500} />
        </div>
        <div>
          <div className="font-semibold">{nama}</div>
          <div className="text-xs italic font-light">{sosmed}</div>
        </div>
      </td>
      <td>{asal}</td>
      <td>{jabatan}</td>
      <td>{gaji}</td>
      <td>
        <div
          className={`bg-${
            status === "aktif" ? "green-500" : "yellow-400"
          } inline-block px-2 text-xs text-white font-bold rounded-md`}
        >
          {status}
        </div>
      </td>
    </tr>
  );
};

export default MyteamList;
