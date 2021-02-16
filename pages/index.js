import Sidebar from "../layouts/Sidebar";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div>Main</div>
    </div>
  );
}
