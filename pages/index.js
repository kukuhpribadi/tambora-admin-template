import Myteam from "../components/Myteam";
import Todo from "../components/Card/Todo";
import Chart from "../components/Chart";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";
import Note from "../components/Card/Note";
import NotifBeranda from "../components/Card/NotifBeranda";
import Footer from "../layouts/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="w-full relative pb-24">
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
        <Footer />
      </div>
    </div>
  );
}
