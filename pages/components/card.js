import React from "react";
import Navbar from "../../layouts/Navbar";
import Sidebar from "../../layouts/Sidebar";
import Todo from "../../components/Todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTimes } from "@fortawesome/free-solid-svg-icons";
import CardArticle from "../../components/CardArticle";
import CardImage from "../../components/CardImage";
import {
  faTwitter,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "../../layouts/Footer";

const Card = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="w-full relative pb-24">
        <Navbar />

        <section className="p-5 grid md:grid-cols-2 gap-5 text-gray-600">
          <div className="bg-white shadow-md rounded-md flex flex-col items-center justify-center gap-2 relative px-10 py-5">
            <button className="absolute top-1 right-2 text-sm text-gray-400">
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="text-xl font-semibold text-center">
              Lorem ipsum dolor sit amet consectetur.
            </div>
            <button className="bg-red-500 px-2 rounded-md shadow-md text-white font-semibold">
              pelajari
            </button>
          </div>
          {/* card2 */}
          <div className="bg-white shadow-md rounded-md flex overflow-hidden relative">
            <button className="absolute top-1 right-2 text-sm text-gray-400">
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="w-1/3 flex-none h-full">
              <img
                src="/img/img.jpg"
                alt="Panorama"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="p-5 flex flex-col gap-2">
              <div className="font-bold">Lorem ipsum dolor sit.</div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                voluptates rem tempora! Ut, debitis dicta alias{" "}
                <span className="text-blue-500 font-bold cursor-pointer">
                  read more
                </span>
              </div>
              <div className="flex justify-center gap-5 text-xl pt-4">
                <div>
                  <FontAwesomeIcon icon={faYoutube} className="text-red-500" />
                </div>
                <div>
                  <FontAwesomeIcon icon={faTwitter} className="text-blue-500" />
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="text-green-500"
                  />
                </div>
              </div>
            </div>
          </div>
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
