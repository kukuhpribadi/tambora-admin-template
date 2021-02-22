import React from "react";
import Navbar from "../../layouts/Navbar";
import Sidebar from "../../layouts/Sidebar";
import Todo from "../../components/Todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import CardArticle from "../../components/CardArticle";
import CardImage from "../../components/CardImage";

const Card = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <section className="p-5  grid md:grid-cols-3 gap-3 text-gray-600">
          {/* todo */}
          <div className="flex flex-col gap-3">
            <div className="font-bold">Card todolist</div>
            <Todo />
          </div>
          {/* card artikel*/}
          <div className="flex flex-col gap-3">
            <div className="font-bold">Card artikel</div>
            <CardArticle />
          </div>
          {/* card timeline */}
          <div className="flex flex-col gap-3">
            <div className="font-bold">Card image</div>
            <CardImage />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Card;
