import React from "react";
import CardAvatar from "../../components/Card/CardAvatar";
import CardAvatarStatus from "../../components/Card/CardAvatarStatus";
import Footer from "../../layouts/Footer";
import Navbar from "../../layouts/Navbar";
import Sidebar from "../../layouts/Sidebar";

const avatar = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="w-full relative pb-24">
        <Navbar />
        {/* main */}
        <section className="p-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5 text-gray-600">
          <CardAvatar />
          <CardAvatarStatus />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default avatar;
