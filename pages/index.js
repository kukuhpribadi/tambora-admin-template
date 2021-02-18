import Myteam from "../components/Myteam";
import Todo from "../components/Todo";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        {/* Main content */}
        <section className="grid grid-cols-1 md:grid-cols-3 px-5 gap-5 mt-5">
          <div className="col-span-2 ">
            <Myteam />
          </div>
          <div>
            {/* card */}
            <Todo />
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 px-5 gap-5 mt-5">
          <div className="shadow-md rounded-md col-span-2 flex justify-center items-center bg-white">
            <div className="text-4xl font-bold text-gray-700">Chart here</div>
          </div>
          <div>
            {/* card */}
            <Todo />
          </div>
        </section>
      </div>
    </div>
  );
}
