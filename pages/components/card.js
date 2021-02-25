import React from "react";
import Navbar from "../../layouts/Navbar";
import Sidebar from "../../layouts/Sidebar";
import Todo from "../../components/Card/Todo";
import CardArticle from "../../components/Card/CardArticle";
import CardImage from "../../components/Card/CardImage";
import Footer from "../../layouts/Footer";
import CardWithButton from "../../components/Card/CardWithButton";
import CardSideImage from "../../components/Card/CardSideImage";

const Card = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="w-full relative pb-24">
        <Navbar />
        {/* main content */}
        <section className="p-5 grid md:grid-cols-2 gap-5 text-gray-600">
          <CardWithButton />
          <CardSideImage />
        </section>
        <section className="px-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5 text-gray-600">
          <Todo />
          <CardArticle />
          <CardImage />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Card;
