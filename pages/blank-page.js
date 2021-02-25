import React from "react";
import Sidebar from "../layouts/Sidebar";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const blankPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="w-full relative pb-24">
        <Navbar />
        <Footer />
      </div>
    </div>
  );
};

export default blankPage;
