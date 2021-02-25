import React from "react";
import Image from "next/image";
import HeaderCard from "../../layouts/HeaderCard";

const NotifBeranda = () => {
  return (
    <div className="card bg-white shadow-md rounded-md overflow-hidden text-gray-600">
      {/* header */}
      <HeaderCard title="Notification" />
      {/* body */}
      <div className="px-5 pt-2 pb-5 flex flex-col gap-5 items-center">
        <Image
          src="/img/illustrator.svg"
          alt="John Doe"
          width={200}
          height={200}
        />
        <div className="font-bold">Tidak ada notifikasi</div>
      </div>
    </div>
  );
};

export default NotifBeranda;
