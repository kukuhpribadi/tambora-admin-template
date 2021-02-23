import {
  faChartLine,
  faDollarSign,
  faEllipsisH,
  faPhoneSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import ChartInfo from "./ChartInfo";

const Chart = () => {
  const data = {
    labels: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"],
    datasets: [
      {
        data: [1, 5, 3, 4, 2, 2, 4],
        borderWidth: 3,
        borderColor: "rgba(239, 68, 68, 0.8)",
        backgroundColor: "rgba(239, 68, 68, 0.1)",
        pointBackgroundColor: "rgba(239, 68, 68, 1)",
        fill: true,
      },
    ],
  };

  const options = {
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            display: true,
          },
          gridLines: {
            display: true,
            color: "rgba(0, 0, 0, 0.1)",
            borderDash: [1],
            drawBorder: false,
          },
        },
      ],
    },
  };

  return (
    <div className="card bg-white shadow-md rounded-md overflow-hidden text-gray-600 lg:col-span-2">
      {/* header */}
      <div className=" flex justify-between items-center px-5 h-16 ">
        <div className="font-bold ">Line chart</div>
        <div className="text-gray-400">
          <FontAwesomeIcon icon={faEllipsisH} />
        </div>
      </div>
      {/* body */}
      <div className="px-5 pt-2 pb-5 flex flex-col gap-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          <ChartInfo
            icon={faChartLine}
            warna="green"
            judul="Total order"
            keterangan="15"
          />
          <ChartInfo
            icon={faPhoneSlash}
            warna="yellow"
            judul="Cancel order"
            keterangan="3"
          />
          <ChartInfo
            icon={faDollarSign}
            warna="purple"
            judul="Pendapatan"
            keterangan="Rp. 7.595.000"
          />
        </div>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart;
