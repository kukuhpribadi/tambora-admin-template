import React from "react";
import CardButtonIcon from "../../components/Card/CardButtonIcon";
import CardButtonOutline from "../../components/Card/CardButtonOutline";
import CardButtonOutlineHover from "../../components/Card/CardButtonOutlineHover";
import CardButtonSimple from "../../components/Card/CardButtonSimple";
import CardButtonSize from "../../components/Card/CardButtonSize";
import Footer from "../../layouts/Footer";
import Navbar from "../../layouts/Navbar";
import Sidebar from "../../layouts/Sidebar";

const button = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="w-full relative pb-24">
        <Navbar />
        {/* main content */}
        <section className="p-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5 text-gray-600">
          <CardButtonSimple />
          <CardButtonOutline />
          <CardButtonIcon />
          <CardButtonOutlineHover />
          <CardButtonSize />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default button;
