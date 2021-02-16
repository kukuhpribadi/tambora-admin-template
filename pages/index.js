import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-full">
        <Navbar />
      </div>
    </div>
  );
}
