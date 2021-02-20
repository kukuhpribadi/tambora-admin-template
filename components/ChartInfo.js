import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ChartInfo = ({ icon, warna, judul, keterangan }) => {
  return (
    <div className="flex gap-3 items-center rounded-md shadow-md px-3 py-2">
      <div
        className={`bg-${warna}-200 text-xl text-${warna}-500 w-12 h-12 rounded-full shadow-md flex items-center justify-center`}
      >
        <FontAwesomeIcon icon={icon} />
      </div>
      <div>
        <div className="font-bold text-sm">{judul}</div>
        <div className="text-xs">{keterangan}</div>
      </div>
    </div>
  );
};

export default ChartInfo;
