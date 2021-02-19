import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Myteam from "../components/Myteam";
import Todo from "../components/Todo";
import Chart from "../components/Chart";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        {/* Main content */}
        <section className="grid grid-cols-1 lg:grid-cols-3 px-5 gap-5 mt-5">
          <div className="lg:col-span-2 ">
            <Chart />
          </div>
          <div>
            {/* card */}
            <Todo />
          </div>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-3 px-5 gap-5 mt-5">
          <div className="lg:col-span-2">
            <Myteam />
          </div>
          <div>
            {/* card */}
            <div className="card bg-white shadow-md rounded-md overflow-hidden text-gray-600">
              {/* header */}
              <div className=" flex justify-between items-center px-5 h-16 ">
                <div className="font-bold ">Notifikasi</div>
                <div className="text-gray-400">
                  <FontAwesomeIcon icon={faEllipsisH} />
                </div>
              </div>
              {/* body */}
              <div className="px-5 pt-2 pb-5 flex flex-col gap-5 items-center">
                <Image
                  src="/img/illustrator.svg"
                  alt="John Doe"
                  width={200}
                  height={200}
                />
                <div className="text-2xl font-semibold">
                  Tidak ada notifikasi
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="h-20"></footer>
      </div>
    </div>
  );
}
