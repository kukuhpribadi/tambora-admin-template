import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Myteam from "../components/Myteam";
import Todo from "../components/Todo";
import Chart from "../components/Chart";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";
import Note from "../components/Note";
import NotifBeranda from "../components/NotifBeranda";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        {/* Main content */}
        <section className="grid grid-cols-1 lg:grid-cols-3 px-5 gap-5 mt-5">
          <Chart />
          <div className="flex flex-col gap-3">
            {/* todo */}
            <Todo />
            {/* Note */}
            <Note />
          </div>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-3 px-5 gap-5 mt-5">
          <Myteam />
          <NotifBeranda />
        </section>
        <footer className="h-20"></footer>
      </div>
    </div>
  );
}
