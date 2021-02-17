import React from "react";
import Navbar from "../../layouts/Navbar";
import Sidebar from "../../layouts/Sidebar";

const Badge = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <h1>Badge</h1>
      </div>
    </div>
  );
};

export default Badge;
