import {
  faAddressBook,
  faEllipsisH,
  faEnvelope,
  faPaperPlane,
  faPencilAlt,
  faSortDown,
  faStar,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import MailList from "../components/MailList";
import MessageMenu from "../components/MessageMenu";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";

const pesan = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        {/* Main content */}
        <section className="px-5 mt-5 text-gray-600">
          <div className="rounded-md overflow-hidden shadow-md bg-white flex">
            {/* sidebar chat */}
            <div className="w-1/5 text-sm py-5 flex flex-none flex-col gap-7 shadow-md">
              {/* head */}
              <div className="px-5">
                <h1 className="font-bold text-base">Pesan</h1>
              </div>
              <div className="mx-5 bg-red-500 text-center cursor-pointer text-sm text-white font-semibold rounded-md shadow-md py-1">
                + Buat pesan
              </div>
              {/* body */}
              <div className="">
                <MessageMenu
                  icon={faAddressBook}
                  nama="Kontak"
                  active={false}
                />
                <MessageMenu
                  icon={faEnvelope}
                  nama="Kotak masuk"
                  notif="21"
                  notifWarna="green"
                  active={true}
                />
                <MessageMenu
                  icon={faPaperPlane}
                  nama="Pesan terkirim"
                  active={false}
                />
                <MessageMenu icon={faPencilAlt} nama="Draft" active={false} />
                <MessageMenu
                  icon={faTrash}
                  nama="Sampah"
                  notif="137"
                  notifWarna="red"
                  active={false}
                />
              </div>
            </div>
            {/* main content */}
            <div className="w-full flex flex-col gap-5 px-5 py-5">
              {/* head */}
              <div className="flex justify-between">
                <h1 className="font-bold">Kotak masuk</h1>
                <div>{/* <FontAwesomeIcon icon={faEllipsisH} /> */}</div>
              </div>
              {/* options */}
              <div className="flex justify-between items-center text-sm">
                <div className="flex gap-3 items-center">
                  <div className="pt-0.5">
                    <input type="checkbox" />
                  </div>
                  <label>Pilih semua</label>
                </div>
                <div className="flex gap-3 items-center">
                  <div>Terbaru</div>
                  <div>
                    <FontAwesomeIcon
                      icon={faSortDown}
                      className="pb-0.5 text-base cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              {/* body */}
              <div className="text-sm">
                {/* row */}
                <table className="table-auto w-full">
                  <thead>
                    <tr>
                      <th className="w-7"></th>
                      <th className="w-7"></th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <MailList nama="Bambang Pamungkas" />
                    <MailList nama="Sugeng asdas" />
                    <MailList nama="Sugeng asdas" />
                    <MailList nama="Sugeng asdas" />
                    <MailList nama="Sugeng asdas" />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <footer className="h-20"></footer>
      </div>
    </div>
  );
};

export default pesan;
