import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import MyteamList from "./MyteamList";

const Myteam = () => {
  const people = [
    {
      id: 1,
      img: "/img/img-profile2.jpg",
      nama: "Bambang Pamungkas",
      sosmed: "@bambangpamungkas12",
      asal: "Jakarta",
      jabatan: "Project Manager",
      gaji: "50rb/jam",
      status: "aktif",
    },
    {
      id: 2,
      img: "/img/img-profile3.jpg",
      nama: "Rahayu Putri",
      sosmed: "@rahayu27",
      asal: "Bandung",
      jabatan: "Backend Dev",
      gaji: "47rb/jam",
      status: "cuti",
    },
    {
      id: 3,
      img: "/img/img-profile4.jpg",
      nama: "Budi Sudarsono",
      sosmed: "@bmrbudiiii",
      asal: "Gresik",
      jabatan: "Frontend Dev",
      gaji: "45rb/jam",
      status: "aktif",
    },
    {
      id: 4,
      img: "/img/img-profile5.jpg",
      nama: "Kartika Dewi",
      sosmed: "@kartika",
      asal: "Semarang",
      jabatan: "UI / UX",
      gaji: "40rb/jam",
      status: "aktif",
    },
  ];
  return (
    <div className="card bg-white shadow-md rounded-md overflow-hidden text-gray-600 lg:col-span-2">
      {/* header */}
      <div className=" flex justify-between items-center px-5 h-16">
        <div className="font-bold">Tim pengembang</div>
        <div className="text-gray-400">
          <FontAwesomeIcon icon={faEllipsisH} />
        </div>
      </div>
      {/* body */}
      <div className="px-5 pb-5 flex flex-col gap-5  overflow-x-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-track-gray-100 scrollbar-thumb-gray-200">
        <table className="table-auto">
          <thead>
            <tr className="text-left h-12">
              <th>Nama</th>
              <th>Asal</th>
              <th>Jabatan</th>
              <th>Gaji</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* team list */}
            {people.map((person) => {
              return <MyteamList data={person} key={person.id} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myteam;
